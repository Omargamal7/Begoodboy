'use strict';
// Checks Grade 6’s November grammar page (grade-6/english/assessments/2026-11-26-grammar-test/grammar-blocks.html).
// Run from the repository root after `source tools/setup-skills.sh`:
//   NODE_PATH=.claude/skills/playwright-skill/node_modules node tools/check/grammar-blocks.js
// Part 1 checks every item (study-page-pipeline stage 7 and section 10 of docs/design/grade-6-design-guide.md).
// Part 2 clicks through the page at 390x844 and 820x1180 (stage 8): parts 1 and 12 by default (about a minute);
// FULL=1 walks all 12 parts (15-20 minutes). Screenshots go to build/qa/grammar-blocks/.
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '../..');
const dir = path.join(root, 'grade-6/english/assessments/2026-11-26-grammar-test');
const file = path.join(dir, 'grammar-blocks.html');
const problems = [];
const bad = (m) => problems.push(m);

// ---------- Part 1: items ----------
const html = fs.readFileSync(file, 'utf8');
const src = JSON.parse(fs.readFileSync(path.join(dir, 'grammar-data.json'), 'utf8'));
const emb = JSON.parse(html.match(/<script type="application\/json" id="data">([\s\S]*?)<\/script>/)[1].replace(/<\\\//g, '</'));
if (JSON.stringify(emb) !== JSON.stringify(src)) bad('page data differs from grammar-data.json: run tools/grammar-blocks/build.py');
const scope = { 11: 'p11', 12: 'p12', 13: 'p13', 14: 'p14', 15: 'p15', 16: 'p16', 26: 'p26', 27: 'p27', 28: 'p28', 29: 'p29', 30: 'p30', 31: 'p31' };
const ids = new Set(), stems = new Set();
let total = 0, scoredN = 0;
for (const p of src.parts) {
  if (scope[p.page] !== p.id) bad(`${p.id}: page ${p.page} outside the school's revision list`);
  if (!p.learn || !p.learn.page || !p.learn.lines.length) bad(`${p.id}: rule card needs a book page and lines`);
  for (const it of p.items) {
    total++;
    if (ids.has(it.id)) bad(`${it.id}: duplicate id`); ids.add(it.id);
    const stemKey = p.id + '|' + it.q + '|' + it.a;
    if (stems.has(stemKey)) bad(`${it.id}: duplicate question`); stems.add(stemKey);
    const opts = it.tf ? ['True', 'False'] : [it.a, ...it.d];
    if (it.tf && !(it.a === 'True' || it.a === 'False')) bad(`${it.id}: True/False answer must be True or False`);
    if (new Set(opts).size !== opts.length) bad(`${it.id}: repeated option`);
    if (opts.filter((o) => o === it.a).length !== 1) bad(`${it.id}: answer must appear exactly once`);
    if (!it.tf && !it.keep && opts.length !== 3) bad(`${it.id}: needs 3 options (book's own 2-option items carry keep:true)`);
    if (!src.reasons[it.why]) bad(`${it.id}: missing reason ${it.why}`);
    if (!it.parent) scoredN++;
    const all = [it.q, ...opts].join(' ');
    if (/\b(all|none) of the above\b/i.test(all)) bad(`${it.id}: all/none of the above`);
    if (/\b(1|2|3) and (2|3|4) only\b/i.test(all)) bad(`${it.id}: combination option`);
    if (/\b(not|except)\b/i.test(it.q.replace(/\(.*?\)/g, '').replace(/___ not ___/g, '')) && !/\bNOT\b|\bEXCEPT\b/.test(it.q) && !/n't|not\//.test(it.q)) bad(`${it.id}: lower-case NOT/EXCEPT in stem`);
    if (it.tf && /\b(always|never|all|none|no|not)\b/i.test(it.q.replace(/"[^"]*"/g, ''))) bad(`${it.id}: True/False wording outside the quoted book sentence uses an absolute or negative`);
    // no answer leakage: the filled answer must not already be visible in the stem
    if (it.q.includes('___')) {
      for (const piece of it.a.split('…').map((s) => s.trim())) {
        const re = new RegExp('(^|[^A-Za-z\'])' + piece.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^A-Za-z\']|$)');
        if (piece.split(' ').length > 1 && re.test(it.q)) bad(`${it.id}: stem already shows "${piece}"`);
      }
    }
  }
}
console.log(`items: ${total} (${scoredN} scored, ${total - scoredN} parent check)`);

// ---------- Part 2: browser ----------
(async () => {
  let chromium;
  try { ({ chromium } = require('playwright')); } catch (e) { bad('playwright not found: set NODE_PATH as shown at the top of this file'); return finish(); }
  const qa = path.join(root, 'build/qa/grammar-blocks'); fs.mkdirSync(qa, { recursive: true });
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  for (const [w, h, tag] of [[390, 844, 'phone'], [820, 1180, 'tablet']]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const pg = await ctx.newPage();
    const errs = [];
    pg.on('pageerror', (e) => errs.push(e.message));
    pg.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
    await pg.route(/^https?:/, (r) => { errs.push('network request: ' + r.request().url()); r.abort(); });
    const fits = async (label) => { if (!(await pg.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1))) bad(`${tag}: sideways scroll on ${label}`); };
    await pg.goto('file://' + file);
    await fits('home');
    if ((await pg.locator('.parts button').count()) !== 12) bad(`${tag}: home must list 12 parts`);
    await pg.screenshot({ path: path.join(qa, `${tag}-home.png`), fullPage: true });
    // every part: open the rule, then walk every question
    const walk = process.env.FULL ? src.parts.map((_, k) => k) : [0, src.parts.length - 1];
    for (const k of walk) {
      const p = src.parts[k];
      await pg.locator(`.parts button[data-k="${k}"]`).click();
      await fits(`${p.id} rule`);
      if (!(await pg.locator('#rule').innerText()).includes(`page ${p.learn.page}`)) bad(`${tag}: ${p.id} rule card lacks its page`);
      if (k === 0) await pg.screenshot({ path: path.join(qa, `${tag}-rule.png`), fullPage: true });
      await pg.click('#go');
      for (let i = 0; i < p.items.length; i++) {
        const it = p.items[i];
        const head = await pg.locator('main').innerText();
        if (!head.includes(`Question ${i + 1} of ${p.items.length}`)) bad(`${tag}: ${it.id} missing "Question ${i + 1} of ${p.items.length}"`);
        if (it.parent) { await pg.click('#next'); continue; }
        const opts = await pg.locator('.choice').allInnerTexts();
        const clean = opts.map((o) => o.replace(/^[A-Z]\.\s*/, '').trim());
        if (clean.length !== (it.tf ? 2 : 1 + it.d.length)) bad(`${tag}: ${it.id} shows ${clean.length} options`);
        if (!clean.includes(it.a)) bad(`${tag}: ${it.id} correct option not shown`);
        await fits(`${it.id}`);
        if (await pg.locator('#check').isEnabled()) bad(`${tag}: ${it.id} check button enabled before a choice`);
        // first question of each part: answer wrongly first, confirm feedback, retry, then reload mid-part
        if (i === 0) {
          const wrong = clean.findIndex((o) => o !== it.a);
          await pg.locator('.choice').nth(wrong).click();
          if ((await pg.locator('.fb').innerText()).includes('Correct')) bad(`${tag}: ${it.id} feedback shown before checking`);
          await pg.click('#check');
          const fb = await pg.locator('#fb').innerText();
          if (!fb.includes(it.a) || !fb.includes('Why:') || !fb.includes('✗')) bad(`${tag}: ${it.id} wrong-answer feedback must show the answer, a reason and a mark`);
          if (k === 0) await pg.screenshot({ path: path.join(qa, `${tag}-wrong.png`), fullPage: true });
          await pg.click('#again');
          await pg.reload();
          if (!(await pg.locator('main').innerText()).includes(`Question 1 of ${p.items.length}`)) bad(`${tag}: ${p.id} reload did not return to the same question`);
        }
        await pg.locator('.choice').nth(clean.indexOf(it.a)).click();
        await pg.click('#check');
        if (!(await pg.locator('#fb').innerText()).includes('✓ Correct.')) bad(`${tag}: ${it.id} correct answer not accepted`);
        if (k === 0 && i === 1) await pg.screenshot({ path: path.join(qa, `${tag}-correct.png`), fullPage: true });
        await pg.click('#next');
      }
      const rev = await pg.locator('main').innerText();
      const want = `First try: ${p.items.filter((x) => !x.parent).length - 1} of ${p.items.filter((x) => !x.parent).length} correct.`;
      if (!rev.includes(want)) bad(`${tag}: ${p.id} review should say "${want}"`);
      if (k === 0) await pg.screenshot({ path: path.join(qa, `${tag}-review.png`), fullPage: true });
      await fits(`${p.id} review`);
      await pg.click('#back');
    }
    if (!(await pg.locator('#buildhead').innerText()).includes(`Build: ${walk.length} of 12`)) bad(`${tag}: build should show ${walk.length} of 12 blocks`);
    await pg.click('#theme');
    if ((await pg.evaluate(() => document.documentElement.dataset.theme)) !== 'dark') bad(`${tag}: theme switch failed`);
    await pg.reload();
    if ((await pg.evaluate(() => document.documentElement.dataset.theme)) !== 'dark') bad(`${tag}: theme not kept after reload`);
    await pg.screenshot({ path: path.join(qa, `${tag}-home-dark.png`), fullPage: true });
    // storage unavailable: page must still work
    const ctx2 = await browser.newContext({ viewport: { width: w, height: h } });
    await ctx2.addInitScript(() => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } }); });
    const pg2 = await ctx2.newPage(); pg2.on('pageerror', (e) => errs.push('no-storage: ' + e.message));
    await pg2.goto('file://' + file); await pg2.locator('.parts button').first().click(); await pg2.click('#go');
    if (!(await pg2.locator('main').innerText()).includes('Question 1 of')) bad(`${tag}: page fails without browser storage`);
    await ctx2.close();
    for (const e of errs) bad(`${tag}: ${e}`);
    await ctx.close();
  }
  await browser.close();
  console.log(`browser: walked ${process.env.FULL ? 'all 12 parts' : 'parts 1 and 12'} at 390x844 and 820x1180`);
  finish();
})().catch((e) => { bad('runner: ' + e.message); finish(); });

function finish() {
  for (const p of problems) console.log('problem:', p);
  console.log(`problems: ${problems.length}`);
  process.exitCode = problems.length ? 1 : 0;
}
