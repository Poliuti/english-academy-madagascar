# Listening (Dictation) Exercise Audit

## Methodology

The app's `listening` exercises are **dictation** tasks: the app speaks `ex.audio` aloud
(via a pre-recorded WAV keyed in `src/data/audio-map.js`, else live Web Speech API TTS —
see `src/tts.js`), the learner types what they hear, and the typed text is graded by the
shared `checkAnswer` in `src/views/ExerciseView.js` (~L1007) against `ex.answer`,
`ex.acceptedAnswers[]` and `ex.alternatives[]`. `checkAnswer` normalises both sides:
lowercase + trim, accent/ligature stripping, punctuation stripping (**only** `.!?,;:`),
whitespace collapse, two-way contraction expansion, a/an/the article-flexibility, single-token
slash variants, a small `SYNONYMS` table (incl. some British/American spellings), and a
present-perfect `'s = has` fix.

### The headline check: audio vs. answer normalised-mismatch

The defining mechanic of this type is that **the learner hears exactly `ex.audio` and must
reproduce it**, so `ex.audio` and `ex.answer` must be the *same sentence* modulo what the
normaliser already tolerates. If they diverge in **word content** (different verb, number,
missing/extra clause, typo), the exercise is unsolvable: the learner types precisely what
they heard (correct) but is marked wrong because `answer` says something else. This is the
mechanical analogue of the word-order token-mismatch and MCQ answer-not-in-options checks
from prior audits.

I extracted all **183** `type: 'listening'` objects via a Node ES-module import of
`getAllExercises()` (bypassing the mixed single/double-quote, single/multi-line/minified
source formatting), **excluding the separately-audited `listening-comp` type** (82 of those
exist; none included here). For every item I reimplemented the `checkAnswer` normaliser
(lowercase, strip accents, strip `.!?,;:`, collapse whitespace, expand the full contraction
list, plus an article-stripped fallback) and compared `normalize(audio)` against
`normalize(answer)`. Full pass, no sampling. Dimensions 2–4 were reviewed qualitatively
across all 183.

---

## Dimension 1 — Data integrity & the audio/answer mismatch check

**Headline check — audio/answer normalised mismatch: 0 findings.** Every one of the 183
items has `audio` **byte-identical** to `answer` (not merely normaliser-equivalent — literally
the same string). There is not a single divergent verb, number, dropped clause, or typo. This
is the cleanest a batch has been in the series on its headline check.

**Other structural checks (all 183):**

| Check | Result |
|-------|--------|
| Duplicate ids | **0** |
| Missing/empty `audio` | **0** |
| Missing/empty `answer` | **0** |
| `audio` ≠ `answer` after normalisation | **0** |

**Audio-map coverage (informational, not a bug):** **183 / 183** items' `audio.toLowerCase()`
resolve to a pre-recorded WAV in `AUDIO_MAP`. **Zero fall back to live browser TTS.** Full
human-quality-audio coverage.

---

## Dimension 2 — Answer accuracy

**0 findings.** Every `answer` is a natural, correctly-formed English sentence appropriate to
its grammar topic — unsurprising, since each is dictated speech. No typo, wrong verb form,
agreement error, or unnatural phrasing was found across the 183.

