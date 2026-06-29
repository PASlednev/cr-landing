/* ─── i18n translations ──────────────────────────────────────────────────
   Translation strings for all locales. Loaded before script.js, which
   reads the global `T`. Keep keys in sync across every language. */
var T = {
  en: {
    meta: {
      title: "Chicken Road — Winning Strategy & Free Demo | Crash Game",
      description: "Master Chicken Road, the fiery crash game. Learn proven Chicken Road strategies, play the free demo, climb the leaderboard and cash out before the heat catches you."
    },
    nav: ["Gameplay", "Leaderboard", "Winning Strategies", "FAQ", "Demo"],
    playNow: "Play Now",
    playDemo: "Play Demo",
    noDownload: "No download required",
    demoLive: "Live Demo",
    demoTag: "// Live Demo", demoTitle: "Try the Demo",
    demoDesc: "Chicken road is a fast-paced crash game from InOut Games with simple yet gripping mechanics: you steer a chicken that boosts your bet with every step it takes across the road. Pick from four difficulty modes and play with a generous 98% RTP. Take it for a spin in the live demo below — no sign-up, no risk.",
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
    finalCta: "Play Now",
    disclaimer: "18+ · Gamble responsibly · T&C Apply",
    footerRight: "🔒 SSL Secured · Provably Fair",
    partnersLabel: "Our partners",
    partnersTitle: "Built with industry-leading partners",
    partnersText: "Chicken Road is powered by InOut Games and developed alongside the most trusted names in iGaming. Each partner below supplies certified game engines, provably-fair technology and the secure infrastructure that keeps every crossing fast, transparent and reliable.",
    footerLinks: "© 2026 Chicken road. All rights reserved. · Privacy · Terms · Support",
    faqTag: "// Questions & Answers", faqTitle: "FAQ",
    authorTag: "// Behind the Game", authorTitle: "About the Author",
    authorRole: "Growth & Product · Midnite · London, UK",
    authorBio: "I'm Ryan Murton, and this is my project. Commercially-minded with a background in Growth/Digital Marketing and Product, I've spent years in the iGaming space — based in London and working at Midnite. I built this resource to share everything I've learned about crash games, betting strategy and how titles like Chicken Road really work, with a hands-on, data-driven approach you can actually trust.",
    authorLink: "View profile on LinkedIn",
    faqItems: [
      { q: "What is the minimum deposit to start playing?", a: "You can fund your account with any amount starting from just $1, so there's no need to commit a big bankroll to get started." },
      { q: "What is the RTP (Return to Player) of Chicken road?", a: "Chicken road runs at a high 98% RTP — one of the most generous rates among crash games — and it stays at 98% across every difficulty level. Over time, that means 98% of all wagers flow back to players." },
      { q: "How do I withdraw my winnings?", a: "Cashing out is fast and flexible. You can withdraw using any of the payment methods popular across Europe and the US — Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay and SEPA bank transfer." },
      { q: "How does the game actually work?", a: "You guide a chicken across a busy road one lane at a time. Every lane it clears bumps up your multiplier — hit CASH OUT whenever you want to bank your winnings, but if the chicken gets caught first, the round is lost." },
      { q: "Are there different difficulty levels?", a: "Yes — there are four modes: Easy, Medium, Hard and Hardcore. Higher difficulty means fewer safe lanes but far bigger potential multipliers, while the 98% RTP stays the same in every mode." },
      { q: "Is Chicken road fair and safe to play?", a: "Every round uses a provably fair system from InOut Games, so each result is generated randomly and can be independently verified. Neither the player nor the operator can predict or influence where the chicken stops." },
      { q: "Do I need to download an app or install anything?", a: "No. Chicken road runs straight in your browser on both desktop and mobile — no app store, no plugins, no installs. Just open the page and start playing." },
      { q: "Can I try the game before betting real money?", a: "Of course. Use the live demo higher up the page to get a feel for the mechanics and difficulty modes at zero risk, then switch to real play whenever you're ready." }
    ],
    strat: {
      tag: "// Level-Based Strategies",
      title: "Winning Strategies",
      levels: [
        {
          tier: "Level 01", name: "The Two-Step Grind", risk: "Low Risk",
          intro: "A grounding routine built for newcomers and anyone slowly growing a balance. It leans on the strong odds of the opening moves and stays well clear of the risky far lanes where most runs fall apart. Slow, steady, and built to last.",
          steps: [
            { title: "Lock In Easy Mode", desc: "Stay on the Easy setting and never switch away. The lower trap frequency is exactly what keeps this routine mathematically sound." },
            { title: "Keep a Fixed Stake", desc: "Wager a flat 1% of your balance every round — $1 on a $100 bank, $5 on $500. Same amount, round after round." },
            { title: "Advance Two Lanes", desc: "No more, no fewer. Crossing precisely two lanes is where the entire edge of this method lives." },
            { title: "Collect at ~1.2x–1.3x", desc: "After two lanes the multiplier usually lands here. Bank it instantly, then repeat with identical settings — no second-guessing." }
          ]
        },
        {
          tier: "Level 02", name: "The Gear Shifter", risk: "Medium Risk",
          intro: "A measured step up that only ever risks winnings, never your original deposit. Bigger wagers are funded purely by profit, and the moment a run busts you drop back a gear to regain control — like working through a manual gearbox.",
          steps: [
            { title: "Start in First Gear", desc: "Open with your base stake using the Two-Step Grind: Easy mode, two lanes, cash out. Keep grinding until you've banked roughly $10 in pure profit." },
            { title: "Shift to Second Gear", desc: "Now bet with that $10 profit only. Move to Medium difficulty, push for four or five lanes, and aim for a 2x–3x return. Lose the profit? Drop straight back to First Gear." },
            { title: "Engage Third Gear", desc: "Enter only once profit has doubled to about $20. Raise the stake, stay on Medium, and chase five or six lanes for a 3x–5x payout. Any heavy loss sends you back down." },
            { title: "Never Skip a Gear", desc: "Always climb one gear at a time and downshift the instant a run goes wrong. Jumping ahead on your base bankroll is gambling, not strategy." }
          ]
        },
        {
          tier: "Level 03", name: "The Hardcore Hunter", risk: "High Risk",
          intro: "An all-out volatility play for thick-skinned players. Expect to lose round after round — droughts of twenty busts in a row are normal — but a single deep crossing can repay every loss and still leave you well ahead. Patience is survival.",
          steps: [
            { title: "Crank Up the Difficulty", desc: "Run on Hard or Hardcore only. Medium simply won't produce the towering multipliers this approach depends on." },
            { title: "Stake Tiny Amounts", desc: "Risk no more than 0.5% of your balance per round — just $5 on a $1,000 bank. Small bets are what keep you alive through the long dry spells." },
            { title: "Hunt the Big Run", desc: "Forget small wins. Push for ten-plus lanes and target multipliers of 25x, 50x, 100x or beyond." },
            { title: "Set a Target and Hold It", desc: "Red screens are just the cost of hunting — never let them rattle you or change your stake. Decide your exit before each round and honour it the moment you arrive." }
          ]
        }
      ]
    }
  },
  ru: {
    meta: {
      title: "Chicken Road — стратегия и бесплатное демо | Краш-игра",
      description: "Освойте Chicken Road — огненную краш-игру. Рабочие стратегии Chicken Road, бесплатное демо, таблица лидеров. Заберите выигрыш, пока не поздно."
    },
    nav: ["Геймплей", "Лидерборд", "Выигрышные стратегии", "FAQ", "Демо"],
    playNow: "Играть",
    playDemo: "Смотреть демо",
    noDownload: "Без загрузки",
    demoLive: "Демо",
    demoTag: "// Демо-режим", demoTitle: "Попробуйте демо",
    demoDesc: "Chicken road — динамичная краш-игра от InOut Games с простой, но затягивающей механикой: вы управляете курицей, которая с каждым шагом через дорогу увеличивает вашу ставку. Доступны четыре уровня сложности, а RTP составляет щедрые 98%. Опробуйте всё это в живом демо ниже — без регистрации и без риска.",
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
    finalCta: "🐔 Играть",
    disclaimer: "18+ · Играй ответственно · Применяются условия",
    footerRight: "🔒 SSL · Честная игра",
    partnersLabel: "Наши партнёры",
    partnersTitle: "Создано вместе с ведущими партнёрами индустрии",
    partnersText: "Chicken Road работает на технологиях InOut Games и создаётся вместе с самыми надёжными именами в iGaming. Каждый из партнёров ниже предоставляет сертифицированные игровые движки, технологию provably fair и защищённую инфраструктуру, благодаря которой каждый переход остаётся быстрым, прозрачным и надёжным.",
    footerLinks: "© 2026 Chicken road. Все права защищены. · Конфиденциальность · Условия · Поддержка",
    faqTag: "// Вопросы и ответы", faqTitle: "FAQ",
    authorTag: "// Кто за игрой", authorTitle: "Об авторе",
    authorRole: "Growth & Product · Midnite · Лондон, Великобритания",
    authorBio: "Я Райан Мёртон, и это мой проект. У меня коммерческое мышление и опыт в Growth/Digital Marketing и продукте, а в индустрии iGaming я уже не первый год — живу в Лондоне и работаю в Midnite. Я создал этот ресурс, чтобы делиться всем, что узнал о краш-играх, стратегиях ставок и о том, как на самом деле устроены игры вроде Chicken Road, — с практическим и основанным на данных подходом, которому действительно можно доверять.",
    authorLink: "Открыть профиль в LinkedIn",
    faqItems: [
      { q: "Какой минимальный депозит нужен, чтобы начать играть?", a: "Пополнить счёт можно на любую сумму начиная всего с $1 — не нужно вносить крупный банк, чтобы попробовать игру." },
      { q: "Какой RTP (процент возврата игроку) у Chicken road?", a: "Chicken road работает с высоким RTP 98% — одним из самых щедрых среди краш-игр — и он остаётся 98% на всех уровнях сложности. На дистанции это значит, что 98% всех ставок возвращается игрокам." },
      { q: "Как вывести выигрыш?", a: "Вывод быстрый и гибкий. Деньги можно вывести через любую популярную в Европе и США платёжную систему — Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay и банковский перевод SEPA." },
      { q: "Как вообще работает игра?", a: "Вы ведёте курицу через оживлённую дорогу по одной полосе за раз. Каждая пройденная полоса повышает ваш множитель — жмите CASH OUT в любой момент, чтобы забрать выигрыш, но если курицу поймают раньше, раунд проигран." },
      { q: "Есть ли разные уровни сложности?", a: "Да — доступны четыре режима: Лёгкий, Средний, Сложный и Хардкор. Чем выше сложность, тем меньше безопасных полос, но тем больше возможные множители, а RTP во всех режимах остаётся 98%." },
      { q: "Chicken road — честная и безопасная игра?", a: "Каждый раунд использует систему provably fair от InOut Games: результат генерируется случайно и поддаётся независимой проверке. Ни игрок, ни оператор не могут предсказать или повлиять на то, где остановится курица." },
      { q: "Нужно ли скачивать приложение или что-то устанавливать?", a: "Нет. Chicken road запускается прямо в браузере на компьютере и на телефоне — без магазина приложений, плагинов и установки. Просто откройте страницу и играйте." },
      { q: "Можно ли попробовать игру до ставок на реальные деньги?", a: "Конечно. Воспользуйтесь живым демо выше на странице, чтобы освоить механику и режимы сложности без риска, а затем переходите к игре на реальные деньги, когда будете готовы." }
    ],
    strat: {
      tag: "// Стратегии по уровням",
      title: "Выигрышные стратегии",
      levels: [
        {
          tier: "Уровень 01", name: "Грайнд в два шага", risk: "Низкий риск",
          intro: "Базовый подход для новичков и всех, кто спокойно наращивает банк. Он опирается на высокие шансы первых ходов и держится подальше от рискованных дальних полос, где обрывается большинство забегов. Медленно, ровно и надолго.",
          steps: [
            { title: "Зафиксируйте лёгкий режим", desc: "Оставайтесь на сложности «Лёгкая» и никогда не переключайтесь. Именно низкая частота ловушек делает эту схему математически оправданной." },
            { title: "Держите ставку фиксированной", desc: "Ставьте ровно 1% от банка каждый раунд — $1 при банке $100, $5 при $500. Одна и та же сумма, раунд за раундом." },
            { title: "Проходите две полосы", desc: "Не больше и не меньше. Ровно две пройденные полосы — вот где скрыто всё преимущество этого метода." },
            { title: "Забирайте на ~1.2x–1.3x", desc: "После двух полос множитель обычно оказывается в этом диапазоне. Забирайте сразу и повторяйте с теми же настройками — без сомнений." }
          ]
        },
        {
          tier: "Уровень 02", name: "Переключатель передач", risk: "Средний риск",
          intro: "Взвешенный шаг вперёд, который рискует только выигрышем, но никогда вашим первоначальным депозитом. Крупные ставки делаются исключительно за счёт прибыли, а при первом же провале вы понижаете передачу, чтобы вернуть контроль — словно работаете с механической коробкой.",
          steps: [
            { title: "Стартуйте на первой передаче", desc: "Начните с базовой ставки по схеме «грайнд в два шага»: лёгкий режим, две полосы, забор. Грайндьте, пока не накопите около $10 чистой прибыли." },
            { title: "Переходите на вторую", desc: "Теперь ставьте только эти $10 прибыли. Перейдите на среднюю сложность, идите на четыре–пять полос и целитесь в множитель 2x–3x. Потеряли прибыль? Сразу возвращайтесь на первую передачу." },
            { title: "Включайте третью передачу", desc: "Заходите сюда только когда прибыль удвоилась примерно до $20. Поднимите ставку, оставайтесь на средней сложности и идите на пять–шесть полос ради 3x–5x. Любой крупный проигрыш отбрасывает вас назад." },
            { title: "Не перескакивайте передачи", desc: "Поднимайтесь строго по одной передаче и понижайте её при первом же неудачном забеге. Прыжок вперёд на базовом банке — это азарт, а не стратегия." }
          ]
        },
        {
          tier: "Уровень 03", name: "Хардкорный охотник", risk: "Высокий риск",
          intro: "Игра на чистой волатильности для игроков с крепкими нервами. Готовьтесь проигрывать раунд за раундом — серии из двадцати провалов подряд здесь норма, — но одно глубокое прохождение способно отбить все потери и оставить вас в плюсе. Терпение — это выживание.",
          steps: [
            { title: "Поднимите сложность", desc: "Играйте только на «Сложной» или «Хардкоре». Средняя сложность просто не даст тех огромных множителей, на которых держится этот подход." },
            { title: "Ставьте крошечные суммы", desc: "Рискуйте не более чем 0.5% банка за раунд — всего $5 при банке $1000. Маленькие ставки и держат вас на плаву во время долгих засух." },
            { title: "Охотьтесь за крупным забегом", desc: "Забудьте о мелких выигрышах. Идите на десять и более полос и целитесь в множители 25x, 50x, 100x и выше." },
            { title: "Задайте цель и держитесь её", desc: "Красные экраны — лишь плата за охоту, не давайте им выбить вас из колеи и не меняйте ставку. Определите точку выхода до начала раунда и соблюдайте её, как только до неё дойдёте." }
          ]
        }
      ]
    }
  },
  de: {
    meta: {
      title: "Chicken Road — Gewinnstrategie & Gratis-Demo | Crash-Spiel",
      description: "Meistere Chicken Road, das feurige Crash-Spiel. Bewährte Chicken-Road-Strategien, kostenlose Demo und Bestenliste – casht aus, bevor es brennt."
    },
    nav: ["Gameplay", "Rangliste", "Gewinnstrategien", "FAQ", "Demo"],
    playNow: "Jetzt spielen",
    playDemo: "Demo spielen",
    noDownload: "Kein Download nötig",
    demoLive: "Live-Demo",
    demoTag: "// Live-Demo", demoTitle: "Demo ausprobieren",
    demoDesc: "Chicken road ist ein temporeiches Crash-Spiel von InOut Games mit einfacher, aber fesselnder Mechanik: Du steuerst ein Huhn, das deinen Einsatz mit jedem Schritt über die Straße erhöht. Wähle aus vier Schwierigkeitsstufen und spiele mit einem großzügigen RTP von 98 %. Teste es gleich in der Live-Demo unten — ohne Anmeldung, ohne Risiko.",
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
    finalCta: "🐔 Jetzt spielen",
    disclaimer: "18+ · Spiel verantwortungsbewusst · AGB gelten",
    footerRight: "🔒 SSL gesichert · Nachweislich fair",
    partnersLabel: "Unsere Partner",
    partnersTitle: "Entwickelt mit branchenführenden Partnern",
    partnersText: "Chicken Road basiert auf der Technologie von InOut Games und wird gemeinsam mit den vertrauenswürdigsten Namen der iGaming-Branche entwickelt. Jeder der folgenden Partner liefert zertifizierte Spiel-Engines, Provably-Fair-Technologie und die sichere Infrastruktur, die jede Überquerung schnell, transparent und zuverlässig macht.",
    footerLinks: "© 2026 Chicken road. Alle Rechte vorbehalten. · Datenschutz · AGB · Support",
    faqTag: "// Fragen & Antworten", faqTitle: "FAQ",
    authorTag: "// Hinter dem Spiel", authorTitle: "Über den Autor",
    authorRole: "Growth & Product · Midnite · London, UK",
    authorBio: "Ich bin Ryan Murton, und das ist mein Projekt. Kommerziell denkend und mit einem Hintergrund in Growth/Digital Marketing und Produkt, bin ich seit Jahren in der iGaming-Branche unterwegs — ich lebe in London und arbeite bei Midnite. Ich habe diese Seite aufgebaut, um alles zu teilen, was ich über Crash-Spiele, Wettstrategien und das Funktionieren von Spielen wie Chicken Road gelernt habe — mit einem praxisnahen, datengetriebenen Ansatz, dem du wirklich vertrauen kannst.",
    authorLink: "Profil auf LinkedIn ansehen",
    faqItems: [
      { q: "Wie hoch ist die Mindesteinzahlung, um zu spielen?", a: "Du kannst dein Konto mit jedem Betrag ab nur 1 $ aufladen — du musst also kein großes Guthaben einsetzen, um loszulegen." },
      { q: "Wie hoch ist der RTP (Auszahlungsquote) von Chicken road?", a: "Chicken road läuft mit einem hohen RTP von 98 % — einer der großzügigsten Werte unter den Crash-Spielen — und bleibt in jeder Schwierigkeitsstufe bei 98 %. Langfristig fließen damit 98 % aller Einsätze an die Spieler zurück." },
      { q: "Wie zahle ich meine Gewinne aus?", a: "Das Auszahlen ist schnell und flexibel. Du kannst über alle in Europa und den USA beliebten Zahlungsmethoden auszahlen — Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay und SEPA-Überweisung." },
      { q: "Wie funktioniert das Spiel eigentlich?", a: "Du führst ein Huhn Spur für Spur über eine belebte Straße. Jede überquerte Spur erhöht deinen Multiplikator — drücke jederzeit CASH OUT, um deinen Gewinn zu sichern, doch wird das Huhn vorher erwischt, ist die Runde verloren." },
      { q: "Gibt es verschiedene Schwierigkeitsstufen?", a: "Ja — es gibt vier Modi: Einfach, Mittel, Schwer und Hardcore. Höhere Schwierigkeit bedeutet weniger sichere Spuren, aber deutlich größere mögliche Multiplikatoren, während der RTP in jedem Modus bei 98 % bleibt." },
      { q: "Ist Chicken road fair und sicher?", a: "Jede Runde nutzt ein nachweislich faires (Provably-Fair-)System von InOut Games, sodass jedes Ergebnis zufällig erzeugt und unabhängig überprüfbar ist. Weder Spieler noch Betreiber können vorhersagen oder beeinflussen, wo das Huhn stehen bleibt." },
      { q: "Muss ich eine App oder etwas anderes installieren?", a: "Nein. Chicken road läuft direkt im Browser — auf Desktop und Handy, ohne App-Store, Plugins oder Installation. Einfach die Seite öffnen und spielen." },
      { q: "Kann ich das Spiel vor dem Einsatz von echtem Geld ausprobieren?", a: "Natürlich. Nutze die Live-Demo weiter oben auf der Seite, um die Mechanik und die Schwierigkeitsstufen risikofrei kennenzulernen, und wechsle dann zum Echtgeldspiel, wann immer du bereit bist." }
    ],
    strat: {
      tag: "// Strategien nach Level",
      title: "Gewinnstrategien",
      levels: [
        {
          tier: "Level 01", name: "Der Zwei-Schritt-Grind", risk: "Geringes Risiko",
          intro: "Eine solide Routine für Einsteiger und alle, die ihr Guthaben langsam aufbauen. Sie setzt auf die guten Chancen der ersten Züge und hält sich von den riskanten hinteren Bahnen fern, an denen die meisten Läufe scheitern. Langsam, beständig und auf Dauer angelegt.",
          steps: [
            { title: "Auf Easy-Modus festlegen", desc: "Bleibe in der Stufe „Einfach“ und wechsle nie. Genau die niedrigere Fallenhäufigkeit macht diese Routine mathematisch tragfähig." },
            { title: "Festen Einsatz halten", desc: "Setze in jeder Runde glatte 1 % deines Guthabens — 1 $ bei 100 $, 5 $ bei 500 $. Immer derselbe Betrag, Runde für Runde." },
            { title: "Zwei Bahnen vorrücken", desc: "Nicht mehr, nicht weniger. Genau zwei überquerte Bahnen — darin liegt der gesamte Vorteil dieser Methode." },
            { title: "Bei ~1,2x–1,3x kassieren", desc: "Nach zwei Bahnen liegt der Multiplikator meist in diesem Bereich. Sofort sichern und mit identischen Einstellungen wiederholen — ohne Zögern." }
          ]
        },
        {
          tier: "Level 02", name: "Der Gangschalter", risk: "Mittleres Risiko",
          intro: "Ein wohlüberlegter Schritt nach oben, der nur Gewinne riskiert, niemals deine ursprüngliche Einzahlung. Größere Einsätze werden ausschließlich aus dem Profit bezahlt, und sobald ein Lauf platzt, schaltest du sofort einen Gang zurück, um die Kontrolle zu behalten — wie bei einem Schaltgetriebe.",
          steps: [
            { title: "Im ersten Gang starten", desc: "Beginne mit deinem Grundeinsatz nach dem Zwei-Schritt-Grind: Easy-Modus, zwei Bahnen, kassieren. Grinde weiter, bis du rund 10 $ reinen Gewinn angesammelt hast." },
            { title: "In den zweiten Gang schalten", desc: "Setze jetzt nur diese 10 $ Gewinn. Wechsle auf mittlere Schwierigkeit, gehe auf vier bis fünf Bahnen und ziele auf 2x–3x. Gewinn verloren? Sofort zurück in den ersten Gang." },
            { title: "Den dritten Gang einlegen", desc: "Steige erst ein, wenn sich der Gewinn auf etwa 20 $ verdoppelt hat. Erhöhe den Einsatz, bleibe auf Mittel und gehe auf fünf bis sechs Bahnen für 3x–5x. Jeder größere Verlust wirft dich zurück." },
            { title: "Nie einen Gang überspringen", desc: "Steige immer Gang für Gang auf und schalte beim ersten Fehllauf sofort herunter. Mit dem Grundkapital nach vorn zu springen ist Glücksspiel, keine Strategie." }
          ]
        },
        {
          tier: "Level 03", name: "Der Hardcore-Jäger", risk: "Hohes Risiko",
          intro: "Reines Volatilitätsspiel für hartgesottene Spieler. Rechne damit, Runde um Runde zu verlieren — Durststrecken von zwanzig Pleiten in Folge sind normal —, doch ein einziger tiefer Lauf kann jeden Verlust ausgleichen und dich obendrein klar ins Plus bringen. Geduld ist Überleben.",
          steps: [
            { title: "Schwierigkeit hochdrehen", desc: "Spiele nur auf Schwer oder Hardcore. Mittel liefert schlicht nicht die gewaltigen Multiplikatoren, auf die dieser Ansatz angewiesen ist." },
            { title: "Winzige Beträge setzen", desc: "Riskiere höchstens 0,5 % deines Guthabens pro Runde — bei 1.000 $ nur 5 $. Kleine Einsätze halten dich durch die langen Durststrecken am Leben." },
            { title: "Auf den großen Lauf jagen", desc: "Vergiss kleine Gewinne. Gehe auf zehn oder mehr Bahnen und ziele auf Multiplikatoren von 25x, 50x, 100x oder mehr." },
            { title: "Ein Ziel setzen und halten", desc: "Rote Bildschirme sind nur der Preis der Jagd — lass dich davon nicht aus der Ruhe bringen und ändere deinen Einsatz nicht. Lege deinen Ausstieg vor jeder Runde fest und halte ihn ein, sobald du ihn erreichst." }
          ]
        }
      ]
    }
  },
  fr: {
    meta: {
      title: "Chicken Road — Stratégie Gagnante & Démo Gratuite | Jeu Crash",
      description: "Maîtrisez Chicken Road, le jeu crash brûlant. Stratégies éprouvées, démo gratuite et classement — encaissez avant que ça chauffe."
    },
    nav: ["Gameplay", "Classement", "Stratégies gagnantes", "FAQ", "Démo"],
    playNow: "Jouer maintenant",
    playDemo: "Voir la démo",
    noDownload: "Sans téléchargement",
    demoLive: "Démo en direct",
    demoTag: "// Démo en direct", demoTitle: "Essayez la démo",
    demoDesc: "Chicken road est un jeu crash rythmé d'InOut Games aux mécaniques simples mais captivantes : vous dirigez une poule qui augmente votre mise à chaque pas sur la route. Choisissez parmi quatre niveaux de difficulté et profitez d'un généreux RTP de 98 %. Faites-en l'essai dans la démo en direct ci-dessous — sans inscription ni risque.",
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
    finalCta: "🐔 Jouer maintenant",
    disclaimer: "18+ · Jouez de manière responsable · CGU applicables",
    footerRight: "🔒 SSL sécurisé · Équité prouvée",
    partnersLabel: "Nos partenaires",
    partnersTitle: "Conçu avec des partenaires de premier plan",
    partnersText: "Chicken Road repose sur la technologie d'InOut Games et est développé aux côtés des noms les plus fiables de l'iGaming. Chaque partenaire ci-dessous fournit des moteurs de jeu certifiés, une technologie provably fair et l'infrastructure sécurisée qui rend chaque traversée rapide, transparente et fiable.",
    footerLinks: "© 2026 Chicken road. Tous droits réservés. · Confidentialité · CGU · Support",
    faqTag: "// Questions & réponses", faqTitle: "FAQ",
    authorTag: "// Dans les coulisses du jeu", authorTitle: "À propos de l'auteur",
    authorRole: "Growth & Product · Midnite · Londres, Royaume-Uni",
    authorBio: "Je suis Ryan Murton, et c'est mon projet. Doté d'un esprit commercial et d'une expérience en Growth/Digital Marketing et en produit, j'évolue depuis des années dans l'univers de l'iGaming — basé à Londres et travaillant chez Midnite. J'ai créé ce site pour partager tout ce que j'ai appris sur les jeux crash, les stratégies de pari et le fonctionnement réel de jeux comme Chicken Road, avec une approche concrète et fondée sur les données à laquelle vous pouvez vraiment vous fier.",
    authorLink: "Voir le profil sur LinkedIn",
    faqItems: [
      { q: "Quel est le dépôt minimum pour commencer à jouer ?", a: "Vous pouvez approvisionner votre compte avec n'importe quel montant à partir de seulement 1 $ — pas besoin d'engager une grosse somme pour vous lancer." },
      { q: "Quel est le RTP (taux de redistribution) de Chicken road ?", a: "Chicken road affiche un RTP élevé de 98 % — l'un des plus généreux parmi les jeux crash — et il reste à 98 % à tous les niveaux de difficulté. Sur la durée, 98 % des mises reviennent donc aux joueurs." },
      { q: "Comment retirer mes gains ?", a: "Le retrait est rapide et flexible. Vous pouvez retirer via tous les moyens de paiement populaires en Europe et aux États-Unis — Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay et virement SEPA." },
      { q: "Comment fonctionne vraiment le jeu ?", a: "Vous guidez une poule sur une route fréquentée, une voie à la fois. Chaque voie franchie augmente votre multiplicateur — appuyez sur CASH OUT quand vous le souhaitez pour empocher vos gains, mais si la poule est attrapée avant, la manche est perdue." },
      { q: "Y a-t-il différents niveaux de difficulté ?", a: "Oui — il existe quatre modes : Facile, Moyen, Difficile et Hardcore. Plus la difficulté est élevée, moins il y a de voies sûres mais bien plus de multiplicateurs potentiels, tandis que le RTP reste à 98 % dans chaque mode." },
      { q: "Chicken road est-il équitable et sûr ?", a: "Chaque manche utilise un système provably fair (équité prouvée) d'InOut Games : chaque résultat est généré aléatoirement et vérifiable indépendamment. Ni le joueur ni l'opérateur ne peuvent prédire ou influencer l'endroit où la poule s'arrête." },
      { q: "Dois-je télécharger une application ou installer quelque chose ?", a: "Non. Chicken road fonctionne directement dans votre navigateur, sur ordinateur comme sur mobile — sans store, sans plugin, sans installation. Ouvrez simplement la page et jouez." },
      { q: "Puis-je essayer le jeu avant de miser de l'argent réel ?", a: "Bien sûr. Utilisez la démo en direct plus haut sur la page pour prendre en main les mécaniques et les modes de difficulté sans risque, puis passez au jeu en argent réel quand vous êtes prêt." }
    ],
    strat: {
      tag: "// Stratégies par niveau",
      title: "Stratégies gagnantes",
      levels: [
        {
          tier: "Niveau 01", name: "Le grind en deux pas", risk: "Risque faible",
          intro: "Une routine de base pensée pour les débutants et tous ceux qui font grossir leur solde tranquillement. Elle mise sur les fortes chances des premiers coups et reste loin des voies lointaines risquées où la plupart des parties s'effondrent. Lent, régulier et fait pour durer.",
          steps: [
            { title: "Verrouillez le mode Facile", desc: "Restez en difficulté « Facile » et n'en changez jamais. C'est justement la faible fréquence des pièges qui rend cette routine mathématiquement viable." },
            { title: "Gardez une mise fixe", desc: "Misez exactement 1 % de votre solde à chaque tour — 1 $ pour 100 $, 5 $ pour 500 $. Le même montant, tour après tour." },
            { title: "Avancez de deux voies", desc: "Ni plus, ni moins. Franchir précisément deux voies, c'est là que réside tout l'avantage de cette méthode." },
            { title: "Encaissez à ~1,2x–1,3x", desc: "Après deux voies, le multiplicateur se situe généralement dans cette plage. Encaissez aussitôt, puis recommencez avec les mêmes réglages — sans hésiter." }
          ]
        },
        {
          tier: "Niveau 02", name: "Le passeur de vitesses", risk: "Risque moyen",
          intro: "Une montée en puissance mesurée qui ne risque jamais que les gains, jamais votre dépôt initial. Les mises plus élevées sont financées uniquement par le profit, et dès qu'une partie casse, vous rétrogradez aussitôt pour reprendre le contrôle — comme avec une boîte manuelle.",
          steps: [
            { title: "Démarrez en première", desc: "Commencez avec votre mise de base selon le grind en deux pas : mode Facile, deux voies, encaissement. Continuez jusqu'à accumuler environ 10 $ de profit net." },
            { title: "Passez en seconde", desc: "Misez désormais uniquement ces 10 $ de profit. Passez en difficulté Moyenne, visez quatre à cinq voies et un multiplicateur de 2x à 3x. Profit perdu ? Rétrogradez aussitôt en première." },
            { title: "Enclenchez la troisième", desc: "N'entrez ici qu'une fois le profit doublé à environ 20 $. Augmentez la mise, restez en Moyenne et visez cinq à six voies pour un gain de 3x à 5x. Toute grosse perte vous renvoie en arrière." },
            { title: "Ne sautez jamais un rapport", desc: "Montez toujours vitesse par vitesse et rétrogradez dès qu'une partie tourne mal. Sauter en avant avec votre capital de base, c'est du jeu, pas de la stratégie." }
          ]
        },
        {
          tier: "Niveau 03", name: "Le chasseur hardcore", risk: "Risque élevé",
          intro: "Du pur jeu de volatilité pour joueurs à toute épreuve. Attendez-vous à perdre tour après tour — des séries de vingt échecs d'affilée sont normales —, mais une seule traversée profonde peut rembourser toutes les pertes et vous laisser largement gagnant. La patience, c'est la survie.",
          steps: [
            { title: "Montez la difficulté", desc: "Jouez uniquement en Difficile ou Hardcore. La difficulté Moyenne ne produira tout simplement pas les multiplicateurs colossaux dont dépend cette approche." },
            { title: "Misez de toutes petites sommes", desc: "Ne risquez pas plus de 0,5 % de votre solde par tour — soit 5 $ pour 1 000 $. Les petites mises vous maintiennent en vie pendant les longues traversées du désert." },
            { title: "Chassez la grosse partie", desc: "Oubliez les petits gains. Visez dix voies ou plus et des multiplicateurs de 25x, 50x, 100x ou davantage." },
            { title: "Fixez un objectif et tenez-le", desc: "Les écrans rouges ne sont que le prix de la chasse — ne les laissez pas vous déstabiliser et ne changez pas votre mise. Décidez de votre sortie avant chaque tour et respectez-la dès que vous l'atteignez." }
          ]
        }
      ]
    }
  },
  es: {
    meta: {
      title: "Chicken Road — Estrategia y Demo Gratis | Juego Crash",
      description: "Domina Chicken Road, el juego crash (el juego de la gallina). Estrategias probadas, demo gratis y tabla de líderes. Retira antes de que sea tarde."
    },
    nav: ["Gameplay", "Clasificación", "Estrategias ganadoras", "FAQ", "Demo"],
    playNow: "Jugar ahora",
    playDemo: "Ver la demo",
    noDownload: "Sin descarga",
    demoLive: "Demo en vivo",
    demoTag: "// Demo en vivo", demoTitle: "Prueba la demo",
    demoDesc: "Chicken Road (también conocido como el juego de la gallina) es un juego crash trepidante de InOut Games con mecánicas sencillas pero adictivas: controlas una gallina que aumenta tu apuesta con cada paso que da por la carretera. Elige entre cuatro niveles de dificultad y juega con un generoso RTP del 98 %. Pruébalo en la demo en vivo de abajo, sin registro y sin riesgo.",
    liveBadge: "En vivo · 3.241 jugadores online",
    heroTitle1: "Cruza la", heroHighlight1: "Calle.",
    heroTitle2: "Reclama el", heroHighlight2: "Premio.",
    heroSub: "Chicken Road, el juego de la gallina: guía a tu pollo a través de carriles ardientes. Cada cruce multiplica tu apuesta. Retira antes de que el calor te alcance — o atrévete a ir más lejos.",
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
    finalCta: "🐔 Jugar ahora",
    disclaimer: "18+ · Juega con responsabilidad · Se aplican T&C",
    footerRight: "🔒 SSL Seguro · Juego justo comprobable",
    partnersLabel: "Nuestros socios",
    partnersTitle: "Creado con socios líderes del sector",
    partnersText: "Chicken Road funciona con la tecnología de InOut Games y se desarrolla junto a los nombres más confiables del iGaming. Cada socio que aparece a continuación aporta motores de juego certificados, tecnología provably fair y la infraestructura segura que mantiene cada cruce rápido, transparente y fiable.",
    footerLinks: "© 2026 Chicken road. Todos los derechos reservados. · Privacidad · Términos · Soporte",
    faqTag: "// Preguntas y respuestas", faqTitle: "FAQ",
    authorTag: "// Detrás del juego", authorTitle: "Sobre el autor",
    authorRole: "Growth & Product · Midnite · Londres, Reino Unido",
    authorBio: "Soy Ryan Murton, y este es mi proyecto. Con mentalidad comercial y experiencia en Growth/Digital Marketing y producto, llevo años en el sector del iGaming — afincado en Londres y trabajando en Midnite. Creé este recurso para compartir todo lo que he aprendido sobre los juegos crash, las estrategias de apuestas y cómo funcionan realmente juegos como Chicken Road, con un enfoque práctico y basado en datos en el que de verdad puedes confiar.",
    authorLink: "Ver perfil en LinkedIn",
    faqItems: [
      { q: "¿Cuál es el depósito mínimo para empezar a jugar?", a: "Puedes recargar tu cuenta con cualquier importe a partir de solo 1 $, así que no necesitas comprometer un gran saldo para empezar." },
      { q: "¿Cuál es el RTP (retorno al jugador) de Chicken road?", a: "Chicken road funciona con un alto RTP del 98 %, uno de los más generosos entre los juegos crash, y se mantiene en el 98 % en todos los niveles de dificultad. A largo plazo, eso significa que el 98 % de las apuestas vuelve a los jugadores." },
      { q: "¿Cómo retiro mis ganancias?", a: "Retirar es rápido y flexible. Puedes hacerlo con cualquiera de los métodos de pago populares en Europa y EE. UU.: Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay y transferencia bancaria SEPA." },
      { q: "¿Cómo funciona realmente el juego?", a: "Guías a una gallina por una carretera transitada, un carril a la vez. Cada carril cruzado aumenta tu multiplicador; pulsa CASH OUT cuando quieras para asegurar tus ganancias, pero si atrapan a la gallina antes, pierdes la ronda." },
      { q: "¿Hay diferentes niveles de dificultad?", a: "Sí, hay cuatro modos: Fácil, Medio, Difícil y Hardcore. A mayor dificultad, menos carriles seguros pero multiplicadores potenciales mucho mayores, mientras que el RTP se mantiene en el 98 % en cada modo." },
      { q: "¿Es Chicken road justo y seguro?", a: "Cada ronda usa un sistema provably fair (de equidad comprobable) de InOut Games, por lo que cada resultado se genera de forma aleatoria y se puede verificar de manera independiente. Ni el jugador ni el operador pueden predecir o influir en dónde se detiene la gallina." },
      { q: "¿Necesito descargar una app o instalar algo?", a: "No. Chicken road se ejecuta directamente en tu navegador, tanto en ordenador como en móvil: sin tiendas de apps, sin complementos y sin instalaciones. Solo abre la página y juega." },
      { q: "¿Puedo probar el juego antes de apostar dinero real?", a: "Por supuesto. Usa la demo en vivo de más arriba para familiarizarte con las mecánicas y los modos de dificultad sin riesgo, y luego pasa al juego con dinero real cuando quieras." }
    ],
    strat: {
      tag: "// Estrategias por niveles",
      title: "Estrategias ganadoras",
      levels: [
        {
          tier: "Nivel 01", name: "El grindeo de dos pasos", risk: "Riesgo bajo",
          intro: "Una rutina de base pensada para principiantes y para quien hace crecer su saldo con calma. Se apoya en las altas probabilidades de las primeras jugadas y se mantiene lejos de los carriles lejanos arriesgados, donde se vienen abajo la mayoría de las partidas. Lento, constante y hecho para durar.",
          steps: [
            { title: "Fija el modo Fácil", desc: "Quédate en la dificultad «Fácil» y no la cambies nunca. Precisamente la menor frecuencia de trampas es lo que hace que esta rutina sea matemáticamente viable." },
            { title: "Mantén una apuesta fija", desc: "Apuesta un 1% exacto de tu saldo en cada ronda: 1 $ con un saldo de 100 $, 5 $ con 500 $. La misma cantidad, ronda tras ronda." },
            { title: "Avanza dos carriles", desc: "Ni más, ni menos. Cruzar exactamente dos carriles es donde reside toda la ventaja de este método." },
            { title: "Cobra en ~1,2x–1,3x", desc: "Tras dos carriles, el multiplicador suele quedar en este rango. Cóbralo al instante y repite con los mismos ajustes, sin dudarlo." }
          ]
        },
        {
          tier: "Nivel 02", name: "El cambiador de marchas", risk: "Riesgo medio",
          intro: "Un paso adelante calculado que solo arriesga las ganancias, nunca tu depósito inicial. Las apuestas mayores se financian únicamente con el beneficio, y en cuanto una partida revienta reduces de marcha al instante para recuperar el control, como con una caja de cambios manual.",
          steps: [
            { title: "Arranca en primera", desc: "Empieza con tu apuesta base usando el grindeo de dos pasos: modo Fácil, dos carriles, cobrar. Sigue grindeando hasta acumular unos 10 $ de beneficio puro." },
            { title: "Sube a segunda", desc: "Ahora apuesta solo esos 10 $ de beneficio. Cambia a dificultad Media, ve a por cuatro o cinco carriles y apunta a un 2x–3x. ¿Pierdes el beneficio? Vuelve de inmediato a primera." },
            { title: "Mete tercera", desc: "Entra aquí solo cuando el beneficio se haya duplicado hasta unos 20 $. Sube la apuesta, mantente en Media y busca cinco o seis carriles para un 3x–5x. Cualquier pérdida grande te devuelve atrás." },
            { title: "No te saltes ninguna marcha", desc: "Sube siempre marcha a marcha y reduce en cuanto una partida salga mal. Saltar hacia delante con tu capital base es apostar, no una estrategia." }
          ]
        },
        {
          tier: "Nivel 03", name: "El cazador hardcore", risk: "Riesgo alto",
          intro: "Juego de pura volatilidad para jugadores curtidos. Cuenta con perder ronda tras ronda —rachas de veinte fracasos seguidos son normales—, pero un solo cruce profundo puede devolver todas las pérdidas y dejarte muy por encima. La paciencia es supervivencia.",
          steps: [
            { title: "Sube la dificultad", desc: "Juega solo en Difícil o Hardcore. La dificultad Media sencillamente no genera los multiplicadores colosales de los que depende este enfoque." },
            { title: "Apuesta cantidades mínimas", desc: "No arriesgues más del 0,5% de tu saldo por ronda: solo 5 $ con un saldo de 1.000 $. Las apuestas pequeñas son lo que te mantiene vivo durante las largas sequías." },
            { title: "Caza la gran partida", desc: "Olvídate de las ganancias pequeñas. Ve a por diez o más carriles y apunta a multiplicadores de 25x, 50x, 100x o más." },
            { title: "Fija un objetivo y mantenlo", desc: "Las pantallas rojas son solo el precio de la caza; no dejes que te alteren ni cambies tu apuesta. Decide tu salida antes de cada ronda y respétala en cuanto la alcances." }
          ]
        }
      ]
    }
  },
  pt: {
    meta: {
      title: "Chicken Road — Estratégia e Demo Grátis | Jogo da Galinha",
      description: "Domine o Chicken Road, o jogo crash (jogo da galinha). Estratégias que funcionam, demo grátis e ranking. Saque antes que a galinha queime."
    },
    nav: ["Gameplay", "Classificação", "Estratégias vencedoras", "FAQ", "Demo"],
    playNow: "Jogar agora",
    playDemo: "Ver a demo",
    noDownload: "Sem download",
    demoLive: "Demo ao vivo",
    demoTag: "// Demo ao vivo", demoTitle: "Experimente a demo",
    demoDesc: "Chicken Road (também conhecido como jogo da galinha) é um jogo crash dinâmico da InOut Games com mecânicas simples, mas viciantes: você controla uma galinha que aumenta sua aposta a cada passo pela estrada. Escolha entre quatro níveis de dificuldade e jogue com um generoso RTP de 98%. Experimente na demo ao vivo abaixo — sem cadastro e sem risco.",
    liveBadge: "Ao vivo · 3.241 jogadores online",
    heroTitle1: "Atravessa a", heroHighlight1: "Estrada.",
    heroTitle2: "Conquista o", heroHighlight2: "Prémio.",
    heroSub: "Chicken Road, o jogo da galinha: guia o teu frango pelas faixas em chamas. Cada travessia multiplica a tua aposta. Levanta antes que o calor te apanhe — ou arrisca ir mais longe.",
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
    finalCta: "🐔 Jogar agora",
    disclaimer: "18+ · Joga com responsabilidade · T&C aplicam-se",
    footerRight: "🔒 SSL Seguro · Jogo comprovadamente justo",
    partnersLabel: "Nossos parceiros",
    partnersTitle: "Desenvolvido com parceiros líderes do setor",
    partnersText: "O Chicken Road funciona com a tecnologia da InOut Games e é desenvolvido ao lado dos nomes mais confiáveis do iGaming. Cada parceiro abaixo fornece motores de jogo certificados, tecnologia provably fair e a infraestrutura segura que mantém cada travessia rápida, transparente e confiável.",
    footerLinks: "© 2026 Chicken road. Todos os direitos reservados. · Privacidade · Termos · Suporte",
    faqTag: "// Perguntas e respostas", faqTitle: "FAQ",
    authorTag: "// Por trás do jogo", authorTitle: "Sobre o autor",
    authorRole: "Growth & Product · Midnite · Londres, Reino Unido",
    authorBio: "Sou Ryan Murton, e este é o meu projeto. Com mentalidade comercial e experiência em Growth/Digital Marketing e produto, estou há anos no universo do iGaming — morando em Londres e trabalhando na Midnite. Criei este recurso para compartilhar tudo o que aprendi sobre jogos crash, estratégias de apostas e como jogos como o Chicken Road realmente funcionam, com uma abordagem prática e orientada por dados em que você pode realmente confiar.",
    authorLink: "Ver perfil no LinkedIn",
    faqItems: [
      { q: "Qual é o depósito mínimo para começar a jogar?", a: "Você pode abastecer sua conta com qualquer valor a partir de apenas $1, então não precisa comprometer um saldo grande para começar." },
      { q: "Qual é o RTP (retorno ao jogador) do Chicken road?", a: "O Chicken road funciona com um RTP alto de 98% — um dos mais generosos entre os jogos crash — e permanece em 98% em todos os níveis de dificuldade. A longo prazo, isso significa que 98% das apostas voltam aos jogadores." },
      { q: "Como faço para sacar meus ganhos?", a: "O saque é rápido e flexível. Você pode sacar por qualquer um dos meios de pagamento populares na Europa e nos EUA — Visa, Mastercard, Maestro, PayPal, Skrill, Neteller, Trustly, Paysafecard, Apple Pay, Google Pay e transferência bancária SEPA." },
      { q: "Como o jogo funciona de verdade?", a: "Você guia uma galinha por uma estrada movimentada, uma faixa de cada vez. Cada faixa atravessada aumenta seu multiplicador — toque em CASH OUT quando quiser para garantir os ganhos, mas se a galinha for atropelada antes, a rodada é perdida." },
      { q: "Existem diferentes níveis de dificuldade?", a: "Sim — são quatro modos: Fácil, Médio, Difícil e Hardcore. Quanto maior a dificuldade, menos faixas seguras, mas multiplicadores potenciais muito maiores, enquanto o RTP permanece em 98% em todos os modos." },
      { q: "O Chicken road é justo e seguro?", a: "Cada rodada usa um sistema provably fair (de justiça comprovável) da InOut Games, então cada resultado é gerado aleatoriamente e pode ser verificado de forma independente. Nem o jogador nem o operador conseguem prever ou influenciar onde a galinha para." },
      { q: "Preciso baixar um aplicativo ou instalar algo?", a: "Não. O Chicken road roda direto no navegador, no computador e no celular — sem loja de aplicativos, sem plugins e sem instalações. É só abrir a página e jogar." },
      { q: "Posso testar o jogo antes de apostar dinheiro real?", a: "Claro. Use a demo ao vivo mais acima na página para conhecer as mecânicas e os modos de dificuldade sem risco e depois mude para o jogo com dinheiro real quando estiver pronto." }
    ],
    strat: {
      tag: "// Estratégias por nível",
      title: "Estratégias vencedoras",
      levels: [
        {
          tier: "Nível 01", name: "O grind de dois passos", risk: "Risco baixo",
          intro: "Uma rotina de base pensada para iniciantes e para quem faz o saldo crescer com calma. Ela se apoia nas boas probabilidades das primeiras jogadas e fica longe das faixas distantes arriscadas, onde a maioria das partidas desmorona. Lenta, constante e feita para durar.",
          steps: [
            { title: "Fixe o modo Fácil", desc: "Fique na dificuldade «Fácil» e nunca mude. É justamente a menor frequência de armadilhas que torna esta rotina matematicamente viável." },
            { title: "Mantenha uma aposta fixa", desc: "Aposte exatos 1% do seu saldo a cada rodada — 1 $ com saldo de 100 $, 5 $ com 500 $. O mesmo valor, rodada após rodada." },
            { title: "Avance duas faixas", desc: "Nem mais, nem menos. Cruzar exatamente duas faixas é onde mora toda a vantagem deste método." },
            { title: "Saque em ~1,2x–1,3x", desc: "Após duas faixas, o multiplicador costuma ficar nessa faixa. Saque na hora e repita com os mesmos ajustes — sem hesitar." }
          ]
        },
        {
          tier: "Nível 02", name: "O trocador de marchas", risk: "Risco médio",
          intro: "Um passo adiante calculado que só arrisca os ganhos, nunca o seu depósito inicial. As apostas maiores são financiadas apenas pelo lucro e, assim que uma partida estoura, você reduz a marcha na hora para retomar o controle — como num câmbio manual.",
          steps: [
            { title: "Comece na primeira marcha", desc: "Comece com sua aposta base usando o grind de dois passos: modo Fácil, duas faixas, sacar. Continue até acumular cerca de 10 $ de lucro puro." },
            { title: "Suba para a segunda", desc: "Agora aposte apenas esses 10 $ de lucro. Mude para a dificuldade Média, vá atrás de quatro ou cinco faixas e mire um 2x–3x. Perdeu o lucro? Volte já para a primeira marcha." },
            { title: "Engate a terceira", desc: "Entre aqui só quando o lucro tiver dobrado para cerca de 20 $. Aumente a aposta, fique na Média e busque cinco ou seis faixas para um 3x–5x. Qualquer perda grande te joga para trás." },
            { title: "Nunca pule uma marcha", desc: "Suba sempre marcha por marcha e reduza assim que uma partida der errado. Saltar para a frente com seu capital base é jogo de azar, não estratégia." }
          ]
        },
        {
          tier: "Nível 03", name: "O caçador hardcore", risk: "Risco alto",
          intro: "Jogo de pura volatilidade para jogadores de nervos de aço. Espere perder rodada após rodada — sequências de vinte fracassos seguidos são normais —, mas uma única travessia profunda pode pagar todas as perdas e ainda deixar você bem à frente. Paciência é sobrevivência.",
          steps: [
            { title: "Aumente a dificuldade", desc: "Jogue apenas no Difícil ou Hardcore. A dificuldade Média simplesmente não gera os multiplicadores gigantescos dos quais esta abordagem depende." },
            { title: "Aposte valores mínimos", desc: "Não arrisque mais que 0,5% do seu saldo por rodada — apenas 5 $ com saldo de 1.000 $. As apostas pequenas é que mantêm você vivo durante as longas secas." },
            { title: "Cace a grande partida", desc: "Esqueça os ganhos pequenos. Vá atrás de dez ou mais faixas e mire multiplicadores de 25x, 50x, 100x ou mais." },
            { title: "Defina uma meta e cumpra-a", desc: "Telas vermelhas são só o preço da caçada — não deixe que elas o abalem nem mude sua aposta. Decida sua saída antes de cada rodada e respeite-a assim que chegar nela." }
          ]
        }
      ]
    }
  }
};
