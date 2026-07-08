# Multiple-Choice Exercise Audit

## Methodology

The app has two separate populations of `type: 'multiple-choice'` exercises in
`src/data/exercises.js`:

- **In-topic MC (219 exercises)** — inside the main `exercises` object, one array per
  grammar topic. Fields: `question` (all 219 use `question`, none use `template`),
  `options: [4 strings]`, `answer: <string>`, `diffLevel: 1`. No `level` field
  (verified: 0/219 carry one). Rendered by `src/views/ExerciseView.js`.
- **Assessment MC (30 exercises)** — in the separate `assessmentExercises` array
  (ids `as01`…`as30`), used once at profile creation. Fields: `question`,
  `options: [4 strings]`, `correct: <index 0-3>`, `answer: <string>`, `level: A1/A2/B1/B1+`.

### The core programmatic check (Dimension 1)

For the **in-topic** items the rendering path is a trap. The option button carries
`data-value="<option string>"` (ExerciseView.js line 388); on submit `getInputAnswer`
(line 546-548) reads that string and passes it through the **same generic `checkAnswer`
normaliser** (line 1007) used by every free-typed exercise type — lowercase, trim,
accent-strip, punctuation-strip, whitespace-collapse, contraction-expansion,
article-stripping, slash-variants, synonym table — and compares it to `ex.answer`
(plus `acceptedAnswers`/`alternatives`). There is **no index-based path**: the clicked
string must *normalise-match* `ex.answer`, or **no option is ever accepted and the
exercise is unsolvable**.

I verified this mechanically for all 219 in-topic items with a Node script
(`node _mc_audit.mjs`) that re-implements the ExerciseView normaliser, normalises
`answer`, and confirms it string-matches at least one normalised `option` (with the
article-strip fallback the checker also applies). I also checked: missing
`question`/`options`/`answer`; `options` length ≠ 4; duplicate option strings; duplicate ids.

For the **30 assessment** items (rendered by index, not through `checkAnswer`) the
analogous integrity check is: `correct` in range 0-3, `options[correct] === answer`,
no duplicate option strings, exactly one defensible correct option.

Dimension 1 was run exhaustively (no sampling). Dimensions 2-4 were read through in full;
widespread patterns are summarised with counts rather than exhaustively tabulated.

---

## Dimension 1 — Correct functioning (data integrity)

**Answer-not-in-options: ZERO findings across all 219 in-topic exercises.** Every `answer`
normalise-matches one of its `options`. No missing `question`/`options`/`answer` fields;
every in-topic item has exactly 4 options; no duplicate ids.

**Assessment: ZERO integrity findings.** All 30 have `correct` in range, `options[correct]
=== answer` for every item, no duplicate option strings, no duplicate ids, no missing fields.

The only Dimension-1 issue is **duplicate distractor strings** in 3 in-topic items — the
same wrong word is listed twice, so the learner effectively sees only 3 distinct options
(the answer is still selectable, so not fatal, but it is a data-quality bug and one intended
distractor is lost):

| id | line | question | options | answer | issue | suggested fix |
|----|------|----------|---------|--------|-------|---------------|
| pl_1_03 | 2395 | One knife → two ___ | `["knifes","knives","knifes","knife"]` | knives | `"knifes"` duplicated (idx 0 & 2); only 3 distinct options | Replace one `"knifes"` with a new distractor, e.g. `"knive"` or `"knifves"` |
| pl_1_05 | 2397 | One sheep → two ___ | `["sheeps","sheepes","sheep","sheeps"]` | sheep | `"sheeps"` duplicated (idx 0 & 3); only 3 distinct options | Replace one `"sheeps"` with e.g. `"sheeps'"` or `"sheepen"` |
| comp_1_02 | 3065 | This film is ___ than the other one. | `["more interesting","interestinger","most interesting","interestinger"]` | more interesting | `"interestinger"` duplicated (idx 1 & 3); only 3 distinct options | Replace one with e.g. `"interestinger"` or `"much interesting"` |

