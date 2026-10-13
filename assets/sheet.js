/* Interactive lesson sheet engine.
   Lesson files register themselves in window.LESSONS, then index.html calls SheetEngine.boot().
   Rules followed (see the plan docs): one item per screen, same layout every lesson,
   no sounds, no animation, specific feedback, a wrong answer shows the fact card again
   and repeats the question with the same words. */
(function () {
  "use strict";
  window.LESSONS = window.LESSONS || {};
  var app = null;
  var L = null;          // current lesson
  var mem = null;        // per-device memory for the current lesson
  var S = null;          // current sitting run
  var timer = null;
  var reward = null;

  /* ---------- icons (simple line drawings, colour from the theme) ---------- */
  var ICONS = {
    internet: '<path d="M18 46h29a11 11 0 0 0 1-22 15 15 0 0 0-28-4A12 12 0 0 0 18 46z"/>',
    modem: '<rect x="14" y="24" width="36" height="26" rx="4"/><path d="M42 24V10"/><circle cx="22" cy="42" r="2" fill="currentColor"/><circle cx="30" cy="42" r="2" fill="currentColor"/><circle cx="38" cy="42" r="2" fill="currentColor"/>',
    router: '<rect x="8" y="34" width="48" height="14" rx="4"/><path d="M18 34V14M32 34V10M46 34V14M16 41h4M24 41h4"/>',
    "switch": '<rect x="6" y="24" width="52" height="18" rx="3"/><path d="M12 33h4M20 33h4M28 33h4M36 33h4M44 33h4"/>',
    desktop: '<rect x="10" y="12" width="44" height="30" rx="3"/><path d="M26 52h12M32 42v10"/>',
    tablet: '<rect x="16" y="8" width="32" height="48" rx="4"/><path d="M29 50h6"/>',
    phone: '<rect x="22" y="10" width="20" height="44" rx="4"/><path d="M30 48h4"/>',
    laptop: '<rect x="14" y="14" width="36" height="24" rx="2"/><path d="M8 46h48l-4-8H12z"/>',
    printer: '<rect x="12" y="26" width="40" height="18" rx="3"/><path d="M20 26V12h24v14M20 38h24v14H20z"/>',
    wifi: '<path d="M12 28a28 28 0 0 1 40 0M19 35a18 18 0 0 1 26 0M26 42a8 8 0 0 1 12 0"/><circle cx="32" cy="49" r="2.5" fill="currentColor"/>',
    cable: '<path d="M6 50c12 0 14-12 24-12h8"/><rect x="38" y="30" width="12" height="16" rx="2"/><path d="M50 34h6M50 42h6"/>',
    network: '<circle cx="32" cy="14" r="6"/><circle cx="14" cy="48" r="6"/><circle cx="50" cy="48" r="6"/><path d="M29 19 17 43M35 19l12 24M20 48h24"/>',
    ai: '<rect x="18" y="18" width="28" height="28" rx="4"/><path d="M24 10v8M32 10v8M40 10v8M24 46v8M32 46v8M40 46v8M10 24h8M10 32h8M10 40h8M46 24h8M46 32h8M46 40h8"/><text x="32" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor" stroke="none" font-family="sans-serif">AI</text>',
    vr: '<rect x="8" y="22" width="48" height="22" rx="8"/><circle cx="22" cy="33" r="5"/><circle cx="42" cy="33" r="5"/><path d="M27 33h10"/>',
    ar: '<rect x="20" y="8" width="24" height="48" rx="4"/><path d="M32 22l8 4v8l-8 4-8-4v-8zM32 30v8M24 26l8 4 8-4"/>',
    person: '<circle cx="32" cy="18" r="8"/><path d="M14 54c0-10 8-18 18-18s18 8 18 18"/>',
    magnifier: '<circle cx="27" cy="27" r="14"/><path d="M37 37l15 15"/>',
    ear: '<path d="M22 26a12 12 0 1 1 22 7c-3 5-8 6-8 13a6 6 0 0 1-12 0"/><path d="M28 26a5 5 0 0 1 10 0"/>',
    speech: '<path d="M10 14h44v28H30l-12 10V42h-8z"/><path d="M20 24h24M20 32h16"/>',
    glove: '<path d="M20 54V28l-6-8a3 3 0 0 1 5-4l5 6V12a3 3 0 0 1 6 0v12V8a3 3 0 0 1 6 0v16V11a3 3 0 0 1 6 0v15-9a3 3 0 0 1 6 0v21c0 9-6 16-16 16z"/>',
    copy: '<rect x="20" y="20" width="30" height="34" rx="3"/><path d="M14 44V12a2 2 0 0 1 2-2h26"/>',
    search: '<circle cx="27" cy="27" r="14"/><path d="M37 37l15 15M20 27h14"/>',
    database: '<ellipse cx="32" cy="14" rx="18" ry="6"/><path d="M14 14v36c0 3 8 6 18 6s18-3 18-6V14M14 26c0 3 8 6 18 6s18-3 18-6M14 38c0 3 8 6 18 6s18-3 18-6"/>',
    library: '<path d="M8 22 32 10l24 12zM12 22v26M22 22v26M32 22v26M42 22v26M52 22v26M8 52h48"/>',
    window: '<rect x="8" y="12" width="48" height="40" rx="3"/><path d="M8 22h48M14 17h2M20 17h2"/>',
    robot: '<rect x="16" y="20" width="32" height="26" rx="4"/><path d="M32 20v-8M26 12h12"/><circle cx="25" cy="31" r="3"/><circle cx="39" cy="31" r="3"/><path d="M25 40h14M10 30v8M54 30v8"/>',
    car: '<path d="M10 40l6-14h32l6 14v8H10z"/><circle cx="20" cy="48" r="4"/><circle cx="44" cy="48" r="4"/><path d="M18 34h28"/>',
    code: '<path d="M22 20 10 32l12 12M42 20l12 12-12 12M36 14 28 50"/>',
    tag: '<path d="M10 32 22 18h22a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H22z"/><circle cx="24" cy="32" r="3"/>',
    game: '<path d="M20 22h24a12 12 0 0 1 12 12v4a8 8 0 0 1-14 5l-3-3H25l-3 3a8 8 0 0 1-14-5v-4a12 12 0 0 1 12-12z"/><path d="M20 30v8M16 34h8"/><circle cx="42" cy="31" r="2" fill="currentColor"/><circle cx="46" cy="37" r="2" fill="currentColor"/>',
    snack: '<path d="M16 22h32l-4 32H20z"/><path d="M14 22h36M30 22l4-14"/>',
    body: '<circle cx="32" cy="12" r="6"/><path d="M32 18v20M18 26h28M32 38l-10 16M32 38l10 16"/>',
    heart: '<path d="M32 52S10 38 10 24a11 11 0 0 1 22-4 11 11 0 0 1 22 4c0 14-22 28-22 28z"/>',
    shield: '<path d="M32 8l20 8v14c0 12-8 20-20 26-12-6-20-14-20-26V16z"/>',
    lock: '<rect x="14" y="28" width="36" height="26" rx="4"/><path d="M22 28v-8a10 10 0 0 1 20 0v8"/><circle cx="32" cy="41" r="3"/>',
    key: '<circle cx="20" cy="32" r="10"/><path d="M30 32h24M46 32v8M54 32v6"/>',
    fingerprint: '<path d="M18 40c-2-14 4-24 14-24s16 10 14 24M24 46c-2-6-2-14 2-18s10-2 12 4c2 6 0 12 0 18M32 34v18"/>',
    face: '<rect x="12" y="10" width="40" height="44" rx="8"/><circle cx="25" cy="27" r="2" fill="currentColor"/><circle cx="39" cy="27" r="2" fill="currentColor"/><path d="M24 40c4 4 12 4 16 0"/>',
    virus: '<circle cx="32" cy="32" r="12"/><path d="M32 8v12M32 44v12M8 32h12M44 32h12M15 15l8 8M41 41l8 8M15 49l8-8M41 23l8-8"/>',
    mail: '<rect x="8" y="16" width="48" height="32" rx="3"/><path d="M8 18l24 18 24-18"/>',
    link: '<path d="M26 38l12-12M22 30l-6 6a8 8 0 0 0 12 12l6-6M42 34l6-6a8 8 0 0 0-12-12l-6 6"/>',
    copyright: '<circle cx="32" cy="32" r="22"/><path d="M40 24a10 10 0 1 0 0 16"/>',
    coins: '<ellipse cx="26" cy="20" rx="14" ry="6"/><path d="M12 20v10c0 3 6 6 14 6s14-3 14-6V20M12 30v10c0 3 6 6 14 6"/><ellipse cx="40" cy="40" rx="14" ry="6"/><path d="M26 40v8c0 3 6 6 14 6s14-3 14-6v-8"/>',
    chart: '<path d="M10 52h44M14 44l12-14 10 8 16-20"/><path d="M44 18h8v8"/>',
    cloud: '<path d="M18 46h29a11 11 0 0 0 1-22 15 15 0 0 0-28-4A12 12 0 0 0 18 46z"/><path d="M32 40V28M26 33l6-6 6 6"/>',
    folder: '<path d="M8 18h18l4 6h26v26H8z"/>',
    file: '<path d="M16 8h22l10 10v38H16z"/><path d="M38 8v10h10M22 30h20M22 38h20M22 46h12"/>',
    image: '<rect x="8" y="12" width="48" height="40" rx="3"/><circle cx="22" cy="26" r="4"/><path d="M8 46l14-12 10 8 10-10 14 14"/>',
    video: '<rect x="8" y="16" width="34" height="32" rx="3"/><path d="M42 26l14-8v28l-14-8z"/>',
    music: '<path d="M24 46V16l26-6v30"/><circle cx="18" cy="46" r="6"/><circle cx="44" cy="40" r="6"/>',
    upload: '<path d="M32 40V12M22 22l10-10 10 10M12 40v12h40V40"/>',
    share: '<circle cx="46" cy="16" r="6"/><circle cx="18" cy="32" r="6"/><circle cx="46" cy="48" r="6"/><path d="M23 29l18-10M23 35l18 10"/>',
    doc: '<path d="M16 8h22l10 10v38H16z"/><text x="32" y="44" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor" stroke="none" font-family="sans-serif">W</text>',
    slides: '<rect x="8" y="12" width="48" height="32" rx="3"/><path d="M32 44v8M22 52h20M18 22h28M18 30h18"/>',
    bits: '<text x="32" y="40" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor" stroke="none" font-family="monospace">0101</text>',
    harddrive: '<rect x="10" y="16" width="44" height="32" rx="4"/><path d="M10 38h44"/><circle cx="46" cy="43" r="2" fill="currentColor"/>',
    flash: '<rect x="20" y="22" width="24" height="34" rx="4"/><rect x="24" y="8" width="16" height="14"/><path d="M28 13h2M34 13h2"/>',
    hdmi: '<path d="M14 24h36l-6 14H20z"/><path d="M32 38v18"/>',
    bluetooth: '<path d="M22 22l20 20-10 10V12l10 10-20 20"/>',
    home: '<path d="M10 30 32 12l22 18M16 26v26h32V26"/><path d="M27 52V38h10v14"/>',
    cart: '<path d="M8 12h8l6 28h28l6-20H18"/><circle cx="26" cy="50" r="4"/><circle cx="46" cy="50" r="4"/>',
    wrench: '<path d="M40 10a12 12 0 0 0-14 16L10 42a5 5 0 0 0 7 7l16-16a12 12 0 0 0 16-14l-7 7-7-2-2-7z"/>',
    scanner: '<rect x="8" y="28" width="48" height="18" rx="3"/><path d="M14 28l6-14h30M14 38h30"/>',
    grid: '<rect x="8" y="10" width="48" height="44" rx="2"/><path d="M8 22h48M8 34h48M8 46h48M22 10v44M38 10v44"/>',
    hook: '<path d="M38 8v28a12 12 0 0 1-24 0v-4l6 4"/><circle cx="38" cy="8" r="2" fill="currentColor"/>',
    warning: '<path d="M32 8l26 46H6z"/><path d="M32 24v14"/><circle cx="32" cy="45" r="2" fill="currentColor"/>',
    note: '<path d="M14 10h28l8 8v36H14z"/><path d="M20 26h24M20 34h24M20 42h14"/>',
    quote: '<path d="M14 40c0-12 4-18 12-22l2 4c-4 2-6 6-6 10h6v12H14zM36 40c0-12 4-18 12-22l2 4c-4 2-6 6-6 10h6v12H36z"/>',
    list: '<path d="M22 16h32M22 32h32M22 48h32"/><circle cx="12" cy="16" r="3"/><circle cx="12" cy="32" r="3"/><circle cx="12" cy="48" r="3"/>',
    tick: '<path d="M14 34l12 12 24-26"/>',
    cross: '<path d="M18 18l28 28M46 18 18 46"/>',
    camera: '<rect x="8" y="20" width="48" height="32" rx="4"/><circle cx="32" cy="36" r="9"/><path d="M22 20l4-6h12l4 6"/>',
    plan: '<rect x="12" y="10" width="40" height="44" rx="4"/><path d="M20 22h24M20 32h24M20 42h16"/>',
    firstthen: '<rect x="6" y="20" width="22" height="24" rx="3"/><rect x="36" y="20" width="22" height="24" rx="3"/><path d="M28 32h8"/>',
    book: '<path d="M32 16c-6-4-14-4-20-2v34c6-2 14-2 20 2 6-4 14-4 20-2V14c-6-2-14-2-20 2zM32 16v34"/>',
    blocks: '<rect x="10" y="32" width="20" height="20"/><rect x="34" y="32" width="20" height="20"/><rect x="22" y="10" width="20" height="20"/>',
    checkbox: '<rect x="10" y="10" width="44" height="44" rx="6"/><path d="M20 33l8 8 16-18"/>',
    star: '<path d="M32 10l6.5 14 15 1.5-11.5 10 3.5 15L32 43l-13.5 7.5 3.5-15-11.5-10 15-1.5z"/>',
    surprise: '<rect x="10" y="10" width="44" height="44" rx="6"/><path d="M25 25a7 7 0 1 1 10 6c-2 1-3 3-3 5"/><circle cx="32" cy="44" r="2" fill="currentColor"/>',
    isp: '<path d="M12 54V18h22v36M34 26h18v28M8 54h48M18 26h4M24 26h4M18 34h4M24 34h4M18 42h4M24 42h4M40 34h6M40 42h6"/>'
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 64 64" aria-hidden="true">' + (ICONS[name] || ICONS.file) + "</svg>";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function plain(s) { return String(s).replace(/\*\*/g, ""); }

  /* Optional binder diagrams. Existing lessons keep their usual card layout. */
  function figures(f) {
    var items = f.figures || (f.figure ? [f.figure] : []);
    return items.map(function (pic) {
      return '<figure class="lesson-figure"><img src="' + esc(pic.src) + '" alt="' + esc(pic.alt || "Binder diagram") + '" decoding="async">' +
        (pic.caption ? '<figcaption>' + esc(pic.caption) + '</figcaption>' : '') + '</figure>';
    }).join("");
  }

  /* ---------- per-device memory (convenience only; the sheet works without it) ---------- */
  function key(id) { return "begoodboy:" + id; }
  function load(id) { try { return JSON.parse(localStorage.getItem(key(id))) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(key(L.id), JSON.stringify(mem)); } catch (e) { /* storage blocked */ } }

  var PARTS = [
    { name: "Plan", icon: "plan" }, { name: "First-Then", icon: "firstthen" }, { name: "Learn", icon: "book" },
    { name: "Do", icon: "blocks" }, { name: "Check", icon: "checkbox" }, { name: "Done", icon: "star" }
  ];

  function factById(id) {
    for (var i = 0; i < L.facts.length; i++) if (L.facts[i].id === id) return L.facts[i];
    return null;
  }

  /* ---------- frame: header + strip + card ---------- */
  function partDone(p) {
    if (!S) return false;
    if (S.ticked[p]) return true;
    for (var n in mem.done) {
      if (!mem.done[n]) continue;
      var sit = L.sittings[Number(n) - 1];
      if (sit && sit.parts.indexOf(p) !== -1 && p > 2) return true;
    }
    return false;
  }
  function frame(inner, part) {
    var strip = PARTS.map(function (pt, i) {
      var p = i + 1;
      var done = partDone(p);
      var cls = done ? "done" : (p === part ? "now" : "");
      return '<li class="' + cls + '">' + icon(pt.icon) + "<span>" + pt.name + '</span><span class="box">' + (done ? icon("tick") : "") + '</span><span class="sr">' + (done ? "done" : "not done yet") + "</span></li>";
    }).join("");
    var mins = S ? Math.floor((Date.now() - S.start) / 60000) : 0;
    var meta = esc(L.child) + " · " + esc(L.where) + (S ? ' · <span id="clock">Minute ' + (mins + 1) + " of " + L.sittingMinutes + "</span>" : "");
    app.setAttribute("dir", L.dir || "ltr");
    app.innerHTML =
      '<div class="wrap"><header class="top"><h1>' + esc(L.title) + '</h1><span class="meta">' + meta + "</span></header>" +
      '<ol class="strip" aria-label="Schedule">' + strip + "</ol>" +
      '<main class="card" id="card">' + inner + '</main><div class="sr" aria-live="polite" id="live"></div></div>';
    var first = document.querySelector("#card h2");
    if (first) { first.setAttribute("tabindex", "-1"); first.focus({ preventScroll: true }); }
    window.scrollTo(0, 0);
  }
  function say(msg) { var l = document.getElementById("live"); if (l) l.textContent = msg; }
  function on(id, fn) { var el = document.getElementById(id); if (el) el.addEventListener("click", fn); }
  function $(id) { return document.getElementById(id); }

  /* ---------- home page: every lesson ---------- */
  function home() {
    stopTimer();
    L = null; S = null;
    app.setAttribute("dir", "ltr");
    if (location.hash) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { /* ignore */ } }
    var groups = {};
    var order = [];
    Object.keys(window.LESSONS).forEach(function (id) {
      var x = window.LESSONS[id];
      var g = x.child + " · " + x.grade + " · " + (x.subject || "ICT");
      if (!groups[g]) { groups[g] = []; order.push(g); }
      groups[g].push(x);
    });
    var html = order.map(function (g) {
      var list = groups[g].slice().sort(function (a, b) { return a.order - b.order; });
      var tiles = list.map(function (x) {
        var m = load(x.id);
        var done = 0;
        for (var n in (m.done || {})) if (m.done[n]) done++;
        return '<a class="tile lesson" href="#' + x.id + '"><span class="eyebrow">' + esc(x.where) + "</span><span><b>" + esc(x.title) + "</b></span>" +
          '<span class="progress">' + done + " of " + x.sittings.length + " sittings done</span></a>";
      }).join("");
      return '<section class="card" dir="' + (list[0].dir || "ltr") + '"><h2>' + esc(g) + '</h2><div class="tiles">' + tiles + "</div></section>";
    }).join("");
    app.innerHTML = '<div class="wrap"><header class="top"><h1>Lesson sheets</h1><span class="meta">Choose a lesson</span></header>' + html + "</div>";
    window.scrollTo(0, 0);
  }

  function open(id) {
    var x = window.LESSONS[id];
    if (!x) { home(); return; }
    L = x;
    mem = load(L.id);
    mem.done = mem.done || {};
    mem.stats = mem.stats || {};
    reward = L.rewards[0];
    if (mem.reward) L.rewards.forEach(function (r) { if (r.id === mem.reward) reward = r; });
    startPage();
  }

  /* ---------- lesson start page ---------- */
  function startPage() {
    S = null;
    stopTimer();
    var sits = L.sittings.map(function (s, i) {
      var n = i + 1;
      return '<button class="tile" id="sit-' + n + '">' + icon(s.icon) + "<span><b>Sitting " + n + "</b><br>" + esc(s.label) + "</span>" +
        (mem.done[n] ? '<span class="eyebrow">Done</span>' : "") + "</button>";
    }).join("");
    var rewards = L.rewards.map(function (r) {
      return '<button class="tile" id="rw-' + r.id + '" aria-pressed="' + (r.id === reward.id) + '">' + icon(r.icon) + "<span>" + esc(r.label) + "</span></button>";
    }).join("");
    var notes = L.parentNotes.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("");
    var refs = L.references && L.references.length ? '<details class="source-pages"><summary>See the original book pages</summary>' + figures({ figures: L.references }) + '</details>' : '';
    frame(
      '<p class="eyebrow">' + esc(L.where) + "</p><h2>" + esc(L.title) + "</h2>" +
      "<p>Choose the sitting for today.</p><div class=\"tiles\">" + sits + "</div>" +
      "<p>Choose the reward for the Then box.</p><div class=\"tiles\">" + rewards + "</div>" +
      '<details class="parent-notes"><summary>Notes for the parent</summary><ul>' + notes + "</ul></details>" +
      refs +
      '<div class="row"><button id="surprise">Show the surprise card</button><a class="btn" href="#">Go to all lessons</a></div>',
      1
    );
    L.sittings.forEach(function (s, i) { on("sit-" + (i + 1), function () { begin(i + 1); }); });
    L.rewards.forEach(function (r) {
      on("rw-" + r.id, function () { reward = r; mem.reward = r.id; save(); startPage(); });
    });
    on("surprise", surprisePage);
  }
  function surprisePage() {
    frame('<div class="fact">' + icon("surprise", "big-ic") + '<div class="lines"><h2>Surprise</h2><p>Today something is different.</p><p>Your parent will tell you what it is.</p></div></div>' +
      '<div class="row end"><button class="primary" id="back">Go back to the lesson page</button></div>', 1);
    on("back", startPage);
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

  /* ---------- a sitting ---------- */
  function begin(n) {
    var sit = L.sittings[n - 1];
    var screens = [{ type: "firstthen" }];
    sit.screens.forEach(function (sc) {
      if (sc.type === "fact") {
        screens.push({ type: "fact", id: sc.id });
        var f = factById(sc.id);
        if (f && f.pick) screens.push({ type: "pick", id: sc.id });
      } else screens.push(sc);
    });
    screens.push({ type: "sittingdone" });
    S = { n: n, sit: sit, screens: screens, i: 0, start: Date.now(), right: 0, total: 0, ticked: { 1: true }, firstTry: true, seen: {} };
    stopTimer();
    timer = setInterval(function () {
      var c = $("clock");
      if (c && S) c.textContent = "Minute " + (Math.floor((Date.now() - S.start) / 60000) + 1) + " of " + L.sittingMinutes;
    }, 15000);
    show();
  }
  function partOf(sc) {
    if (sc.type === "firstthen") return 2;
    if (sc.type === "fact" || sc.type === "pick") return 3;
    if ((sc.type === "tf" || sc.type === "mcq" || sc.type === "recall" || sc.type === "multi") && !sc.practice) return 5;
    if (sc.type === "sittingdone") return S.sit.parts.indexOf(6) !== -1 ? 6 : S.sit.parts[S.sit.parts.length - 1];
    return 4;
  }
  function next() {
    var cur = partOf(S.screens[S.i]);
    S.i++;
    var nxt = S.screens[S.i] ? partOf(S.screens[S.i]) : 7;
    if (nxt !== cur) S.ticked[cur] = true;
    S.firstTry = true;
    show();
  }
  function show() {
    var sc = S.screens[S.i];
    RENDER[sc.type](sc, partOf(sc));
  }
  function nextLabel() {
    var n = S.screens[S.i + 1];
    if (!n || n.type === "sittingdone") return "Finish";
    if (n.type === "tf" || n.type === "mcq") return n.practice ? "Show the next step" : "Show the next question";
    if (n.type === "fact") return "Show the next card";
    return "Show the next step";
  }

  var RENDER = {
    firstthen: function (sc, part) {
      frame('<h2>First, then</h2><div class="ft"><div><span class="eyebrow">First</span>' + icon(S.sit.icon, "big-ic") +
        '<span class="label">' + esc(S.sit.label) + '</span></div><div class="then"><span class="eyebrow">Then</span>' + icon(reward.icon, "big-ic") +
        '<span class="label">' + esc(reward.label) + "</span></div></div>" +
        '<p class="parent">Parent: point to First, then to Then, and say the two names.</p>' +
        '<div class="row end"><button class="primary" id="go">Start</button></div>', part);
      on("go", next);
    },

    fact: function (sc, part, again) {
      var f = factById(sc.id);
      var lines = f.lines.map(function (t) { return "<p>" + md(t) + "</p>"; }).join("");
      frame((again ? '<p class="eyebrow">Look at this card again</p>' : '<p class="eyebrow">Card</p>') +
        '<div class="fact">' + icon(f.icon, "big-ic") + '<div class="lines"><h2>' + esc(f.term) + "</h2>" + lines + "</div></div>" + figures(f) +
        '<p class="parent">Parent: read the card aloud. Wait 10 seconds before the next step.</p>' +
        '<div class="row end"><button class="primary" id="go">' + (again ? "Try the question again" : "Show the next step") + "</button></div>", part);
      on("go", again ? show : next);
    },

    pick: function (sc, part) {
      var f = factById(sc.id);
      var opts = f.pick.options.map(function (o, k) {
        return '<button class="tile" id="opt-' + k + '">' + icon(o.icon) + "<span>" + esc(o.label) + "</span></button>";
      }).join("");
      frame('<p class="eyebrow">Point and tap</p><h2>' + esc(f.pick.prompt) + '</h2><div class="tiles">' + opts + '</div><div id="fb"></div>' +
        '<p class="parent">Parent: wait 10 seconds. If you repeat, use the same words.</p>', part);
      f.pick.options.forEach(function (o, k) {
        on("opt-" + k, function () {
          if (k === f.pick.answer) {
            $("opt-" + k).classList.add("right");
            $("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(f.pick.right) + '</div><div class="row end gap-top"><button class="primary" id="go">' + nextLabel() + "</button></div>";
            say("Yes. " + plain(f.pick.right));
            on("go", next);
          } else {
            RENDER.fact({ id: sc.id }, part, true);
          }
        });
      });
    },

    tf: function (sc, part) { question(sc, part, [{ label: "True", icon: "tick" }, { label: "False", icon: "cross" }], sc.answer === null ? null : (sc.answer ? 0 : 1)); },
    mcq: function (sc, part) {
      question(sc, part, sc.options.map(function (o, k) { return { label: String.fromCharCode(97 + k) + ". " + o, icon: null, fill: o }; }), sc.answer);
    },
    recall: function (sc, part) { recall(sc, part); },
    multi: function (sc, part) { multiple(sc, part); },

    sort: function (sc, part) { placer(sc, part, false); },
    photosort: function (sc, part) { placer(sc, part, true); },
    builder: function (sc, part) { builder(sc, part); },
    steps: function (sc, part) { steps(sc, part); },
    textpractice: function (sc, part) { textpractice(sc, part); },
    htmleditor: function (sc, part) { htmleditor(sc, part); },
    grid: function (sc, part) { grid(sc, part); },
    trade: function (sc, part) { trade(sc, part); },

    sittingdone: function (sc, part) {
      S.ticked[part] = true;
      var minutes = Math.max(1, Math.round((Date.now() - S.start) / 60000));
      mem.done[S.n] = true;
      var last = S.n === L.sittings.length;
      var stats;
      var day = new Date().toISOString().slice(0, 10);
      if (S.total > 0) {
        mem.stats["sitting" + S.n] = { right: S.right, total: S.total, minutes: minutes, date: day };
        stats = '<div class="stats"><div>Right the first time<b>' + S.right + " of " + S.total + "</b></div><div>Minutes to finish<b>" + minutes + "</b></div></div>";
      } else {
        mem.stats["sitting" + S.n] = { minutes: minutes, date: day };
        stats = '<div class="stats"><div>Minutes to finish<b>' + minutes + "</b></div></div>";
      }
      save();
      stopTimer();
      frame('<p class="eyebrow">' + (last ? "Lesson done" : "Sitting " + S.n + " done") + "</p><h2>You finished: " + esc(S.sit.label) + "</h2>" +
        '<div class="ft"><div>' + icon("star", "big-ic") + '<span class="label">All done for now</span></div><div class="then"><span class="eyebrow">Now</span>' +
        icon(reward.icon, "big-ic") + '<span class="label">' + esc(reward.label) + "</span></div></div>" + stats +
        (S.sit.parts.indexOf(5) !== -1 && L.homework ? '<p class="parent">' + md(L.homework) + "</p>" : "") +
        '<p class="parent">Parent: give the reward now, every time.</p>' +
        '<div class="row end">' + (last ? "" : '<button id="nextsit">Start sitting ' + (S.n + 1) + " later or now</button>") +
        '<button class="primary" id="go">Go back to the lesson page</button></div>', part);
      var n = S.n;
      on("nextsit", function () { begin(n + 1); });
      on("go", startPage);
    }
  };

  /* ---------- questions (booklet check, and practice questions inside activities) ---------- */
  function question(sc, part, opts, answer) {
    var scored = !sc.practice && answer !== null && answer !== undefined;
    if (scored && !S.seen[S.i]) { S.seen[S.i] = true; S.total++; }
    var blankIndex = 0, targetBlank = sc.blankIndex || 0;
    var stem = esc(sc.stem).replace(/_{3,}/g, function () {
      var current = blankIndex++ === targetBlank;
      return '<span class="blank' + (current ? ' current' : '') + '"' + (current ? ' id="blank"' : '') + '>&nbsp;</span>';
    });
    var tiles = opts.map(function (o, k) {
      return '<button class="tile" id="opt-' + k + '">' + (o.icon ? icon(o.icon) : "") + "<span>" + esc(o.label) + "</span></button>";
    }).join("");
    var bank = sc.bank ? '<p class="bank">Words: ' + sc.bank.map(esc).join(" · ") + "</p>" : "";
    frame('<p class="eyebrow">' + esc(sc.kind) + '</p><h2 class="stem">' + stem + "</h2>" + bank +
      "<p>" + (L.answerHint || "Say your answer. Then tap it.") + "</p>" +
      '<div class="tiles">' + tiles + '</div><div id="fb"></div>' +
      '<p class="parent">Parent: read it aloud. Wait 10 seconds. If you repeat, use the same words.</p>', part);
    function finish(k, text) {
      var b = $("blank");
      if (b && opts[k].fill && answer !== null && answer !== undefined) b.textContent = opts[k].fill;
      $("opt-" + k).classList.add(answer === null ? "chosen" : "right");
      opts.forEach(function (_, j) { $("opt-" + j).disabled = true; });
      $("fb").innerHTML = '<div class="feedback">' + text + '</div><div class="row end gap-top"><button class="primary" id="go">' + nextLabel() + "</button></div>";
      say(plain(text.replace(/<[^>]+>/g, "")));
      on("go", next);
    }
    opts.forEach(function (o, k) {
      on("opt-" + k, function () {
        if (answer === null || answer === undefined) {
          finish(k, "<strong>Noted.</strong> The answer to this question is not written in the booklet. " +
            "Parent: check this answer with the teacher. It does not count in the score.");
          return;
        }
        if (k === answer) {
          if (scored && S.firstTry) S.right++;
          finish(k, "<strong>Yes.</strong> " + md(sc.right));
        } else {
          S.firstTry = false;
          if (sc.fact) RENDER.fact({ id: sc.fact }, part, true);
          else { $("fb").innerHTML = '<div class="feedback">' + md(sc.hint || "Look again and try another answer.") + "</div>"; say(plain(sc.hint || "Try another answer.")); }
        }
      });
    });
  }

  /* ---------- move-a-card engine: tap a card then tap its place, or drag it ---------- */
  function recall(sc, part) {
    if (!S.seen[S.i]) { S.seen[S.i] = true; S.total++; }
    frame('<p class="eyebrow">' + esc(sc.kind) + '</p><h2 class="stem">' + esc(sc.stem) + '</h2>' +
      '<p>Say your answer first.</p><p class="parent">Parent: listen before showing the answer. Check the meaning, not the exact words.</p>' +
      '<button class="primary" id="reveal">Show the answer</button><div id="fb"></div>', part);
    on("reveal", function () {
      $("reveal").disabled = true;
      $("fb").innerHTML = '<div class="feedback">' + md(sc.answer) + '</div><p class="parent">Parent: compare this with the answer Murad said.</p>' +
        '<div class="row"><button class="primary" id="matched">Parent: answer matched</button><button id="retry">Practise again</button></div>';
      on("matched", function () {
        if (S.firstTry) S.right++;
        $("fb").innerHTML = '<div class="feedback"><strong>Checked.</strong> ' + md(sc.answer) + '</div><div class="row end"><button class="primary" id="go">' + nextLabel() + '</button></div>';
        on("go", next);
      });
      on("retry", function () { S.firstTry = false; RENDER.fact({ id: sc.fact }, part, true); });
    });
  }
  function multiple(sc, part) {
    var selected = {};
    if (!S.seen[S.i]) { S.seen[S.i] = true; S.total++; }
    var tiles = sc.options.map(function (option, index) {
      return '<button class="tile" id="opt-' + index + '" aria-pressed="false">' + esc(String.fromCharCode(65 + index) + '. ' + option) + '</button>';
    }).join('');
    frame('<p class="eyebrow">' + esc(sc.kind) + '</p><h2 class="stem">' + esc(sc.stem) + '</h2>' +
      '<p>Say your answers. Tap every correct answer.</p><div class="tiles">' + tiles + '</div><button class="primary" id="answer">Check these answers</button><div id="fb"></div>', part);
    sc.options.forEach(function (_, index) { on('opt-' + index, function () { selected[index] = !selected[index]; $('opt-' + index).setAttribute('aria-pressed', String(selected[index])); }); });
    on('answer', function () {
      var correct = sc.options.every(function (_, index) { return !!selected[index] === (sc.answer.indexOf(index) !== -1); });
      if (!correct) { S.firstTry = false; RENDER.fact({ id: sc.fact }, part, true); return; }
      if (S.firstTry) S.right++;
      $('answer').disabled = true;
      sc.options.forEach(function (_, index) { $('opt-' + index).disabled = true; });
      $('fb').innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(sc.right) + '</div><div class="row end"><button class="primary" id="go">' + nextLabel() + '</button></div>';
      on('go', next);
    });
  }

  function makeMovable(root, onDrop) {
    var selected = null;
    var lastDrag = 0;
    function clearSel() { if (selected) selected.classList.remove("selected"); selected = null; }
    root.addEventListener("click", function (e) {
      if (Date.now() - lastDrag < 400) return; // the click that ends a drag
      var t = e.target.closest("[data-target]");
      var c = e.target.closest(".chip[data-card]");
      if (c && !c.classList.contains("placed")) {
        if (selected === c) { clearSel(); return; }
        clearSel(); selected = c; c.classList.add("selected");
        say("Picked " + c.textContent.trim() + ". Now tap where it goes.");
        return;
      }
      if (t && selected) { var id = selected.getAttribute("data-card"); clearSel(); onDrop(id, t.getAttribute("data-target")); }
    });
    var drag = null;
    root.addEventListener("pointerdown", function (e) {
      var c = e.target.closest(".chip[data-card]");
      if (!c || c.classList.contains("placed") || (e.pointerType === "mouse" && e.button !== 0)) return;
      drag = { c: c, x: e.clientX, y: e.clientY, moved: false, ghost: null, id: e.pointerId };
    });
    root.addEventListener("pointermove", function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 10) {
        drag.moved = true;
        try { drag.c.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        var r = drag.c.getBoundingClientRect();
        drag.ghost = drag.c.cloneNode(true);
        drag.ghost.classList.add("ghost");
        drag.ghost.style.width = r.width + "px";
        drag.offX = drag.x - r.left; drag.offY = drag.y - r.top;
        document.body.appendChild(drag.ghost);
      }
      if (drag.moved) {
        drag.ghost.style.left = (e.clientX - drag.offX) + "px";
        drag.ghost.style.top = (e.clientY - drag.offY) + "px";
        var under = document.elementFromPoint(e.clientX, e.clientY);
        root.querySelectorAll(".target-hot").forEach(function (el) { el.classList.remove("target-hot"); });
        var t = under && under.closest("[data-target]");
        if (t) t.classList.add("target-hot");
      }
    });
    function end(e) {
      if (!drag || e.pointerId !== drag.id) return;
      var d = drag; drag = null;
      root.querySelectorAll(".target-hot").forEach(function (el) { el.classList.remove("target-hot"); });
      if (!d.moved) return; // a tap: the click handler selects it
      lastDrag = Date.now();
      if (d.ghost) d.ghost.remove();
      var under = document.elementFromPoint(e.clientX, e.clientY);
      var t = under && under.closest("[data-target]");
      clearSel();
      if (t) onDrop(d.c.getAttribute("data-card"), t.getAttribute("data-target"));
    }
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", function () { if (drag && drag.ghost) drag.ghost.remove(); drag = null; });
  }
  function chip(id, label, ic, img) {
    return '<button class="chip" data-card="' + esc(id) + '">' + (img ? '<img alt="" src="' + img + '">' : (ic ? icon(ic) : "")) + "<span>" + esc(label) + "</span></button>";
  }
  function shuffle(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function stepsList(sc) {
    return (sc.steps && sc.type !== "steps") ? "<ol class=\"howto\">" + sc.steps.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ol>" : "";
  }

  /* sort (fixed answers; also used for matching and for putting steps in order)
     and photosort (real-device photos, the parent checks) */
  function placer(sc, part, photo) {
    var cards = photo ? [] : sc.cards.map(function (c, k) { return { id: "c" + k, label: c.label, icon: c.icon, box: c.box }; });
    var placed = 0;
    var boxes = sc.boxes.map(function (b) {
      return '<div class="dropbox" data-target="' + b.id + '"><h3>' + (b.icon ? icon(b.icon) : "") + md(b.label) + '</h3><div class="list" id="list-' + b.id + '"></div></div>';
    }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind) + "</p><h2>" + esc(sc.title) + "</h2>" + (sc.intro ? "<p>" + md(sc.intro) + "</p>" : "") +
      stepsList(sc) +
      (photo ? '<div class="row"><label class="btn primary" for="photo-in">Take a photo of a device</label>' +
        '<input type="file" id="photo-in" accept="image/*" capture="environment" class="sr"></div>' : "") +
      "<p>Tap a card, then tap its box. You can also drag it.</p>" +
      '<div class="tray" id="tray" data-target="tray">' + shuffle(cards).map(function (c) { return chip(c.id, c.label, c.icon); }).join("") + "</div>" +
      '<div class="boxes' + (sc.boxes.length > 3 ? " many" : "") + '">' + boxes + '</div><div id="fb"></div>' +
      '<p class="parent">' + md(sc.parent || "Parent: read each card aloud before it is moved.") + "</p>" +
      '<div class="row end">' + (photo ? '<button id="skip">Skip the photos today</button><button class="primary" id="go" hidden>Parent: checked. Show the next step</button>' :
        '<button class="primary" id="go" hidden>' + nextLabel() + "</button>") + "</div>", part);
    var card = $("card");
    var count = 0;
    if (photo) {
      var input = $("photo-in");
      input.addEventListener("change", function () {
        var f = input.files && input.files[0];
        if (!f) return;
        if (count >= (sc.maxPhotos || 4)) { say("That is enough photos."); return; }
        count++;
        var url = URL.createObjectURL(f);
        var c = { id: "p" + count, label: "Photo " + count, img: url };
        cards.push(c);
        $("tray").insertAdjacentHTML("beforeend", chip(c.id, c.label, null, url));
        input.value = "";
        $("go").hidden = true; // the new photo still has to be sorted
        say("Photo " + count + " added. Tap it, then tap its box.");
      });
      on("skip", next);
    }
    makeMovable(card, function (id, target) {
      if (target === "tray") return;
      var c = null;
      cards.forEach(function (x) { if (x.id === id) c = x; });
      if (!c) return;
      var el = card.querySelector('.chip[data-card="' + id + '"]');
      if (photo || c.box === target) {
        el.classList.add("placed");
        $("list-" + target).appendChild(el);
        placed++;
        var bl = ""; sc.boxes.forEach(function (b) { if (b.id === target) bl = plain(b.label); });
        $("fb").innerHTML = photo ? "" : '<div class="feedback"><strong>Yes.</strong> ' + esc(c.label) + " goes in " + esc(bl) + ".</div>";
        say(c.label + " is in " + bl + ".");
        if (photo ? placed === count && count > 0 : placed === cards.length) {
          $("go").hidden = false;
          if (!photo) $("fb").innerHTML = '<div class="feedback"><strong>All done.</strong> ' + md(sc.done) + "</div>";
        }
      } else {
        $("fb").innerHTML = '<div class="feedback">' + md(sc.hint) + "</div>";
        say(plain(sc.hint));
      }
    });
    on("go", next);
  }

  /* chain builder: put each device in its place on the booklet's network picture */
  function builder(sc, part) {
    var filled = {};
    var devSlots = sc.deviceSlots || 3;
    function slot(id) { return '<div class="slot" data-target="' + id + '" id="slot-' + id + '"><span class="slot-label">Empty place</span></div>'; }
    var chain = sc.chain.map(function (c, k) { return slot(c.id) + '<div class="wire" id="w' + k + '"></div>'; }).join("");
    var row = ""; for (var d = 1; d <= devSlots; d++) row += slot("dev" + d);
    frame('<p class="eyebrow">' + esc(sc.kind) + "</p><h2>" + esc(sc.title) + "</h2><p>" + md(sc.intro) + "</p>" +
      "<p>Tap a picture, then tap its place. You can also drag it.</p>" +
      '<div class="tray" id="tray">' + shuffle(sc.cards).map(function (c) { return chip(c.id, c.label, c.icon); }).join("") + "</div>" +
      '<div class="net">' + chain + '<div class="devrow" id="devrow">' + row + "</div></div>" +
      '<div id="fb"></div><p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="help">Show the names of the places</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    var card = $("card");
    on("help", function () {
      sc.chain.forEach(function (c) { var l = document.querySelector("#slot-" + c.id + " .slot-label"); if (l) l.textContent = c.label; });
      for (var k = 1; k <= devSlots; k++) { var l = document.querySelector("#slot-dev" + k + " .slot-label"); if (l) l.textContent = "A device"; }
      $("help").hidden = true;
    });
    var total = sc.chain.length + devSlots;
    makeMovable(card, function (id, target) {
      if (filled[target]) return;
      var ok = (target === id) || (target.indexOf("dev") === 0 && sc.devices.indexOf(id) !== -1);
      var el = card.querySelector('.chip[data-card="' + id + '"]');
      if (!ok) {
        var h = sc.hints[id] || sc.hints.any;
        $("fb").innerHTML = '<div class="feedback">' + md(h) + "</div>";
        say(plain(h));
        return;
      }
      filled[target] = id;
      var s = $("slot-" + target);
      s.innerHTML = ""; s.classList.add("filled");
      el.classList.add("placed"); s.appendChild(el);
      sc.chain.forEach(function (c, k) {
        var below = sc.chain[k + 1];
        var lit = below ? (filled[c.id] && filled[below.id]) : (filled[c.id] && Object.keys(filled).some(function (t) { return t.indexOf("dev") === 0; }));
        if (lit) $("w" + k).classList.add("on");
      });
      if (filled[sc.chain[sc.chain.length - 1].id] && Object.keys(filled).some(function (t) { return t.indexOf("dev") === 0; })) $("devrow").classList.add("on");
      $("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(sc.right[id]) + "</div>";
      say(plain(sc.right[id]));
      if (Object.keys(filled).length === total) {
        $("fb").innerHTML = '<div class="feedback"><strong>Built.</strong> ' + md(sc.done) + "</div>";
        $("go").hidden = false;
        $("help").hidden = true;
      }
    });
    on("go", next);
  }

  /* real-device checklist: the child does each step on the tablet or laptop and taps Done */
  function steps(sc, part) {
    var rows = sc.steps.map(function (t, k) {
      return '<li class="steprow"><span>' + md(t) + '</span><button id="st-' + k + '" aria-pressed="false">Done</button></li>';
    }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind || "Real device") + "</p><h2>" + esc(sc.title) + "</h2>" +
      '<div class="fact">' + icon(sc.icon || "tablet", "big-ic") + '<div class="lines">' + (sc.intro ? "<p>" + md(sc.intro) + "</p>" : "") +
      (sc.device ? '<p class="eyebrow">Use: ' + esc(sc.device) + "</p>" : "") + "</div></div>" +
      '<ol class="steps">' + rows + '</ol><div id="fb"></div>' +
      '<p class="parent">' + md(sc.parent || "Parent: stay beside the child for real-device steps.") + "</p>" +
      '<div class="row end"><button id="skip">' + (sc.skipLabel || "Skip this today") + '</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    var done = 0;
    sc.steps.forEach(function (_, k) {
      on("st-" + k, function () {
        var b = $("st-" + k);
        if (b.getAttribute("aria-pressed") === "true") return;
        b.setAttribute("aria-pressed", "true"); b.textContent = "Done ✓"; b.classList.add("right");
        done++;
        say("Step " + (k + 1) + " done.");
        if (done === sc.steps.length) {
          $("go").hidden = false; $("skip").hidden = true;
          $("fb").innerHTML = '<div class="feedback"><strong>All steps done.</strong> ' + md(sc.done || "Well done.") + "</div>";
        }
      });
    });
    on("skip", next);
    on("go", next);
  }

  /* copy and paste practice: works on the tablet and the laptop */
  function textpractice(sc, part) {
    frame('<p class="eyebrow">' + esc(sc.kind || "Real device") + "</p><h2>" + esc(sc.title) + "</h2>" + stepsList(sc) +
      '<p class="source" id="src">' + esc(sc.sentence) + "</p>" +
      '<label for="paste-box">Paste it here</label><textarea id="paste-box" rows="3"></textarea><div id="fb"></div>' +
      '<p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="skip">Skip this today</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    var box = $("paste-box");
    function check() {
      var v = box.value.replace(/\s+/g, " ").trim().toLowerCase();
      if (v.indexOf(sc.sentence.replace(/\s+/g, " ").trim().toLowerCase()) !== -1) {
        $("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(sc.done) + "</div>";
        $("go").hidden = false; $("skip").hidden = true;
        say(plain(sc.done));
      }
    }
    box.addEventListener("input", check);
    on("skip", next);
    on("go", next);
  }

  /* HTML editor: type tags on the left, see the page underneath. Only safe tags are shown. */
  var SAFE = { H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1, P: 1, A: 1, I: 1, EM: 1, STRONG: 1, B: 1, BR: 1, U: 1, FONT: 1 };
  function cleanCopy(node, out) {
    node.childNodes.forEach(function (n) {
      if (n.nodeType === 3) { out.appendChild(document.createTextNode(n.textContent)); return; }
      if (n.nodeType !== 1) return;
      if (SAFE[n.tagName]) {
        var el = document.createElement(n.tagName === "FONT" ? "span" : n.tagName);
        if (n.tagName === "A") {
          var href = n.getAttribute("href") || "";
          if (/^https?:\/\//i.test(href)) { el.setAttribute("href", href); el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
        }
        if (n.tagName === "FONT" && n.getAttribute("color")) el.style.color = n.getAttribute("color").replace(/[^a-z#0-9]/gi, "");
        cleanCopy(n, el);
        out.appendChild(el);
      } else cleanCopy(n, out);
    });
  }
  function htmleditor(sc, part) {
    var tasks = sc.tasks.map(function (t, k) { return '<li id="tk-' + k + '">' + md(t.label) + "</li>"; }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind || "Make") + "</p><h2>" + esc(sc.title) + "</h2><p>" + md(sc.intro) + "</p>" +
      '<ol class="tasks">' + tasks + "</ol>" +
      '<label for="html-in">Your HTML</label><textarea id="html-in" rows="8" spellcheck="false" autocapitalize="off" autocomplete="off">' + esc(sc.starter || "") + "</textarea>" +
      '<p class="eyebrow">Your web page</p><div class="preview" id="preview"></div><div id="fb"></div>' +
      '<p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="skip">Skip this today</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    var input = $("html-in");
    function render() {
      var doc = new DOMParser().parseFromString("<body>" + input.value + "</body>", "text/html");
      var out = document.createElement("div");
      cleanCopy(doc.body, out);
      var pv = $("preview"); pv.innerHTML = ""; pv.appendChild(out);
      var all = true;
      sc.tasks.forEach(function (t, k) {
        var ok = new RegExp(t.test, "i").test(input.value);
        $("tk-" + k).classList.toggle("ok", ok);
        if (!ok) all = false;
      });
      if (all) {
        $("go").hidden = false; $("skip").hidden = true;
        $("fb").innerHTML = '<div class="feedback"><strong>Your page works.</strong> ' + md(sc.done) + "</div>";
      }
    }
    input.addEventListener("input", render);
    render();
    on("skip", next);
    on("go", next);
  }

  /* spreadsheet grid: cells, a formula bar, formulas with + - * / and a Data, Sort button */
  function evalFormula(f, get) {
    var src = f.replace(/^=/, "").replace(/\s+/g, "").toUpperCase();
    var pos = 0;
    function peek() { return src[pos]; }
    function num() {
      var m = /^([A-Z][0-9]+|[0-9]+(\.[0-9]+)?)/.exec(src.slice(pos));
      if (!m) throw new Error("bad");
      pos += m[0].length;
      if (/^[A-Z]/.test(m[0])) { var v = parseFloat(get(m[0])); if (isNaN(v)) throw new Error("text"); return v; }
      return parseFloat(m[0]);
    }
    function factor() {
      if (peek() === "(") { pos++; var v = expr(); if (peek() !== ")") throw new Error("bad"); pos++; return v; }
      if (peek() === "-") { pos++; return -factor(); }
      return num();
    }
    function term() { var v = factor(); while (peek() === "*" || peek() === "/") { var op = src[pos++]; var r = factor(); v = op === "*" ? v * r : v / r; } return v; }
    function expr() { var v = term(); while (peek() === "+" || peek() === "-") { var op = src[pos++]; var r = term(); v = op === "+" ? v + r : v - r; } return v; }
    var v = expr();
    if (pos !== src.length) throw new Error("bad");
    return Math.round(v * 1000) / 1000;
  }
  function grid(sc, part) {
    var raw = {};
    Object.keys(sc.cells || {}).forEach(function (k) { raw[k] = sc.cells[k]; });
    var sel = null;
    function value(ref, depth) {
      var r = raw[ref];
      if (r === undefined || r === "") return "";
      if (String(r).charAt(0) === "=") {
        if ((depth || 0) > 20) return "#ERR";
        try { return evalFormula(String(r), function (x) { var v = value(x, (depth || 0) + 1); return v === "" ? 0 : v; }); } catch (e) { return "#ERR"; }
      }
      return r;
    }
    var head = "<tr><th></th>" + sc.cols.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr>";
    var body = "";
    for (var r = 1; r <= sc.rows; r++) {
      body += "<tr><th>" + r + "</th>" + sc.cols.map(function (c) { return '<td><input class="cell" id="cell-' + c + r + '" data-ref="' + c + r + '" aria-label="Cell ' + c + r + '"></td>'; }).join("") + "</tr>";
    }
    var tasks = sc.tasks.map(function (t, k) { return '<li id="tk-' + k + '">' + md(t.label) + "</li>"; }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind || "Do") + "</p><h2>" + esc(sc.title) + "</h2><p>" + md(sc.intro) + "</p>" +
      '<ol class="tasks">' + tasks + "</ol>" +
      '<div class="ribbon"><span class="tab">Home</span><span class="tab">Insert</span><button class="tab" id="data-tab" aria-expanded="false">Data</button><span class="tab">View</span>' +
      '<button id="sort-btn" hidden>Sort A to Z</button></div>' +
      '<div class="fbar"><span id="fref">Cell</span><input id="formula" aria-label="Formula bar" placeholder="Click a cell, then type here or in the cell"></div>' +
      '<div class="gridwrap"><table class="sheet"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>" +
      '<div id="fb"></div><p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="skip">Skip this today</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    function paint() {
      document.querySelectorAll(".cell").forEach(function (inp) {
        var ref = inp.getAttribute("data-ref");
        if (document.activeElement !== inp) inp.value = value(ref);
      });
      var all = true;
      sc.tasks.forEach(function (t, k) {
        var ok = t.check(raw, value);
        $("tk-" + k).classList.toggle("ok", ok);
        if (!ok) all = false;
      });
      if (all) {
        $("go").hidden = false; $("skip").hidden = true;
        $("fb").innerHTML = '<div class="feedback"><strong>All tasks done.</strong> ' + md(sc.done) + "</div>";
      }
    }
    document.querySelectorAll(".cell").forEach(function (inp) {
      var ref = inp.getAttribute("data-ref");
      inp.addEventListener("focus", function () { sel = ref; $("fref").textContent = ref; inp.value = raw[ref] || ""; $("formula").value = raw[ref] || ""; });
      inp.addEventListener("input", function () { $("formula").value = inp.value; });
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { inp.blur(); } });
      inp.addEventListener("blur", function () { raw[ref] = inp.value.trim(); paint(); });
    });
    $("formula").addEventListener("keydown", function (e) {
      if (e.key === "Enter" && sel) { raw[sel] = $("formula").value.trim(); paint(); }
    });
    $("formula").addEventListener("change", function () { if (sel) { raw[sel] = $("formula").value.trim(); paint(); } });
    on("data-tab", function () { var b = $("sort-btn"); b.hidden = !b.hidden; $("data-tab").setAttribute("aria-expanded", String(!b.hidden)); });
    on("sort-btn", function () {
      var s = sc.sort;
      var vals = [];
      for (var r = s.from; r <= s.to; r++) vals.push(raw[s.col + r] || "");
      vals.sort(function (a, b) { return String(a).localeCompare(String(b)); });
      for (var q = s.from; q <= s.to; q++) raw[s.col + q] = vals[q - s.from];
      paint();
      say("The list is sorted from A to Z.");
    });
    paint();
    on("skip", next);
    on("go", next);
  }

  /* share trading game with pretend coins: first through a broker, then by yourself in an app */
  function trade(sc, part) {
    var coins = sc.coins, shares = 0, viaBroker = false, viaApp = false, sold = false, waiting = false;
    frame('<p class="eyebrow">' + esc(sc.kind || "Game") + "</p><h2>" + esc(sc.title) + "</h2><p>" + md(sc.intro) + "</p>" +
      '<div class="stats"><div>Pretend coins<b id="coins"></b></div><div>Shares of ' + esc(sc.company) + '<b id="shares"></b></div><div>Price of 1 share<b>' + sc.price + "</b></div></div>" +
      '<ol class="tasks"><li id="tk-0">Buy 1 share by asking the <strong>broker</strong>.</li><li id="tk-1">Buy 1 share by yourself in the <strong>e-trading app</strong>.</li><li id="tk-2">Sell 1 share in the app.</li></ol>' +
      '<div class="row"><button id="broker">Ask the broker to buy 1 share</button><button id="app-buy">Buy 1 share in the app</button><button id="app-sell">Sell 1 share in the app</button></div>' +
      '<div id="broker-wait" hidden class="feedback">The broker is buying your share. <button id="broker-done">Parent (the broker): tap when done</button></div>' +
      '<div id="fb"></div><p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="skip">Skip this today</button><button class="primary" id="go" hidden>' + nextLabel() + "</button></div>", part);
    function paint(msg) {
      $("coins").textContent = coins; $("shares").textContent = shares;
      $("tk-0").classList.toggle("ok", viaBroker); $("tk-1").classList.toggle("ok", viaApp); $("tk-2").classList.toggle("ok", sold);
      if (msg) { $("fb").innerHTML = '<div class="feedback">' + md(msg) + "</div>"; say(plain(msg)); }
      if (viaBroker && viaApp && sold) { $("go").hidden = false; $("skip").hidden = true; $("fb").innerHTML = '<div class="feedback"><strong>Done.</strong> ' + md(sc.done) + "</div>"; }
    }
    on("broker", function () {
      if (waiting) return;
      if (coins < sc.price) { paint("You need more coins first. Sell a share."); return; }
      waiting = true; $("broker-wait").hidden = false;
    });
    on("broker-done", function () {
      waiting = false; $("broker-wait").hidden = true;
      coins -= sc.price; shares++; viaBroker = true;
      paint("The **broker** bought 1 share for you. You had to wait for the broker.");
    });
    on("app-buy", function () {
      if (coins < sc.price) { paint("You need more coins first. Sell a share."); return; }
      coins -= sc.price; shares++; viaApp = true;
      paint("You bought 1 share **by yourself** in the e-trading app. No waiting.");
    });
    on("app-sell", function () {
      if (shares < 1) { paint("You have no shares to sell yet. Buy one first."); return; }
      coins += sc.price; shares--; sold = true;
      paint("You sold 1 share in the app and got your coins back.");
    });
    paint();
    on("skip", next);
    on("go", next);
  }

  /* ---------- routing ---------- */
  function route() {
    var id = location.hash.replace(/^#/, "");
    if (id && window.LESSONS[id]) open(id); else home();
  }
  window.SheetEngine = {
    boot: function (el) {
      app = el;
      window.addEventListener("hashchange", route);
      route();
    }
  };
})();
