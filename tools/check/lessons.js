/* Clicks through every sitting of every lesson (or only lessons whose id contains the first argument)
   and reports script errors, unfinished activities, broken wrong-answer paths and sideways scrolling.
   Usage: node tools/check/lessons.js            (all lessons)
          node tools/check/lessons.js murad-math (only lessons whose id contains "murad-math")
   Needs Playwright: npm i playwright. Set CHROMIUM=/path/to/chrome if Playwright has no browser. */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), os = require('os');
const SHOT = fs.mkdtempSync(path.join(os.tmpdir(), 'sheets-')) + '/';
const ROOT = 'file://' + path.resolve(__dirname, '../..', 'index.html');
const FILTER = process.argv[2] || '';
function chromePath() {
  if (process.env.CHROMIUM) return process.env.CHROMIUM;
  try { return require('child_process').execSync('ls -d /opt/pw-browsers/chromium-*/chrome-linux*/chrome 2>/dev/null | head -1').toString().trim() || undefined; } catch (e) { return undefined; }
}
(async () => {
  const b = await chromium.launch(chromePath() ? { executablePath: chromePath() } : {});
  const p = await b.newPage({ viewport: { width: 412, height: 900 } });
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/ERR_CERT|fonts/.test(m.text())) errs.push('console: ' + m.text()); });
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto(ROOT);
  await p.screenshot({ path: SHOT + 'home.png', fullPage: true });
  const ids = (await p.evaluate(() => Object.keys(window.LESSONS))).filter(i => i.indexOf(FILTER) !== -1);
  const notes = [];
  if (!ids.length) {
    console.log('No lessons match "' + FILTER + '". Is the lesson file added to index.html, and does the filter match the lesson ids?');
    process.exitCode = 1; await b.close(); return;
  }
  const shots = {};
  let report = [];
  for (const id of ids) {
    const L = await p.evaluate(i => { const x = window.LESSONS[i]; return JSON.parse(JSON.stringify(x, (k, v) => typeof v === 'function' ? undefined : v)); }, id);
    await p.evaluate(i => { location.hash = '#' + i; }, id);
    await p.waitForSelector('#sit-1');
    let scoredSeen = 0, wrongTested = false;
    for (let n = 1; n <= L.sittings.length; n++) {
      const sit = L.sittings[n - 1];
      await p.click('#sit-' + n);
      await p.click('#go'); // first-then
      const screens = [];
      sit.screens.forEach(sc => { if (sc.type === 'fact') { screens.push({ type: 'fact', id: sc.id }); const f = L.facts.find(x => x.id === sc.id); if (f && f.pick) screens.push({ type: 'pick', id: sc.id, f }); } else screens.push(sc); });
      for (const sc of screens) {
        const t = sc.type;
        if (await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) errs.push(id + ': sideways scroll on ' + t + ' ' + (sc.title || sc.id || sc.stem || ''));
        if (t === 'fact') { await p.click('#go'); }
        else if (t === 'pick') { await p.click('#opt-' + sc.f.pick.answer); await p.click('#fb #go'); }
        else if (t === 'tf' || t === 'mcq') {
          let ans = t === 'tf' ? (sc.answer === null ? null : (sc.answer ? 0 : 1)) : sc.answer;
          if (ans === null || ans === undefined) { await p.click('#opt-0'); }
          else {
            if (!sc.practice && !wrongTested) {
              const wrong = ans === 0 ? 1 : 0; await p.click('#opt-' + wrong);
              const eb = await p.textContent('.eyebrow');
              if (!/again/i.test(eb)) errs.push(id + ': wrong answer did not show the card again');
              await p.click('#go'); wrongTested = true;
            }
            await p.click('#opt-' + ans);
          }
          if (!shots[t + (sc.answer === null ? 'open' : '')]) { shots[t + (sc.answer === null ? 'open' : '')] = 1; await p.screenshot({ path: SHOT + 'q_' + t + (sc.answer === null ? 'open' : '') + '.png', fullPage: true }); }
          await p.click('#fb #go');
        }
        else if (t === 'recall') {
          await p.click('#reveal');
          if (!wrongTested) {
            await p.click('#retry');
            if (!/again/i.test(await p.textContent('.eyebrow'))) errs.push(id + ': recall retry did not show its card');
            await p.click('#go'); await p.click('#reveal'); wrongTested = true;
          }
          await p.click('#matched'); await p.click('#fb #go');
        }
        else if (t === 'multi') {
          for (const index of sc.answer) await p.click('#opt-' + index);
          await p.click('#answer'); await p.click('#fb #go');
        }
        else if (t === 'sort') {
          for (let k = 0; k < sc.cards.length; k++) { await p.click(`.chip[data-card="c${k}"]`); await p.click(`.dropbox[data-target="${sc.cards[k].box}"] h3`); }
          if (await p.isHidden('#go')) errs.push(id + ': sort not finished: ' + sc.title);
          if (!shots['sort' + sc.boxes.length]) { shots['sort' + sc.boxes.length] = 1; await p.screenshot({ path: SHOT + 'sort' + sc.boxes.length + '.png', fullPage: true }); }
          await p.click('#go');
        }
        else if (t === 'photosort') { await p.click('#skip'); }
        else if (t === 'builder') {
          for (const c of sc.chain) { await p.click(`.chip[data-card="${c.id}"]`); await p.click('#slot-' + c.id); }
          for (let d = 0; d < sc.devices.length; d++) { await p.click(`.chip[data-card="${sc.devices[d]}"]`); await p.click('#slot-dev' + (d + 1)); }
          if (await p.isHidden('#go')) errs.push(id + ': builder not finished');
          await p.click('#go');
        }
        else if (t === 'steps') {
          for (let k = 0; k < sc.steps.length; k++) await p.click('#st-' + k);
          if (!shots.steps) { shots.steps = 1; await p.screenshot({ path: SHOT + 'steps.png', fullPage: true }); }
          await p.click('#go');
        }
        else if (t === 'textpractice') { await p.fill('#paste-box', sc.sentence); await p.click('#go'); }
        else if (t === 'htmleditor') {
          // Safety check on every editor: a script tag must never reach the preview.
          await p.fill('#html-in', '<p>test</p><script>alert(1)</script><img src=x onerror=alert(1)>');
          if (/script|onerror/i.test(await p.innerHTML('#preview'))) errs.push(id + ': unsafe tag in preview');
          if (!sc.testInput) { notes.push(id + ': htmleditor "' + sc.title + '" has no testInput, so its tasks were skipped'); await p.click('#skip'); }
          else {
            await p.fill('#html-in', sc.testInput);
            if (await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)) errs.push(id + ': sideways scroll after typing html');
            await p.screenshot({ path: SHOT + 'html.png', fullPage: true });
            if (await p.isHidden('#go')) { errs.push(id + ': htmleditor testInput does not finish every task'); await p.click('#skip'); }
            else await p.click('#go');
          }
        }
        else if (t === 'grid') {
          const ti = sc.testInput;
          if (!ti) { notes.push(id + ': grid "' + sc.title + '" has no testInput, so its tasks were skipped'); await p.click('#skip'); }
          else {
            const put = async (ref, v) => { await p.click('#cell-' + ref); await p.fill('#cell-' + ref, v); await p.press('#cell-' + ref, 'Enter'); };
            for (const ref of Object.keys(ti.cells || {})) await put(ref, ti.cells[ref]);
            if (ti.sort) { await p.click('#data-tab'); await p.click('#sort-btn'); }
            for (const ref of Object.keys(ti.expect || {})) {
              const v = await p.inputValue('#cell-' + ref);
              if (v !== ti.expect[ref]) errs.push(id + ': grid cell ' + ref + ' shows "' + v + '", expected "' + ti.expect[ref] + '"');
            }
            await p.screenshot({ path: SHOT + 'grid.png', fullPage: true });
            if (await p.isHidden('#go')) { errs.push(id + ': grid testInput does not finish every task'); await p.click('#skip'); }
            else await p.click('#go');
          }
        }
        else if (t === 'trade') {
          await p.click('#broker'); await p.click('#broker-done'); await p.click('#app-buy'); await p.click('#app-sell');
          await p.screenshot({ path: SHOT + 'trade.png', fullPage: true });
          await p.click('#go');
        }
        else errs.push(id + ': unknown type ' + t);
      }
      const done = await p.textContent('#card');
      if (!/You finished/.test(done)) errs.push(id + ' sitting ' + n + ': did not reach Done');
      const stat = (done.match(/Right the first time(\d+) of (\d+)/) || []).slice(1).join('/');
      report.push(id + ' s' + n + ' ' + stat);
      const hs = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (hs) errs.push(id + ': horizontal scroll');
      await p.click('#card #go'); // back to lesson page
      await p.waitForSelector('#sit-1');
    }
  }
  await p.goto(ROOT);
  await p.screenshot({ path: SHOT + 'home-after.png', fullPage: true });
  console.log(report.join('\n'));
  const real = errs.filter(e => !/Failed to load resource/.test(e));
  console.log('Screenshots in', SHOT);
  notes.forEach(n => console.log('note:', n));
  console.log('lessons checked:', ids.length, 'problems:', real.length); real.forEach(e => console.log(' -', e));
  if (real.length) process.exitCode = 1;
  await b.close();
})();
