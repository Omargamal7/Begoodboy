# German sync · 19 October 2026

## Finished editions

- [Jimmy · Primary 5A](../../packs/gamal/german/october-revision.html)
- [Anonymous class edition with optional Arabic help](../../packs/class/grade5/german/october-arabic-help.html)
- [Private cloud revision](https://german-field-club-october.vividghost16.chatgpt.site)

Both standalone HTMLs contain 212 question parts in 28 sections, six source-grounded lesson reminders and 33 original-page derivatives. The October worksheet includes 56 answer parts; the booklet includes 156 parts across all 22 numbered Übungen. Eight personal/disputed items remain parent checked and automatically unscored.

## Source preservation and caveats

Three exact Toddle PDF originals are in `sources/gamal/german/revision/2026-10/`; [byte hashes and page counts](source-files.json) preserve their identity. Editable content is in `app/activities/gamal/german-revision/`; shared app source is in `app/activities/shared/german-revision/`; source-page derivatives are in `app/assets/gamal/german/`.

The files were posted on 19 October in **prim5 A German**. The worksheet's **6.KLASSE** header conflicts with that course attribution and is flagged throughout. An exact monthly exam cutoff was not verified. Murad's live current-term course list has no German course; no material or pack was guessed for him. See [source observations](../../docs/provenance/german-2026-10-19.md) and [independent visual review](../../docs/provenance/german-2026-10-19-review.md).

Two source conflicts stay manual: October III.8 highlights Ich where neun is the grammatical odd word; booklet Übung22 shows age9 while the school text gives zehn/elf. Personal Übung14 answers use the learner's own details and a parent check.

## Verified cloud copies

- Site project `appgprj_6ad66cc7cd588191909e06cd34942fec`, pushed source commit `f0f1c6b4f80376e59df734514b755638bf15a7b2`.
- Published version `appgprj_6ad66cc7cd588191909e06cd34942fec~appgver_c739d7c41ef08191abf9d4aa0ed1e828`; successful private deployment `appgdep_6ad66e337c608191b892019806d599a5`.
- Standalone Jimmy copy: `libfile_3a3a68e474d48191b3fec82a91e63f0d`.
- Standalone class copy: `libfile_83ec27ce2578819196861ea10a502970`.
- Class HTML contains no child's name, account identifier or saved practice data. No WhatsApp message was sent.

## Validation

`node tools/build/german-revision.js` rebuilds both HTMLs to the same bytes as the cloud versions. `node tools/check/german-revision.js` passes 424 personal/class question flows, source references, attempts, manual checks, retries, draft recovery, language support and storage-disabled fallback. All 24 sentence-order tasks preserve their source token sets. Managed preview was unavailable; browser layout remains unverified.

Every subject covered must be synced to cloud and GitHub, including personal/class editions where created. Source questions and disputed key choices must not be silently replaced with invented answers.
