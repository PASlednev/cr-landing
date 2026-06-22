(function () {
  "use strict";

  /* ─── i18n data ──────────────────────────────────────────────────────── */
  /* Translation strings live in translations.js (loaded first) as global `T`. */
  var LANGUAGES = [
    { code: "en", label: "English",   flag: "🇬🇧" },
    { code: "ru", label: "Русский",   flag: "🇷🇺" },
    { code: "de", label: "Deutsch",   flag: "🇩🇪" },
    { code: "fr", label: "Français",  flag: "🇫🇷" },
    { code: "es", label: "Español",   flag: "🇪🇸" },
    { code: "pt", label: "Português", flag: "🇵🇹" }
  ];

  /* Player pool with per-period scores & streaks.
     Invariant for every player: alltime >= weekly >= daily (and same for streaks),
     so no period can ever out-rank a longer one. Each tab sorts this pool by the
     selected period and shows the top 10, so rankings differ between tabs. */
  var PLAYERS = [
    // name            avatar  daily   weekly   alltime    streaks d / w / a
    { name: "KFC_Slayer",     avatar: "🐔",  d: 48200, w: 301000, a: 4180000, ds: 32, ws: 61, as: 128 },
    { name: "RoadRunner99",   avatar: "🦅",  d: 41750, w: 288500, a: 3960000, ds: 28, ws: 57, as: 119 },
    { name: "CrispyWings",    avatar: "🔥",  d: 37100, w: 264000, a: 3510000, ds: 24, ws: 52, as: 104 },
    { name: "NuggetKing",     avatar: "👑",  d: 31480, w: 240800, a: 3870000, ds: 19, ws: 49, as: 112 },
    { name: "FeatherFury",    avatar: "⚡",  d: 28900, w: 198400, a: 2740000, ds: 17, ws: 44, as: 96 },
    { name: "GrillMaster_X",  avatar: "🎯",  d: 25340, w: 176900, a: 2980000, ds: 14, ws: 40, as: 101 },
    { name: "BoldBeak",       avatar: "🏆",  d: 22710, w: 154200, a: 2310000, ds: 12, ws: 36, as: 88 },
    { name: "HotSauce_Pro",   avatar: "🌶️", d: 19850, w: 141600, a: 2590000, ds: 10, ws: 34, as: 93 },
    { name: "WildWattle",     avatar: "💥",  d: 17220, w: 128300, a: 1980000, ds: 9,  ws: 31, as: 80 },
    { name: "CluckChampion",  avatar: "🎮",  d: 14600, w: 112700, a: 2140000, ds: 7,  ws: 28, as: 85 },
    // newcomers
    { name: "EggspressLane",  avatar: "🥚",  d: 33600, w: 205000, a: 1760000, ds: 21, ws: 46, as: 74 },
    { name: "TalonTornado",   avatar: "🦃",  d: 27450, w: 233700, a: 3320000, ds: 16, ws: 50, as: 108 },
    { name: "CoopKing",       avatar: "🐓",  d: 20100, w: 167400, a: 2860000, ds: 11, ws: 38, as: 99 },
    { name: "GoldenYolk",     avatar: "🌟",  d: 23900, w: 188200, a: 2420000, ds: 13, ws: 42, as: 90 },
    { name: "ScrambleMaster", avatar: "🍳",  d: 18450, w: 120500, a: 1890000, ds: 10, ws: 30, as: 78 },
    { name: "MidnightCluck",  avatar: "🌙",  d: 15700, w: 98900,  a: 1540000, ds: 8,  ws: 25, as: 69 }
  ];

  var PERIOD_KEYS = {
    daily:   { score: "d", streak: "ds" },
    weekly:  { score: "w", streak: "ws" },
    alltime: { score: "a", streak: "as" }
  };

  function leaderboardFor(period) {
    var keys = PERIOD_KEYS[period] || PERIOD_KEYS.daily;
    return PLAYERS
      .map(function (p) {
        return { name: p.name, avatar: p.avatar, score: p[keys.score], streak: p[keys.streak] };
      })
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 10)
      .map(function (p, i) { p.rank = i + 1; return p; });
  }

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
    var toTop = document.getElementById("to-top");
    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
      if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    if (toTop) {
      toTop.addEventListener("click", function () {
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      });
    }
    onScroll();
  }

  /* ─── Leaderboard ────────────────────────────────────────────────────── */
  var currentPeriod = "daily";

  function rowHTML(p) {
    var rankCell;
    if (p.rank <= 3) {
      var bg = p.rank === 1 ? "#C8F100" : p.rank === 2 ? "rgba(200,241,0,0.3)" : "rgba(255,107,0,0.2)";
      var color = p.rank === 1 ? "#05090A" : "#EEFAF0";
      rankCell = '<div><span class="board__rank-badge" style="background:' + bg + ';color:' + color + '">' + p.rank + "</span></div>";
    } else {
      rankCell = '<div><span class="board__rank-num">' + String(p.rank).padStart(2, "0") + "</span></div>";
    }
    var nameCls = "board__name" + (p.rank === 1 ? " board__name--first" : "");
    return '<div class="board__row" role="row">' +
      rankCell +
      '<div class="board__player"><span class="board__avatar" aria-hidden="true">' + p.avatar + '</span>' +
        '<span class="' + nameCls + '">' + p.name + "</span></div>" +
      '<div class="board__streak"><span>🔥 ' + p.streak + "</span></div>" +
      '<div class="board__score" data-target="' + p.score + '">0</div>' +
    "</div>";
  }

  function renderBoard(period, animate) {
    currentPeriod = period;
    var rows = document.getElementById("board-rows");
    rows.innerHTML = leaderboardFor(period).map(rowHTML).join("");
    if (animate) animateScores();
  }

  function animateScores() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll(".board__score").forEach(function (s, i) {
      var target = parseInt(s.getAttribute("data-target"), 10);
      if (reduce) { s.textContent = target.toLocaleString(); return; }
      setTimeout(function () { countUp(s, target); }, i * 60);
    });
  }

  function initLeaderboard() {
    renderBoard("daily", false);

    var tabs = document.querySelectorAll(".tabs__btn");
    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var period = btn.getAttribute("data-tab");
        if (period === currentPeriod) return;
        tabs.forEach(function (b) {
          var active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });
        renderBoard(period, true);
      });
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
