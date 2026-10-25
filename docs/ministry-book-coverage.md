# Ministry and MLS book coverage — first term 2026–2027

Verified 25 October 2026 (Africa/Cairo). This replaces the earlier unconditional two-Ministry-book requirement: **reuse an adequate MLS explanation book/binder; retrieve the full Ministry assessment book where issued. Retrieve the Ministry textbook when explanation material is missing, incomplete or not a verified current edition.** Worksheets, chapter keys and answered assessment scans do not close a complete clean-book gap.

This is a repository/source audit, not a fresh Toddle sync. Available school originals, dated course/provenance records, release assets and official Ministry catalogues were inspected. Match means agreement with available school topics; it does not establish a new teacher instruction or a verified full-year exam cutoff.

## Coverage inventory

“New assessment” means a complete clean official Ministry PDF. Existing scans/keys remain preserved, and no lesson HTML or progress key is changed.

| Grade | Subject / teaching language | Already available and inspected | Newly archived in this job | Remaining missing or unverified |
|---|---|---|---|---|
| 5 | Science / English | Complete 110-page Ministry textbook and 62-page assessment mirror in restorable parts | Official 65-page assessment original | Prior mirror omits front/back matter compared with the official file; retain its old page mapping unchanged. No book gap for current first-term science. |
| 6 | Science / English | Release asset: 124-page MLS explanatory binder, Chapters 1–10, from burning/respiration/digestion through solutions/metals | Official 65-page assessment | No Ministry textbook needed under the binder rule. Full teacher-assigned cutoff remains governed by Toddle. |
| 5 | Mathematics / English | No full explanatory book/binder located in tracked sources, restore manifest, source catalogue or release assets | Ministry textbook (140 pages) and assessment (74 pages) | Current first-term books acquired; school-specific full syllabus alignment still needs a teacher/source scope beyond the available decimal topic evidence. |
| 6 | Mathematics / English | 206-page MLS classwork binder with explanations and worked examples, plus homework binder; divisibility, factors, GCF/LCM, integers/rational numbers and later algebra/statistics | Ministry assessment (66 pages) | No Ministry textbook needed; binders already supply explanation. |
| 5 | Arabic / Arabic | 131-page school vocabulary/grammar/discussion binder, chapter revision and an 85-page answered textbook extract | Full Ministry textbook (154 pages) and assessment (74 pages) | School binder does not consistently preserve full original reading texts; Ministry text fills this gap. |
| 6 | Arabic / Arabic | 155-page school binder; complete Ministry textbook in existing release asset, verified byte-for-byte against current official download; release assessment scan has handwritten answers | Clean official Ministry assessment (74 pages) | No duplicate textbook stored. Existing textbook is 154 PDF pages. |
| 5 | Social Studies / Arabic | Chapter/assessment answers and partial school images, not a full explanation book | Ministry textbook (98 pages) and assessment (66 pages) | None for these Ministry first-term books; existing school scope remains authoritative. |
| 6 | Social Studies / Arabic | Arab-world location, terrain, climate/vegetation handouts and partial evaluations; no full term explanation book | Ministry textbook (114 pages) and assessment (72 pages) | None for these Ministry first-term books. |
| 5 | Islamic Education / Arabic | Unit 1 school revision only | Ministry textbook (96 pages) | Official assessment catalogue currently lists weekly assessments, not a separate complete assessment book. Not declared nonexistent. |
| 6 | Islamic Education / Arabic | Existing 98-page textbook exactly matches current official 2026–2027 PDF SHA-256; Unit 1 school revision | None — reuse verified original | Official assessment catalogue currently lists weekly assessments, not a separate complete assessment book. |
| 5 | ICT / English | Full MLS English first-term binder DOCX; internal cover says 2026–2027 despite older filename. Lesson explanations, examples and questions; Theme 1 starts Computer Accessories | None | Current official catalogue lists weekly English assessments, not a complete English assessment book; textbook catalogue lists Arabic ICT only. No Arabic substitute archived. |
| 6 | ICT / English | Full MLS English first-term binder DOCX; internal cover says 2026–2027 despite older filename. Theme 1 starts Computer Network Devices | None | Same assessment-book availability limit as Grade 5. No additional Ministry textbook needed for the explanatory binder. |
| 5 | English OL / English | Complete school-supplied 72-page Ministry assessment scan, matching Food, Nature and Culture / My Healthy Body / When Nature Changes; no full OL student text | Current official textbook (113 pages) and clean assessment (74 pages) | Stored separately from AL/Wonders. Existing assessment scan retained. |
| 6 | English OL / English | School OL textbook cover says 2025–2026 (112 pages), assessment cover 2025–2026 (65 pages), plus answered key. Available units: Amazing Places in Egypt / Our Nature / Community Builders | Current official textbook (113 pages) and clean assessment (74 pages), matching those unit topics | Old editions and answer keys preserved as school provenance, not labelled current Ministry originals. |
| 5 | English AL / English | MLS 2026–2027 Wonders fiction, nonfiction, leveled readers, grammar and writing booklets | None | Separate school track. Ministry English OL books do not replace Wonders; no Ministry AL pair assumed. |
| 6 | English AL / English | MLS 2026–2027 Wonders fiction, nonfiction, leveled readers, grammar and writing booklets | None | Same separate AL track. |
| 5 | German / German | October revision, answer sheet and Übungen 1–22 booklet key; worksheet header conflicts with Grade 5 course attribution | None | Exact full assigned course title/edition is not established by these extracts. Official catalogue offers weekly German assessments, not a listed complete Grade 5 German book. Do not import an unrelated book. |
| 6 | German | Excluded by parent instruction | None | Not applicable. |
| 5/6 | Art, Music, PE, Professional Skills and other activity rows | Historical catalogue has blank/preparing activity courses; no verified full school book requirement | None | Assigned course/book/language not established. Do not infer that generic Ministry activity books match the school. |

## Archive and provenance

- [Book manifest, source URLs, checksums, verification and reuse evidence](../sync/2026-10-25-ministry-books/books.json).
- [Official catalogue snapshots](../sync/2026-10-25-ministry-books/catalogues.json): retrieved from the current Ministry textbook and assessment JSON endpoints. These establish what was listed on the retrieval date, not permanent absence of other publications.
- [Existing release assets](https://github.com/Omargamal7/Begoodboy/releases/tag/school-term1-2026) were included in the duplicate audit.
- PDFs retain their exact downloaded bytes. Files larger than 8 MiB follow the existing `sources/.parts/<sha256>/` plus `sources/large-originals.json` convention. Run `python3 tools/source/restore-originals.py` from the repository root to reconstruct their named PDF paths. Smaller PDFs are stored directly.
- Every new PDF was parsed and rendered across all pages at low resolution to detect broken pages. Covers, opening/content pages, middle and final/imprint pages were sampled visually. Grade, language, first-term identity, official 2026–2027 catalogue provenance and printed edition/imprint were checked. Exact page counts and hashes are in the manifest.
- An official full original replacing an older answered scan, stripped scan or previous-year book is a distinct source version, not a duplicate. Existing source files and lesson mappings remain unchanged.
- Some PDFs are scans without usable text layers; no OCR or recompression was written into original PDFs.

## Important limits

No live Toddle sync, lesson generation, exam-scope change or new assessment-key validation occurred. No personal records or correspondence were added. Catalogue availability and the remaining German/course-scope questions stay explicit; there is no claim that every possible school book is now complete.
