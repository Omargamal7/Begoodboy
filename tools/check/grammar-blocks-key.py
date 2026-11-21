#!/usr/bin/env python3
"""Check every scored answer in Murad's November grammar page against the school's model-answer PDF.

Usage: python3 -I tools/check/grammar-blocks-key.py
Needs pypdfium2 (installed by tools/setup-skills.sh). Run from the repository root.

For each item it reads the model-answer page that matches the item's book page (PDF page = book page + pdfOffset)
and confirms that the question with its blanks filled by the answer (the key's "(verb)" hints removed),
or every listed keyFrag, or the whole answer sentence appears on that page.
Items whose key is only shown in red on the page image (keyFrag ["img"]) are listed for a manual check.
"""
import json, re, sys
import pypdfium2 as pdfium

DATA = "murad/english/assessments/2026-11-26-grammar-test/grammar-data.json"
d = json.load(open(DATA, encoding="utf-8"))
doc = pdfium.PdfDocument(d["meta"]["key"])
off = d["meta"]["pdfOffset"]

def norm(s):
    s = s.replace("’", "'").replace("‘", "'").replace("￾", "-")
    return re.sub(r"\s+", " ", s).strip().lower()

cache = {}
def page_text(book_page):
    if book_page not in cache:
        t = doc[book_page + off - 1].get_textpage().get_text_range()
        t = re.sub(r"\s*\([^)]*\)", "", t)  # drop the "(verb)" hints the key keeps after each answer
        cache[book_page] = norm(t.replace(" wil ", " will "))
    return cache[book_page]

problems, manual, checked = [], [], 0
for part in d["parts"]:
    text = page_text(part["page"])
    if not text.startswith(str(part["page"])):
        problems.append(f"{part['id']}: key page does not start with printed page {part['page']}")
    for it in part["items"]:
        if it.get("parent"):
            continue
        if "___" in it["q"] and not it.get("keyFrag"):
            pieces = [x.strip() for x in it["a"].split("…")]
            if it["q"].count("___") != len(pieces):
                problems.append(f"{it['id']}: {it['q'].count('___')} blanks but {len(pieces)} answer parts"); continue
            filled = it["q"]
            for x in pieces:
                filled = filled.replace("___", x, 1)
            frags = [filled.rstrip(".?!")]
        else:
            frags = it.get("keyFrag") or [it["a"]]
        if frags == ["img"]:
            manual.append(it["id"]); continue
        if it.get("tf") and not it.get("keyFrag"):
            problems.append(f"{it['id']}: True/False item needs keyFrag"); continue
        for f in frags:
            f2 = norm(f)
            # the key writes "won't" and "doesn't" with typographic apostrophes; "wil" typo for "will" on p. 31 #8
            if f2 not in text:
                problems.append(f"{it['id']}: '{f}' not found on key page {part['page']}")
        checked += 1

print(f"checked against key text: {checked}")
print(f"check by eye on the key page image (red answers): {', '.join(manual) or 'none'}")
for p in problems:
    print("problem:", p)
print(f"problems: {len(problems)}")
sys.exit(1 if problems else 0)
