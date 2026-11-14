#!/usr/bin/env python3
"""Pass 5: move the top-level sync/ folder into each child's subject folders.

Decisions applied (the owner's answers):
  * sync/ leaves the top level.
  * A record for one child and one subject goes to <child>/<subject>/sync/<snapshot>/,
    beside that subject's packs/ and sources/. A child record whose subject has no
    folder goes to <child>/general/sync/<snapshot>/. A record with no child, or one that
    covers both children, goes to docs/provenance/toddle/<snapshot>/ as *.unassigned.*.
  * announcements.md and messages.md are deleted.
  * Narrative notes move whole. Every split source leaves an index file in
    docs/provenance/toddle/<snapshot>/ that says where each record went.
  * Links, and paths that name a moved file exactly, are re-pointed. Other record
    values are left as they were.

Run from the repository root:  python3 -I .github/scripts/restructure5.py
"""
import csv
import io
import json
import os
import posixpath
import re
import shutil
import subprocess
import sys
import urllib.parse
from collections import defaultdict

TOP = 'sync'
DOCS = 'docs/provenance/toddle'
CHILDREN = ('murad', 'gamal')
REPORT = 'RESTRUCTURE-REPORT-5.md'
EXTS_SCANNED = ('.md', '.html', '.htm', '.json', '.csv', '.txt', '.js', '.py', '.sh')
INDEX_NOTE = ('Pass 5 index. "source" is the path the file had before pass 5. Each record from the '
              'original file now sits in the folder named under "placed". Other values from the '
              'original file are kept under "metadata".')
NOTE_AFTER_TITLE = (
    '# Toddle synchronization\n\n'
    '> Moved here in pass 5 from the old top-level folder. Each split manifest now sits beside the packs and '
    'sources of its subject, in `<child>/<subject>/sync/<snapshot>/`. This folder keeps the '
    'cross-child notes and the `.index.json` file for each split manifest. `.unassigned` files '
    'hold records that name no child, or name both children.\n'
)

SUBJECT_SEG = {
    'arabic': 'arabic', 'english': 'english', 'german': 'german', 'religion': 'religion',
    'mathematics': 'mathematics', 'science': 'science', 'social-studies': 'social-studies',
    'computer': 'computer', 'ict': 'computer', 'schedules': 'schedules',
    'revision': 'revision', 'school': 'school', 'announcements': 'announcements',
}
SUBJECT_EXPLICIT = {
    'english al': 'english', 'english ol': 'english', 'english o. level': 'english',
    'english-ordinary-level': 'english', 'social studies': 'social-studies',
    'school-notices': 'school', 'maths': 'mathematics',
}
# Ministry subject labels (Arabic). None means the subject has no folder here.
SUBJECT_AR = {
    'اللغة العربية': 'arabic',
    'اللغة الإنجليزية-لغة أجنبية أولى': 'english',
    'اللغة الألمانية-لغة أجنبية ثانية': 'german',
    'التربية الدينية الإسلامية': 'religion',
    'التربية الدينية المسيحية': 'religion',
    'الدراسات الاجتماعية': 'social-studies',
    'الرياضيات باللغة الإنجليزية': 'mathematics',
    'الرياضيات باللغة العربية': 'mathematics',
    'الرياضيات باللغة الفرنسية': 'mathematics',
    'العلوم باللغة الإنجليزية': 'science',
    'العلوم باللغة العربية': 'science',
    'العلوم باللغة الفرنسية': 'science',
    'تكنولوجيا المعلومات والاتصالات باللغة الإنجليزية': 'computer',
    'تكنولوجيا المعلومات والاتصالات باللغة العربية': 'computer',
    'اللغة الفرنسية-لغة أجنبية أولى': None,
    'اللغة الفرنسية-لغة أجنبية ثانية': None,
    'اللغة الإسبانية-لغة أجنبية ثانية': None,
    'اللغة الإيطالية-لغة أجنبية ثانية': None,
    'المكتبات ومهارات البحث': None,
    'مهارات إدارة الأسرة وريادة الأعمال': None,
    'مهارات الزراعة وريادة الأعمال': None,
}
# Grade 5 is Gamal (Grade 5A); grade 6 is Murad (Grade 6G), per the repository's sources README.
GRADE_AR = {'الصف الخامس الابتدائي': 'gamal', 'الصف السادس الابتدائي': 'murad'}
GRADE_NUM = {'5': 'gamal', '6': 'murad'}

