# Translate Exercise Audit (FR → EN)

## Methodology

The app's `translate` exercises show a French sentence (`french`) and ask the learner
to type the English translation. The answer is checked by `checkAnswer`
(`src/views/ExerciseView.js`) with normalisation: lowercasing, accent/ligature
stripping, punctuation removal, whitespace collapse, two-way contraction
expansion/contraction (won't↔will not, isn't↔is not, I'll↔I will, etc.), article
stripping (a/an/the ignored), slash-variant matching, a small `SYNONYMS` table
(tired/exhausted, complete/finish, clever/smart/intelligent, difficult→hard,
a lot of/lots of, grey/gray, -ise/-ize spellings, go to bed/sleep …), and a
present-perfect `'s = has` fix. It tests `answer`, `acceptedAnswers[]` and the
legacy `alternatives[]`.

This audit read **all 406** `type: 'translate'` objects (excluding `translate-fr`,
which is a separate type). The full set was extracted to structured JSON and read
end-to-end. For each exercise I checked four dimensions: (1) data integrity,
(2) answer accuracy, (3) difficulty calibration vs `diffLevel`/`level`, and
(4) whether all realistically-correct English renderings are accepted, discounting
anything the normaliser already handles. Only confident findings are listed; marginal
synonym/word-order nitpicks the checker tolerates are omitted.

Two systemic notes before the tables:

- **Article/contraction/synonym coverage is genuinely good.** The great majority of
  the 406 need no change — their `acceptedAnswers`/`alternatives` already cover
  going-to/will, perfect-simple/continuous, British/American spelling, that/which/who,
  dad/father, etc. This is a well-maintained set.
- The bulk of the findings are in **dimension 3**, driven by one structural cause: the
  entire `*_2_*` batch was assigned `diffLevel: 2` by naming convention, regardless of
  the grammar it drills — so B1/B2 structures (passive, reported speech, past/future
  perfect, conditionals) sit at the same tier as A2 present-simple sentences.

---

## Dimension 1 — Correct functioning (data-integrity bugs)

| id | line | french | answer | issue | suggested fix |
|----|------|--------|--------|-------|---------------|
| gt_2_01 | 5685 | Elle va commencer un nouveau travail la semaine prochaine. | She is going to start a new job next week. | `acceptedAnswers` contains a **stray truncated fragment `'She'`** — typing just the word "She" is marked correct. | Remove `'She'` from the array (keep `'She will start a new job next week.'`). |
| gt_2_07 | 5713 | Nous allons essayer ce nouveau restaurant ce soir. | We are going to try this new restaurant tonight. | Same bug: `acceptedAnswers` contains a **stray truncated fragment `'We'`** — typing "We" alone passes. | Remove `'We'` from the array. |
| ut_2_12 | 4933 | Est-ce qu'il y avait une bibliothèque dans ce quartier ? | Did there use to be a library in this neighbourhood? | `acceptedAnswers` includes **`"Was there used to be a library here?"`, which is ungrammatical English** ("Was there used to be" is not valid). Accepting it teaches a wrong form. | Delete that entry; keep `"Did there use to be a library in this area?"`. |

**Count: 3.** No missing `french`/`answer` fields, no empty/garbled answers, no
FR/EN swaps, no duplicate ids (verified programmatically), no broken escaping.
(Note: several prompts are intentionally reused across topic pools — e.g. the
"Il y a beaucoup de gens dans la rue" prompt appears as `pl05`, `pl_2_01`, `tbi_2_02` —
but each has a distinct id and a correct answer, so these are not bugs.)

---

## Dimension 2 — Answer accuracy

| id | line | french | answer | issue | suggested fix |
|----|------|--------|--------|-------|---------------|
| cu_2_01 | 3399 | Combien de lait reste-t-il ? | How much milk is there left? | Unnatural word order. A native speaker says **"How much milk is left?"** (or "How much milk is there?"); "is there left" is awkward and is not what the sentence should model. | Change `answer` to "How much milk is left?" and add "How much milk is there?" to `acceptedAnswers` (see also dim. 4). |
| ut_2_12 | 4933 | Est-ce qu'il y avait une bibliothèque dans ce quartier ? | (main answer OK) | The **accepted** alternative is ungrammatical — see Dimension 1. | (covered above) |

**Count: 1 distinct** (cu_2_01; ut_2_12 already tallied under functioning). The main
`answer` strings are otherwise accurate, natural, and tense-correct throughout —
including the harder passive/reported-speech/conditional items, which are well formed.

---

## Dimension 3 — Difficulty calibration

**Systematic under-rating in the `*_2_*` batch.** Every `*_2_*` exercise carries
`diffLevel: 2` and no `level` tag. But many drill grammar that the parallel
hand-tagged items explicitly rate `diffLevel: 3` / B1–B2. Same structure, two
different tiers. The clearest categories (each row is representative of the whole
five-item sub-batch in that category):

| id (representative) | line | structure | tagged | should be | evidence of inconsistency |
|----|------|-----------|--------|-----------|----------------------------|
| cond_2_03 | 2860 | 3rd conditional ("If she had known, she would have come.") | diffLevel 2 | **diffLevel 3 / B2** | `cond05` (same 3rd-conditional structure) is `diffLevel 3, level B2`. |
| cond_2_02 / cond_2_05 | 2859 / 2862 | 2nd conditional | diffLevel 2 | diffLevel 3 / B1 | `cond03` (2nd conditional) is `diffLevel 3, B1`. |
| fp_2_01 … fp_2_05 | 3034+ | future perfect | diffLevel 2 | **diffLevel 3 / B2** | `fp02`/`fp05` (future perfect) are `diffLevel 3, B2`. |
| fc_2_01 … fc_2_05 | 2990+ | future continuous | diffLevel 2 | diffLevel 3 / B1 | `fc02`/`fc05` are `diffLevel 3, B1`. |
| rs_2_01 … rs_2_05 | 2946+ | reported speech | diffLevel 2 | diffLevel 3 / B1 | `rs03`/`rs05` are `diffLevel 3, B1`. |
| pv_2_01 … pv_2_05 | 2902+ | passive voice | diffLevel 2 | diffLevel 3 / B1 | `pass03`/`pass06` are `diffLevel 3, B1`. |
| ppt_2_01 … ppt_2_05 | 2770+ | past perfect | diffLevel 2 | diffLevel 3 / B1 | `patp02`/`patp05` are `diffLevel 3, B1`. |

**Isolated over-rating (opposite direction):**

| id | line | french | answer | issue | suggested fix |
|----|------|--------|--------|-------|---------------|
| past06 | 1115 | As-tu mangé ce matin ? | Did you eat this morning? | A one-clause simple-past question tagged `diffLevel 3 / B1`; the rest of `pastSimple` sits at `diffLevel 2`. Over-rated. | Retag to `diffLevel 2` (A2). |

**Count: ~35 exercises across 7 under-rated structural categories + 1 over-rated
item.** Recommended action: bump the B1/B2-structure `*_2_*` sub-batches (passive,
reported speech, past perfect, future perfect, future continuous, 2nd/3rd
conditional) to `diffLevel: 3`, or add explicit `level` tags so the leveller stops
treating them as A2. This is a calibration/consistency issue, not a correctness bug —
the sentences themselves are fine.

---

## Dimension 4 — Accepting valid alternatives

The set is already strong here; only two confident gaps:

| id | line | french | answer | missing valid rendering | suggested fix |
|----|------|--------|--------|--------------------------|---------------|
| fd29 | 1250 | Mes parents préparent le dîner. | My parents are making dinner. | The bare French present also maps to the **present simple** habitual reading: "My parents make dinner" / "My parents cook dinner" / "My parents prepare dinner." Only the continuous is accepted (alt: "…are cooking dinner"). | Add present-simple forms ("My parents make/cook/prepare dinner") to `acceptedAnswers`. |
| cu_2_01 | 3399 | Combien de lait reste-t-il ? | How much milk is there left? | The natural **"How much milk is left?"** (and "How much milk is there?") is rejected. | Make "How much milk is left?" the answer and accept "How much milk is there left?" / "How much milk is there?" (also fixes dim. 2). |

**Count: 2.** Other multi-structure prompts (will/going-to, perfect simple vs
continuous, that/which/who, on Sunday/Sundays, dad/father, British/American spelling,
whom/who, since/because/as) are already covered by existing
`acceptedAnswers`/`alternatives` or by the normaliser.

---

## Summary

| Dimension | Findings |
|-----------|----------|
| 1. Correct functioning | **3** (gt_2_01, gt_2_07 stray fragments; ut_2_12 ungrammatical accepted answer) |
| 2. Answer accuracy | **1** (cu_2_01 awkward phrasing) |
| 3. Difficulty calibration | **~35** across 7 systematically under-rated B1/B2 categories in the `*_2_*` batch, + 1 over-rated (past06) |
| 4. Accepting valid alternatives | **2** (fd29 present-simple reading; cu_2_01 natural form) |

- **Translate exercises reviewed:** 406 (full pass, no sampling)
- **Total actionable findings:** 6 discrete data/accuracy/alternative items + 1
  systematic difficulty-calibration pattern (~36 exercises).

The three functioning bugs (Dimension 1) are the only ones that let a wrong answer
pass or teach bad English, and should be fixed first. The difficulty pattern
(Dimension 3) is the largest but lowest-severity: it mis-sorts exercises across
tiers without affecting correctness.
