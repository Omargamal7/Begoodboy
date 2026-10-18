# Repository structure and migration plan

The root-down audit covered all 330 tracked files at commit `1629f614098b522873f55226e461401b8d481ec3`, about 209 MB. The previous layout mixed school originals with notes under child folders; runtime code with authoring data under `lessons/`; and four offline exports with a legacy redirect at the root. Fifteen tools mixed builds, browser checks, source extraction and generated bookkeeping.

The repository now has six purpose-based folders. The root keeps `README.md`, `index.html` and `.gitignore`.

| Folder | Subfolders and rule |
|---|---|
| `app/` | `engine/` contains the shared engine, styles and common lesson helpers. `lessons/<child>/<subject>/` contains browser lesson registrations. `assets/<child>/` holds derived diagrams and page views. `activities/gamal/climate-quest/` holds the custom activity template, code and data. |
| `sources/` | `<child>/<subject>/` contains original school files. Use `booklets/`, `handouts/`, `worksheets/`, `revision/YYYY-MM/`, `evaluations/`, `weekly/`, `atlases/` and `assessments/` where applicable. Keep the file’s supplied name except where a documented canonical evaluation name removes a duplicate download suffix. `shared/` holds school-wide material. |
| `packs/` | `<child>/<subject>/` contains the four checked-in, ready-to-open, self-contained HTML exports. |
| `docs/` | `students/` holds child guides and teacher notes; `provenance/` holds source maps and answer limitations; `authoring.md` describes how to add lessons. |
| `sync/` | Each date contains summaries, a revision guide, checksums and one canonical `sources.json`. Source bytes live only in `sources/`; metadata points to them. |
| `tools/` | `build/` creates lesson registrations and offline packs; `check/` validates browser flows; `source/` holds extraction tools and the Science authoring inputs. |

## Naming

Use `gamal` for repository paths; Jimmy remains his display name and an accepted nickname. Existing `jimmy-*` lesson IDs are preserved because they identify lessons and saved progress. Use `ict`, `mathematics`, `science`, `social-studies`, `english`, `arabic` and `religion` consistently for subject folders. Do not rename original curriculum editions or infer that a 2025–26 source has become a 2026–27 book.

## What this migration preserves

The main `index.html` stays at the same URL and continues to host the lesson app. Lesson IDs, progress-storage keys, question wording, answers, unscored reasons and the original school bytes remain unchanged. Source links and runtime asset paths are migrated. Release assets remain in their existing GitHub release.

The two overlapping sync manifests are consolidated into `sync/2026-10-17/sources.json`; known URLs, hashes, original download names, page counts and checkpoint metadata are retained. The unused single-lesson redirect and generated Science build summary are removed from tracking. Their history remains available in Git.

## Build outputs and future work

Keep the four published offline exports under `packs/`. The larger 22-lesson Science export, QA screenshots, extracted intermediates and build summaries go under ignored `build/`. Do not add browser screenshots, temporary downloads, `node_modules`, partial files or ZIP copies to the source tree.

All educational updates go directly to `main`, as requested. Validate changes before pushing; a folder move must update builders, browser checks, documentation, metadata and the study menu together. Sync completion remains separate from file-archive completion and lesson-authoring completion.

## Migration validation

All five builders completed. Rebuilding Science a second time produced the same tracked files. JavaScript and Python syntax checks passed for 40 files; 155 local documentation and HTML links resolved. The four offline packs contain valid inline JavaScript and all 23 referenced images are embedded.

A before/after lesson-data comparison preserved all 48 lesson IDs, all 906 question steps, all 41 unscored steps and their reasons, and all 149 image references after normalizing moved paths. All 109 school originals retain their Git blob hashes. The 71 download names still map to 67 unique contents with their recorded metadata.

Browser interaction tests could not launch because the workspace sandbox blocks Chromium sockets. Those tests have not been marked as passed.
