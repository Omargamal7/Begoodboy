/* Interactive lesson sheet engine.
   A lesson file sets window.LESSON, then loads this file.
   Rules followed (see the plan docs): one item per screen, same layout every lesson,
   no sounds, no animation, specific feedback, wrong answer shows the fact card again
   and repeats the question with the same words. */
(function () {
  "use strict";
  var L = window.LESSON;
  var app = document.getElementById("app");
  if (!L || !app) return;

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
    game: '<path d="M20 22h24a12 12 0 0 1 12 12v4a8 8 0 0 1-14 5l-3-3H25l-3 3a8 8 0 0 1-14-5v-4a12 12 0 0 1 12-12z"/><path d="M20 30v8M16 34h8"/><circle cx="42" cy="31" r="2" fill="currentColor"/><circle cx="46" cy="37" r="2" fill="currentColor"/>',
    snack: '<path d="M16 22h32l-4 32H20z"/><path d="M14 22h36M30 22l4-14"/>',
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
    home: '<path d="M10 30 32 12l22 18M16 26v26h32V26"/><path d="M27 52V38h10v14"/>'
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 64 64" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function md(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }

  /* ---------- per-device memory (convenience only; the sheet works without it) ---------- */
  var KEY = "begoodboy:" + L.id;
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
  var mem = load();
  mem.done = mem.done || {};
  mem.stats = mem.stats || {};

  var PARTS = [
    { name: "Plan", icon: "plan" }, { name: "First-Then", icon: "firstthen" }, { name: "Learn", icon: "book" },
    { name: "Do", icon: "blocks" }, { name: "Check", icon: "checkbox" }, { name: "Done", icon: "star" }
  ];

  var S = null; // current sitting run
  var timer = null;
  var reward = L.rewards[0];
  if (mem.reward) L.rewards.forEach(function (r) { if (r.id === mem.reward) reward = r; });

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

  /* ---------- start page ---------- */
  function startPage() {
    S = null;
    if (timer) { clearInterval(timer); timer = null; }
    var sits = L.sittings.map(function (s, i) {
      var n = i + 1;
      return '<button class="tile" id="sit-' + n + '">' + icon(s.icon) + "<span><b>Sitting " + n + "</b><br>" + esc(s.label) + "</span>" +
        (mem.done[n] ? '<span class="eyebrow">Done</span>' : "") + "</button>";
    }).join("");
    var rewards = L.rewards.map(function (r) {
      return '<button class="tile" id="rw-' + r.id + '" aria-pressed="' + (r.id === reward.id) + '">' + icon(r.icon) + "<span>" + esc(r.label) + "</span></button>";
    }).join("");
    var notes = L.parentNotes.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("");
    frame(
      '<p class="eyebrow">' + esc(L.where) + "</p><h2>" + esc(L.title) + "</h2>" +
      "<p>Choose the sitting for today.</p><div class=\"tiles\">" + sits + "</div>" +
      "<p>Choose the reward for the Then box.</p><div class=\"tiles\">" + rewards + "</div>" +
      '<details class="parent-notes"><summary>Notes for the parent</summary><ul>' + notes + "</ul></details>" +
      '<div class="row"><button id="surprise">' + "Show the surprise card</button></div>",
      1
    );
    L.sittings.forEach(function (s, i) { on("sit-" + (i + 1), function () { begin(i + 1); }); });
    L.rewards.forEach(function (r) {
      on("rw-" + r.id, function () { reward = r; mem.reward = r.id; save(mem); startPage(); });
    });
    on("surprise", surprisePage);
  }
  function surprisePage() {
    frame('<div class="fact">' + icon("surprise", "big-ic") + '<div class="lines"><h2>Surprise</h2><p>Today something is different.</p><p>Your parent will tell you what it is.</p></div></div>' +
      '<div class="row end"><button class="primary" id="back">Go back to the start page</button></div>', 1);
    on("back", startPage);
  }

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
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
      var c = document.getElementById("clock");
      if (c && S) c.textContent = "Minute " + (Math.floor((Date.now() - S.start) / 60000) + 1) + " of " + L.sittingMinutes;
    }, 15000);
    show();
  }
  function partOf(sc) {
    if (sc.type === "firstthen") return 2;
    if (sc.type === "fact" || sc.type === "pick") return 3;
    if (sc.type === "tf" || sc.type === "mcq") return 5;
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
    var r = RENDER[sc.type];
    r(sc, partOf(sc));
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
        '<div class="fact">' + icon(f.icon, "big-ic") + '<div class="lines"><h2>' + esc(f.term) + "</h2>" + lines + "</div></div>" +
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
            document.getElementById("opt-" + k).classList.add("right");
            document.getElementById("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(f.pick.right) + '</div><div class="row end" style="margin-top:12px"><button class="primary" id="go">Show the next card</button></div>';
            say("Yes. " + f.pick.right.replace(/\*\*/g, ""));
            on("go", next);
          } else {
            RENDER.fact({ id: sc.id }, part, true);
          }
        });
      });
    },

    tf: function (sc, part) { question(sc, part, [{ label: "True", icon: "tick" }, { label: "False", icon: "cross" }], sc.answer ? 0 : 1); },
    mcq: function (sc, part) {
      question(sc, part, sc.options.map(function (o, k) { return { label: String.fromCharCode(97 + k) + ". " + o, icon: null, fill: o }; }), sc.answer);
    },

    sort: function (sc, part) { placer(sc, part, false); },
    photosort: function (sc, part) { placer(sc, part, true); },
    builder: function (sc, part) { builder(sc, part); },

    sittingdone: function (sc, part) {
      S.ticked[part] = true;
      var minutes = Math.max(1, Math.round((Date.now() - S.start) / 60000));
      mem.done[S.n] = true;
      var last = S.n === L.sittings.length;
      var stats = "";
      if (S.total > 0) {
        mem.stats["sitting" + S.n] = { right: S.right, total: S.total, minutes: minutes, date: new Date().toISOString().slice(0, 10) };
        stats = '<div class="stats"><div>Right the first time<b>' + S.right + " of " + S.total + "</b></div><div>Minutes to finish<b>" + minutes + "</b></div></div>";
      } else {
        mem.stats["sitting" + S.n] = { minutes: minutes, date: new Date().toISOString().slice(0, 10) };
        stats = '<div class="stats"><div>Minutes to finish<b>' + minutes + "</b></div></div>";
      }
      save(mem);
      if (timer) { clearInterval(timer); timer = null; }
      frame('<p class="eyebrow">' + (last ? "Lesson done" : "Sitting " + S.n + " done") + "</p><h2>You finished: " + esc(S.sit.label) + "</h2>" +
        '<div class="ft"><div>' + icon("star", "big-ic") + '<span class="label">All done for now</span></div><div class="then"><span class="eyebrow">Now</span>' +
        icon(reward.icon, "big-ic") + '<span class="label">' + esc(reward.label) + "</span></div></div>" + stats +
        (last && L.homework ? '<p class="parent">' + md(L.homework) + "</p>" : "") +
        '<p class="parent">Parent: give the reward now, every time.</p>' +
        '<div class="row end"><button class="primary" id="go">Go back to the start page</button></div>', part);
      on("go", startPage);
    }
  };

  /* ---------- booklet questions ---------- */
  function question(sc, part, opts, answer) {
    if (!S.seen[S.i]) { S.seen[S.i] = true; S.total++; }
    var stem = esc(sc.stem).replace(/_{3,}/, '<span class="blank" id="blank">&nbsp;</span>');
    var tiles = opts.map(function (o, k) {
      return '<button class="tile" id="opt-' + k + '">' + (o.icon ? icon(o.icon) : "") + "<span>" + esc(o.label) + "</span></button>";
    }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind) + '</p><h2 class="stem">' + stem + "</h2>" +
      "<p>Say your answer. Then tap it.</p>" +
      '<div class="tiles">' + tiles + '</div><div id="fb"></div>' +
      '<p class="parent">Parent: read it aloud. Wait 10 seconds. If you repeat, use the same words.</p>', part);
    opts.forEach(function (o, k) {
      on("opt-" + k, function () {
        if (k === answer) {
          if (S.firstTry) S.right++;
          var b = document.getElementById("blank");
          if (b && o.fill) b.textContent = o.fill;
          document.getElementById("opt-" + k).classList.add("right");
          opts.forEach(function (_, j) { document.getElementById("opt-" + j).disabled = true; });
          var isLast = S.screens[S.i + 1] && S.screens[S.i + 1].type === "sittingdone";
          document.getElementById("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(sc.right) + '</div><div class="row end" style="margin-top:12px"><button class="primary" id="go">' + (isLast ? "Finish" : "Show the next question") + "</button></div>";
          say("Yes. " + sc.right.replace(/\*\*/g, ""));
          on("go", next);
        } else {
          S.firstTry = false;
          RENDER.fact({ id: sc.fact }, part, true);
        }
      });
    });
  }

  /* ---------- move-a-card engine: tap a card then tap its place, or drag it ---------- */
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
    root.addEventListener("pointercancel", function (e) { if (drag && drag.ghost) drag.ghost.remove(); drag = null; });
  }
  function chip(id, label, ic, img) {
    return '<button class="chip" data-card="' + esc(id) + '">' + (img ? '<img alt="" src="' + img + '">' : icon(ic)) + "<span>" + esc(label) + "</span></button>";
  }

  /* sort (fixed answers) and photosort (real-device photos, parent checks) */
  function placer(sc, part, photo) {
    var cards = photo ? [] : sc.cards.map(function (c, k) { return { id: "c" + k, label: c.label, icon: c.icon, box: c.box }; });
    var placed = 0;
    var boxes = sc.boxes.map(function (b) {
      return '<div class="dropbox" data-target="' + b.id + '"><h3>' + icon(b.icon) + esc(b.label) + '</h3><div class="list" id="list-' + b.id + '"></div></div>';
    }).join("");
    var steps = (sc.steps || []).map(function (t, k) { return "<li>" + md(t) + "</li>"; }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind) + "</p><h2>" + esc(sc.title) + "</h2>" +
      (steps ? "<ol>" + steps + "</ol>" : "") +
      (photo ? '<div class="row"><label class="btn primary" for="photo-in">' + "Take a photo of a device</label>" +
        '<input type="file" id="photo-in" accept="image/*" capture="environment" class="sr"></div>' : "") +
      "<p>Tap a card, then tap its box. You can also drag it.</p>" +
      '<div class="tray" id="tray" data-target="tray">' + cards.map(function (c) { return chip(c.id, c.label, c.icon); }).join("") + "</div>" +
      '<div class="boxes">' + boxes + '</div><div id="fb"></div>' +
      '<p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end">' + (photo ? '<button id="skip">Skip the photos today</button><button class="primary" id="go" hidden>Parent: checked. Show the next step</button>' :
        '<button class="primary" id="go" hidden>Show the next step</button>') + "</div>", part);
    var card = document.getElementById("card");
    var count = 0;
    if (photo) {
      var input = document.getElementById("photo-in");
      input.addEventListener("change", function () {
        var f = input.files && input.files[0];
        if (!f) return;
        if (count >= (sc.maxPhotos || 4)) { say("That is enough photos."); return; }
        count++;
        var url = URL.createObjectURL(f);
        var c = { id: "p" + count, label: "Photo " + count, img: url };
        cards.push(c);
        document.getElementById("tray").insertAdjacentHTML("beforeend", chip(c.id, c.label, null, url));
        input.value = "";
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
        document.getElementById("list-" + target).appendChild(el);
        placed++;
        var bl = ""; sc.boxes.forEach(function (b) { if (b.id === target) bl = b.label; });
        document.getElementById("fb").innerHTML = photo ? "" : '<div class="feedback"><strong>Yes.</strong> ' + esc(c.label) + " goes in " + esc(bl) + ".</div>";
        say(c.label + " is in " + bl + ".");
        if (photo ? placed === count && count > 0 : placed === cards.length) {
          var g = document.getElementById("go"); g.hidden = false;
          if (!photo) document.getElementById("fb").innerHTML = '<div class="feedback"><strong>All sorted.</strong> ' + md(sc.done) + "</div>";
        }
      } else {
        document.getElementById("fb").innerHTML = '<div class="feedback">' + md(sc.hint) + "</div>";
        say(sc.hint.replace(/\*\*/g, ""));
      }
    });
    on("go", next);
  }

  /* network builder: put each device in its place on the booklet diagram */
  function builder(sc, part) {
    var help = false;
    var filled = {};
    function slot(id, label) {
      return '<div class="slot" data-target="' + id + '" id="slot-' + id + '"><span class="slot-label">' + (help ? esc(label) : "Empty place") + "</span></div>";
    }
    var tray = sc.cards.map(function (c) { return chip(c.id, c.label, c.icon); }).join("");
    frame('<p class="eyebrow">' + esc(sc.kind) + "</p><h2>" + esc(sc.title) + "</h2><p>" + md(sc.intro) + "</p>" +
      "<p>Tap a picture, then tap its place. You can also drag it.</p>" +
      '<div class="tray" id="tray">' + tray + "</div>" +
      '<div class="net">' + slot("internet", "Internet") + '<div class="wire" id="w1"></div>' + slot("modem", "Modem") +
      '<div class="wire" id="w2"></div>' + slot("router", "Router") + '<div class="wire" id="w3"></div>' +
      '<div class="devrow" id="devrow">' + slot("dev1", "A device") + slot("dev2", "A device") + slot("dev3", "A device") + "</div></div>" +
      '<div id="fb"></div><p class="parent">' + md(sc.parent) + "</p>" +
      '<div class="row end"><button id="help">Show the names of the places</button><button class="primary" id="go" hidden>Show the next step</button></div>', part);
    var card = document.getElementById("card");
    on("help", function () {
      help = true;
      var names = { internet: "Internet", modem: "Modem", router: "Router", dev1: "A device", dev2: "A device", dev3: "A device" };
      Object.keys(names).forEach(function (k) {
        var l = document.querySelector("#slot-" + k + " .slot-label");
        if (l) l.textContent = names[k];
      });
      document.getElementById("help").hidden = true;
    });
    var DEV = ["desktop", "switch", "tablet"];
    makeMovable(card, function (id, target) {
      if (filled[target]) return;
      var ok = (target === id) || (target.indexOf("dev") === 0 && DEV.indexOf(id) !== -1);
      var el = card.querySelector('.chip[data-card="' + id + '"]');
      if (!ok) {
        document.getElementById("fb").innerHTML = '<div class="feedback">' + md(sc.hints[id] || sc.hints.any) + "</div>";
        say((sc.hints[id] || sc.hints.any).replace(/\*\*/g, ""));
        return;
      }
      filled[target] = id;
      var s = document.getElementById("slot-" + target);
      s.innerHTML = ""; s.classList.add("filled");
      el.classList.add("placed"); s.appendChild(el);
      if (filled.internet && filled.modem) document.getElementById("w1").classList.add("on");
      if (filled.modem && filled.router) document.getElementById("w2").classList.add("on");
      if (filled.router && (filled.dev1 || filled.dev2 || filled.dev3)) { document.getElementById("w3").classList.add("on"); document.getElementById("devrow").classList.add("on"); }
      document.getElementById("fb").innerHTML = '<div class="feedback"><strong>Yes.</strong> ' + md(sc.right[id]) + "</div>";
      say(sc.right[id].replace(/\*\*/g, ""));
      if (Object.keys(filled).length === 6) {
        document.getElementById("fb").innerHTML = '<div class="feedback"><strong>The network is built.</strong> ' + md(sc.done) + "</div>";
        document.getElementById("go").hidden = false;
        document.getElementById("help").hidden = true;
      }
    });
    on("go", next);
  }

  startPage();
})();
