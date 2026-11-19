# Orchestrator roles, rules and evidence

## Agent Arena and Plurilog

The November comparison considered a sequential CLI controller, browser conversations and a hybrid. It recommended a small CLI controller for local artifacts. Gemini (`agy`) drafts, a different provider reviews, and Claude is available for a writing or reasoning review. The report used independent contributions from Codex, Gemini and Claude. Plurilog supplied a turn-taking idea. Its signed-in implementation and memory behavior were not verified.

The controller proposal has one writer and a read-only reviewer. A task packet carries the brief, acceptance criteria, artifact paths, evidence paths and uncertainties. The reviewer receives a fixed snapshot and returns `approve`, `request_changes` or `escalate`, with findings and checks. A SHA-256 manifest ties that verdict to the exact files reviewed. A changed file requires a fresh verdict. After one correction and one re-review, an unresolved finding goes back to the coordinator.

| Evidence through 19 November | Status |
| --- | --- |
| Offline controller suite | 19 tests passed after the repair, as recorded on 2 November. |
| Live Gemini → Codex | A two-call file task finished in about 78 seconds with an independent file check and approval. This was a small task. |
| Claude participation | Claude contributed to the design investigation. A successful three-provider run through the repaired controller is still unverified. |
| Controller → Toddle | The design specifies a user-started browser handoff. A full live round trip is still unverified. |

## AionUi and Orca

The 19 November read-only investigation recommended AionUi Team Mode’s task board and teammate messages for coordination. The proposed roles were Gemini for source research, Codex for implementation, Claude for review and an independent verifier for the result. An earlier Begoodboy coordination plan uses Claude as the writer and Codex as the read-only reviewer. Pick one writer for a lesson before dispatching work. Both arrangements preserve independent review.

| Need | Proposed choice |
| --- | --- |
| AionUi diagnosis | `aionui-troubleshooting` when the session or tools behave unexpectedly. |
| Evidence before closeout | `verification-before-completion` for the coordinator or verifier, if available in that runtime. |
| Independent tasks | `dispatching-parallel-agents` when inputs and write targets are independent. A shared file or browser session has one owner at a time. |
| MCP and tool access | Check which tools the active session exposes. Source collection needs read access, the nominated writer needs the scoped workspace and the verifier needs the resulting files and checks. Runtime grants for the proposed Orca setup remain unverified. |

The role and skill selections above were investigated as recommendations. The [HTML pipeline](../html/workflow.md) names the skills actually pinned for lesson creation.

## Handoff for one study page

| From → to | What travels | What the recipient verifies |
| --- | --- | --- |
| Coordinator → source collector | Learner folder, subject, lesson scope and requested output | Correct book, printed/PDF page numbers where they differ, wording and any figures. |
| Source collector → page author | Source references, item IDs, answer-key status and unresolved questions | Every scored answer can be traced to a page. A parent-check item stays unscored. |
| Page author → independent reviewer | Exact file or commit, item checker output and phone/tablet test results | Item accuracy, scoring on first try and retry, reload behavior, keyboard access and findings from the applicable checklist. |
| Reviewer → coordinator | Verdict, file identity, checks, findings and remaining gaps | The reviewed files match what shipped. Each unresolved finding has a specific owner or next action. |

An acceptance run for the three-provider route can use a small public lesson fixture. Save the scoped brief, source references, actual participant roles, final file identity, verdict and check output. That evidence closes the controller trial without exposing account or session logs.

## Toddle source intake

The homework skill was saved and a focused one-learner check succeeded. A prior two-learner dashboard check covered assignments only. The full unattended two-learner workflow and the handoff into Arena have separate acceptance criteria.

1. For a collection run, record coverage for each learner and each requested location, including Notifications → Announcements, Inbox and the relevant Course Plan subjects. Capture the task, date if shown, attachment and page or source location. Mark gaps explicitly.
2. For the Arena handoff, start the browser task from the user session, return the source packet to the controller, and verify a cited file and page from that packet. The browser session stays with its owner.
3. Keep the learning material under its existing subject paths. A published provenance note can refer to the source file and page. Keep messages, account details and raw session logs out of public notes. See the [existing Toddle provenance folders](../../docs/provenance/toddle/).
