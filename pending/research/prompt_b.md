# Task: Matched live testing of free OpenRouter finalists

## Inputs
FINALISTS (paste from Prompt A's handoff section, with their claims to test):
<paste>

PROVISIONAL PINS AND ROUTING GUIDE:
<paste>

## Step 0: Budget before testing (do this first and report it)
1. Read OpenRouter's current rate-limit docs and query the account's key/limits endpoint if one is documented. Record the per-minute and per-day free limits that apply to *this* account and cite where each number came from. Use no remembered numbers.
2. Run one T1 attempt and one T3 attempt on a single finalist to measure the actual number of API calls per attempt.
3. Estimate the total calls for the full plan (models × tasks × attempts + compatibility runs). If the estimate exceeds the remaining daily quota, cut scope in this order: drop T8, then T7 for non-multimodal jobs, then go from 3 attempts to 2, then drop finalists with High confidence in both ratings. Report the cut plan before running anything.

## Rules
- Use only `:free` IDs exactly as listed. Spend nothing. If any request would incur cost, stop and report.
- **One agent sends all OpenRouter requests, sequentially.** Other agents may build fixtures, check results and write the report, but they don't call OpenRouter. This keeps quota exhaustion from looking like a model failure.
- Pacing: stay under the documented per-minute limit. On a 429, honor the `Retry-After` header if present. Otherwise back off exponentially and allow at most 2 retries. Count every retry.
- Identical inputs, tools, system prompt and temperature (record the value) for every model.
- Record the client name and version and the connection method (native OpenRouter provider, OpenAI-compatible base URL, or router/proxy name).
- Clients that cannot route to OpenRouter (e.g., Antigravity CLI `agy`, which serves Google-hosted models) are out of scope for model tests.

## Test tasks
Build the fixtures once in a scratch directory and reset to a clean copy before each attempt.

- **T1, agentic coding fix:** Python repo (3–5 files) with one bug that spans files; 2 of the pytest tests fail. Success = all tests pass and no tests were modified or deleted.
- **T2, terminal task:** In a generated directory tree, find files matching a condition, compute a summary and write `result.txt` in a fixed format. Success = exact match with the expected output.
- **T3, tool-calling cycle (raw API):** Provide 2 tools. The task requires calling one, using its result, then calling the other. Success = valid calls, correct arguments and a final answer that uses both results.
- **T4, structured output:** Extract fields from messy text into a provided JSON Schema. Success = the output validates *and* the values match the ground truth.
- **T5, code review:** A 60–100 line snippet with 2 planted vulnerabilities and 1 safe decoy. Success = both found and the decoy not flagged.
- **T6, Arabic:** (a) Translate a 150-word English technical paragraph into Modern Standard Arabic. (b) Answer an Egyptian Arabic question in Egyptian Arabic. Rubric, 0–2 each for: terms correct, meaning preserved, register correct. Flag for human spot-check.
- **T7, vision (multimodal finalists only):** A UI/error screenshot with 3 factual questions. Success = 3/3 correct.
- **T8, browser (only if a browser tool exists):** Reach a specified final state on a public test page. Otherwise mark it not tested.

## Client compatibility
For each finalist, run T1 or T2 in each available client: OpenCode, Codex CLI, Claude Code (via a supported router), a generic OpenAI-compatible client, and Hermes Agent if installed. Label each **demonstrated**, **failed** or **not tested**. "Demonstrated" requires a complete multi-step tool cycle.

## Record for every attempt
model ID | task | client+version | attempt # | success Y/N | API calls incl. retries | elapsed wall time | TTFT if available | serving provider (from response metadata) | error code + full message | cause: provider congestion / account quota / model error / client incompatibility / unknown.
Classify causes from the error body. If the body is ambiguous, write unknown and don't guess. Save the raw logs and link them.

## Output
1. Budget report from Step 0 (planned versus actual calls).
2. Results table: model × task, with successes/attempts, median time and main failure cause.
3. Compatibility matrix: model × client.
4. Updated free-endpoint reliability rating per finalist, with the change from Prompt A and the reason.
5. Revised pin list and routing guide. For each pin, confirm, swap or drop it with test-based justification, and flag contradictions with published evidence.
6. Limitations: small sample size, time-of-day effects, skipped tests and quota interruptions.
