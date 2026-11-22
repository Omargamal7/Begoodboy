#!/usr/bin/env python3
"""Build Grade 6’s November grammar page: inline grammar-data.json into template.html.

Usage (from the repository root): python3 -I tools/grammar-blocks/build.py
Output: grade-6/english/assessments/2026-11-26-grammar-test/grammar-blocks.html (one self-contained file)
"""
import json, os

root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
folder = os.path.join(root, "grade-6/english/assessments/2026-11-26-grammar-test")
data = json.load(open(os.path.join(folder, "grammar-data.json"), encoding="utf-8"))
tpl = open(os.path.join(os.path.dirname(__file__), "template.html"), encoding="utf-8").read()
blob = json.dumps(data, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
assert tpl.count("/*DATA*/") == 1
out = os.path.join(folder, "grammar-blocks.html")
open(out, "w", encoding="utf-8").write(tpl.replace("/*DATA*/", blob))
print("wrote", os.path.relpath(out, root))
