# Structure of a study page

Begin with the actual booklet page, learning goal and answer key. The page teaches the lesson, lets the learner try the book’s exercises with support, then checks what the learner can do independently. The [authoring guide](../../docs/authoring.md) gives the engine data format. [Summit Words](../../murad/english/assessments/2026-11-17-vocabulary-quiz/summit-words.html) shows the standalone version with a vocabulary lesson, booklet page 15 and a practice quiz.

## What the learner sees

| Part | Contents and behavior |
| --- | --- |
| Start and navigation | The booklet’s lesson title, one learning goal, a visible sequence and the current step. Keep the same labels and control positions across steps. |
| Learn · I do | Teach one idea at a time with short literal wording, one worked example and a relevant visual when it explains the idea. Preserve the source for each fact. The learner controls read-aloud. |
| Guided practice · We do | Use the booklet’s own exercises and order. Present a prompt, offer a calm hint or explanation when needed, then allow another try. Keep the first attempt in the record. |
| Independent check · You do | Present one MCQ or True/False item at a time. Each scored item has one correct choice and a source-backed key. Use buttons that work by touch and keyboard. Keep answers concealed until the learner acts. |
| Finish and resume | Show the independent result, items to revisit and a clear next action. Pause and return to the correct step. A later correct retry leaves the recorded first attempt intact. |
| Parent notes and sources | List the source files and pages, original wording for converted items, worked-out keys and items for a parent to check. Keep these notes out of the question by default. |

## Where the files go

| Deliverable | Repository location and example |
| --- | --- |
| Shared-engine lesson | `app/lessons/<child>/<subject>/`. Register the lesson script in `index.html`. Use [Grade 6 ICT](../../app/lessons/murad/ict/theme-01.js) or [Grade 5 ICT](../../app/lessons/gamal/ict/theme-01.js) as a model. |
| Standalone offline practice | A self-contained HTML file under `<child>/<subject>/packs/`. A dated assessment goes in `<child>/<subject>/assessments/<YYYY-MM-DD>-<name>/`. [Standalone pack catalogue](../../docs/study-packs.md) |
| Source books and figures | Use the existing `<child>/<subject>/sources/` hierarchy or the appropriate shared source folder. [Repository structure](../../docs/structure.md) |
| Source map and review | `docs/provenance/<child>/<subject>/<YYYY-MM-DD>-<lesson>.md`. The [science assessment source map](../../docs/provenance/gamal/science/chapter-02-assessment-source-map.md) illustrates how to tie an item back to the book. |

The shared engine’s [learner helpers](../../app/engine/common.js) define three sittings for `murad` and two for `gamal` through `jimmy({...})`. Keep each learner’s content and progress separate. For a subject taught in Arabic use `dir: "rtl"` and Arabic lesson text. Reuse the [engine renderer](../../app/engine/sheet.js) and [styles](../../app/engine/sheet.css) when the page fits an existing engine lesson.

## From source to score

| Answer-key status | What to keep with the item | Behavior on the page |
| --- | --- | --- |
| School key | Item ID, original question, answer and file/page for the question and key | Score once against the recorded answer. Preserve first-attempt evidence when the learner retries. |
| Worked out from the book | The same fields, the exact source definition and a short explanation of the deduction | Score only when the book supports a single answer. Label the key as worked out in the parent notes. |
| Parent check | Item ID, original wording, source/page and the unresolved point | Show the item for review and exclude it from both numerator and denominator. Use `Q.open` in an engine lesson. |

Keep the source question, the displayed version and the correct choice tied to the same item ID. When converting a written question into MCQ or True/False, preserve its meaning and document the original. Keep guided attempts separate from the independent result. Test what happens after a wrong first answer, after a successful retry and after a reload. Progress storage uses a learner/lesson-specific key and handles unavailable `localStorage` with `try`/`catch`.

The [workflow](workflow.md) gives the item checks, browser sizes, accessibility review and evidence needed for publication.
