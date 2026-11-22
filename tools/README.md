# Build and check tools

Run commands from the repository root. Node tools use the existing Playwright dependency for browser checks; an installed Chromium is required. Checkers accept `CHROMIUM` when an explicit browser executable is needed.

| Task | Build | Browser check |
|---|---|---|
| Main lesson menu | Lesson registrations live in `app/lessons` | `node tools/check/lessons.js` |
| All Grade 6 Science lessons | `node tools/build/science.js` | `node tools/check/science.js` |
| Digestion pack | `node tools/build/digestion.js` | `node tools/check/digestion.js` |
| Climate Quest | `node tools/build/climate-quiz.js` | `node tools/check/climate-quiz.js` |
| Grade 5 Science assessment | `node tools/build/grade-5-science-ch2.js` | `node tools/check/grade-5-science-ch2.js` |
| Coordinates reference | `node tools/build/grade-5-coordinates.js` | `node tools/check/grade-5-coordinates.js` |
| Grade 6 Grammar Blocks (Nov test) | `python3 -I tools/grammar-blocks/build.py` | `node tools/check/grammar-blocks.js` (needs `NODE_PATH=.claude/skills/playwright-skill/node_modules`) and `python3 -I tools/check/grammar-blocks-key.py` |

`source/science/` contains the Science question inputs and page manifest. `source/science-author.js` supplies their authoring helpers. The Science build regenerates `app/lessons/grade-6/science`, its source map and the ignored full export under `build/packs/grade-6/science/`.

The other builders regenerate the corresponding HTML under the corresponding child’s subject folder. Browser screenshots and reports go under ignored `build/qa/`. Source extraction tools are under `source/`; temporary extracted pages belong outside the tracked source tree.

Run `python3 tools/source/restore-originals.py` to verify the 25 large originals against their recorded SHA-256 hashes.
