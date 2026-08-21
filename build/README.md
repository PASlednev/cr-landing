# Сборка страниц статей из Directus

Статьи живут в Directus (коллекция `articles`, принадлежность лендингу — связь `site`).
Скрипт забирает опубликованные статьи и раскладывает их в статические страницы
`articles/index.html` и `articles/<slug>/index.html`. В прод уезжает обычная статика,
браузер в CMS не ходит.

## Запуск

```bash
cp build/.env.example build/.env   # прописать DIRECTUS_URL и DIRECTUS_TOKEN
node build/build-articles.mjs
```

## Переменные (build/.env)

| Переменная | Смысл |
|---|---|
| `DIRECTUS_URL` | адрес Directus: локально `http://localhost:8057`, на проде — домен CMS |
| `DIRECTUS_TOKEN` | статик-токен пользователя `build@example.com` (роль Build, только чтение). **Не коммитить** — он видит и черновики |
| `SITE_KEY` | ключ лендинга в коллекции `sites` (здесь `cr`) |
| `REBUILD_PORT` / `REBUILD_SECRET` / `REBUILD_DEBOUNCE` | сервис автопересборки, см. ниже |
| `DEPLOY_CMD` | команда выкладки после сборки. Пусто — только генерация файлов |

## Что делает сборка

- берёт только `status = published` своего лендинга;
- фолбэки: `seo_title → title`, `meta_description → excerpt`, `og_* → seo`, `twitter_* → og`;
- canonical: значение из CMS, иначе `base_url + /articles/<slug>/`;
- генерит `BlogPosting` и `BreadcrumbList`, ручной JSON-LD из поля `jsonld` выводит как есть
  (невалидный JSON пропускается);
- таблицы из редактора оборачивает в `.table-wrap`, картинкам в теле ставит `loading="lazy"`;
- картинки тянет через трансформы Directus (`format=webp`) в `assets/articles/`;
- похожие статьи: ручной выбор из CMS, добор до трёх — по категории;
- удаляет каталоги статей, которых больше нет в выдаче.

Шаблоны — `build/render.js`, стили — `article.css` в корне поверх общего `styles.css`.

## Автопересборка по вебхуку

Правка в админке подхватывается сама: Directus шлёт вебхук, сервис пересобирает страницы.

```bash
node build/rebuild-server.mjs          # держать запущенным; на сервере — systemd, см. rebuild.service.example
curl localhost:8790/status             # состояние последней сборки
tail -f build/rebuild.log              # лог
```

Флоу в Directus создаются скриптом `game-directus/scripts/setup-rebuild-webhook.mjs`:

| Флоу | Когда срабатывает |
|---|---|
| `Rebuild cr-landing` | создание, изменение, удаление записи в `articles`, `sites`, `authors`, `categories`, `tags` |
| `Пересобрать сайт` | кнопка в интерфейсе коллекции `articles` — ручной запуск |

Поведение:

- события **схлопываются**: пачка правок за `REBUILD_DEBOUNCE` (15 c) даёт одну сборку;
- две сборки одновременно не идут, событие во время сборки ставит ровно одну следующую;
- триггер типа `action` — не блокирующий, сохранение в админке сборку не ждёт;
- запрос без заголовка `x-rebuild-secret` отбивается с 401;
- отложенная публикация тоже работает: cron-флоу меняет статус → `items.update` → пересборка.

**`DEPLOY_CMD` по умолчанию пуст** — сервис только генерирует файлы. Чтобы после сборки
шла выкладка, впишите туда команду деплоя.

Сервис слушает `0.0.0.0`, потому что Directus стучится из контейнера через
`host.docker.internal` (в `docker-compose.yml` для этого добавлен `extra_hosts`).
На сервере порт `8790` закрыть фаерволом — снаружи он не нужен.

## Весь текст — из админки

В шаблонах нет захардкоженного контента: шапка, меню, кнопка, футер, плашка 18+,
подписи и тексты страницы списка берутся из полей лендинга (коллекция `sites`).

| Группа полей | Что задаёт |
|---|---|
| Шапка и навигация | `logo_icon`, `logo_text`, `nav_links`, `cta_label` / `cta_url` / `cta_rel`, `age_notice` |
| Футер | `footer_copyright`, `footer_badges` |
| Страница списка | `articles_kicker`, `articles_title`, `articles_intro`, `articles_seo_title`, `articles_meta_description`, `articles_empty_text` |
| Подписи | `label_home`, `label_articles`, `label_byline`, `label_updated`, `label_related` |
| Технические | `theme_color`, `favicon_path`, `apple_icon_path`, `fonts_url` |

Пустое поле — блок не выводится, подстановок «по умолчанию» в коде нет.
`nav_links` управляет шапкой, мобильным меню и футером: внутренние ссылки пишутся
относительно корня (`chicken-road-demo/`), внешние — полным `https://`.
Поле `key` со значением `articles` подсвечивает активный пункт.

## Чего здесь пока нет

`sitemap.xml`, страницы категорий и hreflang между языковыми версиями — делаются
отдельно, когда появятся соответствующие страницы.
