(function () {
  "use strict";

  /* ─── i18n data ──────────────────────────────────────────────────────── */
  var LANGUAGES = [
    { code: "en", label: "English",   flag: "🇬🇧" },
    { code: "ru", label: "Русский",   flag: "🇷🇺" },
    { code: "de", label: "Deutsch",   flag: "🇩🇪" },
    { code: "fr", label: "Français",  flag: "🇫🇷" },
    { code: "es", label: "Español",   flag: "🇪🇸" },
    { code: "pt", label: "Português", flag: "🇵🇹" }
  ];

  var T = {
    en: {
      nav: ["Gameplay", "Leaderboard", "How to Win", "FAQ"],
      playNow: "Play Now",
      noDownload: "No download required",
      liveBadge: "Live Now · 3,241 Players Online",
      heroTitle1: "Cross the", heroHighlight1: "Road.",
      heroTitle2: "Claim the", heroHighlight2: "Prize.",
      heroSub: "Guide your chicken through fiery lanes. Each crossing multiplies your stake. Cash out before the heat catches up — or dare to go further.",
      stats: ["Active Players", "Total Paid Out", "Max Multiplier", "Avg. Session"],
      gameplayTag: "// How It Works", gameplayTitle: "Gameplay",
      multLabel: "Multiplier progression per lane",
      steps: [
        { title: "Place Your Bet",   desc: "Set your wager before each run. The higher the stakes, the hotter the prize." },
        { title: "Cross the Road",   desc: "Guide your chicken through blazing ovens. Each lane crossed multiplies your reward." },
        { title: "Cash Out or Push", desc: "Collect winnings at any moment — or dare to cross one more lane and double down." }
      ],
      lbTag: "// Top Runners", lbTitle: "Leaderboard",
      lbTabs: { daily: "Daily", weekly: "Weekly", alltime: "All Time" },
      lbHeader: ["#", "Player", "Streak", "Score"],
      lbCta: "Think you can top the board?", lbCtaSub: "Rankings update every 60 seconds",
      howTag: "// Pro Strategy", howTitle: "How to Win",
      tips: [
        { title: "Start Small",        body: "Build your streak on low stakes before scaling up. Consistency beats one big run." },
        { title: "Know When to Quit",  body: "The house edge increases after lane 6. Most top earners cash out between lanes 4–5." },
        { title: "Watch the Heat",     body: "Oven speed increases with your multiplier. Sharp eyes catch the pattern." },
        { title: "Daily Bonus",        body: "Log in each day for a free bonus round. Seven-day streaks unlock exclusive multipliers." }
      ],
      finalTitle: "Ready to", finalHighlight: "Run?",
      finalSub: "Join 124,000+ players already crossing the road. No download, no registration hassle.",
      finalCta: "Play Now — It's Free",
      disclaimer: "18+ · Gamble responsibly · T&C Apply",
      footerRight: "🔒 SSL Secured · Provably Fair",
      footerLinks: "© 2026 CluckRun. All rights reserved. · Privacy · Terms · Support"
    },
    ru: {
      nav: ["Геймплей", "Лидерборд", "Как выиграть", "FAQ"],
      playNow: "Играть",
      noDownload: "Без загрузки",
      liveBadge: "Онлайн · 3 241 игроков",
      heroTitle1: "Пересеки", heroHighlight1: "Дорогу.",
      heroTitle2: "Забери", heroHighlight2: "Приз.",
      heroSub: "Веди курицу через огненные полосы. Каждое пересечение умножает ставку. Забери выигрыш вовремя — или рискни пойти дальше.",
      stats: ["Активных игроков", "Всего выплачено", "Макс. множитель", "Ср. сессия"],
      gameplayTag: "// Как это работает", gameplayTitle: "Геймплей",
      multLabel: "Прогрессия множителя по полосам",
      steps: [
        { title: "Сделай ставку",        desc: "Установи ставку перед каждым забегом. Чем выше риск — тем горячее награда." },
        { title: "Пересеки дорогу",       desc: "Веди курицу через раскалённые печи. Каждая полоса умножает выигрыш." },
        { title: "Вывести или рискнуть",  desc: "Забери деньги в любой момент — или пересеки ещё одну полосу." }
      ],
      lbTag: "// Лучшие игроки", lbTitle: "Лидерборд",
      lbTabs: { daily: "День", weekly: "Неделя", alltime: "Всё время" },
      lbHeader: ["#", "Игрок", "Серия", "Очки"],
      lbCta: "Думаешь, что попадёшь в топ?", lbCtaSub: "Рейтинг обновляется каждые 60 секунд",
      howTag: "// Стратегия профи", howTitle: "Как выиграть",
      tips: [
        { title: "Начни с малого",            body: "Строй серию на малых ставках, прежде чем масштабироваться. Постоянство важнее одного везения." },
        { title: "Знай, когда остановиться",  body: "Преимущество казино растёт после 6-й полосы. Лучшие игроки уходят на 4–5." },
        { title: "Следи за жаром",            body: "Скорость печей растёт с множителем. Тренируй реакцию." },
        { title: "Ежедневный бонус",          body: "Заходи каждый день за бесплатным раундом. 7-дневная серия разблокирует эксклюзивные множители." }
      ],
      finalTitle: "Готов", finalHighlight: "Бежать?",
      finalSub: "Присоединись к 124 000+ игроков. Без загрузки и долгой регистрации.",
      finalCta: "🐔 Играть — Это бесплатно",
      disclaimer: "18+ · Играй ответственно · Применяются условия",
      footerRight: "🔒 SSL · Честная игра",
      footerLinks: "© 2026 CluckRun. Все права защищены. · Конфиденциальность · Условия · Поддержка"
    },
    de: {
      nav: ["Gameplay", "Rangliste", "Wie gewinnen", "FAQ"],
      playNow: "Jetzt spielen",
      noDownload: "Kein Download nötig",
      liveBadge: "Live · 3.241 Spieler online",
      heroTitle1: "Überquere die", heroHighlight1: "Straße.",
      heroTitle2: "Hol dir den", heroHighlight2: "Preis.",
      heroSub: "Führe dein Huhn durch feurige Spuren. Jede Überquerung multipliziert deinen Einsatz. Cash out bevor die Hitze dich erwischt — oder wage mehr.",
      stats: ["Aktive Spieler", "Auszahlungen ges.", "Max. Multiplikator", "Ø Sitzung"],
      gameplayTag: "// So funktioniert es", gameplayTitle: "Gameplay",
      multLabel: "Multiplikator-Progression pro Spur",
      steps: [
        { title: "Einsatz setzen",                desc: "Lege deinen Einsatz fest. Je höher der Einsatz, desto heißer der Gewinn." },
        { title: "Straße überqueren",             desc: "Führe dein Huhn durch glühende Öfen. Jede Spur multipliziert die Belohnung." },
        { title: "Auszahlen oder weitermachen",   desc: "Kassiere jederzeit — oder wage eine weitere Spur und verdopple dein Geld." }
      ],
      lbTag: "// Top-Läufer", lbTitle: "Rangliste",
      lbTabs: { daily: "Täglich", weekly: "Wöchentlich", alltime: "Gesamt" },
      lbHeader: ["#", "Spieler", "Serie", "Punkte"],
      lbCta: "Glaubst du, du schaffst es an die Spitze?", lbCtaSub: "Rangliste aktualisiert sich alle 60 Sekunden",
      howTag: "// Profi-Strategie", howTitle: "Wie gewinnen",
      tips: [
        { title: "Klein anfangen",            body: "Baue deine Serie mit kleinen Einsätzen auf. Konstanz schlägt einen großen Lauf." },
        { title: "Wisse, wann du aufhörst",   body: "Der Hausvorteil steigt nach Spur 6. Die besten Verdiener steigen bei 4–5 aus." },
        { title: "Hitze im Blick behalten",   body: "Die Ofengeschwindigkeit steigt mit dem Multiplikator. Scharfe Augen erkennen das Muster." },
        { title: "Tagesbonus",                body: "Melde dich täglich für eine kostenlose Runde an. 7-Tage-Serien schalten exklusive Multiplikatoren frei." }
      ],
      finalTitle: "Bereit zu", finalHighlight: "laufen?",
      finalSub: "Schließe dich 124.000+ Spielern an. Kein Download, keine lange Registrierung.",
      finalCta: "🐔 Jetzt spielen — Kostenlos",
      disclaimer: "18+ · Spiel verantwortungsbewusst · AGB gelten",
      footerRight: "🔒 SSL gesichert · Nachweislich fair",
      footerLinks: "© 2026 CluckRun. Alle Rechte vorbehalten. · Datenschutz · AGB · Support"
    },
    fr: {
      nav: ["Gameplay", "Classement", "Comment gagner", "FAQ"],
      playNow: "Jouer maintenant",
      noDownload: "Sans téléchargement",
      liveBadge: "En direct · 3 241 joueurs en ligne",
      heroTitle1: "Traverse la", heroHighlight1: "Route.",
      heroTitle2: "Empoche le", heroHighlight2: "Prix.",
      heroSub: "Guide ton poulet à travers des voies enflammées. Chaque traversée multiplie ta mise. Encaisse avant que la chaleur t'attrape — ou ose aller plus loin.",
      stats: ["Joueurs actifs", "Total versé", "Multiplicateur max", "Session moy."],
      gameplayTag: "// Comment ça marche", gameplayTitle: "Gameplay",
      multLabel: "Progression du multiplicateur par voie",
      steps: [
        { title: "Placer ta mise",        desc: "Fixe ton pari avant chaque course. Plus l'enjeu est élevé, plus la récompense est chaude." },
        { title: "Traverser la route",    desc: "Guide ton poulet à travers des fours ardents. Chaque voie traversée multiplie ta récompense." },
        { title: "Encaisser ou pousser",  desc: "Récupère tes gains à tout moment — ou ose une voie de plus pour tout doubler." }
      ],
      lbTag: "// Top Coureurs", lbTitle: "Classement",
      lbTabs: { daily: "Quotidien", weekly: "Hebdomadaire", alltime: "Tout temps" },
      lbHeader: ["#", "Joueur", "Série", "Score"],
      lbCta: "Tu penses pouvoir dominer le classement ?", lbCtaSub: "Le classement se met à jour toutes les 60 secondes",
      howTag: "// Stratégie Pro", howTitle: "Comment gagner",
      tips: [
        { title: "Commencer petit",       body: "Construis ta série sur de petits enjeux avant de monter en puissance. La constance prime." },
        { title: "Savoir s'arrêter",      body: "L'avantage de la maison augmente après la voie 6. Les meilleurs encaissent entre les voies 4–5." },
        { title: "Surveiller la chaleur", body: "La vitesse du four augmente avec ton multiplicateur. Les yeux vifs repèrent le schéma." },
        { title: "Bonus quotidien",       body: "Connecte-toi chaque jour pour un tour gratuit. Les séries de 7 jours débloquent des multiplicateurs exclusifs." }
      ],
      finalTitle: "Prêt à", finalHighlight: "courir ?",
      finalSub: "Rejoins 124 000+ joueurs qui traversent déjà la route. Sans téléchargement ni inscription fastidieuse.",
      finalCta: "🐔 Jouer maintenant — C'est gratuit",
      disclaimer: "18+ · Jouez de manière responsable · CGU applicables",
      footerRight: "🔒 SSL sécurisé · Équité prouvée",
      footerLinks: "© 2026 CluckRun. Tous droits réservés. · Confidentialité · CGU · Support"
    },
    es: {
      nav: ["Gameplay", "Clasificación", "Cómo ganar", "FAQ"],
      playNow: "Jugar ahora",
      noDownload: "Sin descarga",
      liveBadge: "En vivo · 3.241 jugadores online",
      heroTitle1: "Cruza la", heroHighlight1: "Calle.",
      heroTitle2: "Reclama el", heroHighlight2: "Premio.",
      heroSub: "Guía a tu pollo a través de carriles ardientes. Cada cruce multiplica tu apuesta. Retira antes de que el calor te alcance — o atrévete a ir más lejos.",
      stats: ["Jugadores activos", "Total pagado", "Multiplicador máx.", "Sesión media"],
      gameplayTag: "// Cómo funciona", gameplayTitle: "Gameplay",
      multLabel: "Progresión del multiplicador por carril",
      steps: [
        { title: "Haz tu apuesta",     desc: "Establece tu apuesta antes de cada carrera. Cuanto mayor el riesgo, mayor el premio." },
        { title: "Cruza la calle",     desc: "Guía a tu pollo entre hornos al rojo vivo. Cada carril cruzado multiplica tu recompensa." },
        { title: "Retirar o seguir",   desc: "Cobra tus ganancias en cualquier momento — o cruza un carril más y duplícalas." }
      ],
      lbTag: "// Mejores corredores", lbTitle: "Clasificación",
      lbTabs: { daily: "Diario", weekly: "Semanal", alltime: "Global" },
      lbHeader: ["#", "Jugador", "Racha", "Puntos"],
      lbCta: "¿Crees que puedes liderar el tablero?", lbCtaSub: "El ranking se actualiza cada 60 segundos",
      howTag: "// Estrategia Pro", howTitle: "Cómo ganar",
      tips: [
        { title: "Empieza pequeño",    body: "Construye tu racha con apuestas bajas antes de escalar. La consistencia vence al golpe de suerte." },
        { title: "Saber cuándo parar", body: "La ventaja de la casa aumenta tras el carril 6. Los mejores retiran entre los carriles 4–5." },
        { title: "Vigila el calor",    body: "La velocidad del horno aumenta con tu multiplicador. Los ojos atentos detectan el patrón." },
        { title: "Bono diario",        body: "Inicia sesión cada día para una ronda gratuita. Las rachas de 7 días desbloquean multiplicadores exclusivos." }
      ],
      finalTitle: "¿Listo para", finalHighlight: "correr?",
      finalSub: "Únete a más de 124.000 jugadores que ya cruzan la calle. Sin descarga ni registro largo.",
      finalCta: "🐔 Jugar ahora — Es gratis",
      disclaimer: "18+ · Juega con responsabilidad · Se aplican T&C",
      footerRight: "🔒 SSL Seguro · Juego justo comprobable",
      footerLinks: "© 2026 CluckRun. Todos los derechos reservados. · Privacidad · Términos · Soporte"
    },
    pt: {
      nav: ["Gameplay", "Classificação", "Como ganhar", "FAQ"],
      playNow: "Jogar agora",
      noDownload: "Sem download",
      liveBadge: "Ao vivo · 3.241 jogadores online",
      heroTitle1: "Atravessa a", heroHighlight1: "Estrada.",
      heroTitle2: "Conquista o", heroHighlight2: "Prémio.",
      heroSub: "Guia o teu frango pelas faixas em chamas. Cada travessia multiplica a tua aposta. Levanta antes que o calor te apanhe — ou arrisca ir mais longe.",
      stats: ["Jogadores ativos", "Total pago", "Multiplicador máx.", "Sessão média"],
      gameplayTag: "// Como funciona", gameplayTitle: "Gameplay",
      multLabel: "Progressão do multiplicador por faixa",
      steps: [
        { title: "Faz a tua aposta",        desc: "Define a aposta antes de cada corrida. Quanto maior o risco, maior o prémio." },
        { title: "Atravessa a estrada",     desc: "Guia o frango pelos fornos em brasa. Cada faixa atravessada multiplica a recompensa." },
        { title: "Levantar ou continuar",   desc: "Recebe os ganhos a qualquer momento — ou arrisca mais uma faixa e duplica tudo." }
      ],
      lbTag: "// Melhores corredores", lbTitle: "Classificação",
      lbTabs: { daily: "Diário", weekly: "Semanal", alltime: "Global" },
      lbHeader: ["#", "Jogador", "Série", "Pontos"],
      lbCta: "Achas que consegues liderar o ranking?", lbCtaSub: "O ranking atualiza a cada 60 segundos",
      howTag: "// Estratégia Pro", howTitle: "Como ganhar",
      tips: [
        { title: "Começa devagar",    body: "Constrói a tua série com apostas baixas antes de escalar. A consistência supera a sorte." },
        { title: "Sabe quando parar", body: "A vantagem da casa aumenta após a faixa 6. Os melhores levantam entre as faixas 4–5." },
        { title: "Observa o calor",   body: "A velocidade do forno aumenta com o multiplicador. Olhos atentos detetam o padrão." },
        { title: "Bónus diário",      body: "Entra todos os dias para uma ronda grátis. Séries de 7 dias desbloqueiam multiplicadores exclusivos." }
      ],
      finalTitle: "Pronto para", finalHighlight: "correr?",
      finalSub: "Junta-te a mais de 124.000 jogadores que já atravessam a estrada. Sem download nem registo demorado.",
      finalCta: "🐔 Jogar agora — É grátis",
      disclaimer: "18+ · Joga com responsabilidade · T&C aplicam-se",
      footerRight: "🔒 SSL Seguro · Jogo comprovadamente justo",
      footerLinks: "© 2026 CluckRun. Todos os direitos reservados. · Privacidade · Termos · Suporte"
    }
  };

  var LEADERBOARD = [
    { rank: 1,  name: "KFC_Slayer",    score: 48200, streak: 32, avatar: "🐔" },
    { rank: 2,  name: "RoadRunner99",  score: 41750, streak: 28, avatar: "🦅" },
    { rank: 3,  name: "CrispyWings",   score: 37100, streak: 24, avatar: "🔥" },
    { rank: 4,  name: "NuggetKing",    score: 31480, streak: 19, avatar: "👑" },
    { rank: 5,  name: "FeatherFury",   score: 28900, streak: 17, avatar: "⚡" },
    { rank: 6,  name: "GrillMaster_X", score: 25340, streak: 14, avatar: "🎯" },
    { rank: 7,  name: "BoldBeak",      score: 22710, streak: 12, avatar: "🏆" },
    { rank: 8,  name: "HotSauce_Pro",  score: 19850, streak: 10, avatar: "🌶️" },
    { rank: 9,  name: "WildWattle",    score: 17220, streak: 9,  avatar: "💥" },
    { rank: 10, name: "CluckChampion", score: 14600, streak: 7,  avatar: "🎮" }
  ];

  var MULTIPLIERS = [1, 2, 4, 8, 16, 32, 64, 128];

  /* ─── i18n apply ─────────────────────────────────────────────────────── */
  function resolve(obj, path) {
    return path.split(".").reduce(function (o, k) {
      return o == null ? undefined : o[k];
    }, obj);
  }

  function applyLang(code) {
    var t = T[code];
    if (!t) return;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = resolve(t, el.getAttribute("data-i18n"));
      if (typeof val === "string") el.textContent = val;
    });
    document.documentElement.lang = code;

    var current = LANGUAGES.filter(function (l) { return l.code === code; })[0];
    document.getElementById("lang-flag").textContent = current.flag;
    document.getElementById("lang-code").textContent = current.code.toUpperCase();

    // refresh score labels (numbers stay constant)
    document.querySelectorAll(".lang__menu button").forEach(function (btn) {
      btn.classList.toggle("is-current", btn.getAttribute("data-code") === code);
      var check = btn.querySelector(".check");
      if (check) check.hidden = btn.getAttribute("data-code") !== code;
    });
  }

  /* ─── Language switcher ──────────────────────────────────────────────── */
  function initLang() {
    var wrap = document.getElementById("lang-switcher");
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");
    var currentCode = "en";

    LANGUAGES.forEach(function (l) {
      var li = document.createElement("li");
      li.setAttribute("role", "option");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-code", l.code);
      btn.innerHTML =
        '<span aria-hidden="true">' + l.flag + "</span>" +
        "<span>" + l.label + "</span>" +
        '<span class="check" hidden>✓</span>';
      btn.addEventListener("click", function () {
        currentCode = l.code;
        applyLang(l.code);
        close();
      });
      li.appendChild(btn);
      menu.appendChild(li);
    });

    function open() {
      wrap.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    }
    function close() {
      wrap.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      wrap.classList.contains("is-open") ? close() : open();
    });
    document.addEventListener("mousedown", function (e) {
      if (!wrap.contains(e.target)) close();
    });
  }

  /* ─── Mobile menu ────────────────────────────────────────────────────── */
  function initBurger() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobile-menu");
    function setOpen(o) {
      burger.classList.toggle("is-open", o);
      burger.setAttribute("aria-expanded", o ? "true" : "false");
      burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
      menu.hidden = !o;
    }
    burger.addEventListener("click", function () {
      setOpen(menu.hidden);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  /* ─── Scrolled nav ───────────────────────────────────────────────────── */
  function initScroll() {
    var header = document.getElementById("site-header");
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ─── Leaderboard ────────────────────────────────────────────────────── */
  function initLeaderboard() {
    var rows = document.getElementById("board-rows");
    LEADERBOARD.forEach(function (p) {
      var row = document.createElement("div");
      row.className = "board__row";
      row.setAttribute("role", "row");

      var rankCell;
      if (p.rank <= 3) {
        var bg = p.rank === 1 ? "#C8F100" : p.rank === 2 ? "rgba(200,241,0,0.3)" : "rgba(255,107,0,0.2)";
        var color = p.rank === 1 ? "#05090A" : "#EEFAF0";
        rankCell = '<div><span class="board__rank-badge" style="background:' + bg + ';color:' + color + '">' + p.rank + "</span></div>";
      } else {
        rankCell = '<div><span class="board__rank-num">' + String(p.rank).padStart(2, "0") + "</span></div>";
      }

      var nameCls = "board__name" + (p.rank === 1 ? " board__name--first" : "");
      row.innerHTML =
        rankCell +
        '<div class="board__player"><span class="board__avatar" aria-hidden="true">' + p.avatar + '</span>' +
          '<span class="' + nameCls + '">' + p.name + "</span></div>" +
        '<div class="board__streak"><span>🔥 ' + p.streak + "</span></div>" +
        '<div class="board__score" data-target="' + p.score + '">0</div>';
      rows.appendChild(row);
    });
  }

  function countUp(el, target) {
    var duration = 1200, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  /* ─── Multiplier chart ───────────────────────────────────────────────── */
  function initChart() {
    var chart = document.getElementById("mult-chart");
    MULTIPLIERS.forEach(function (mult, i) {
      var height = (Math.log2(mult) / 7) * 100;
      var color = i < 3 ? "rgba(200,241,0,0.3)" : i < 5 ? "#C8F100" : "#FF6B00";
      var col = document.createElement("div");
      col.className = "mult__col";
      col.innerHTML =
        '<div class="mult__bar" style="height:' + height + "%;background:" + color +
          ";transition-delay:" + (0.1 + i * 0.07) + 's"></div>' +
        '<span class="mult__val">' + mult + "×</span>";
      chart.appendChild(col);
    });
  }

  /* ─── Scroll-in animations ───────────────────────────────────────────── */
  function initObserver() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll(".anim[data-anim-delay]").forEach(function (el) {
      el.style.transitionDelay = (parseInt(el.getAttribute("data-anim-delay"), 10) / 1000) + "s";
    });

    if (reduce || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".anim").forEach(function (el) { el.classList.add("is-in"); });
      document.querySelector(".mult").classList.add("is-in");
      document.querySelectorAll(".board__score").forEach(function (el) {
        el.textContent = parseInt(el.getAttribute("data-target"), 10).toLocaleString();
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add("is-in");
        io.unobserve(el);

        if (el.id === "leaderboard") {
          el.querySelectorAll(".board__score").forEach(function (s, i) {
            setTimeout(function () {
              countUp(s, parseInt(s.getAttribute("data-target"), 10));
            }, 300 + i * 60);
          });
        }
      });
    }, { rootMargin: "-80px 0px" });

    document.querySelectorAll(".anim").forEach(function (el) { io.observe(el); });
    io.observe(document.querySelector(".mult"));
    io.observe(document.getElementById("leaderboard"));
  }

  /* ─── Init ───────────────────────────────────────────────────────────── */
  function init() {
    initLang();
    initBurger();
    initScroll();
    initLeaderboard();
    initChart();
    applyLang("en");
    initObserver();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
