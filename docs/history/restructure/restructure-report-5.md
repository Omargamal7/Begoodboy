# Pass 5: sync/ sorted into child and subject folders

## Deleted

- `sync/2026-10-18/announcements.md`
- `sync/2026-10-18/messages.md`

## Narrative notes moved

- `sync/README.md` → `docs/provenance/portal/README.md`
- `sync/2026-10-17/README.md` → `docs/provenance/portal/2026-10-17/README.md`
- `sync/2026-10-17/downloads.md` → `docs/provenance/portal/2026-10-17/downloads.md`
- `sync/2026-10-17/revision.html` → `docs/provenance/portal/2026-10-17/revision.html`
- `sync/2026-10-17/reports/schedule.md` → `docs/provenance/portal/2026-10-17/schedule.md`
- `sync/2026-10-17/reports/grade-6-arabic-religion.md` → `grade-6/general/sync/2026-10-17/grade-6-arabic-religion.md`
- `sync/2026-10-17/reports/grade-5-arabic-religion.md` → `grade-5/general/sync/2026-10-17/grade-5-arabic-religion.md`
- `sync/2026-10-18/README.md` → `docs/provenance/portal/2026-10-18/README.md`
- `sync/2026-10-18/assignments.md` → `docs/provenance/portal/2026-10-18/assignments.md`
- `sync/2026-10-18-cloud/README.md` → `docs/provenance/portal/2026-10-18-cloud/README.md`
- `sync/2026-10-19-english/README.md` → `docs/provenance/portal/2026-10-19-english/README.md`
- `sync/2026-10-19-german/README.md` → `grade-5/german/sync/2026-10-19-german/README.md`
- `sync/2026-10-19-german/source-files.json` → `grade-5/german/sync/2026-10-19-german/source-files.json`
- `sync/2026-10-20-downloads/README.md` → `docs/provenance/portal/2026-10-20-downloads/README.md`
- `sync/2026-10-20-live/README.md` → `docs/provenance/portal/2026-10-20-live/README.md`
- `sync/2026-10-20-live/coverage.json` → `docs/provenance/portal/2026-10-20-live/coverage.json`
- `sync/2026-10-20-reconciliation/README.md` → `docs/provenance/portal/2026-10-20-reconciliation/README.md`
- `sync/2026-10-25/README.md` → `docs/provenance/portal/2026-10-25/README.md`
- `sync/2026-10-25/course-plans.md` → `docs/provenance/portal/2026-10-25/course-plans.md`
- `sync/2026-11-11/partial-routines.md` → `docs/provenance/portal/2026-11-11/partial-routines.md`
- `sync/2026-11-11/partial-source-checkpoint.md` → `docs/provenance/portal/2026-11-11/partial-source-checkpoint.md`

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

New files written by the splits: 195. Each source keeps an index file in `docs/provenance/portal/<snapshot>/` that lists where its records went.

## Link and path repairs

- attr_changed: 17
- link_changed: 114
- link_deleted: 2
- link_unresolved: 7
- prose_path_updated: 4
- record_path_updated: 3
- stale_link_followed: 80

## Links that could not be followed (still point at the same path as before)