# Whole files that move (old path -> new path).
WHOLE = {
    'sync/README.md': f'{DOCS}/README.md',
    'sync/2026-10-17/README.md': f'{DOCS}/2026-10-17/README.md',
    'sync/2026-10-17/downloads.md': f'{DOCS}/2026-10-17/downloads.md',
    'sync/2026-10-17/revision.html': f'{DOCS}/2026-10-17/revision.html',
    'sync/2026-10-17/reports/schedule.md': f'{DOCS}/2026-10-17/schedule.md',
    'sync/2026-10-17/reports/murad-arabic-religion.md': 'murad/general/sync/2026-10-17/murad-arabic-religion.md',
    'sync/2026-10-17/reports/gamal-arabic-religion.md': 'gamal/general/sync/2026-10-17/gamal-arabic-religion.md',
    'sync/2026-10-18/README.md': f'{DOCS}/2026-10-18/README.md',
    'sync/2026-10-18/assignments.md': f'{DOCS}/2026-10-18/assignments.md',
    'sync/2026-10-18-cloud/README.md': f'{DOCS}/2026-10-18-cloud/README.md',
    'sync/2026-10-19-english/README.md': f'{DOCS}/2026-10-19-english/README.md',
    'sync/2026-10-19-german/README.md': 'gamal/german/sync/2026-10-19-german/README.md',
    'sync/2026-10-19-german/source-files.json': 'gamal/german/sync/2026-10-19-german/source-files.json',
    'sync/2026-10-20-downloads/README.md': f'{DOCS}/2026-10-20-downloads/README.md',
    'sync/2026-10-20-live/README.md': f'{DOCS}/2026-10-20-live/README.md',
    'sync/2026-10-20-live/coverage.json': f'{DOCS}/2026-10-20-live/coverage.json',
    'sync/2026-10-20-reconciliation/README.md': f'{DOCS}/2026-10-20-reconciliation/README.md',
    'sync/2026-10-25/README.md': f'{DOCS}/2026-10-25/README.md',
    'sync/2026-10-25/course-plans.md': f'{DOCS}/2026-10-25/course-plans.md',
    'sync/2026-11-11/partial-routines.md': f'{DOCS}/2026-11-11/partial-routines.md',
    'sync/2026-11-11/partial-source-checkpoint.md': f'{DOCS}/2026-11-11/partial-source-checkpoint.md',
}
DELETE = ['sync/2026-10-18/announcements.md', 'sync/2026-10-18/messages.md']
DELETED = set(DELETE)

TEXT_EDITS = {
    'README.md': [(
        '| Toddle synchronization | [sync/](sync/README.md) |',
        '| Toddle synchronization | [docs/provenance/toddle/](docs/provenance/toddle/README.md) · per-subject records in each `<child>/<subject>/sync/` folder |',
    )],
    'docs/structure.md': [
        (
            '| `sync/` | Each date contains summaries, a revision guide, checksums and one canonical `sources.json`. Source bytes live only in `sources/`; metadata points to them. |',
            '| `<child>/<subject>/sync/` | Toddle records split by child and subject, beside `packs/` and `sources/`. Cross-child notes and `.index.json` files live in `docs/provenance/toddle/`. Source bytes stay in `<child>/<subject>/sources/`. |',
        ),
        (
            'The two overlapping sync manifests are consolidated into `sync/2026-10-17/sources.json`;',
            'The two overlapping sync manifests are consolidated into `docs/provenance/toddle/2026-10-17/sources.index.json` and into per-subject `sources.json` files under `<child>/<subject>/sync/2026-10-17/`;',
        ),
    ],
    'docs/provenance/revision-2026-10-19.md': [(
        'The 17 October `sync/2026-10-17/reports/` reports identify source answer-key typos and ambiguous items.',
        'The 17 October reports (`docs/provenance/toddle/2026-10-17/schedule.md`, `murad/general/sync/2026-10-17/murad-arabic-religion.md` and `gamal/general/sync/2026-10-17/gamal-arabic-religion.md`) identify source answer-key typos and ambiguous items.',
    )],
    'docs/provenance/murad/science/ministry-reconciliation-status-2026-10-25.md': [(
        '](../../../sync/2026-10-25/course-plans.md)',
        '](../../toddle/2026-10-25/course-plans.md)',
    )],
}