Two items are mild comma-splice / run-on style (`con_2_10` *"I need to study therefore I
cannot go out."*; `phv_2_09` *"Please turn on the heating it is cold."*) — colloquially
acceptable as spoken dictation and **not** flagged as errors.

---

## Dimension 3 — Difficulty calibration

**Systemic uniform tagging.** The entire type is blanket-tagged: **182 of 183 items are
`diffLevel: 2`**; the single exception is `cmp08` (`diffLevel: 3`, the only one carrying
`level: 'B1'`). Only **15 items carry a `level` field at all** (A1×10, A2×5, B1×1 — the legacy
alphanumeric-id items); the other **167** (the batch-generated `*_2_*` ids) have no `level`.
This is the same "uniform-by-naming-convention rather than by content" pattern flagged
repeatedly in prior audits, here applied to ~99% of the type.

For a **dictation** task, real difficulty tracks sentence length + vocabulary rarity +
phonological/structural load, and the content spans a genuine A1→B2 range that the flat
`diffLevel: 2` tag erases in both directions:

**Under-tagged (B1–B2 content sitting at level 2):**

| id | line | audio | why higher |
|----|------|-------|-----------|
| fp_2_09 | 3051 | They will have been married for twenty-five years by June. | future perfect continuous + hyphenated number; B2 |
| fp_2_10 | 3052 | By 2025 we will have solved the problem. | future perfect; B2 |
| rel_2_03 | 5493 | The students whose homework was incomplete had to stay after class. | `whose` relative clause, 11 words; B1–B2 |
| ut_2_09 | 4923 | Did she use to play a musical instrument when she was at school? | `used to` interrogative, 13 words; B1 |
| sf_2_10 | 4718 | They had been married for thirty years when he passed away. | past perfect continuous; B1–B2 |

(also cond_2_08 3rd conditional, ppt_2_* past perfect, rs_2_* reported speech, pv_2_* passive.)

**Over-tagged (A1 content sitting at the same level 2):**

| id | line | audio | why lower |
|----|------|-------|-----------|
| imp_2_03 | 3170 | Don't touch that! | 3 words, A1 imperative |
| adv_2_05 | 3370 | He never eats meat. | 4 words, A1 |
| pl_2_08 | 2424 | Her teeth are very white. | 5 words, A1 |

(also adv_2_04, pl_2_06/09, tobe_2_*, tbi_2_06, prep_2_06, imp_2_04.)

**Suggested fix:** re-grade by dictation load (short A1 sentences → 1; the perfect/continuous/
conditional/relative/reported-speech items → 3), or, if the flat tag is an intentional
"listening = medium skill" design choice, document that `diffLevel` on this type reflects task
modality rather than sentence complexity. Note `cmp08` shows level 3 *is* usable here, so the
uniform 2 is a tagging gap, not a schema limitation.

---

## Dimension 4 — Alternate accepted transcriptions

The learner must reproduce what they heard, so this dimension is narrower than for free-typing
types. But **no** listening item carries any `acceptedAnswers` or `alternatives` (verified: 0
of 183), so every gap below is a hard single-string match. Four genuine classes surfaced.

### 4a. Inaudible em-dash makes an item effectively unsolvable — 1 finding (highest severity)

| id | line | audio / answer | issue | suggested fix |
|----|------|----------------|-------|---------------|
| prn_2_06 | 3692 | He did not do it himself **—** someone helped him. | The em-dash `—` (U+2014) is **not** in the normaliser's strip set (`[.!?,;:]` only). It is inaudible in dictation, so the learner cannot know to type it; typing the natural *"…himself someone helped him"* normalises to `…himself someone…` while the answer keeps `…himself — someone…`, so a correct transcription is **rejected**. | Add `—`/`–`/`-` to the punctuation strip in `checkAnswer`, or add `acceptedAnswers:['He did not do it himself, someone helped him.','He did not do it himself someone helped him.']`. |

### 4b. Hyphenated compound heard as two words — 1 finding

| id | line | audio | issue | suggested fix |
|----|------|-------|-------|---------------|
| fp_2_09 | 3051 | …married for **twenty-five** years by June. | Hyphen is not stripped or space-normalised; a learner typing the equally-correct *"twenty five"* fails to match *"twenty-five"*. | Add `acceptedAnswers` with the space form, or normalise `-`→space. |

### 4c. Spelled-out numbers vs. digits — systemic, ~21 items (stated once, representative list)

The normaliser has **no digit↔word conversion**. In dictation, learners very commonly type
numerals for numbers they hear, which the checker then rejects. Clearest cases where the number
is salient content:

| id | line | audio | plausible learner transcription |
|----|------|-------|--------------------------------|
| n06 | 1423 | My phone number is **zero seven eight**. | "078" / "0 7 8" |
| prs_2_08 | 3569 | Water boils at **one hundred** degrees. | "100 degrees" |
| prep_2_06 | 2537 | The meeting is on Friday at **three**. | "at 3" |
| tm_2_09 | 2831 | He left **ten** minutes ago. | "10 minutes" |
| fp_2_09 | 3051 | …for **twenty-five** years… | "25 years" |

(Same pattern across s08, t07, prs_2_06/07, pl_2_07/10, tbi_2_07, pc_2_09, pp_2_09, tm_2_10,
pv_2_08, imp_2_09, irv_2_04, phv_2_07, sf_2_03/10 — ~21 items with a spelled-out cardinal.)
**Suggested fix:** either add a numeral↔word normalisation step to `checkAnswer`, or add
`acceptedAnswers` digit variants on the number-salient items (n06 especially). Note `fp_2_10`
(*"By 2025…"*) is **fine** — audio and answer both use the digits "2025".

### 4d. British-spelling word not in the SYNONYMS table — 1 finding

Most British/American pairs in the data **are** covered by `SYNONYMS` (`favourite`/`favorite`
L855, `travelling`/`traveling` L851, `apologise`/`apologize` L969) so `adj_2_05`, `int_2_05`,
`fc_2_10`, `pc_2_10`, `cond_2_07` are **safe**. The one uncovered word:

| id | line | audio | issue | suggested fix |
|----|------|-------|-------|---------------|
| pv_2_09 | 2919 | The match was **cancelled** because of the rain. | `cancelled`/`canceled` (homophones, indistinguishable in dictation) is not in `SYNONYMS`; a learner typing the American *"canceled"* is rejected. | Add `['cancelled','canceled'],['canceled','cancelled']` to the `SYNONYMS` table. |

---

## Summary

| Dimension | Items flagged |
|-----------|---------------|
| 1 — Data integrity & **audio/answer mismatch** | **audio/answer mismatch: 0** (all 183 byte-identical). 0 duplicate ids, 0 missing fields. Audio-map coverage 183/183 (0 TTS fallbacks). |
| 2 — Answer accuracy | **0** — every answer is natural, correct English. |
| 3 — Difficulty calibration | Systemic: **182/183 flat `diffLevel: 2`** (only cmp08 = 3); 167/183 lack a `level`. A1↔B2 content spread erased; ~8 clearly under-tagged, ~8 clearly over-tagged (examples given). |
| 4 — Alternate transcriptions | **4 findings:** inaudible em-dash (prn_2_06, unsolvable), hyphen compound (fp_2_09), systemic spelled-number-vs-digit gap (~21 items, no digit conversion), and `cancelled/canceled` missing from SYNONYMS (pv_2_09). No item carries any acceptedAnswers/alternatives. |

**Total listening exercises reviewed: 183 (full pass, no sampling).** The headline mechanical
check — **normalised audio/answer mismatch — is clean at 0** (every pair is literally
identical), as are duplicate-id, empty-field and audio-map-coverage checks. The type is the
most data-solid in the series on integrity. The actionable defects are all in dimensions 3
and 4: the blanket `diffLevel: 2` tagging, and four transcription-acceptance gaps, of which
**prn_2_06's inaudible em-dash is the only genuinely unsolvable item** and the highest-priority
fix.