---

## Dimension 2 — Answer accuracy / ambiguity (more than one defensible option)

The vast majority of items have a single unambiguously-correct option. Confident findings
where **a second option is also defensibly correct**, making the item unfair:

| id | line | question | options | keyed answer | issue | suggested fix |
|----|------|----------|---------|--------------|-------|---------------|
| cond_1_01 | 2842 | If you heat water to 100°C, it ___. | `["boils","will boil","would boil","boiled"]` | boils | Both **zero conditional** ("it boils") and **first conditional** ("it will boil") are fully correct English. `"will boil"` is a valid distractor-turned-correct → ambiguous. | Change the distractor so only the zero-conditional fits (e.g. replace `"will boil"` with `"is boiling"`), or reword the target to force zero conditional. |
| fts_1_03 | 3709 | ___ you help me? | `["Will","Would","Shall","Are"]` | Will | "**Will** you help me?" and "**Would** you help me?" are both correct requests; *Would* is arguably more polite/natural. Two correct options → ambiguous. | Replace `"Would"` with an unambiguously-wrong auxiliary (e.g. `"Do"`), or move to a context that excludes *would*. |
| as22 | 1906 | "He was home all evening, so he ___ the accident." | `["can't have seen","couldn't have seen","mustn't have seen","didn't see"]` | couldn't have seen | At least **three** options are defensible: *couldn't have seen* and *can't have seen* are both standard past-impossibility deductions, and *didn't see* is a plain, perfectly logical factual statement ("so he **didn't see** the accident"). Genuinely ambiguous. | Drop `"can't have seen"` and `"didn't see"` as options; replace with clearly-wrong forms (e.g. `"can't see"`, `"hadn't seen"`) so only the modal-deduction answer fits. |

Milder / borderline (grammatically a second reading exists, but the keyed answer is the
clearly-intended/idiomatic one — listed for completeness, lower priority):

| id | line | question | keyed answer | note |
|----|------|----------|--------------|------|
| art_1_01 | 2342 | ___ elephant never forgets. | an | Generic **"The elephant never forgets"** (generic definite article) is also grammatically valid, so `"the"` is a defensible option. The idiom uses *an*, but the item technically has two correct readings. |
| fts_1_05 | 3711 | I ___ call you later. (promesse) | will | First-person **"I shall call you"** is traditionally correct for a promise, so `"shall"` is defensible. Modern usage favours *will* (and the hint disambiguates), so low priority. |

---

## Dimension 3 — Difficulty calibration

**Systemic finding: all 219 in-topic MC are hard-coded `diffLevel: 1`** (verified: the
distribution is `{"1":219}`), and none carry a CEFR `level` field. Yet the content spans
the full A1–B2 range. `diffLevel: 1` therefore carries no real signal — it looks inherited
wholesale rather than assigned per item, exactly mirroring the translate-fr audit's
"all `diffLevel: 3`" finding.

Many items are genuinely A1/beginner (verb *to be*, articles, plurals, prepositions of
time, question words, some/any, possessives). But a large subset tests B1–B2 grammar while
still tagged `diffLevel: 1`. Representative sample of clear mismatches (not exhaustive — the
whole topic set needs recalibration if the field is meant to be meaningful):

| id | line | question | answer | true level | grammar tested |
|----|------|----------|--------|-----------|----------------|
| cond_1_05 | 2846 | If I had known, I ___ told you. | would have | B2 | third conditional |
| tc_1_06 | 3464 | By next year, she ___ the project. | will have finished | B1+ | future perfect |
| fp_1_06 | 3023 | ___ you finished by tomorrow? | Will you have | B1+ | future perfect interrogative |
| fc_1_01 | 2974 | This time tomorrow, I ___ flying to Paris. | will be | B1+ | future continuous |
| ppt_1_01 | 2754 | By the time I arrived, she ___ already left. | had | B1 | past perfect |
| rs_1_04 | 2933 | "I ate lunch." → He said he ___ eaten lunch. | had | B1 | reported speech backshift |
| pv_1_01 | 2886 | The book ___ written by Shakespeare. | was | A2/B1 | passive voice |
| rel_1_02 | 5415 | The book ___ I bought yesterday is very interesting. | which | A2/B1 | relative clauses |

