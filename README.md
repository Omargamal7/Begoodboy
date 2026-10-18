# Begoodboy lesson sheets

Interactive lesson sheets for two brothers, built from their school materials.
ICT uses the first-term 2025-2026 booklets; Science uses the 2026-2027 binder.
Open `index.html` in a browser on the Android tablet or the Linux laptop.
Nothing is printed and nothing is installed.

- `index.html` is the home page. It lists 48 shared-engine lessons and links Jimmy's separate Climate Quest assessment pack.
- `assets/sheet.js` and `assets/sheet.css` are the shared sheet engine.
- `lessons/_common.js` holds each child's settings from the parent's answers.
- `lessons/murad-t1.js`, `murad-t2.js`: Murad, Primary 6, 12 lessons, three 10-minute sittings each.
- `lessons/jimmy-t1.js`, `jimmy-t2.js`: Jimmy, Primary 5, 12 lessons, two sittings each.
- `lessons/murad-science-t1.js` through `murad-science-t10.js`: Murad, all 22 numbered Science lessons. Every lesson has separate explanations, activities and the matching original book questions. Written answers are spoken first, then checked by a parent against the revealed answer. Long question lists are split into short sittings.
- `science-pack/START_HERE.html`: offline menu for 22 separate self-contained HTML lessons and the lab-safety reference. Rebuild with `node tools/build-science.js`. The original book page illustrations are restored using `python3 tools/render-science-pages.py /path/to/the/original-binder.pdf`.
- `murad/science/all-lessons-source-map.md`: full coverage, unscored questions and borrowed facts.
- `murad-science-digestion.html`: an offline copy of just the two science lessons. Open this one file on the phone, tablet or laptop; rebuild with `node tools/build-digestion.js`.
- `murad/science/digestion-source-map.md`: question coverage, answer sources and the three questions awaiting teacher verification.
- `jimmy-climate-quest.html`: Jimmy's picture-led Arabic Social Studies practice for the quiz on 14 October 2026. Based on the four supplied school pages: 12 picture cards, 14 tap questions with delayed retries, seven Arabic phrase builders, and all 15 school question parts in a parent-checked speaking round. Everything is embedded for offline use. Rebuild with `node tools/build-climate-quiz.js`; source notes are in `gamal/social-studies/climate-quiz-source-map.md`.
- `jimmy-science-chapter-02.html`: Jimmy's focused Chapter 2 Science assessment revision from the five supplied answer screenshots. Six picture cards, three activities, and all 15 original questions in three separate tests. Parent checks spoken answers before writing practice. Rebuild with `node tools/build-jimmy-science-ch2.js`; coverage and limits are in `gamal/science/chapter-02-assessment-source-map.md`. The full Chapter 2 booklet has not been supplied.

Every fact and question comes from the school booklets. A question whose answer
is not written in the booklet is shown but not scored, with a note to check it
with the teacher.

## Adding another subject

`PROMPT.md` is a ready prompt for any model: attach a booklet, fill in the child and the
subject, and it adds the new lessons in the same format. `tools/check.js` clicks through
every sitting and reports problems (`node tools/check.js`, needs `npm install playwright`).


## School materials and sync records

- [Gamal / Jimmy: source files](gamal/)
- [Murad: source files](murad/)
- [All downloaded school originals](toddle-sync/2026-10-17/DOWNLOAD_INDEX.md)
- [Toddle sync status and revision guide](toddle-sync/2026-10-17/README.md)
- `school/announcements/`: shared school notices.

Keep source files under each child’s subject folder. Keep dated summaries and provenance under `toddle-sync/`. Generated extracts, temporary downloads and browser screenshots do not belong in the repository.
