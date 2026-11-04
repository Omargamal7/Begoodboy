#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob dotglob
R=RESTRUCTURE-REPORT-2.md; { echo "# Restructure pass 2"; echo; } > $R
sn() { [ "$1" = "ict" ] && echo computer || echo "$1"; }
mvtree() { # move every file under $1 into $2 keeping relative paths
  [ -e "$1" ] || return 0
  if [ -f "$1" ]; then mkdir -p "$2"; git mv -k "$1" "$2/"; else
  (cd "$1" && find . -type f) | while read -r f; do f=${f#./}; mkdir -p "$2/$(dirname "$f")"; git mv -k "$1/$f" "$2/$f"; done; fi
  echo "- moved \`$1\` -> \`$2\`" >> $R; }
cptree() { [ -e "$1" ] || return 0; mkdir -p "$2"; cp -r "$1"/. "$2"/; git add "$2"; echo "- copied \`$1\` -> \`$2\`" >> $R; }
# 1) per-kid docs/<subject> -> <kid>/<subject>/docs
for kid in murad gamal; do
  for d in "$kid/docs"/*; do b=$(basename "$d")
    if [ -d "$d" ]; then mvtree "$d" "$kid/$(sn "$b")/docs"; else mvtree "$d" "$kid/general/docs"; fi
  done
done
# 2) class packs: grade6 -> murad, grade5 -> gamal
for pair in "grade6 murad" "grade5 gamal"; do set -- $pair
  for d in "packs/class/$1"/*; do b=$(basename "$d")
    if [ -d "$d" ]; then mvtree "$d" "$2/$(sn "$b")/packs/class"; else mvtree "$d" "$2/general/packs/class"; fi
  done
done
# 3) shared sources -> copied into both kids, then removed
for d in sources/shared/*; do b=$(basename "$d")
  for kid in murad gamal; do cptree "$d" "$kid/$(sn "$b")/sources/shared"; done
  git rm -rq "$d"
done
find . -path ./.git -prune -o -type d -empty -print -delete >/dev/null 2>&1 || true
{ echo; echo "## Final tree"; echo '```'; for kid in murad gamal; do find "$kid" -maxdepth 3 -type d | sort; done; echo '```'; } >> $R
cat $R
