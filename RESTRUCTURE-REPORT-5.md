# Pass 5: sync/ sorted into child and subject folders

## Deleted

- `sync/2026-10-18/announcements.md`
- `sync/2026-10-18/messages.md`

## Narrative notes moved

- `sync/README.md` → `docs/provenance/toddle/README.md`
- `sync/2026-10-17/README.md` → `docs/provenance/toddle/2026-10-17/README.md`
- `sync/2026-10-17/downloads.md` → `docs/provenance/toddle/2026-10-17/downloads.md`
- `sync/2026-10-17/revision.html` → `docs/provenance/toddle/2026-10-17/revision.html`
- `sync/2026-10-17/reports/schedule.md` → `docs/provenance/toddle/2026-10-17/schedule.md`
- `sync/2026-10-17/reports/murad-arabic-religion.md` → `murad/general/sync/2026-10-17/murad-arabic-religion.md`
- `sync/2026-10-17/reports/gamal-arabic-religion.md` → `gamal/general/sync/2026-10-17/gamal-arabic-religion.md`
- `sync/2026-10-18/README.md` → `docs/provenance/toddle/2026-10-18/README.md`
- `sync/2026-10-18/assignments.md` → `docs/provenance/toddle/2026-10-18/assignments.md`
- `sync/2026-10-18-cloud/README.md` → `docs/provenance/toddle/2026-10-18-cloud/README.md`
- `sync/2026-10-19-english/README.md` → `docs/provenance/toddle/2026-10-19-english/README.md`
- `sync/2026-10-19-german/README.md` → `gamal/german/sync/2026-10-19-german/README.md`
- `sync/2026-10-19-german/source-files.json` → `gamal/german/sync/2026-10-19-german/source-files.json`
- `sync/2026-10-20-downloads/README.md` → `docs/provenance/toddle/2026-10-20-downloads/README.md`
- `sync/2026-10-20-live/README.md` → `docs/provenance/toddle/2026-10-20-live/README.md`
- `sync/2026-10-20-live/coverage.json` → `docs/provenance/toddle/2026-10-20-live/coverage.json`
- `sync/2026-10-20-reconciliation/README.md` → `docs/provenance/toddle/2026-10-20-reconciliation/README.md`
- `sync/2026-10-25/README.md` → `docs/provenance/toddle/2026-10-25/README.md`
- `sync/2026-10-25/course-plans.md` → `docs/provenance/toddle/2026-10-25/course-plans.md`
- `sync/2026-11-11/partial-routines.md` → `docs/provenance/toddle/2026-11-11/partial-routines.md`
- `sync/2026-11-11/partial-source-checkpoint.md` → `docs/provenance/toddle/2026-11-11/partial-source-checkpoint.md`

## Split sources

- `sync/catalog.json`: 170 records → 20 destinations, 6 unassigned
- `sync/2026-10-17/sources.json`: 67 records → 13 destinations, 1 unassigned
- `sync/2026-10-18/attachments.json`: 3 records → 3 destinations, 0 unassigned
- `sync/2026-10-18/course-plans.json`: 25 records → 17 destinations, 0 unassigned
- `sync/2026-10-18-cloud/attachments.json`: 49 records → 13 destinations, 6 unassigned
- `sync/2026-10-18-cloud/resolved-gaps.json`: 23 records → 7 destinations, 0 unassigned
- `sync/2026-10-19-english/files.json`: 34 records → 3 destinations, 25 unassigned
- `sync/2026-10-19-german/files.json`: 20 records → 2 destinations, 13 unassigned
- `sync/2026-10-20-downloads/priority-references.json`: 20 records → 11 destinations, 0 unassigned
- `sync/2026-10-25-ministry-books/books.json`: 20 records → 12 destinations, 0 unassigned
- `sync/2026-10-25-ministry-books/catalogues.json`: 186 records → 16 destinations, 109 unassigned
- `sync/2026-10-25/course-plans.json`: 25 records → 17 destinations, 0 unassigned
- `sync/2026-10-20-downloads/download-inventory.csv`: 82 records → 15 destinations, 23 unassigned
- `sync/2026-10-20-reconciliation/pending-originals.csv`: 53 records → 13 destinations, 3 unassigned
- `sync/2026-10-17/checksums.sha256`: 67 records → 14 destinations, 1 unassigned
- `sync/2026-10-18/checksums.sha256`: 3 records → 3 destinations, 1 unassigned

