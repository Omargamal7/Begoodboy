# 21 October 2026 — Jimmy Grade 5 Social Studies, Unit 1 (October monthly test)

Test: Thursday 22/10/2026, 2nd lesson. School scope (Primary 5 October list): «من الأول حتى مناخ مصر» = Unit 1 «مصر موقع متميز وطبيعة متنوعة», Lessons 1–3.

## Sources

- `sources/gamal/social-studies/اجابة التقيمات.pdf`: the teacher's answered «الأداءات والتقييمات» booklet pages 4–14 (Toddle). Classwork, homework and weekly tests A/B/C for Lessons 1–3. The same file was re-downloaded from Toddle on 21 Oct, byte-identical.
- Ministry student book `Social_prim5_T1.pdf`, printed 2025–26 (SHA-256 `d2712bc7…b580`), pp. 8–29: https://elearnningcontent.blob.core.windows.net/elearnningcontent/2026/Primary/Primary5/Term1/StudentBook/Social_prim5_T1.pdf. It is not committed (15 MB); the local copy is in `~/Downloads/School/sources/gamal/social-studies/`.
- No school *explanation* booklet for Grade 5 Social Studies was available; explanations follow the Ministry book.

## Coverage check (answer sheet vs book)

The sheet covers all three lessons. Added from the book because the sheet never asks them: the time difference (4 min per longitude line, 15° = 1 h, the Cairo 30°E problem on p. 12), Egypt's coordinates 22°–31°36′N / 25°–37°E, the list of inhabited oases, the White/Black Desert, the solar calendar and 3 farming seasons, and the dry climate preserving monuments. Lesson 4 (plants and animals) is out of scope.

## Deliverables (`packs/gamal/social-studies/`)

- `unit1-lesson1-astronomical-location-hybrid.html`: Lesson 1: Egypt's astronomical location (Arabic + English)
- `unit1-lesson2-landforms-hybrid.html`: Lesson 2: Egypt's landforms (Arabic + English)
- `unit1-lesson3-climate-hybrid.html`: Lesson 3: Egypt's climate (Arabic + English)
- `october-test-unit1-hybrid.html`: Test revision, Lessons 1–3 (Arabic + English)
- `october-test-unit1-english.html`: Test revision (English only)
- `october-test-unit1-arabic.html`: Test revision (Arabic only)
- `unit1-lessons-hybrid.html`: All 3 lessons on one page (Arabic + English)

The three `unit1-lesson*` pages have the tabs Explanation / Classwork & homework / Weekly test (3 models) / Quiz. 96 school questions are transcribed with the teacher's Arabic answers plus English glosses.

## Caveats

- **Lesson 1 Models A/B/C are authored.** The sheet has no Lesson 1 weekly test, so 15 questions were written from the book's exercises (pp. 12–13). They are labelled "from the book's exercises".
- **Sheet p. 8, Eastern Desert item (b):** the answer reads «يصبح غير مأهول بالسكان», a copy slip. The book (p. 19) is used instead: the Red Sea Mountains were formed by faults.
- **Sheet p. 14, model B Q4** («لو كانت كل الأراضي سهلية»): another school sheet answers differently. The book's idea is used (landforms affect climate).
- **The map is a simplified sketch** (approximate coordinates), not for tracing.

## Read-aloud (all 18 Grade 5 pages)

`tools/readaloud/readaloud-snippet.html` (v3) is a floating tap-to-read toggle with speed and stop buttons. It splits mixed Arabic/English so each part gets its own voice, and skips emoji. Chrome on Linux has no Arabic voice, so it falls back to Google Translate speech audio, which needs internet and a `no-referrer` meta (with a page referrer the service returns 404). iPad, iPhone and Windows use their built-in Arabic voices.