- `docs/provenance/portal/2026-10-17/downloads.md` → `../../sources/shared/school/announcements/2026-10-07-general-assembly.jpeg`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../packs/grade-5/english/october-revision.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../packs/grade-6/english/october-revision.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../packs/class/grade5/english/october-arabic-help.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../packs/class/grade6/english/october-arabic-help.html`
- `grade-5/german/sync/2026-10-19-german/README.md` → `../../packs/grade-5/german/october-revision.html`
- `grade-5/german/sync/2026-10-19-german/README.md` → `../../packs/class/grade5/german/october-arabic-help.html`

## Local links in changed files that do not resolve

- `README.md` → `docs/students/grade-6/README.md`
- `README.md` → `sources/grade-6/`
- `README.md` → `docs/students/grade-5/README.md`
- `README.md` → `sources/grade-5/`
- `README.md` → `packs/grade-5/revision/october-lessons.html`
- `README.md` → `packs/grade-6/revision/october-lessons.html`
- `README.md` → `packs/grade-5/english/october-fieldbook.html`
- `README.md` → `packs/grade-6/english/october-fieldbook.html`
- `README.md` → `packs/grade-5/mathematics/decimal-lab-october-2026.html`
- `README.md` → `packs/grade-6/mathematics/october-2026.html`
- `README.md` → `packs/grade-5/english/october-revision.html`
- `README.md` → `packs/grade-6/english/october-revision.html`
- `README.md` → `packs/class/grade5/english/october-arabic-help.html`
- `README.md` → `packs/class/grade6/english/october-arabic-help.html`
- `README.md` → `packs/grade-5/german/october-revision.html`
- `README.md` → `packs/class/grade5/german/october-arabic-help.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-1-bones-and-muscles.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-2-changes-in-seasons.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-3-germination.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/revision-chapters-1-3.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-4-conditions-for-growth.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-5-from-flower-to-fruit.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-6-human-growth-and-reproduction.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-7-animal-growth-and-reproduction.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-8-weather-changes.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/chapter-9-water-cycle.html`
- `README.md` → `packs/grade-5/science/arabic-book-term1/revision-chapters-4-9.html`
- `README.md` → `packs/grade-5/social-studies/unit1-lesson1-astronomical-location-hybrid.html`
- `README.md` → `packs/grade-5/social-studies/unit1-lesson2-landforms-hybrid.html`
- `README.md` → `packs/grade-5/social-studies/unit1-lesson3-climate-hybrid.html`
- `README.md` → `packs/grade-5/social-studies/october-test-unit1-hybrid.html`
- `README.md` → `packs/grade-5/social-studies/october-test-unit1-english.html`
- `README.md` → `packs/grade-5/social-studies/october-test-unit1-arabic.html`
- `README.md` → `packs/grade-5/social-studies/unit1-lessons-hybrid.html`
- `README.md` → `packs/grade-6/social-studies/unit1-lesson1-location-importance-hybrid.html`
- `README.md` → `packs/grade-6/social-studies/unit1-lesson2-landforms-hybrid.html`
- `README.md` → `packs/grade-6/social-studies/unit1-lesson3-climate-plants-hybrid.html`
- `README.md` → `packs/grade-6/social-studies/unit1-lesson4-environmental-challenges-hybrid.html`
- `README.md` → `packs/grade-6/social-studies/october-test-unit1-hybrid.html`
- `README.md` → `packs/grade-5/science/english-term1/index.html`
- `docs/ministry-book-coverage.md` → `../sources/grade-5/german/revision/2026-10/booklet-answers-exercises-01-22.pdf`
- `docs/ministry-book-coverage.md` → `../sources/grade-5/german/revision/2026-10/october-worksheet.pdf`
- `docs/ministry-book-coverage.md` → `../sources/grade-5/german/revision/2026-10/october-model-answers.pdf`
- `docs/ministry-book-coverage.md` → `../sources/grade-5/science/assessments/chapter-02/`
- `docs/provenance/mathematics-2026-10-19.md` → `../students/grade-6/mathematics/teacher-notes.md`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/grade-6/mathematics/revision/2026-10/October%20Revision%20Sheet.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/grade-6/mathematics/revision/2026-10/Model%20Answer%20-%20October%20Revision%20Sheet.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/grade-6/mathematics/booklets/Prim%206%20Classwork%20Binder%201st%20term%202026-2027.pdf`
- `docs/provenance/mathematics-2026-10-19.md` → `../../sources/grade-6/mathematics/Prim6_Homework_Binder_Term1_2026-2027.pdf`
- `docs/provenance/portal/2026-10-17/downloads.md` → `../../../../sources/shared/school/announcements/2026-10-07-general-assembly.jpeg`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../../../packs/grade-5/english/october-revision.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../../../packs/grade-6/english/october-revision.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../../../packs/class/grade5/english/october-arabic-help.html`
- `docs/provenance/portal/2026-10-19-english/README.md` → `../../../../packs/class/grade6/english/october-arabic-help.html`
- `docs/source-index-2026-10-20.md` → `students/grade-5/handoff-2026-10-20.md`
- `docs/source-index-2026-10-20.md` → `students/grade-6/handoff-2026-10-20.md`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/announcements/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/arabic/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/english/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/german/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/ict/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/religion/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/schedules/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/science/`
- `grade-5/general/docs/README.md` → `../../../sources/grade-5/social-studies/`
- `grade-5/general/docs/README.md` → `../../../packs/grade-5/english/october-revision.html`
- `grade-5/general/docs/README.md` → `../../../packs/grade-5/mathematics/decimal-lab-october-2026.html`
- `grade-5/general/docs/README.md` → `../../../packs/grade-5/revision/october-lessons.html`
- `grade-5/general/docs/README.md` → `../../source-index-2026-10-20.md`
- `grade-5/general/docs/README.md` → `../../../packs/grade-5/german/october-revision.html`
- `grade-5/general/docs/handoff-2026-10-20.md` → `../../source-index-2026-10-20.md`
- `grade-5/german/sync/2026-10-19-german/README.md` → `../../../../packs/grade-5/german/october-revision.html`
- `grade-5/german/sync/2026-10-19-german/README.md` → `../../../../packs/class/grade5/german/october-arabic-help.html`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/arabic/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/english/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/ict/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/mathematics/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/religion/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/schedules/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/science/`
- `grade-6/general/docs/README.md` → `../../../sources/grade-6/social-studies/`
- `grade-6/general/docs/README.md` → `../../../packs/grade-6/english/october-revision.html`
- `grade-6/general/docs/README.md` → `../../../packs/grade-6/mathematics/october-2026.html`
- `grade-6/general/docs/README.md` → `../../../packs/grade-6/revision/october-lessons.html`
- `grade-6/general/docs/README.md` → `../../source-index-2026-10-20.md`
- `grade-6/general/docs/README.md` → `../../provenance/mathematics-2026-10-19.md`
- `grade-6/general/docs/handoff-2026-10-20.md` → `../../source-index-2026-10-20.md`
- `packs/README.md` → `grade-5/english/october-revision.html`
- `packs/README.md` → `grade-6/english/october-revision.html`
- `packs/README.md` → `class/grade5/english/october-arabic-help.html`
- `packs/README.md` → `class/grade6/english/october-arabic-help.html`
- `packs/README.md` → `grade-5/german/october-revision.html`
- `packs/README.md` → `class/grade5/german/october-arabic-help.html`
- `packs/README.md` → `grade-5/revision/october-lessons.html`
- `packs/README.md` → `grade-6/revision/october-lessons.html`
- `packs/README.md` → `grade-5/english/october-fieldbook.html`
- `packs/README.md` → `grade-6/english/october-fieldbook.html`
- `packs/README.md` → `grade-5/social-studies/climate-quest.html`
- `packs/README.md` → `grade-5/science/chapter-02-assessment.html`
- `packs/README.md` → `grade-5/social-studies/egypt-coordinates.html`
- `packs/README.md` → `grade-6/science/digestion.html`
- `packs/README.md` → `grade-5/mathematics/decimal-lab-october-2026.html`
- `packs/README.md` → `grade-6/mathematics/october-2026.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-1-bones-and-muscles.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-2-changes-in-seasons.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-3-germination.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/revision-chapters-1-3.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-4-conditions-for-growth.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-5-from-flower-to-fruit.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-6-human-growth-and-reproduction.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-7-animal-growth-and-reproduction.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-8-weather-changes.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/chapter-9-water-cycle.html`
- `packs/README.md` → `grade-5/science/arabic-book-term1/revision-chapters-4-9.html`
- `packs/README.md` → `grade-5/social-studies/unit1-lesson1-astronomical-location-hybrid.html`
- `packs/README.md` → `grade-5/social-studies/unit1-lesson2-landforms-hybrid.html`
- `packs/README.md` → `grade-5/social-studies/unit1-lesson3-climate-hybrid.html`
- `packs/README.md` → `grade-5/social-studies/october-test-unit1-hybrid.html`
- `packs/README.md` → `grade-5/social-studies/october-test-unit1-english.html`
- `packs/README.md` → `grade-5/social-studies/october-test-unit1-arabic.html`
- `packs/README.md` → `grade-5/social-studies/unit1-lessons-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/unit1-lesson1-location-importance-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/unit1-lesson2-landforms-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/unit1-lesson3-climate-plants-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/unit1-lesson4-environmental-challenges-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/october-test-unit1-hybrid.html`
- `packs/README.md` → `grade-6/social-studies/october-test-unit1-english.html`
- `packs/README.md` → `grade-6/social-studies/october-test-unit1-arabic.html`
- `packs/README.md` → `grade-6/social-studies/unit1-lessons-hybrid.html`
- `sources/README.md` → `grade-6/`
- `sources/README.md` → `grade-5/`
- `sources/README.md` → `shared/`
- `sources/README.md` → `shared/science/grade5/homework-scope.md`
- `sources/README.md` → `shared/science/grade5/textbook.md`

## Mentions of sync/ still in tracked files (not changed in this pass)

- `grade-5/general/docs/README.md`: lines 29

## Not changed in this pass

- Contents of `sources/` and `packs/`, `app/`, `tools/` and `index.html`, apart from links and exact paths that pointed into `sync/`.
- Record values such as `repository_path` keep the paths recorded at snapshot time.
- The `source` field of each index and split file keeps the path the file had before pass 5.
- Earlier pass reports (`RESTRUCTURE-REPORT-*.md`) are logs and keep their wording.
- Deleted files remain in git history.