New files written by the splits: 195. Each source keeps an index file in `docs/provenance/toddle/<snapshot>/` that lists where its records went.

## Link and path repairs

- attr_changed: 17
- link_changed: 114
- link_deleted: 2
- link_unresolved: 7
- prose_path_updated: 4
- record_path_updated: 3
- stale_link_followed: 80

## Links that could not be followed (still point at the same path as before)

- `docs/provenance/toddle/2026-10-17/downloads.md` → `../../sources/shared/school/announcements/2026-10-07-general-assembly.jpeg`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../packs/gamal/english/october-revision.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../packs/murad/english/october-revision.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../packs/class/grade5/english/october-arabic-help.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../packs/class/grade6/english/october-arabic-help.html`
- `gamal/german/sync/2026-10-19-german/README.md` → `../../packs/gamal/german/october-revision.html`
- `gamal/german/sync/2026-10-19-german/README.md` → `../../packs/class/grade5/german/october-arabic-help.html`

## Local links in changed files that do not resolve

- `README.md` → `docs/students/murad/README.md`
- `README.md` → `sources/murad/`
- `README.md` → `docs/students/gamal/README.md`
- `README.md` → `sources/gamal/`
- `README.md` → `packs/gamal/revision/october-lessons.html`
- `README.md` → `packs/murad/revision/october-lessons.html`
- `README.md` → `packs/gamal/english/october-fieldbook.html`
- `README.md` → `packs/murad/english/october-fieldbook.html`
- `README.md` → `packs/gamal/mathematics/decimal-lab-october-2026.html`
- `README.md` → `packs/murad/mathematics/october-2026.html`
- `README.md` → `packs/gamal/english/october-revision.html`
- `README.md` → `packs/murad/english/october-revision.html`
- `README.md` → `packs/class/grade5/english/october-arabic-help.html`
- `README.md` → `packs/class/grade6/english/october-arabic-help.html`
- `README.md` → `packs/gamal/german/october-revision.html`
- `README.md` → `packs/class/grade5/german/october-arabic-help.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-1-bones-and-muscles.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-2-changes-in-seasons.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-3-germination.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/revision-chapters-1-3.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-4-conditions-for-growth.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-5-from-flower-to-fruit.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-6-human-growth-and-reproduction.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-7-animal-growth-and-reproduction.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-8-weather-changes.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/chapter-9-water-cycle.html`
- `README.md` → `packs/gamal/science/arabic-book-term1/revision-chapters-4-9.html`
- `README.md` → `packs/gamal/social-studies/unit1-lesson1-astronomical-location-hybrid.html`
- `README.md` → `packs/gamal/social-studies/unit1-lesson2-landforms-hybrid.html`
- `README.md` → `packs/gamal/social-studies/unit1-lesson3-climate-hybrid.html`
- `README.md` → `packs/gamal/social-studies/october-test-unit1-hybrid.html`
- `README.md` → `packs/gamal/social-studies/october-test-unit1-english.html`
- `README.md` → `packs/gamal/social-studies/october-test-unit1-arabic.html`
- `README.md` → `packs/gamal/social-studies/unit1-lessons-hybrid.html`
- `README.md` → `packs/murad/social-studies/unit1-lesson1-location-importance-hybrid.html`
- `README.md` → `packs/murad/social-studies/unit1-lesson2-landforms-hybrid.html`
- `README.md` → `packs/murad/social-studies/unit1-lesson3-climate-plants-hybrid.html`
- `README.md` → `packs/murad/social-studies/unit1-lesson4-environmental-challenges-hybrid.html`
- `README.md` → `packs/murad/social-studies/october-test-unit1-hybrid.html`
- `README.md` → `packs/gamal/science/english-term1/index.html`
- `docs/ministry-book-coverage.md` → `../sources/gamal/german/revision/2026-10/booklet-answers-exercises-01-22.pdf`
- `docs/ministry-book-coverage.md` → `../sources/gamal/german/revision/2026-10/october-worksheet.pdf`
- `docs/ministry-book-coverage.md` → `../sources/gamal/german/revision/2026-10/october-model-answers.pdf`
- `docs/ministry-book-coverage.md` → `../sources/gamal/science/assessments/chapter-02/`
- `docs/provenance/mathematics-2026-10-19.md` → `../students/murad/mathematics/teacher-notes.md`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/murad/mathematics/revision/2026-10/October%20Revision%20Sheet.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/murad/mathematics/revision/2026-10/Model%20Answer%20-%20October%20Revision%20Sheet.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/murad/mathematics/booklets/Prim%206%20Classwork%20Binder%201st%20term%202026-2027.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/murad/mathematics/Prim6_Homework_Binder_Term1_2026-2027.pdf`
- `docs/provenance/toddle/2026-10-17/downloads.md` → `../../../../sources/shared/school/announcements/2026-10-07-general-assembly.jpeg`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../../../packs/gamal/english/october-revision.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../../../packs/murad/english/october-revision.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../../../packs/class/grade5/english/october-arabic-help.html`
- `docs/provenance/toddle/2026-10-19-english/README.md` → `../../../../packs/class/grade6/english/october-arabic-help.html`
- `docs/source-index-2026-10-20.md` → `students/gamal/handoff-2026-10-20.md`
- `docs/source-index-2026-10-20.md` → `students/murad/handoff-2026-10-20.md`
- `gamal/general/docs/README.md` → `../../../sources/gamal/announcements/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/arabic/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/english/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/german/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/ict/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/religion/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/schedules/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/science/`
- `gamal/general/docs/README.md` → `../../../sources/gamal/social-studies/`
- `gamal/general/docs/README.md` → `../../../packs/gamal/english/october-revision.html`
- `gamal/general/docs/README.md` → `../../../packs/gamal/mathematics/decimal-lab-october-2026.html`
- `gamal/general/docs/README.md` → `../../../packs/gamal/revision/october-lessons.html`
- `gamal/general/docs/README.md` → `../../source-index-2026-10-20.md`
- `gamal/general/docs/README.md` → `../../../packs/gamal/german/october-revision.html`
- `gamal/general/docs/handoff-2026-10-20.md` → `../../source-index-2026-10-20.md`
- `gamal/german/sync/2026-10-19-german/README.md` → `../../../../packs/gamal/german/october-revision.html`
- `gamal/german/sync/2026-10-19-german/README.md` → `../../../../packs/class/grade5/german/october-arabic-help.html`
- `murad/general/docs/README.md` → `../../../sources/murad/arabic/`
- `murad/general/docs/README.md` → `../../../sources/murad/english/`
- `murad/general/docs/README.md` → `../../../sources/murad/ict/`
- `murad/general/docs/README.md` → `../../../sources/murad/mathematics/`
- `murad/general/docs/README.md` → `../../../sources/murad/religion/`
- `murad/general/docs/README.md` → `../../../sources/murad/schedules/`
- `murad/general/docs/README.md` → `../../../sources/murad/science/`
- `murad/general/docs/README.md` → `../../../sources/murad/social-studies/`
- `murad/general/docs/README.md` → `../../../packs/murad/english/october-revision.html`
- `murad/general/docs/README.md` → `../../../packs/murad/mathematics/october-2026.html`
- `murad/general/docs/README.md` → `../../../packs/murad/revision/october-lessons.html`
- `murad/general/docs/README.md` → `../../source-index-2026-10-20.md`
- `murad/general/docs/README.md` → `../../provenance/mathematics-2026-10-19.md`
- `murad/general/docs/handoff-2026-10-20.md` → `../../source-index-2026-10-20.md`
- `packs/README.md` → `gamal/english/october-revision.html`
- `packs/README.md` → `murad/english/october-revision.html`
- `packs/README.md` → `class/grade5/english/october-arabic-help.html`
- `packs/README.md` → `class/grade6/english/october-arabic-help.html`
- `packs/README.md` → `gamal/german/october-revision.html`
- `packs/README.md` → `class/grade5/german/october-arabic-help.html`
- `packs/README.md` → `gamal/revision/october-lessons.html`
- `packs/README.md` → `murad/revision/october-lessons.html`
- `packs/README.md` → `gamal/english/october-fieldbook.html`
- `packs/README.md` → `murad/english/october-fieldbook.html`
- `packs/README.md` → `gamal/social-studies/climate-quest.html`
- `packs/README.md` → `gamal/science/chapter-02-assessment.html`
- `packs/README.md` → `gamal/social-studies/egypt-coordinates.html`
- `packs/README.md` → `murad/science/digestion.html`
- `packs/README.md` → `gamal/mathematics/decimal-lab-october-2026.html`
- `packs/README.md` → `murad/mathematics/october-2026.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-1-bones-and-muscles.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-2-changes-in-seasons.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-3-germination.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/revision-chapters-1-3.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-4-conditions-for-growth.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-5-from-flower-to-fruit.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-6-human-growth-and-reproduction.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-7-animal-growth-and-reproduction.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-8-weather-changes.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/chapter-9-water-cycle.html`
- `packs/README.md` → `gamal/science/arabic-book-term1/revision-chapters-4-9.html`
- `packs/README.md` → `gamal/social-studies/unit1-lesson1-astronomical-location-hybrid.html`
- `packs/README.md` → `gamal/social-studies/unit1-lesson2-landforms-hybrid.html`
- `packs/README.md` → `gamal/social-studies/unit1-lesson3-climate-hybrid.html`
- `packs/README.md` → `gamal/social-studies/october-test-unit1-hybrid.html`
- `packs/README.md` → `gamal/social-studies/october-test-unit1-english.html`
- `packs/README.md` → `gamal/social-studies/october-test-unit1-arabic.html`
- `packs/README.md` → `gamal/social-studies/unit1-lessons-hybrid.html`
- `packs/README.md` → `murad/social-studies/unit1-lesson1-location-importance-hybrid.html`
- `packs/README.md` → `murad/social-studies/unit1-lesson2-landforms-hybrid.html`
- `packs/README.md` → `murad/social-studies/unit1-lesson3-climate-plants-hybrid.html`
- `packs/README.md` → `murad/social-studies/unit1-lesson4-environmental-challenges-hybrid.html`
- `packs/README.md` → `murad/social-studies/october-test-unit1-hybrid.html`
- `packs/README.md` → `murad/social-studies/october-test-unit1-english.html`
- `packs/README.md` → `murad/social-studies/october-test-unit1-arabic.html`
- `packs/README.md` → `murad/social-studies/unit1-lessons-hybrid.html`
- `sources/README.md` → `murad/`
- `sources/README.md` → `gamal/`
- `sources/README.md` → `shared/`
- `sources/README.md` → `shared/science/grade5/homework-scope.md`
- `sources/README.md` → `shared/science/grade5/textbook.md`

## Mentions of sync/ still in tracked files (not changed in this pass)

- `gamal/general/docs/README.md`: lines 29

## Not changed in this pass

- Contents of `sources/` and `packs/`, `app/`, `tools/` and `index.html`, apart from links and exact paths that pointed into `sync/`.
- Record values such as `repository_path` keep the paths recorded at snapshot time.
- The `source` field of each index and split file keeps the path the file had before pass 5.
- Earlier pass reports (`RESTRUCTURE-REPORT-*.md`) are logs and keep their wording.
- Deleted files remain in git history.