MD_LINK = re.compile(r'\[([^\]\n]*)\]\(((?:[^()\s]|\([^()\s]*\))+)\)')
HTML_ATTR = re.compile(r'((?:href|src)=")([^"\s]+)(")')
SCHEME = re.compile(r'^[A-Za-z][A-Za-z0-9+.-]*:')
# Paths in the new layout, such as gamal/german/sync/ or <child>/<subject>/sync/. The leftover
# scan ignores them, so it reports only the old top-level sync/ folder.
NEW_LAYOUT = re.compile(r'(?:murad|gamal|<child>)/[\w<>-]+/sync/')
# Pass reports are logs of what each pass did, so they keep their wording.
REPORT_LOG = re.compile(r'^RESTRUCTURE-REPORT-\d+\.md$')

FOLDERS = {}        # child -> names of the directories under that child's folder
MOVES = {}          # old repo path -> new repo path, for every file that moved or was split
PROSE_RE = None
PIECES = []         # (path, text) for every new file a split creates
CLAIMED = set()
MOVED_TEXT = {}     # new path -> final text of a whole file that moved
INPLACE_TEXT = {}   # existing path -> final text, for files that stay and changed
UNRESOLVED = []
SPLIT_LOG = []
STATS = defaultdict(int)


# ---------- reading record fields ----------

def ar_key(text):
    return re.sub(r'[\s\-–_]+', '', str(text or ''))


SUBJECT_AR_KEYS = {ar_key(k): v for k, v in SUBJECT_AR.items()}
GRADE_AR_KEYS = {ar_key(k): v for k, v in GRADE_AR.items()}


def norm_child(value):
    key = str(value or '').strip().lower()
    if key in CHILDREN:
        return key
    if key == 'jimmy':
        return 'gamal'
    return None


def norm_segment(seg):
    if not seg:
        return None
    if seg in SUBJECT_SEG:
        return SUBJECT_SEG[seg]
    for key in sorted(SUBJECT_SEG, key=len, reverse=True):
        if seg.startswith(key + '-'):
            return SUBJECT_SEG[key]
    return None


def norm_subject(value):
    if not value:
        return None
    key = str(value).strip().lower()
    if key in SUBJECT_EXPLICIT:
        return SUBJECT_EXPLICIT[key]
    return norm_segment(key.replace(' ', '-')) or key.replace(' ', '-')


def by_path(path):
    if not path:
        return None, None
    parts = [p for p in re.split(r'[\\/]+', str(path)) if p not in ('', '.', '..')]
    for i, seg in enumerate(parts):
        if seg in CHILDREN:
            subj = norm_segment(parts[i + 1]) if i + 1 < len(parts) else None
            return seg, subj
    return None, None


def by_basename(name):
    for child in CHILDREN:
        if name.startswith(child + '-'):
            rest = name[len(child) + 1:]
            for key in sorted(SUBJECT_SEG, key=len, reverse=True):
                if rest.startswith(key + '-'):
                    return child, SUBJECT_SEG[key]
    return None, None


def pair_explicit(rec):
    child = norm_child(rec.get('child'))
    subj = norm_subject(rec.get('subject'))
    course = str(rec.get('course') or '')
    if child is None and '/' in course:
        c, s = course.split('/', 1)
        child, subj = norm_child(c), norm_subject(s)
    path_child, path_subj = by_path(rec.get('repository_path') or rec.get('path'))
    if child is None:
        child, subj = path_child, path_subj
    elif subj is None and child == path_child:
        subj = path_subj
    return child, subj


def by_field(field):
    return lambda rec: by_path(rec.get(field))


def books_new(rec):
    return GRADE_NUM.get(str(rec.get('grade') or '')), norm_subject(rec.get('subject'))


def books_reused(rec):
    path = rec.get('path')
    if path:
        child, subj = by_path(path)
        if child is None:
            m = re.search(r'grade([56])', path)
            child = GRADE_NUM.get(m.group(1)) if m else None
        if subj is None:
            subj = next((norm_segment(s) for s in path.split('/') if norm_segment(s)), None)
        return child, subj
    url = rec.get('url')
    if url:
        name = posixpath.basename(urllib.parse.urlparse(url).path)
        return by_basename(urllib.parse.unquote(name))
    return None, None


