# Begoodboy lesson sheets

Interactive lesson sheets for two brothers, built from their school booklets
(first term 2025-2026). Open `index.html` in a browser on the Android tablet or the
Linux laptop. Nothing is printed and nothing is installed.

- `index.html` is the home page. It lists all 26 lessons; tapping one opens it.
- `assets/sheet.js` and `assets/sheet.css` are the shared sheet engine.
- `lessons/_common.js` holds each child's settings from the parent's answers.
- `lessons/murad-t1.js`, `murad-t2.js`: Murad, Primary 6, 12 lessons, three 10-minute sittings each.
- `lessons/jimmy-t1.js`, `jimmy-t2.js`: Jimmy, Primary 5, 12 lessons, two sittings each.
- `lessons/murad-science-t3.js`: Murad, Science lessons 3-1 and 3-2; explanations on pp. 20-23 and exercises on pp. 86-89 of the 2026-2027 science binder. Each lesson has four short sittings.
- `murad-science-digestion.html`: an offline copy of just the two science lessons. Open this one file on the phone, tablet or laptop; rebuild with `node tools/build-digestion.js`.
- `murad/science/digestion-source-map.md`: question coverage, answer sources and the three questions awaiting teacher verification.

Every fact and question comes from the school booklets. A question whose answer
is not written in the booklet is shown but not scored, with a note to check it
with the teacher.

## Adding another subject

`PROMPT.md` is a ready prompt for any model: attach a booklet, fill in the child and the
subject, and it adds the new lessons in the same format. `tools/check.js` clicks through
every sitting and reports problems (`node tools/check.js`, needs `npm install playwright`).

