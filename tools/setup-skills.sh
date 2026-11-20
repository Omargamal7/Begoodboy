#!/usr/bin/env bash
# One-command session bootstrap for .claude/skills/study-page-pipeline
# Usage: source tools/setup-skills.sh   (exports CHROMIUM, PW_EXECUTABLE_PATH, PW_HEADLESS)
set -euo pipefail

if [ -x /usr/bin/google-chrome ]; then
  CHROME_BIN="/usr/bin/google-chrome"
else
  CHROME_BIN="$(ls -d /opt/pw-browsers/chromium-*/chrome-linux*/chrome 2>/dev/null | head -1 || true)"
fi

if [ -z "${CHROME_BIN}" ]; then
  echo "Warning: No Chrome/Chromium binary found at /usr/bin/google-chrome or /opt/pw-browsers/." >&2
else
  export CHROMIUM="${CHROME_BIN}"
  export PW_EXECUTABLE_PATH="${CHROME_BIN}"
fi
export PW_HEADLESS=true

pip install --break-system-packages -q pypdfium2
npm install --no-save --no-audit --no-fund playwright
(cd .claude/skills/playwright-skill && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --no-audit --no-fund)

echo "Skill bootstrap complete: CHROMIUM=${CHROMIUM:-unset} PW_HEADLESS=${PW_HEADLESS}"
