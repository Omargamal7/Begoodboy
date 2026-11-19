# How to build and review study HTML

The repository already defines twelve stages. Use the table to find the current skill and the evidence to carry into the next stage. The [active pipeline](../../.claude/skills/study-page-pipeline/SKILL.md) contains setup commands, detailed checks and the repository’s publishing target.

| Stage | Work | Skill or reference | Result to carry forward |
| ---: | --- | --- | --- |
| 1 | Find the lesson and extract its text and pictures | `pdf` and `universal-exam-cram-coach` | Actual school or Ministry file, page numbers, text, questions and useful figures. Note different printed and PDF page numbers. |
| 2 | Select design guidance | [Current design guide](../../docs/design/murad-design-guide.md) | Applicable guidance for the learner. The Grade 6 workflow uses the guide for build and review. Its use is optional for Grade 5. Refresh it each term or when the inclusion team gives feedback. |
| 3 | Build the answer key | `universal-exam-cram-coach` | Per-item ID, answer, file/page and status: school key, worked out from the book, or parent check. Only the first two can be scored. |
| 4 | Define the page and what counts as done | `explicit-instruction-sequence-builder` and `agent-protocols:spec-driven-development` | A learning goal, a worked example, guided booklet practice and an independent check. Define one correct answer per scored MCQ or True/False item and an offline phone/tablet target. |
| 5 | Split the page into parts that can be checked | `agent-protocols:planning-and-task-breakdown` | Ordered work for content, teaching, exercises, scoring, visuals, read-aloud, saved progress and parent/source notes. |
| 6 | Build the HTML | `agent-protocols:frontend-ui-engineering` and `dual-coding-designer` | An engine lesson or self-contained HTML file, relevant visuals, user-started read-aloud and progress that tolerates unavailable browser storage. [Page structure and paths](page-structure.md) |
| 7 | Verify every question | `agent-protocols:test-driven-development` | Write the item checker before the interface and rerun it as the page develops. Check source/page, unique items, valid options, exactly one correct option for each scored item, unscored parent checks and answer leakage. Use the design guide’s section 10 for Grade 6. |
| 8 | Test the page in a browser | `playwright-skill` | At 390 × 844 and 820 × 1180, try correct and incorrect answers, retry, reload and check saved progress. Check every step, horizontal overflow and the browser console. |
| 9 | Review code and accessibility | `agent-protocols:code-review-and-quality`, `agentic-council:a11y-audit` and `cognitive-accessibility` | Independent review of answer keys, scoring, persistence, keyboard access and WCAG 2.2 AA. For Grade 6, answer every applicable item from the active guide and record each failed item and its fix. |
| 10 | Write provenance | [Provenance examples](../../docs/provenance/) | Dated note in `docs/provenance/<child>/<subject>/` with file/page references, per-item key status, conversions, outstanding parent checks and checklist findings. |
| 11 | Commit and register the lesson | `agent-protocols:git-workflow-and-versioning` | Commit to `main`. Register an engine lesson in [the home page](../../index.html). List a standalone pack in [the pack catalogue](../../docs/study-packs.md). |
| 12 | Publish the learner link | Built-in Artifact publishing | For the pipeline’s private Artifact edition, open the published link and record it separately from the Git commit. If publishing is unavailable, record that step as pending. |

## Running the checks

For an engine lesson, run `node --check` on its lesson file, then run the repository checker for that learner and subject. This existing Grade 6 ICT lesson shows the exact command shape.

```bash
node --check app/lessons/murad/ict/theme-01.js
node tools/check/lessons.js murad-ict
```

The authoring guide expects `problems: 0` without `note:` lines. For a standalone page, adapt the assertions in the [Climate Quest checker](../../tools/check/climate-quiz.js) to that page’s data and controls. Where applicable, add user-started read-aloud with the [existing utility](../../tools/readaloud/add-readaloud.py). Check visible tabs, retry history and reload behavior in the browser as well. [Repository tools](../../tools/README.md)

The pipeline records that Summit Words rendered at both specified sizes on 19 November without console errors. That record covers rendering. A complete lesson review also records source accuracy, item behavior, accessibility and publication.

## Which skills are available

Five pinned folders directly support source extraction, teaching sequence, visuals, browser tests and cognitive-accessibility review. Two more, `a11y-core` and `kb-cognitive-accessibility`, support the last of these. Read `cognitive-accessibility` manually as the pipeline directs. The [third-party register](../../.claude/THIRD_PARTY_SKILLS.md) gives the exact upstream commits, licences and reasons other candidates were left out.

`pdf`, `deep-research`, `agent-protocols` and `agentic-council` come from the authoring account. When an account-provided skill is unavailable, the active pipeline describes how to perform its stage directly. The November skill search and pinning are complete.
