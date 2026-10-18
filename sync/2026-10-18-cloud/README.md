# Toddle archive recovery — 18 October 2026

This checkpoint adds verified original files recovered through the signed-in Cloud Browser. The 17 October archive and the earlier 18 October sweep remain intact.

## Verified file coverage

- 49 local originals verified by size, SHA-256, and Git blob hash.
- 17 files match existing repository blobs; two more match existing release assets.
- 30 additional originals, totaling 141,215,224 bytes, are preserved in this update.
- Seven larger originals are stored in verified binary parts. All seven were reconstructed locally and their full original SHA-256 hashes passed.
- The earlier sweep's 23 named attachment gaps are reconciled in `resolved-gaps.json`.

Originals are unchanged. A newer Primary 5 weekly assessment PDF differs from the already archived schedule, so both versions are retained.

## Organization and recovery

- [Combined source catalogue](../catalog.json): existing source files, release assets, and recovered originals.
- [Verified file manifest](attachments.json): byte counts, hashes, paths, and storage receipts.
- [Large-original manifest](../../sources/large-originals.json): each original's ordered parts and checksums.
- [Previous sweep](../2026-10-18/README.md) and [17 October snapshot](../2026-10-17/README.md): historical provenance.

After downloading the repository, restore the seven larger source files with:

```sh
python3 tools/source/restore-originals.py
```

The command validates every part and the completed original, and refuses to replace a different existing file.

## Remaining full-sync work

This is a verified attachment recovery checkpoint. It does not claim a complete structural Toddle export. The school announcement feeds were inspected through their oldest loaded notices (44 for Gamal and 43 for Murad, August–October 2026), and the parent inbox showed the same single Aisha Zaky conversation for either child, with no attachment visible. Full announcement text records, all assignment details, portfolio media, timetable/calendar records, and the remaining account surfaces still require a structured completeness check.

No messages, submissions, grades, or settings were edited in Toddle. Opening a record may affect Toddle's automatic read indicators; no explicit read-state control was used.