(Whole topics fall into the B1+ band: `pastPerfect`, `futureContinuous`, `futurePerfect`,
`conditionals` items 3-6, `reportedSpeech`, `passiveVoice`.) Suggested fix: assign a real
per-item level or map `diffLevel` from the topic's CEFR band (A1→1, A2→2, B1+→3) instead of a
uniform 1.

**Assessment items (30):** the `level` field (A1×7, A2×9, B1×9, B1+×5) **is broadly
well-calibrated** — the grammar tested matches the stated band throughout (e.g. *to be* at
A1, second conditional / present-perfect-continuous / reported speech at B1, third-conditional
inversion / causative *have* / register at B1+). Only minor quibbles: as08 (past simple
regular) and as09 (present continuous) are labelled A2 but are often taught at A1. No action
needed.

---

## Dimension 4 — Distractor quality

**This is a strength of the set, not a problem area.** The in-topic distractors are almost
uniformly high quality: they are minimal grammatical near-misses that test the exact point at
issue — subject/verb agreement (`goes`/`go`/`is going`/`have`), tense contrasts
(`watched`/`watch`/`has watched`/`watches`), and plausible learner-error non-words that mimic
real French-speaker mistakes (`heavyer`, `goodest`, `interestinger`, `difficulter`,
`childrens`, `theirselves`). These force genuine understanding rather than being eliminable by
length/register/topic.

**Zero findings** of the "distractors so obviously wrong the exercise tests nothing" class.
The closest to weak are a few where distractors are homophone-style traps rather than
grammatical variants (e.g. adv_1_06 `always` vs `all ways`/`all the way`/`all time`), but these
are legitimate — they target the fixed adverb form against literal-translation errors — so they
are **not** flagged.

Assessment distractors are likewise strong (e.g. as30 tests `approval` against the invented
non-words `approvation`/`approbement`/`approvement` — good vocabulary-form discrimination).

Note: for multiple-choice the "accept alternative free-typed answers" dimension does not apply
(the learner picks from a fixed list), so this dimension is assessed purely as distractor
quality per the brief.

---

## Summary

| Dimension | In-topic (219) | Assessment (30) | Total |
|-----------|----------------|-----------------|-------|
| **1 — Integrity: answer-not-in-options** | **0** | **0** (all `options[correct]===answer`) | **0** |
| 1 — Integrity: duplicate distractor strings | 3 (pl_1_03, pl_1_05, comp_1_02) | 0 | 3 |
| 1 — Missing fields / dup ids / wrong option count | 0 | 0 | 0 |
| 2 — Ambiguous (2+ defensible answers) | 2 confident (cond_1_01, fts_1_03) + 2 mild (art_1_01, fts_1_05) | 1 confident (as22) | 3 confident + 2 mild |
| 3 — Difficulty | systemic: **100% uniform `diffLevel:1`** spanning A1–B2; 8 representative B1+ mismatches listed | levels well-calibrated (0 action) | systemic |
| 4 — Distractor quality | strong throughout — **0 weak-distractor findings** | strong — 0 findings | 0 |

**Headline:** The high-value mechanical bug class (answer not matching any option, which would
make an in-topic MC unsolvable) is **completely absent — 0 of 219**. The concrete fixable
findings are 3 duplicate-distractor items (Dimension 1) and 3 confident ambiguity items
(cond_1_01, fts_1_03, as22) plus 2 mild ones. The one systemic issue is the uniform
`diffLevel: 1` on all 219 in-topic items despite the content ranging up to B1+/B2 grammar,
mirroring the translate-fr audit's uniform-difficulty finding. Distractor quality is a genuine
strength and needs no work.
