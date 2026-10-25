# Murad Primary 6 Science — two-source reconciliation status (25 October 2026)

Status: **INCOMPLETE — not a verified two-book source map or completed HTML release.**

## Verified MLS binder
- Archived original: `school-term1-2026/murad-science-primary-6-first-term-binder.pdf` (release asset).
- Recorded SHA-256: `25336920caa1d2c7e9fd2c65265dd2fd54f789909d39593bd550b5d878f4f999`.
- [Existing 22-lesson MLS source map](all-lessons-source-map.md) gives **printed binder page numbers** for explanation, exercises, answer steps, and per-question evidence.
- [Digestion audit](digestion-source-map.md) identifies 12 October assignment, pages 20–23, and an unretrieved separate Toddle activity.
- Binder page 67 belongs to 10-2; page 111 to 7-2. Page 124 blank. Safety/tools pages 70–71 separate.
- **PDF page indices** have not been independently reconciled for the Ministry book. Never substitute printed page numbers with PDF indices.

## Ministry assessment and school materials — source presence, NOT verified question mapping
The [25 October course-plan inventory](../../../sync/2026-10-25/course-plans.md) lists:
- `performance task and Assessments science g6 1st term 2027` (PDF), under Science > First term booklet.
- Model answers: Monthly Exam 1; weekly assessments 2nd, 3rd, 4th; assessment-book homework pages 4–5, 9, 14–15, 19; chapter 1/2/3 homework.
These entries establish that resources are *listed in Toddle*, not that their complete PDF bytes are archived in Git, that their content has been inspected, or that the printed pagination and 2026–27 edition have been checked. **Do not label any Ministry question as verified or fabricate its text/answer.**

## Reconciliation table (MLS printed pages; Ministry mapping pending)
| Lesson | MLS explanation pp. | MLS exercises pp. | Ministry Homework Performance | Ministry classroom / weekly / monthly | School assignment scope |
|---|---|---|---|---|---|
| 1-1 How Do Things Burn and Air? | 2, 3, 4 | 73, 74 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 1-2 The Role of Oxygen | 5, 6 | 75, 76, 77 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 1-3 Air After Burning | 7, 8, 9, 10, 11, 12 | 78, 79, 80, 81 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 2-1 How Breathing Works | 14, 15 | 82, 83 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 2-2 How Do Lungs Work? | 16, 17, 18 | 84, 85 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 3-1 Digestion and How Does It Work? | 20, 21, 22 | 86, 87 | Unverified | Unverified; shared tests must remain multi-lesson | 12 Oct: binder pp. 20–23; separate activity missing |
| 3-2 The Function of the Saliva | 23 | 88, 89 | Unverified | Unverified; shared tests must remain multi-lesson | 12 Oct: binder pp. 20–23; separate activity missing |
| 3-3 Absorption and the Importance of the Liver | 24, 25 | 90, 91, 92 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 4-1 Heart and Blood | 27, 28, 29, 30 | 93, 94, 95 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 4-2 How Do Kidneys Work? | 31, 32 | 96, 97 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 4-3 Various Organs | 33, 34, 35 | 98, 99 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 5-1 Sunlight and Starch | 37, 38, 39 | 100, 101, 102 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 5-2 Gas Exchange | 40, 41 | 103, 104, 105 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 6-1 Transpiration | 43, 44 | 106, 107 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 6-2 The Path of Water | 45, 46, 47, 48 | 108 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 7-1 Food Chain | 50, 51 | 109, 110 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 7-2 Living Organisms, Air, and Water | 52 | 111, 112, 113 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 8-1 Desert and Nile Food Chains | 53, 54, 55, 56 | 114, 115 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 9-1 Grouping Solutions | 58, 59 | 116, 117 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 9-2 What is Dissolved in Solutions? | 60, 61, 62, 63 | 118, 119, 120 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 10-1 Aqueous Solutions and Metals | 65, 66, 68 | 121, 122 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |
| 10-2 What is Left After Evaporation? | 67, 69 | 123 | Unverified | Unverified; shared tests must remain multi-lesson | Unverified |

## Build status and next steps
- Existing offline lessons: `app/lessons/murad/science/chapter-01.js` … `chapter-10.js`, generated by `node tools/build/science.js`. Existing standalone export is under ignored `build/packs/murad/science/`. These are **MLS-only** and must not be represented as combined Ministry + MLS chapters.
- Retrieve original Ministry assessment PDF and teacher answer PDFs from authorized Toddle course-plan attachments; inspect edition, printed pagination, PDF page indices, and homework/classroom/test boundaries.
- Map each *actual* Ministry question to lesson(s) and record source, answer evidence and shared test scope. Keep teacher answers separate from independent assessment.
- Only then implement chapter selectors, Explanation / Homework / Exercises & Models / Sources & Review tabs, offline answer storage/export, read-aloud, and source-linked feedback. Preserve current lesson IDs and source files.
- Validate offline on mobile/tablet/desktop, source links, answer persistence/export and model overlap before claiming complete.
- This inventory is a read-only audit of existing sources; no new HTML or test suite execution is claimed.
