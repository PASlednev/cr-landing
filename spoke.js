/* Lightweight interactions for spoke pages (no leaderboard/chart deps). */
(function () {
  "use strict";

  function initBurger() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobile-menu");
    if (!burger || !menu) return;
    function setOpen(o) {
      burger.classList.toggle("is-open", o);
      burger.setAttribute("aria-expanded", o ? "true" : "false");
      burger.setAttribute("aria-label", o ? "Close menu" : "Open menu");
      menu.hidden = !o;
    }
    burger.addEventListener("click", function () { setOpen(menu.hidden); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  function initScroll() {
    var header = document.getElementById("site-header");
    var toTop = document.getElementById("to-top");
    function onScroll() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
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

  function initReveal() {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".anim");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "-60px 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /*
   * Auto-refreshing "Last updated / Last checked" dates.
   *
   * Fills every element with class "js-date" with a natural-looking recent date
   * so the site never shows stale timestamps. Rules:
   *   - Dates fall inside the current month, or reach back to the end of the
   *     previous month when the current month has only just begun.
   *   - Dates are biased toward the last few days so they stay fresh, and never
   *     land in the future.
   *   - The result refreshes automatically each week and is stable within a week
   *     (no flicker on every reload).
   *   - Elements are grouped by data-date-group. Within a group each distinct
   *     index gets a DISTINCT date (so a comparison table looks hand-maintained),
   *     while elements sharing the same index get the SAME date (so a duplicated
   *     block, or the same operator shown twice on a page, stays in sync).
   *
   * Markup:
   *   <time class="js-date" data-date-group="byline" data-date-format="iso">2026-07-03</time>
   *   data-date-format: "iso" -> 2026-07-03, "medium" -> Jul 3, 2026 (default iso)
   *   data-date-index: optional explicit index; when omitted, DOM order is used.
   * The inline text is a no-JS fallback and is overwritten when JS runs.
   */
  function initDates() {
    var nodes = document.querySelectorAll(".js-date");
    if (!nodes.length) return;

    var DAY = 86400000;
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Window start: 1st of the current month, or the 20th of the previous month
    // when we are still in the first week of the month.
    var start = today.getDate() < 8
      ? new Date(today.getFullYear(), today.getMonth() - 1, 20)
      : new Date(today.getFullYear(), today.getMonth(), 1);
    // Never reach back more than ~4 weeks, so dates never look old.
    var minStart = new Date(today.getTime() - 27 * DAY);
    if (start < minStart) start = minStart;
    var range = Math.max(1, Math.round((today - start) / DAY)); // days between start..today

    // Weekly bucket: dates change automatically week to week, stable within a week.
    var week = Math.floor(today.getTime() / DAY / 7);

    function hash(str) {
      var h = 2166136261;
      for (var i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    }
    function mulberry32(a) {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
               "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function iso(d) {
      return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    }
    function fmt(d, f) {
      return f === "medium"
        ? MON[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
        : iso(d);
    }

    // Group elements so duplicated blocks sync and multi-date blocks stay distinct.
    var groups = {};
    nodes.forEach(function (el) {
      var g = el.getAttribute("data-date-group") || "default";
      (groups[g] = groups[g] || []).push(el);
    });

    Object.keys(groups).forEach(function (g) {
      var auto = 0;
      // Resolve each element's index (explicit data-date-index, else DOM order).
      var resolved = groups[g].map(function (el) {
        var a = el.getAttribute("data-date-index");
        return { el: el, idx: a !== null ? parseInt(a, 10) : auto++ };
      });
      // One distinct date per distinct index; keep them mutually unique.
      var distinct = [];
      resolved.forEach(function (r) {
        if (distinct.indexOf(r.idx) === -1) distinct.push(r.idx);
      });
      distinct.sort(function (a, b) { return a - b; });
      var dateByIdx = {};
      var usedBack = {};
      distinct.forEach(function (idx) {
        var seed = (hash(g) ^ Math.imul(week, 2654435761) ^ Math.imul(idx + 1, 40503)) >>> 0;
        // rnd^1.6 biases toward 0 => small "days back" => recent dates.
        var back = Math.round(Math.pow(mulberry32(seed), 1.6) * range);
        while (usedBack[back] && back < range) back++;
        while (usedBack[back] && back > 0) back--;
        if (back < 0) back = 0; // never in the future
        usedBack[back] = true;
        var d = new Date(today.getTime() - back * DAY);
        if (d > today) d = today; // hard guard: date is never past today
        dateByIdx[idx] = d;
      });
      resolved.forEach(function (r) {
        var d = dateByIdx[r.idx];
        r.el.textContent = fmt(d, r.el.getAttribute("data-date-format") || "iso");
        if (r.el.tagName === "TIME") r.el.setAttribute("datetime", iso(d));
      });
    });
  }

  function initLang() {
    var btn = document.getElementById("lang-btn");
    var menu = document.getElementById("lang-menu");
    if (!btn || !menu) return;
    function setOpen(o) {
      btn.setAttribute("aria-expanded", o ? "true" : "false");
      menu.hidden = !o;
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(menu.hidden);
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !menu.contains(e.target) && e.target !== btn) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* Promo modal: 30 s after page load, once per load — closed, it stays closed
     until the next reload. Markup is built here so CMS article pages (shared
     template, not in this repo) get it too. Same link as the Play Now button. */
  var PROMO_URL = "https://dig-board.com/4rBV3d55?t1=1&t7=chicken&t5=1167";
  var PROMO_DELAY = 30000;
  var PROMO_TIMER = 5 * 60;

  function initPromo() {
    setTimeout(show, PROMO_DELAY);

    function show() {
      var wrap = document.createElement("div");
      wrap.className = "promo";
      wrap.innerHTML =
        '<div class="promo__backdrop" data-promo-close></div>' +
        '<div class="promo__card" role="dialog" aria-modal="true" aria-labelledby="promo-title">' +
          '<button class="promo__close" type="button" aria-label="Close" data-promo-close>' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>' +
          '</button>' +
          '<div class="promo__logo" aria-hidden="true"><span class="promo__logo-icon">🐔</span><span class="promo__logo-text">Chicken Road</span></div>' +
          '<span class="promo__pill">Welcome offer</span>' +
          '<h2 class="promo__title" id="promo-title">Claim Your Chicken Road Bonus</h2>' +
          '<p class="promo__offer">Up to $3,000 + 200 Free Spins</p>' +
          '<div class="promo__timer">Offer expires in <b data-promo-clock>5:00</b></div>' +
          '<a class="promo__cta" href="' + PROMO_URL + '" target="_blank" rel="noopener nofollow sponsored">Claim Bonus</a>' +
          '<p class="promo__note">18+. New players only. Play responsibly.</p>' +
        '</div>';
      document.body.appendChild(wrap);
      document.body.classList.add("promo-open");

      var clock = wrap.querySelector("[data-promo-clock]");
      var left = PROMO_TIMER;
      var tick = setInterval(function () {
        left -= 1;
        if (left <= 0) { left = 0; clearInterval(tick); }
        clock.textContent = Math.floor(left / 60) + ":" + ("0" + (left % 60)).slice(-2);
      }, 1000);

      function close() {
        clearInterval(tick);
        document.removeEventListener("keydown", onKey);
        document.body.classList.remove("promo-open");
        wrap.classList.add("is-closing");
        setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 200);
      }
      function onKey(e) { if (e.key === "Escape") close(); }

      [].forEach.call(wrap.querySelectorAll("[data-promo-close]"), function (el) { el.addEventListener("click", close); });
      wrap.querySelector(".promo__cta").addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      requestAnimationFrame(function () { wrap.classList.add("is-open"); wrap.querySelector(".promo__close").focus(); });
    }
  }

  function init() { initBurger(); initScroll(); initReveal(); initDates(); initLang(); initPromo(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