def catalogue(rec):
    return GRADE_AR_KEYS.get(ar_key(rec.get('grade'))), SUBJECT_AR_KEYS.get(ar_key(rec.get('subject')))


# ---------- placement and files ----------

def placement(child, subject, fallback):
    if child is None:
        return 'docs', None
    if subject and subject in FOLDERS.get(child, set()):
        return 'subject', f'{child}/{subject}'
    if fallback == 'docs':
        return 'docs', None
    return 'general', f'{child}/general'


def dest_for(kind, base, snap, name):
    if kind == 'docs':
        stem, ext = posixpath.splitext(name)
        return f'{DOCS}/{snap}/{stem}.unassigned{ext}'
    return f'{base}/sync/{snap}/{name}'


def index_path(src, snap):
    return f'{DOCS}/{snap}/{posixpath.splitext(posixpath.basename(src))[0]}.index.json'


def claim(path):
    if path in CLAIMED or os.path.exists(path):
        raise SystemExit(f'refusing to reuse {path}')
    CLAIMED.add(path)


def add_piece(path, text):
    claim(path)
    PIECES.append((path, text))


def add_index(src, snap, obj):
    add_piece(index_path(src, snap), json.dumps(obj, ensure_ascii=False, indent=2) + '\n')


def read(path):
    with open(path, encoding='utf-8', newline='') as fh:
        return fh.read()


def write(path, text):
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    with open(path, 'w', encoding='utf-8', newline='') as fh:
        fh.write(text)


def run_git(*args):
    subprocess.run(['git', *args], check=True)


def git_out(*args):
    return subprocess.run(['git', *args], check=True, capture_output=True).stdout.decode('utf-8')


def summarize_counts(total, placed):
    unassigned = sum(n for d, n in placed.items() if '.unassigned.' in d)
    return f'{total} records → {len(placed)} destinations, {unassigned} unassigned'


# ---------- splitting ----------

def plan_json(src, snap, lists, fallback):
    name = posixpath.basename(src)
    data = json.loads(read(src))
    root_list = isinstance(data, list)
    if root_list:
        groups = {'<root>': data}
        metadata = {}
    else:
        for key in lists:
            if key not in data:
                raise SystemExit(f'{src}: no "{key}" list')
        groups = {key: data[key] for key in lists}
        metadata = {k: v for k, v in data.items() if k not in lists}
    buckets = defaultdict(lambda: defaultdict(list))
    counts = {key: defaultdict(int) for key in lists}
    scope = {}
    for key, place in lists.items():
        if not isinstance(groups[key], list):
            raise SystemExit(f'{src}: "{key}" is not a list')
        for rec in groups[key]:
            child, subj = place(rec)
            kind, base = placement(child, subj, fallback)
            dest = dest_for(kind, base, snap, name)
            buckets[dest][key].append(rec)
            scope[dest] = 'unassigned' if kind == 'docs' else base
            counts[key][dest] += 1
    for key in lists:
        if sum(counts[key].values()) != len(groups[key]):
            raise SystemExit(f'{src}: records lost while splitting "{key}"')
    for dest in sorted(buckets):
        body = {'source': src, 'scope': scope[dest]}
        if root_list:
            body['records'] = fix_strings(buckets[dest]['<root>'], src, dest)
        else:
            for key in lists:
                if buckets[dest].get(key):
                    body[key] = fix_strings(buckets[dest][key], src, dest)
        add_piece(dest, json.dumps(body, ensure_ascii=False, indent=2) + '\n')
    index = {
        'source': src,
        'snapshot': snap,
        'note': INDEX_NOTE,
        'lists': {key: {'records': len(groups[key]),
                        'placed': dict(sorted(counts[key].items()))} for key in lists},
    }
    if metadata:
        index['metadata'] = fix_strings(metadata, src, index_path(src, snap))
    add_index(src, snap, index)
    merged = defaultdict(int)
    for key in lists:
        for dest, n in counts[key].items():
            merged[dest] += n
    total = sum(len(groups[key]) for key in lists)
    SPLIT_LOG.append((src, summarize_counts(total, merged)))


