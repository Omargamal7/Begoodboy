### Implementation Gap Assessment

#### (A) Teaching Method & Content

* **Existing Evidence from Begoodboy**: Provides subject-specific offline HTML revision packs for Grades Grade-5 & Grade-6 (e.g., Decimal Lab, October revision checks, Science Arabic-to-English translated modules with auto-checks, tap-to-read bilingual audio) 1-4. However, authored practice checks are newly written practice questions rather than school-issued or empirically validated assessments 5, 6\.  
* **High-Confidence Additions from Research**: Incorporate scaffolded retrieval practice (fill-in-the-gap, stem completion) paired with immediate, high-information corrective feedback (\\\\(d \= 0.99\\\\)) 7-9, systematic Direct Instruction for new concepts (\\\\(d \= 0.56\\\\)) 10, 11, and interleaved math problem types (\\\\(g \= 0.34\\\\)) 12, 13\.  
* **Unverified/Unsupported Assumptions**: Assuming authored quiz completion proves domain mastery or retention 14-16; assuming digital screen reading equals printed paper comprehension (screen reading penalty \\\\(g \= \-0.21\\\\)) 7, 10\.  
* **Most Useful Small Pilot**: Test a 20-item math/science pack comparing immediate vs. 7-day delayed retrieval and feedback to measure retention 17-19.

#### (B) Operational Workflow (School Portal (2026–2027), Provenance, Progress, Parent Role, Scheduling)

* **Existing Evidence from Begoodboy**: Uses snapshot sync sweeps (e.g., Oct 18\) mapping course plans and attachments via catalog.json 20-22. Practice progress is saved locally in localStorage per child (grade-5/grade-6) 5, 6, 23, with explicit parent-check flags for disputed key items 2, 24\.  
* **High-Confidence Additions from Research**: Transition progress tracking from "completion/streaks" to 7-day delayed recall and error-type diagnostics 16, 18, 25; frame parent involvement around autonomy support rather than controlling monitoring (\\\\(r \= \-0.064\\\\) for control) 26, 27; apply simple Leitner-style spacing queues (1, 3, 7, 14 days) 19, 28\.  
* **Unverified/Unsupported Assumptions**: Assuming School Portal (2026–2027) sync is structurally complete or that all attachment gaps are resolved 20-22; assuming parent-led tutoring equals professional tutoring efficacy (\\\\(0.37\\\\) SD vs weaker parent impact) 29, 30\.  
* **Most Useful Small Pilot**: Deploy a parent dashboard tracking 7-day item recall and autonomy-supportive prompts rather than completion streaks 16, 25, 26\.

#### (C) Platform Choice & Architecture

* **Existing Evidence from Begoodboy**: Built as modular, offline-first HTML/JS standalone packs running natively in standard browsers 1, 5, 31; uses local JSON manifests (sources.json, catalog.json) and Node/Python build tools 31-33.  
* **High-Confidence Additions from Research**: Enforce WCAG 2.2 AA accessibility standards (\\\\(\\ge 44\\times 44\\\\) CSS px touch targets) 34-36; implement local-first COPPA/FERPA data minimization (no third-party tracking) 34, 37, 38; organize repositories into /content, /items, /app, /parent 39\.  
* **Unverified/Unsupported Assumptions**: Assuming browser interaction flows pass when Chromium checks were blocked in sandbox testing 40; assuming generative AI ("vibe coding") can produce unverified, unlimited lessons without hallucinating answers 41-43.  
* **Small Pilot**: Benchmark one standalone pack against WCAG 2.2 touch/keyboard criteria and evaluate localStorage state persistence across browser restarts 35, 37, 44\.

### Why a Full Merger or Rewrite Should Wait

1. **Unverified Foundations**: School Portal (2026–2027) coverage remains incomplete with unresolved attachment gaps and unverified course maps 20, 21, 24, while Begoodboy's authored practice checks lack empirical validation for long-term retention 5, 6, 14, 15\.  
2. **Context Shift Risks**: Research proves software efficacy drops dramatically outside supervised classrooms (\\\\(g \= 0.014\\\\) in after-school contexts) 45\.  
3. **Premature Architecture**: Rushing to merge codebases or build complex AI engines before validating core instructional loops, item tagging, and accessibility risks scaling unverified content over proven learning mechanisms 8, 42, 46, 47\.

💡 **Next Step**: Would you like me to draft the specific JSON event schema or a 7-day pilot testing protocol for the math/science retrieval module?  
