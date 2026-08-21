#!/usr/bin/env node
/**
 * Приёмник вебхуков из Directus: правка в админке → пересборка страниц статей.
 *
 *   node build/rebuild-server.mjs
 *
 * Настройки — build/.env:
 *   REBUILD_PORT      порт сервиса                        (8790)
 *   REBUILD_SECRET    общий секрет с Directus             (обязателен)
 *   REBUILD_DEBOUNCE  пауза после последнего события, мс  (15000)
 *   DEPLOY_CMD        команда выкладки после сборки       (пусто — только сборка)
 *
 * Ручки:
 *   POST /rebuild   заголовок x-rebuild-secret — ставит сборку в очередь
 *   GET  /status    состояние последней сборки
 *
 * Поведение: события схлопываются (пачка правок = одна сборка), параллельных
 * сборок не бывает, событие во время сборки ставит ровно одну следующую.
 */
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFileSync, appendFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { timingSafeEqual } from 'node:crypto';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const envFile = join(ROOT, 'build', '.env');
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#') || !t.includes('=')) continue;
    const k = t.slice(0, t.indexOf('=')).trim();
    if (!process.env[k]) process.env[k] = t.slice(t.indexOf('=') + 1).trim();
  }
}

const PORT = Number(process.env.REBUILD_PORT || 8790);
const SECRET = process.env.REBUILD_SECRET;
const DEBOUNCE = Number(process.env.REBUILD_DEBOUNCE || 15000);
const DEPLOY_CMD = (process.env.DEPLOY_CMD || '').trim();
const LOG = join(ROOT, 'build', 'rebuild.log');

if (!SECRET) {
  console.error('Нет REBUILD_SECRET в build/.env — без него сервис не запускается.');
  process.exit(1);
}

const log = (msg) => {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { appendFileSync(LOG, line + '\n'); } catch { /* лог не критичен */ }
};

/** Сравнение секретов без утечки по времени */
function secretOk(given) {
  if (!given) return false;
  const a = Buffer.from(String(given));
  const b = Buffer.from(SECRET);
  return a.length === b.length && timingSafeEqual(a, b);
}

const state = { building: false, pending: false, timer: null, last: null, queuedBy: new Set() };

function run(cmd, args, opts = {}) {
  return new Promise((done) => {
    const child = spawn(cmd, args, { cwd: ROOT, shell: opts.shell ?? false });
    let out = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('close', (code) => done({ code, out: out.trim() }));
    child.on('error', (err) => done({ code: -1, out: err.message }));
  });
}

async function build() {
  if (state.building) { state.pending = true; return; }
  state.building = true;

  const reasons = [...state.queuedBy].join(', ') || 'вручную';
  state.queuedBy.clear();
  const started = Date.now();
  log(`▶ сборка (причина: ${reasons})`);

  const res = await run(process.execPath, ['build/build-articles.mjs']);
  const pages = (res.out.match(/Готово: (\d+)/) || [])[1];

  if (res.code !== 0) {
    log(`✗ сборка упала (код ${res.code})\n${res.out.split('\n').slice(-8).join('\n')}`);
    state.last = { ok: false, at: new Date().toISOString(), ms: Date.now() - started, error: res.out.split('\n').slice(-3).join(' ') };
  } else {
    let deploy = null;
    if (DEPLOY_CMD) {
      log(`▶ деплой: ${DEPLOY_CMD}`);
      const d = await run(DEPLOY_CMD, [], { shell: true });
      deploy = d.code === 0 ? 'ok' : `ошибка (код ${d.code})`;
      log(d.code === 0 ? '✓ деплой выполнен' : `✗ деплой упал\n${d.out.split('\n').slice(-8).join('\n')}`);
    }
    log(`✓ готово за ${Date.now() - started} мс${pages ? `, страниц: ${pages}` : ''}`);
    state.last = { ok: true, at: new Date().toISOString(), ms: Date.now() - started, pages: pages ? Number(pages) : null, deploy };
  }

  state.building = false;
  if (state.pending) { state.pending = false; schedule('событие во время сборки'); }
}

function schedule(reason) {
  state.queuedBy.add(reason);
  clearTimeout(state.timer);
  state.timer = setTimeout(build, DEBOUNCE);
}

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const json = (code, body) => {
    res.writeHead(code, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(body));
  };

  if (req.method === 'GET' && url.pathname === '/status') {
    return json(200, { building: state.building, pending: state.pending, last: state.last });
  }

  if (req.method === 'POST' && url.pathname === '/rebuild') {
    if (!secretOk(req.headers['x-rebuild-secret'])) {
      log(`✗ отклонён запрос без верного секрета (${req.socket.remoteAddress})`);
      return json(401, { error: 'bad secret' });
    }
    let body = '';
    req.on('data', (c) => { body += c.length > 4096 ? '' : c; });
    req.on('end', () => {
      let reason = 'событие Directus';
      try {
        const p = JSON.parse(body || '{}');
        if (p.event || p.collection) reason = p.event || p.collection;
      } catch { /* тело необязательно */ }
      schedule(reason);
      json(202, { queued: true, in_ms: DEBOUNCE });
    });
    return;
  }

  json(404, { error: 'not found' });
}).listen(PORT, '0.0.0.0', () => {
  log(`сервис пересборки слушает :${PORT} (пауза ${DEBOUNCE} мс${DEPLOY_CMD ? ', деплой включён' : ', без деплоя'})`);
});
