# English O-Level revision sync · 19 October 2026

Complete personal and class editions cover assessment-book Units 1–3. The exact monthly-exam cutoff is not confirmed by these materials. Grade 6 Unit 3 Lessons 4/5 and its review are marked extra practice.

| Edition | Models | Items | Ready-to-open file |
|---|---:|---:|---|
| Jimmy / Primary 5A | 18 | 302 | [Personal revision](../../packs/gamal/english/october-revision.html) |
| Murad / Primary 6G | 9 | 211 | [Personal revision](../../packs/murad/english/october-revision.html) |
| Grade 5 class | 18 | 302 | [Optional Arabic help](../../packs/class/grade5/english/october-arabic-help.html) |
| Grade 6 class | 9 | 211 | [Optional Arabic help](../../packs/class/grade6/english/october-arabic-help.html) |

The class versions remove pupil names, class-section labels and personal account references. Arabic support covers instructions, grammar reminders, vocabulary and writing points. English assessment prompts and marking alternatives are preserved.

## Sources and provenance

- Primary 5 assessment original: `sources/gamal/english/booklets/Gr5_Assessment_Book_Term1.pdf`; 72 pages, 1,966,329 bytes; SHA-256 `72745f3add1102805f457b07fd0e6e8874c3efb729906a111c08c351bb7bdc0d`.
- Primary 6 assessment original already present unchanged: `sources/murad/english/booklets/Gr. 6 Assessment Book Term 1.pdf`; 65 pages, 7,171,950 bytes; SHA-256 `b74878221f3e4b30c38f63d1cd9dc1585c632bbd41030db6489b4e7426286ed1`; Git blob `7d2094fcf1c6afdb42c8445cc33309acdfcb1a47` matches the uploaded source.
- Personal editable data: `app/activities/gamal/english-revision/data.json` and the corresponding Murad file.
- Class data and Arabic content: `app/activities/class/grade5/` and `grade6/`.
- Shared interface source: `app/activities/shared/english-revision/` and `english-class/`.
- Page-image assets are derived from the supplied originals; the original PDFs remain unchanged.
- Coverage ledgers and source limitations: `docs/provenance/gamal/english/october-coverage.md`, the corresponding Murad ledger, and `docs/provenance/english-editorial-notes.md`.

## Cloud copies

Private revision hub: https://english-field-club-jimmy-murad.vividghost16.chatgpt.site

The cloud Site source commit `7c84a60d31234a8c56f1fa51feb74acbd1a199c1` was published successfully as version 2. All four downloadable HTML files are also saved separately. The four files in `packs/` have the same bytes as those cloud deliverables. See `files.json` for content hashes.

## Verification

- All 27 weekly A/B/C models, all 513 items, all source-page links and all 59 page images are accounted for.
- Personal runtime checks passed for all 513 question flows.
- Class runtime checks passed for all 1,026 flows across English-only and Arabic-help modes, including vocabulary search, language preferences, saved drafts, retry handling and parent review.
- No runtime network dependency is required by the standalone packs.
- Ambiguous source questions remain unscored. Open comprehension and writing need parent review; editorial writing examples are not a teacher's official key.
- Managed browser preview was unavailable due to a container mount failure. Browser rendering is not claimed as verified.

## Rebuild

```sh
node tools/build/english-revision.js
node tools/check/english-revision.js
node tools/check/english-interactions.js
node tools/build/english-class.js
node tools/check/english-class-interactions.js
```

Standing instruction: every subject covered is synced to cloud and GitHub, with editable sources, finished revisions and a dated verification record. Full Toddle collection remains a separate task; this subject-specific sync does not claim complete school-account archival coverage.
