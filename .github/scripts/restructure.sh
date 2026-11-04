#!/usr/bin/env bash
# Restructure: <kid>/<subject>/{sources,packs}. Leaves app/, sync/, tools/ untouched.
set -euo pipefail
shopt -s nullglob dotglob
REPORT=RESTRUCTURE-REPORT.md
{ echo "# Restructure report"; echo; echo "## Moved"; } > "$REPORT"
move_into() {
  local src="$1" dst="$2"
  [ -d "$src" ] || return 0
  local items=("$src"/*)
  [ ${#items[@]} -gt 0 ] || return 0
  mkdir -p "$dst"
  for it in "${items[@]}"; do git mv -k "$it" "$dst/"; done
  echo "- \`$src/\` -> \`$dst/\`" >> "$REPORT"
}
subj_name() { [ "$1" = "ict" ] && echo computer || echo "$1"; }
for kid in murad gamal; do
  for kind in sources packs; do
    for d in "$kind/$kid"/*/; do
      s=$(basename "$d")
      move_into "$kind/$kid/$s" "$kid/$(subj_name "$s")/$kind"
    done
  done
  move_into "docs/students/$kid" "$kid/docs"
done
find . -path ./.git -prune -o -type d -empty -print -delete >/dev/null 2>&1 || true
{ echo; echo "## Not moved (needs a decision)"; } >> "$REPORT"
for p in sources/shared packs/class sources/.parts sources/large-originals.json sources/README.md packs/README.md docs sync app tools; do
  [ -e "$p" ] && echo "- \`$p\`" >> "$REPORT"
done
{ echo; echo "## New tree"; echo '```'; for kid in murad gamal; do find "$kid" -maxdepth 2 -type d | sort; done; echo '```'; } >> "$REPORT"
cat "$REPORT"
