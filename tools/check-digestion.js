/* Browser checks for source diagrams, active blanks, and the offline copy. */
"use strict";
const fs = require("fs"), path = require("path"), { chromium } = require("playwright");
const root = path.resolve(__dirname, "..");
const out = path.join(root, "qa-output");
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const errors = [], remoteRequests = [];
  const page = await browser.newPage();
  page.on("pageerror", e => errors.push(e.message));
  page.on("request", r => { if (/^https?:/.test(r.url())) remoteRequests.push(r.url()); });
  await page.route(/^https?:/, r => r.abort());
  const file = "file://" + path.join(root, "murad-science-digestion.html");
  function assert(condition, message) { if (!condition) throw new Error(message); }
  async function fits(label) {
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), "Horizontal overflow: " + label);
  }
  for (const width of [360, 412, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(file);
    await fits("home at " + width);
    if (width === 412) await page.screenshot({ path: path.join(out, "home-phone.png"), fullPage: true });
    const ids = await page.evaluate(() => Object.keys(window.LESSONS));
    assert(ids.length === 2, "Standalone copy should contain the two science lessons");
    for (const id of ids) {
      await page.goto(file + "#" + id);
      await page.waitForSelector("#sit-1");
      const lesson = await page.evaluate(i => JSON.parse(JSON.stringify(window.LESSONS[i])), id);
      await page.click("#sit-1"); await page.click("#go");
      for (const fact of lesson.facts) {
        await fits(id + " / " + fact.id + " at " + width);
        await page.locator(".lesson-figure img").evaluateAll(async images => {
          for (const image of images) { await image.decode(); if (!image.naturalWidth) throw new Error("Diagram failed to load"); }
        });
        if (width === 412 && ["mouth-stomach", "animals", "starch"].includes(fact.id)) {
          await page.screenshot({ path: path.join(out, fact.id + "-phone.png"), fullPage: true });
        }
        await page.click("#go");
        await page.click("#opt-" + fact.pick.answer); await page.click("#fb #go");
      }
      await page.click("#card #go");
    }
  }
  await page.setViewportSize({ width: 412, height: 900 });
  await page.goto(file + "#murad-science-t3-l2");
  await page.waitForSelector("#sit-3");
  const questions = await page.evaluate(() => window.LESSONS["murad-science-t3-l2"].sittings[2].screens);
  await page.click("#sit-3"); await page.click("#go");
  for (const q of questions) {
    if (q.blankIndex !== undefined) {
      const selected = await page.locator(".blank").evaluateAll(nodes => nodes.findIndex(n => n.id === "blank"));
      assert(selected === q.blankIndex, "Wrong active blank for " + q.kind);
    }
    await page.click("#opt-" + (q.answer === null ? 0 : q.answer));
    if (q.blankIndex !== undefined) {
      assert((await page.textContent("#blank")) === q.options[q.answer], "Answer filled a different blank");
      if (q.blankIndex === 2) await page.screenshot({ path: path.join(out, "active-blank-phone.png"), fullPage: true });
    }
    await fits("page 88 question");
    await page.click("#fb #go");
  }
  assert(errors.length === 0, errors.join("\n"));
  assert(remoteRequests.length === 0, "Standalone copy made external requests");
  console.log("Diagrams loaded at 360, 412, 768 and 1280 pixels; active blanks filled correctly; offline requests: 0; problems: 0");
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
