# Research task: Smallest defensible set of free OpenRouter models to pin (published evidence only)

## Context
I am a technical user running: CLI coding agents, Linux and Android/Termux automation, browser agents, and planner–worker–reviewer multi-agent workflows. I work in English and Arabic. Goal: identify the smallest collection of free OpenRouter model IDs worth pinning, based on published evidence. A separate live-testing phase follows, so also produce a finalist shortlist for testing.

## Guiding questions (answer these first; do not ask me questions)
1. Who has already tested today's free models head-to-head, under the same conditions?
2. Given that evidence, which exact model IDs should I pin?

State the research cutoff date and time (with timezone) at the top.

## Priorities and conflict rules
- Depth priority (if you must trade depth for breadth): (1) agentic coding, terminal/CLI and tool calling; (2) code review and structured outputs; (3) English–Arabic; (4) everything else. Mark any specialization you could not cover as **not covered**. Do not cover it thinly.
- Rank candidates primarily by fitness for priority (1), then by breadth of other specializations covered.
- **Unknown beats estimate.** Use a score only when a source reports it; otherwise write **unknown**. Never infer a number.
- When sources conflict, show both, explain likely causes (version, harness, provider, date) and state which you weight more and why.

## 1. Establish the live inventory
- Starting inventory: the attached `free_models_<date>.json`, a snapshot of https://openrouter.ai/api/v1/models?output_modalities=all (the `output_modalities=all` parameter matters; the plain endpoint omits non-text models). **If the file is missing, fetch that URL yourself and say so.** Cross-check https://openrouter.ai/models?variant=free and report discrepancies.
- Scope: the `:free` IDs plus `openrouter/free`. Some unsuffixed models show `"prompt":"0","completion":"0"` but are billed per image, video, second or request. Do **not** treat those as free unless OpenRouter's model page confirms $0.
- Split the `:free` IDs into **chat/agent models** (text output, which you rank) and **utility models** (embeddings, rerank, speech, image, "decisions"). List the utility models in the appendix, but don't rank them unless one serves a job of mine.
- Flag temporary promotions and published expiration dates.
- For every chat/agent ID, record: verified release date, input/output modalities, context length, max output tokens, tool calling, structured outputs, serving providers, and provider data/logging/training policy where published.
- Record current account-level free quotas, provider limits and credit-purchase requirements (including what a purchase changes), citing OpenRouter's current docs. Do not use remembered figures.
- Mark any unavailable data as **unknown**.

## 2. Find and audit existing comparisons first
- Find the strongest independent evaluations that tested several current candidates under identical conditions.
- For each: (a) how many of today's chat/agent `:free` IDs were tested via the free route, out of the total; (b) how many exact model versions were tested via any route. Link original results, datasets, repos or run logs. Articles repeating one benchmark count as one source.
- Search where relevant: Artificial Analysis, LiveBench, SWE-bench (state the variant), Terminal-Bench, Design Arena, tool-calling benchmarks (e.g., BFCL), browser-agent benchmarks, GitHub experiments, Hugging Face, firsthand community reports.
- Recency: endpoint behavior, last 90 days preferred. Capability, exact-version evidence from 2026, then 2025; flag anything older.
- For influential results record: model version, route (free/paid/unknown), provider, test date, benchmark version, harness and tools, sample size, limitations.
- Label each item as an **independent measurement**, a **developer claim** or an **anecdote**.
- Paid-route tests may inform capability. Speed, reliability and compatibility claims about the free route require evidence from the free route itself.
- Successor or renamed models get their own record. They do not inherit their predecessor's scores.

## 3. Evaluate the specializations
| Area | Specializations |
|---|---|
| Reasoning and knowledge | General intelligence, deep reasoning, mathematics, science/engineering, long-context reasoning |
| Software and automation | Coding, multi-file agentic coding, terminal/CLI agents, tool calling, agent orchestration, browser automation, defensive code review and vulnerability detection |
| Information work | Research and citation accuracy, data analysis and visualization, structured outputs, English–Arabic translation and multilingual work |
| Visual and interactive work | Vision for screenshots and documents, UI/frontend implementation, creative design including SVG and graphics |
| Speed | Time to first token, output tokens/second, time to a correct completed result |

- Prefer outcome measures: patch passed tests; browser agent reached the correct final state; output validated against the schema; cited source supports the claim.
- Arabic: say whether the evidence covers Modern Standard Arabic, Egyptian Arabic or other dialects.
- Long context: report the input length at which accuracy was actually tested.
- Termux: note known issues running the relevant clients on Android/ARM, or write unknown.

## 4. Practical reliability (published evidence only; no live tests)
- For finalists, report published compatibility with: generic OpenAI-compatible clients, Codex CLI, Claude Code (via a supported connection or router), OpenCode, Hermes Agent (Nous Research). Include client version and connection method.
- Label each **demonstrated**, **documented only**, **failed** or **unknown**. "Demonstrated" requires a published complete tool-call → tool-result → next-action cycle.
- Give two confidence ratings per finalist, one for **model capability** and one for **free-endpoint reliability** (High / Medium / Low / Insufficient).
- Compare scores only across compatible methods and benchmark versions. Seek two independent sources per major recommendation.

## 5. Output (decision order)
Executive summary first (≤150 words).
1. **Provisional pin list.** Copyable exact IDs. Smallest defensible set; hard cap 12, no minimum. For each, give its primary job, secondary uses, closest alternative, main weakness and what I lose without it.
2. **Best existing comparisons.** Who tested what, how much of today's lineup they covered (X of N) and which conclusions still hold.
3. **Category winners matrix.** Up to three choices per specialization. Mark the best overall, fastest practical and most reliable choice where comparable evidence exists. Include scores, both confidence ratings and citations. Write **insufficient evidence** or **not covered** where appropriate.
4. **Routing guide.** A table mapping each job (coding, review, reasoning, research, browser/terminal automation, lightweight extraction) to a default pin, a free fallback and the condition for switching or waiting. Account for shared account quotas in multi-agent workflows.
5. **Live-testing handoff.** Copyable list of ≤8 finalist IDs. For each, list the claims to confirm or refute, its Low/Insufficient areas and the client(s) to test it in.
6. **Appendix.** Every ID in scope, including utility and redundant models. Cover methods, provider differences, failure patterns, data-policy notes and dated sources for every significant number. Highlight cases where a specialist beats a more popular or higher-index model on my jobs.

Formatting: tables for the inventory, matrix and routing guide; inline cited links with dates; precision over length.
