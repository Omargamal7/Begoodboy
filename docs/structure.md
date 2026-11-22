# Repository structure

Start with [Jimmy (Gamal), Grade 5A](../gamal/) or [Murad, Grade 6G](../murad/). Each student guide links to every subject and the materials available for it.

| Location | Contents |
|---|---|
| `<child>/<subject>/sources/` | Original school documents and Ministry books. Use an existing source subfolder such as `booklets/`, `ministry/` or `weekly/` when it matches the material. English Ordinary Level Ministry books live under `ordinary-level/ministry/`. |
| `<child>/<subject>/packs/` | Ready-to-open study pages. Class editions live in `packs/class/`. |
| `<child>/<subject>/assessments/` | Dated assessment bundles. The exercise, source extracts, manifest and download archive stay together. |
| `<child>/<subject>/docs/` and `sync/` | Teacher notes and dated Toddle records. General handoffs live in `<child>/general/docs/`. |
| `shared/school/sources/` | School-wide originals that apply to both children. |
| [app/](../app/) | Shared lesson engine, lesson registrations, activity templates and derived assets. The homepage loads the engine directly. |
| [docs/](./) | Study and source catalogues, authoring guidance and provenance. Cross-child Toddle indexes live in [provenance/toddle/](provenance/toddle/). Previous restructuring reports live in [history/restructure/](history/restructure/). |
| [docs/html-workflow.md](html-workflow.md) | Build, check and publish study HTML from school sources. |
| [docs/page-structure.md](page-structure.md) | Learner flow, placement and scoring rules for study pages. |
| [docs/design/](design/) | Current design guidance, research and design decisions. |
| [docs/history/study-research/](history/study-research/) | Archived plans and exploratory study prototypes. |
| [tools/](../tools/) | Builders, source utilities and checks. Local generated exports and QA output go under the ignored root `build/` directory. |

Use `gamal` for Jimmy’s repository paths and `computer` for his and Murad’s school ICT folders. The shared engine has existing `ict` module names and lesson IDs that identify saved progress.

Keep distinct editions, teacher keys, source-page scans and class versions. Before consolidating original documents, compare their full hashes. The [large-original inventory](provenance/large-originals.json) lists the current path, size and SHA-256 of each formerly split original. Earlier Toddle snapshots retain their observation dates, download names and verification receipts.

When moving a file, update the homepage, source links, catalogues, builders and their checks together. Run the commands in the [tools guide](../tools/README.md) before publishing to `main`.