def plan_csv(src, snap, place, fallback):
    name = posixpath.basename(src)
    with open(src, encoding='utf-8', newline='') as fh:
        rows = list(csv.reader(fh))
    header, body = rows[0], rows[1:]
    buckets = defaultdict(list)
    for row in body:
        child, subj = place(dict(zip(header, row)))
        kind, base = placement(child, subj, fallback)
        buckets[dest_for(kind, base, snap, name)].append(row)
    placed = {}
    for dest in sorted(buckets):
        out = io.StringIO()
        writer = csv.writer(out, lineterminator='\n')
        writer.writerow(header)
        writer.writerows(buckets[dest])
        add_piece(dest, out.getvalue())
        placed[dest] = len(buckets[dest])
    if sum(placed.values()) != len(body):
        raise SystemExit(f'{src}: rows lost while splitting')
    add_index(src, snap, {'source': src, 'snapshot': snap, 'note': INDEX_NOTE,
                          'columns': header, 'rows': len(body), 'placed': placed})
    SPLIT_LOG.append((src, summarize_counts(len(body), placed)))


def plan_lines(src, snap):
    name = posixpath.basename(src)
    lines = [ln for ln in read(src).splitlines() if ln.strip()]
    buckets = defaultdict(list)
    for ln in lines:
        parts = ln.split(None, 1)
        path = parts[1].lstrip('*').strip() if len(parts) > 1 else ''
        child, subj = by_path(path)
        kind, base = placement(child, subj, 'general')
        buckets[dest_for(kind, base, snap, name)].append(ln)
    placed = {}
    for dest in sorted(buckets):
        add_piece(dest, '\n'.join(buckets[dest]) + '\n')
        placed[dest] = len(buckets[dest])
    if sum(placed.values()) != len(lines):
        raise SystemExit(f'{src}: lines lost while splitting')
    add_index(src, snap, {'source': src, 'snapshot': snap, 'note': INDEX_NOTE,
                          'lines': len(lines), 'placed': placed})
    SPLIT_LOG.append((src, summarize_counts(len(lines), placed)))


# ---------- links and paths ----------

def is_local(target):
    return bool(target) and not SCHEME.match(target) and not target.startswith(('#', '/'))


def stale_candidates(path):
    """Where a path from passes 2 and 4 now lives. Used only when that place exists."""
    out = []
    m = re.match(r'^sources/(murad|gamal)/([^/]+)/(.+)$', path)
    if m:
        child, seg, rest = m.groups()
        out.append(f'{child}/{norm_segment(seg) or seg}/sources/{rest}')
    m = re.match(r'^docs/students/(murad|gamal)/(.+)$', path)
    if m:
        out.append(f'{m.group(1)}/general/docs/{m.group(2)}')
    return out


def resolve(abs_old):
    if abs_old in MOVES:
        return MOVES[abs_old]
    if abs_old == TOP or abs_old.startswith(TOP + '/'):
        return None
    if os.path.exists(abs_old):
        return abs_old
    for cand in stale_candidates(abs_old):
        if os.path.exists(cand):
            STATS['stale_link_followed'] += 1
            return cand
    return None


def fix_relative(target, old_file, new_file, moved):
    """Return (new target, status). Status: kept, changed, deleted or unresolved."""
    path_part, sep, anchor = target.partition('#')
    if not path_part:
        return target, 'kept'
    old_dir = posixpath.dirname(old_file) or '.'
    new_dir = posixpath.dirname(new_file) or '.'
    trailing = path_part.endswith('/')
    raw = urllib.parse.unquote(path_part).rstrip('/') or '.'
    abs_old = posixpath.normpath(posixpath.join(old_dir, raw))
    in_sync = abs_old == TOP or abs_old.startswith(TOP + '/')
    if abs_old in DELETED:
        return None, 'deleted'
    if not moved and not in_sync and abs_old not in MOVES:
        return target, 'kept'
    final = resolve(abs_old)
    if final is None:
        if not moved:
            return target, 'unresolved'
        # The target is not in the moved tree. Keep pointing at that same path: the same text
        # would name a different folder once the file sits one level deeper.
        rel = posixpath.relpath(abs_old, new_dir)
        out = urllib.parse.quote(rel, safe='/') + ('/' if trailing else '')
        return out + (sep + anchor if sep else ''), 'unresolved'
    if moved:
        if posixpath.normpath(posixpath.join(new_dir, raw)) == final:
            return target, 'kept'
    elif final == abs_old:
        return target, 'kept'
    rel = posixpath.relpath(final, new_dir)
    out = urllib.parse.quote(rel, safe='/') + ('/' if trailing else '')
    return out + (sep + anchor if sep else ''), 'changed'


