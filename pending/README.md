# Pending work on orchestration and study HTML

November 2026 · status checked 19 November. **[Read the consolidated report](consolidated-report.md)** for the tested and untested models, skill evidence, HTML workflow, and the decisions where the three design reports differ.

## Open work

| Task | What already exists | What would close it |
| --- | --- | --- |
| Validate the design decisions on a lesson | The consolidated report maps all 169 source checklist entries, documents disagreements and identifies the guide used by the pipeline. | Test the adopted choices on one dated lesson and record the source map, item behavior, access checks and individual settings. [Design decisions](consolidated-report.md#where-the-design-reports-disagree) |
| Verify the three-provider Arena run | The design report exists. The repaired controller passed 19 offline tests and a live Gemini → Codex file task in about 78 seconds. | Run a small file task through the controller with Claude participating. Keep the independent verdict, manifest match and final file check. [Arena and Orca handoffs](orchestration/agent-handoffs.md) |
| Verify the Toddle source handoff | The homework skill was saved and a focused one-learner check succeeded. Earlier two-learner dashboard checks covered only part of the workflow. | Verify the full two-learner collection and, separately, the user-started browser → Arena handoff. Record the sections checked, attachment or file/page references and any gaps. [Toddle intake](orchestration/agent-handoffs.md#toddle-source-intake) |
| Compare lead orchestrators | The dated prompt contains the inventory, scoring weights and requested outputs. | Run the same three tasks on the finalists and publish the supported ranking with evidence for each score. [Original comparison prompt](orchestration/model-comparison-prompt.txt) |
| Select specialist free models | Five phone pins are verified. The report distinguishes local attempts, published benchmark results and catalog-only candidates. | Compare the free routes on source extraction, explanation, HTML and review, then record the justified shortlist. [Model evidence](consolidated-report.md#openrouter-pins-and-test-outcomes) |

## Working references

- [HTML creation in 12 stages](html/workflow.md) — source pages, answer keys, build, tests, review, provenance and publication. Each row names the skill and the evidence it produces.
- [Structure of a study page](html/page-structure.md) — what the learner sees, how scoring and progress work, where the files go and two working examples.
- [Design research](research/README.md) — ChatGPT, Gemini and Claude, with checklist counts and specific choices that still need review.
- [Orchestrator handoffs](orchestration/agent-handoffs.md) and [model evaluation](orchestration/model-evaluation.md) — the November findings, proposed roles and missing acceptance runs.

The [active pipeline](../.claude/skills/study-page-pipeline/SKILL.md) and [seven pinned third-party skill folders](../.claude/THIRD_PARTY_SKILLS.md) were already on `main` on 19 November. The Orca investigation also produced a recommendation. Neither needs another skills search to build the next lesson.
