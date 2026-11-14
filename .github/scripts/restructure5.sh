#!/usr/bin/env bash
# Pass 5: move sync/ into each child's subject folders. Run from the repository root.
set -euo pipefail
python3 -I .github/scripts/restructure5.py