def rewrite_links(text, old_file, new_file, moved):
    def md_sub(m):
        label, target = m.group(1), m.group(2)
        if not is_local(target):
            return m.group(0)
        new_t, status = fix_relative(target, old_file, new_file, moved)
        STATS[f'link_{status}'] += 1
        if status == 'deleted':
            return f'{label} (removed in pass 5)'
        if status == 'unresolved':
            UNRESOLVED.append((new_file, target))
        return f'[{label}]({new_t})'

    def html_sub(m):
        target = m.group(2)
        if not is_local(target):
            return m.group(0)
        new_t, status = fix_relative(target, old_file, new_file, moved)
        STATS[f'attr_{status}'] += 1
        if status == 'deleted':
            UNRESOLVED.append((new_file, target + ' (file deleted in pass 5)'))
            return m.group(0)
        if status == 'unresolved':
            UNRESOLVED.append((new_file, target))
        return m.group(1) + new_t + m.group(3)

    text = MD_LINK.sub(md_sub, text)
    return HTML_ATTR.sub(html_sub, text)


def apply_text_edits(path, text):
    for old, new in TEXT_EDITS.get(path, []):
        count = text.count(old)
        if count != 1:
            raise SystemExit(f'{path}: expected one match for an edit, found {count}')
        text = text.replace(old, new)
    return text


def build_prose_re():
    keys = sorted(MOVES, key=len, reverse=True)
    # A path counts when it starts a word, or when it follows "/main/" in a GitHub or raw URL
    # on the main branch.
    start = r'(?:(?<=/main/)|(?<![\w./-]))'
    return re.compile(start + '(' + '|'.join(re.escape(k) for k in keys) + r')(?![\w-])')


def prose(text):
    def sub(m):
        STATS['prose_path_updated'] += 1
        return MOVES[m.group(1)]
    return PROSE_RE.sub(sub, text)


def fix_path_string(value, old_file, new_file):
    if not isinstance(value, str) or not value or len(value) > 300 or '\n' in value:
        return value
    if SCHEME.match(value) or value.startswith(('#', '/')):
        return value
    old_dir = posixpath.dirname(old_file) or '.'
    new_dir = posixpath.dirname(new_file) or '.'
    moved = old_dir != new_dir
    if value.startswith(('./', '../')):
        target = posixpath.normpath(posixpath.join(old_dir, value))
        if target in MOVES:
            final = MOVES[target]
        elif moved and os.path.exists(target):
            final = target
        else:
            return value
        new_value = posixpath.relpath(final, new_dir)
        if new_value != value:
            STATS['record_relative_path_updated'] += 1
        return new_value
    target = posixpath.normpath(value)
    if '/' in value and target in MOVES:
        STATS['record_path_updated'] += 1
        return MOVES[target]
    return value


def fix_strings(obj, old_file, new_file):
    if isinstance(obj, dict):
        return {k: fix_strings(v, old_file, new_file) for k, v in obj.items()}
    if isinstance(obj, list):
        return [fix_strings(v, old_file, new_file) for v in obj]
    if isinstance(obj, str):
        return fix_path_string(obj, old_file, new_file)
    return obj


def check_links(path, text, problems):
    base = posixpath.dirname(path) or '.'
    for pattern in (MD_LINK, HTML_ATTR):
        for m in pattern.finditer(text):
            target = m.group(2)
            if not is_local(target):
                continue
            raw = urllib.parse.unquote(target.partition('#')[0]).rstrip('/') or '.'
            if not os.path.exists(posixpath.normpath(posixpath.join(base, raw))):
                problems.append((path, target))


def scan_leftovers(paths):
    found = {}
    for path in sorted(paths):
        if path.startswith((TOP + '/', '.github/')) or REPORT_LOG.match(path) or not path.endswith(EXTS_SCANNED):
            continue
        if not os.path.isfile(path):
            continue
        try:
            text = read(path)
        except UnicodeDecodeError:
            continue
        hits = [n for n, line in enumerate(text.splitlines(), 1)
                if re.search(r'(?<![\w.-])sync/', NEW_LAYOUT.sub('', line))]
        if hits:
            found[path] = hits
    return found


# ---------- the table of splits ----------

