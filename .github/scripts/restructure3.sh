#!/usr/bin/env bash
set -euo pipefail
for p in murad/science/sources/shared/grade5 gamal/social-studies/sources/shared/grade6 murad/school gamal/school gamal/announcements sources/shared; do
  git rm -rq --ignore-unmatch "$p"; rm -rf "$p"
done
find . -path ./.git -prune -o -type d -empty -print -delete >/dev/null 2>&1 || true
{ echo "# Final tree"; echo '```'; for k in murad gamal; do find "$k" -maxdepth 3 -type d | sort; done; echo '```'; } > RESTRUCTURE-REPORT-3.md
