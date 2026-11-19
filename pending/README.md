# Pending work on orchestration and study HTML

November 2026 · status checked 19 November. Start with the open work below. A completed report is available to use even while a decision based on it is still open.

## Open work

| Task | What already exists | What would close it |
| --- | --- | --- |
| Reconcile the three study-page reports | The ChatGPT and Gemini reports are archived here. Claude’s guide was source-checked on 19 November and is the guide used by the pipeline. | Compare the remaining claims that would change a page. Record the source and a decision for each, then demonstrate the adopted rules on one dated lesson. [Research comparison](research/README.md) |
| Verify the three-provider Arena run | The design report exists. The repaired controller passed 19 offline tests and a live Gemini → Codex file task in about 78 seconds. | Run a small file task through the controller with Claude participating. Keep the independent verdict, manifest match and final file check. [Arena and Orca handoffs](orchestration/agent-handoffs.md) |
| Verify the Toddle source handoff | The homework skill was saved and a focused one-learner check succeeded. Earlier two-learner dashboard checks covered only part of the workflow. | Verify the full two-learner collection and, separately, the user-started browser → Arena handoff. Record the sections checked, attachment or file/page references and any gaps. [Toddle intake](orchestration/agent-handoffs.md#toddle-source-intake) |
| Compare lead orchestrators | The dated prompt contains the inventory, scoring weights and requested outputs. | Run the same three tasks on the finalists and publish the supported ranking with evidence for each score. [Original comparison prompt](orchestration/model-comparison-prompt.txt) |
| Select specialist free models | The November 18 prompt and some tested pins exist. A completed comparison across the free catalog was not located. | Record a dated catalog, results by task, verified availability and the shortlist. [OpenRouter research brief](orchestration/model-evaluation.md#free-openrouter-specialists) |

## Working references

- [HTML creation in 12 stages](html/workflow.md) — source pages, answer keys, build, tests, review, provenance and publication. Each row names the skill and the evidence it produces.
- [Structure of a study page](html/page-structure.md) — what the learner sees, how scoring and progress work, where the files go and two working examples.
- [Design research](research/README.md) — ChatGPT, Gemini and Claude, with checklist counts and specific choices that still need review.
- [Orchestrator handoffs](orchestration/agent-handoffs.md) and [model evaluation](orchestration/model-evaluation.md) — the November findings, proposed roles and missing acceptance runs.

The [active pipeline](../.claude/skills/study-page-pipeline/SKILL.md) and [seven pinned third-party skill folders](../.claude/THIRD_PARTY_SKILLS.md) were already on `main` on 19 November. The Orca investigation also produced a recommendation. Neither needs another skills search to build the next lesson.