JSON_SPLITS = [
    ('sync/catalog.json', '2026-10-18',
     {'courses': pair_explicit, 'files': pair_explicit}, 'general'),
    ('sync/2026-10-17/sources.json', '2026-10-17',
     {'files': pair_explicit}, 'general'),
    ('sync/2026-10-18/attachments.json', '2026-10-18',
     {'new_repository_files': pair_explicit, 'reconciled_existing_files': pair_explicit}, 'general'),
    ('sync/2026-10-18/course-plans.json', '2026-10-18',
     {'courses': pair_explicit}, 'general'),
    ('sync/2026-10-18-cloud/attachments.json', '2026-10-18-cloud',
     {'files': by_field('repository_path')}, 'general'),
    ('sync/2026-10-18-cloud/resolved-gaps.json', '2026-10-18-cloud',
     {'files': pair_explicit}, 'general'),
    ('sync/2026-10-19-english/files.json', '2026-10-19-english',
     {'files': by_field('path')}, 'general'),
    ('sync/2026-10-19-german/files.json', '2026-10-19-german',
     {'<root>': by_field('path')}, 'general'),
    ('sync/2026-10-20-downloads/priority-references.json', '2026-10-20-downloads',
     {'files': by_field('repository_path')}, 'general'),
    ('sync/2026-10-25-ministry-books/books.json', '2026-10-25-ministry-books',
     {'new_books': books_new, 'reused_books': books_reused}, 'general'),
    ('sync/2026-10-25-ministry-books/catalogues.json', '2026-10-25-ministry-books',
     {'grade5_and_grade6_textbooks': catalogue, 'grade5_and_grade6_assessments': catalogue}, 'docs'),
    ('sync/2026-10-25/course-plans.json', '2026-10-25',
     {'courses': pair_explicit}, 'general'),
]
CSV_SPLITS = [
    ('sync/2026-10-20-downloads/download-inventory.csv', '2026-10-20-downloads',
     by_field('repository_path'), 'general'),
    ('sync/2026-10-20-reconciliation/pending-originals.csv', '2026-10-20-reconciliation',
     pair_explicit, 'general'),
]
LINE_SPLITS = [
    ('sync/2026-10-17/checksums.sha256', '2026-10-17'),
    ('sync/2026-10-18/checksums.sha256', '2026-10-18'),
]


# ---------- main ----------

