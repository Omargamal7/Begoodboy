# Begoodboy lesson sheets

Interactive lesson sheets for two brothers, built from their school materials.
ICT uses the first-term 2025-2026 booklets; Science uses the 2026-2027 binder.
Open `index.html` in a browser on the Android tablet or the Linux laptop.
Nothing is printed and nothing is installed.

- `index.html` is the home page. It lists all 47 lessons; tapping one opens it.
- `assets/sheet.js` and `assets/sheet.css` are the shared sheet engine.
- `lessons/_common.js` holds each child's settings from the parent's answers.
- `lessons/murad-t1.js`, `murad-t2.js`: Murad, Primary 6, 12 lessons, three 10-minute sittings each.
- `lessons/jimmy-t1.js`, `jimmy-t2.js`: Jimmy, Primary 5, 12 lessons, two sittings each.
- `lessons/murad-science-t1.js` through `murad-science-t10.js`: Murad, all 22 numbered Science lessons. Every lesson has separate explanations, activities and the matching original book questions. Written answers are spoken first, then checked by a parent against the revealed answer. Long question lists are split into short sittings.
- `science-pack/START_HERE.html`: offline menu for 22 separate self-contained HTML lessons and the lab-safety reference. Rebuild with `node tools/build-science.js`. The original book page illustrations are restored using `python3 tools/render-science-pages.py /path/to/the/original-binder.pdf`.
- `murad/science/all-lessons-source-map.md`: full coverage, unscored questions and borrowed facts.
- `lessons/jimmy-social-studies-t1.js`: Jimmy’s first Social Studies reference lesson, Egypt’s coordinates. It uses the verified 2025–26 Ministry edition; matching his 2026–27 school questions remains pending.
- `jimmy-social-studies-01-egypt-coordinates.html`: independent offline reference lesson; rebuild with `node tools/build-social-studies.js`.
- `gamal/social-studies/README.md`: edition, source pages and lesson map.
- `murad-science-digestion.html`: an offline copy of just the two science lessons. Open this one file on the phone, tablet or laptop; rebuild with `node tools/build-digestion.js`.
- `murad/science/digestion-source-map.md`: question coverage, answer sources and the three questions awaiting teacher verification.

Every fact and question comes from the school booklets. A question whose answer
is not written in the booklet is shown but not scored, with a note to check it
with the teacher.

## Adding another subject

`PROMPT.md` is a ready prompt for any model: attach a booklet, fill in the child and the
subject, and it adds the new lessons in the same format. `tools/check.js` clicks through
every sitting and reports problems (`node tools/check.js`, needs `npm install playwright`).

