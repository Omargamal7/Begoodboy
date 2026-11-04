#!/usr/bin/env bash
set -euo pipefail
shopt -s nullglob
R=RESTRUCTURE-REPORT-4.md; echo "# Pass 4" > $R
# 1) release assets -> subject folders
mkdir -p /tmp/rel; gh release download school-term1-2026 -D /tmp/rel
put(){ mkdir -p "$2"; mv "/tmp/rel/$1" "$2/$3"; git add "$2/$3"; echo "- release $1 -> $2/$3" >> $R; }
put murad-arabic-Arabic_Primary6_T1.pdf murad/arabic/sources "Arabic_Primary6_T1_Ministry_Textbook.pdf"
put murad-arabic-ministry-assessments-term1-2027.pdf murad/arabic/sources "Arabic_Primary6_T1_Ministry_Assessments.pdf"
put murad-religion-Islamic_Education_Primary6_T1.pdf murad/religion/sources "Islamic_Education_Primary6_T1.pdf"
put murad-science-primary-6-first-term-binder.pdf murad/science/sources "Science_Primary6_T1_MLS_Binder.pdf"
put murad-social-studies-week3-lesson2-arab-world-terrain.pdf murad/social-studies/sources/weekly "Week3_Lesson2_Arab_World_Terrain.pdf"
# 2) rebuild split science books, verify checksums
B=gamal/science/sources/shared/grade5
join(){ cat "$B/$1"/part-*.bin > "$B/$2"; h=$(sha256sum "$B/$2"|cut -d' ' -f1); [ "$h" = "$3" ] || { echo "SHA MISMATCH $2 $h"; exit 1; }; git rm -rq "$B/$1"; git add "$B/$2"; echo "- rebuilt $B/$2 (sha ok)" >> $R; }
join book-parts Performance_and_Assessments_Grade5_Term1_2026-2027_English.pdf 5b126d64622abd1feec6e9bfd8e09c90ae9ae303d4c43f85e39dc337decc6d72
join textbook-parts Science_Grade5_Term1_2026-2027_English_Textbook.pdf 7d648f8343f7006a75fcae19169ecae4459cb86de834cb5a5a86c3b6222b674b
mkdir -p gamal/science/sources/ministry; git mv $B/* gamal/science/sources/ministry/; echo "- $B -> gamal/science/sources/ministry" >> $R
mkdir -p murad/social-studies/sources/ministry; git mv murad/social-studies/sources/shared/grade6/ministry-2026-2027-term1/* murad/social-studies/sources/ministry/
# 3) move app's original-page data into each kid's english
for k in murad gamal; do f=app/assets/$k/english/assessment-pages.json; [ -f $f ] && { git mv $f $k/english/sources/assessment-pages.json; echo "- $f -> $k/english/sources/" >> $R; }; done
find . -path ./.git -prune -o -type d -empty -print -delete >/dev/null 2>&1 || true