def main():
    if not os.path.isdir(TOP):
        # Nothing to move. Leave any report from an earlier run as it is.
        print('sync/ is not present; nothing to do.')
        return 0

    for child in CHILDREN:
        FOLDERS[child] = {n for n in os.listdir(child) if os.path.isdir(os.path.join(child, n))}

    tracked = [p for p in git_out('ls-files', '-z').split('\0') if p]
    sync_tracked = {p for p in tracked if p.startswith(TOP + '/')}
    on_disk = {posixpath.join(r, f) for r, _dirs, files in os.walk(TOP) for f in files}
    accounted = (set(WHOLE) | set(DELETE) | {s for s, *_ in JSON_SPLITS}
                 | {s for s, *_ in CSV_SPLITS} | {s for s, _ in LINE_SPLITS})
    if on_disk != sync_tracked or sync_tracked != accounted:
        raise SystemExit(
            'sync/ does not match the plan: '
            f'untracked={sorted(on_disk - sync_tracked)} '
            f'not_in_plan={sorted(sync_tracked - accounted)} '
            f'missing={sorted(accounted - sync_tracked)}')

    # Every move is known before any text is rewritten, so links resolve against the plan.
    MOVES.update(WHOLE)
    for src, snap, *_ in JSON_SPLITS + CSV_SPLITS:
        MOVES[src] = index_path(src, snap)
    for src, snap in LINE_SPLITS:
        MOVES[src] = index_path(src, snap)
    global PROSE_RE
    PROSE_RE = build_prose_re()

    for src, snap, lists, fallback in JSON_SPLITS:
        plan_json(src, snap, lists, fallback)
    for src, snap, place, fallback in CSV_SPLITS:
        plan_csv(src, snap, place, fallback)
    for src, snap in LINE_SPLITS:
        plan_lines(src, snap)

    for old, new in WHOLE.items():
        claim(new)
        if old.endswith('.json'):
            data = json.loads(read(old))
            MOVED_TEXT[new] = json.dumps(fix_strings(data, old, new), ensure_ascii=False, indent=2) + '\n'
        else:
            text = read(old)
            if old == 'sync/README.md':
                if text.count('# Toddle synchronization\n') != 1:
                    raise SystemExit('sync/README.md: unexpected title line')
                text = text.replace('# Toddle synchronization\n', NOTE_AFTER_TITLE, 1)
            MOVED_TEXT[new] = prose(rewrite_links(text, old, new, moved=True))

    for path in tracked:
        if path.startswith((TOP + '/', '.github/')) or not os.path.isfile(path):
            continue
        if REPORT_LOG.match(path):
            continue
        if path.endswith('.json'):
            try:
                data = json.loads(read(path))
            except (UnicodeDecodeError, ValueError):
                continue
            changed = fix_strings(data, path, path)
            if changed != data:
                INPLACE_TEXT[path] = json.dumps(changed, ensure_ascii=False, indent=2) + '\n'
        elif path.endswith(('.md', '.html', '.htm')):
            try:
                text = read(path)
            except UnicodeDecodeError:
                continue
            rewritten = prose(rewrite_links(apply_text_edits(path, text), path, path, moved=False))
            if rewritten != text:
                INPLACE_TEXT[path] = rewritten

    # ---- execute ----
    for path, text in PIECES:
        write(path, text)
    for old, new in WHOLE.items():
        os.makedirs(os.path.dirname(new) or '.', exist_ok=True)
        run_git('mv', old, new)
        write(new, MOVED_TEXT[new])
    for path, text in INPLACE_TEXT.items():
        write(path, text)
    for path in sorted(sync_tracked - set(WHOLE)):
        run_git('rm', '-q', '-f', path)
    leftover = [os.path.join(r, f) for r, _dirs, files in os.walk(TOP) for f in files]
    if leftover:
        raise SystemExit(f'files still under {TOP}/: {leftover}')
    shutil.rmtree(TOP)

    # ---- verify ----
    for path, text in PIECES:
        if path.endswith('.json'):
            json.loads(text)
    for new in WHOLE.values():
        if new.endswith('.json'):
            json.loads(read(new))
    problems = []
    for path in sorted(set(MOVED_TEXT) | set(INPLACE_TEXT)):
        if path.endswith(('.md', '.html', '.htm')):
            check_links(path, read(path), problems)
    left = scan_leftovers(set(tracked) | set(MOVED_TEXT) | set(INPLACE_TEXT))

    # ---- report ----
    lines = ['# Pass 5: sync/ sorted into child and subject folders', '']
    lines += ['## Deleted', ''] + [f'- `{p}`' for p in DELETE] + ['']
    lines += ['## Narrative notes moved', ''] + [f'- `{old}` → `{new}`' for old, new in WHOLE.items()] + ['']
    lines += ['## Split sources', ''] + [f'- `{src}`: {text}' for src, text in SPLIT_LOG] + ['']
    lines += [f'New files written by the splits: {len(PIECES)}. Each source keeps an index file in '
              f'`{DOCS}/<snapshot>/` that lists where its records went.', '']
    lines += ['## Link and path repairs', '']
    lines += [f'- {key}: {STATS[key]}' for key in sorted(STATS) if 'kept' not in key] + ['']
    lines += ['## Links that could not be followed (still point at the same path as before)', '']
    lines += [f'- `{p}` → `{t}`' for p, t in UNRESOLVED] or ['- none']
    lines += ['']
    lines += ['## Local links in changed files that do not resolve', '']
    lines += [f'- `{p}` → `{t}`' for p, t in problems] or ['- none']
    lines += ['']
    lines += ['## Mentions of sync/ still in tracked files (not changed in this pass)', '']
    lines += [f"- `{p}`: lines {', '.join(str(n) for n in hits[:15])}" for p, hits in left.items()] or ['- none']
    lines += ['']
    lines += ['## Not changed in this pass', '',
              '- Contents of `sources/` and `packs/`, `app/`, `tools/` and `index.html`, apart from links and exact paths that pointed into `sync/`.',
              '- Record values such as `repository_path` keep the paths recorded at snapshot time.',
              '- The `source` field of each index and split file keeps the path the file had before pass 5.',
              '- Earlier pass reports (`RESTRUCTURE-REPORT-*.md`) are logs and keep their wording.',
              '- Deleted files remain in git history.', '']
    text = '\n'.join(lines) + '\n'
    write(REPORT, text)
    print(text)
    return 0


if __name__ == '__main__':
    sys.exit(main())
