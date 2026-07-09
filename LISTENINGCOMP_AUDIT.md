# Listening-Comprehension Exercise Audit

## Methodology

The app's `listening-comp` exercises are **listening comprehension**, not dictation. The app
speaks `ex.audio` aloud via TTS — a short passage or mini-dialogue — then displays a French
`ex.question` about the content, and the learner types a **free-text English answer** based on
what they understood. Grading uses the shared `checkAnswer` normalizer
(`src/views/ExerciseView.js` L1007) against `ex.answer`, `ex.acceptedAnswers[]`, and
`ex.alternatives[]`. Relevant normalizer behaviour for this type:

- lowercase, trim, strip accents, strip `.!?,;:` punctuation, collapse whitespace;
- contraction expansion both directions (`she's`↔`she is`, `didn't`↔`did not`, …);
- **article-flexible compare vs. `ex.answer`**: `the/a/an` are stripped, so `deer` ≈ `a deer`,
  `engineer` ≈ `an engineer`, `the coast` ≈ `coast` all match automatically;
- slash-variants (`John's / His` → either accepted) and a small synonym table.
- **Parentheses are NOT stripped.** `( )` survive normalization, so a keyed answer like
  `By herself (alone).` only matches if the learner types the parenthetical too.

I imported the module (`getAllExercises()`) and extracted all **82** `type: 'listening-comp'`
objects to JSON, bypassing the mixed single/double-quote and single/multi-line source
formatting, and reviewed **every one — no sampling**. Structural checks were run
programmatically; each item was then read as `audio` + `question` + `answer` +
`alternatives`/`acceptedAnswers` together and reasoned about.

### Two type-specific checks

1. **"Can the question be answered from the audio at all?"** (dimension 1). Because the app
   plays only `ex.audio`, the information the question asks about must actually be present in
   that passage (directly or by inference). An item whose question presupposes facts/events the
   audio never contains is a **broken exercise**, not an accuracy nitpick.

2. **Inference vs. verbatim.** By design, `answer` is often an *inference* from the audio, not a
   quote — e.g. audio "she teaches English" → keyed answer "She is a teacher." This is the
   intended comprehension skill, so an inferred answer is **not** flagged merely for being
   non-verbatim. It is flagged only when the inference itself is wrong or unsupported (dim 2),
   or when a learner's equally-valid alternative phrasing would be wrongly rejected (dim 4).

---

## Dimension 1 — Data integrity & answerability

**Automated structural checks (all 82):** **no duplicate ids**, **no missing/empty `audio`,
`question`, or `answer`**, no garbled/truncated text. Clean. All 82 carry `alternatives` (58)
or `acceptedAnswers` (24) plus `hint` and `explanation`.

### Answerability — 1 finding

| id | line | audio | question | answer | issue | suggested fix |
|----|------|-------|----------|--------|-------|---------------|
| rs_3_07 | 2977 | "She said she was studying for her exam and that she would come to the party later." | *Que faisait-elle **quand il a appelé** ?* ("What was she doing **when he called**?") | "She was studying for her exam." | The question presupposes a **phone call** ("quand il a appelé") that **does not exist anywhere in the audio** — the passage is a reported-speech statement with no call, no interruption, no second person. The question stem looks copy-pasted from a past-continuous "interrupted action" template. The keyed answer is still derivable (*she was studying*), so it is not fully unsolvable, but the question's premise is unsupported by the audio and will confuse a careful listener. | Re-word the question to match the audio, e.g. *Que faisait-elle d'après ce qu'elle a dit ?* ("What was she doing, according to what she said?"), or add the missing context to the audio. |

No other item's question was found to be unanswerable from its audio. The many **inference-based**
answers (teaches English → teacher; "Careful! you are going to drop those glasses" → speaker can
see it; "by herself" → alone; etc.) are all well-supported by their audio and are **not** flagged.

---

## Dimension 2 — Answer accuracy

Every keyed `answer` was checked as genuinely derivable from its `audio` given the `question`.
**The keyed `answer` field is correct in all 82 items.** One item has an accuracy problem in its
**accepted alternatives** (over-accepting facts the audio does not support):

| id | line | audio | question | answer | issue | suggested fix |
|----|------|-------|----------|--------|-------|---------------|
| tbi_3_15 | 2510 | "There were five people at the meeting yesterday." | *Quand a eu lieu la réunion ?* | "Yesterday." (correct) | `alternatives: ["Last night.", "Yesterday morning."]` assert a **time of day** the audio never gives. The audio says only "yesterday" (no part-of-day); "Yesterday morning" and "Last night" add unsupported specifics, and "last night" arguably even contradicts an unspecified daytime. Accepting them rewards a wrong/invented detail. | Replace the two over-specific alternatives with genuinely equivalent phrasings, e.g. `["It was yesterday.", "The day before."]`. |

---

## Dimension 3 — Difficulty calibration

**All 82 items are `diffLevel: 3`; none carries a `level` field.** The entire `listening-comp`
type is blanket-tagged at the top tier regardless of content — the same "uniform-by-convention
rather than by content" pattern flagged in every prior audit in this series (identical to the
100%-level-3 situation in free-production).

The set spans a very wide real range:

**Clearly over-tagged (A1–A2 comprehension of a single explicit fact, at level 3):**

| id(s) | audio gist / question | actual level |
|-------|------------------------|--------------|
| art_3_13 | a/an with "elephant" | A1 |
| pl_3_13, tbi_3_13 | "3 children + 2 women = ?", "2 cats + 1 dog = ?" (single-digit sum) | A1–A2 |
| pl_3_15 | plural of "man" = men | A1 |
| prep_3_13, prep_3_14 | "go by bus", "open on Fridays and Saturdays" | A1 |
| q_3_13, q_3_14 | "from Madagascar", "three languages" | A1–A2 |
| mod_3_13 | "Can you ride a bicycle? Yes" | A1–A2 |
| tobe_3_12, tobe_3_13 | "twenty years old", "at home" | A1 |
| irv_3_13 | "went to the beach" | A2 |
| adv_3_11 | "speaks English fluently" → Fluently | A2 |
| pos_3_12 | "mine is the red one" → Red | A1–A2 |

**Correctly at level 3+ (B1–B2), for contrast:** the past-perfect / future-perfect items
(ppt_3_07/11, fp_3_07/11), present-perfect-continuous (tc_3_10), reported speech (rs_3_11),
conditionals (cond_3_07/11), and the **metalinguistic** questions asked *in English* that
require grammar terminology as the answer — adj_3_04 (adjective order), adj_3_09
(attributive/predicative), rel_3_04/09 (which pronoun / defining vs. non-defining), gt_3_04/09,
ut_3_04/09, vs_3_04/09, con_3_10 ("nevertheless"). These are genuinely level 3 or arguably
above.

**Note (design):** the metalinguistic items are arguably a *different skill* from listening
comprehension — they test whether the learner knows English grammar labels ("second
conditional", "non-defining", "predicative"), which is harder and orthogonal to understanding
the spoken content. Not a bug, but worth being aware the type mixes two skills at the same tag.

Suggested fix: re-grade by content — simple single-fact comprehension of A1–A2 audio → level 1–2;
keep tense/aspect/conditional/reported-speech and all metalinguistic-terminology items at 3 — or,
if the uniform tag is intentional, document that `listening-comp` difficulty reflects task type
rather than content level.

---

## Dimension 4 — Alternative accepted answers

Overall coverage is **good**: most items supply both a full-sentence answer and a short-form
alternative, and the article-stripping normalizer transparently handles `a/an/the` variance
(`deer`≈`a deer`, `engineer`≈`an engineer`, `the coast`≈`coast`). The gaps below are cases where
a realistic, equally-correct learner answer is wrongly rejected.

### 4a. Parenthetical keyed answers block the natural short answer — 2 findings

The normalizer does **not** strip parentheses, so the direct short answer a learner would type
fails to match the parenthesised key, and no plain alternative is provided.

| id | line | audio | question | answer | rejected valid answer | suggested fix |
|----|------|-------|----------|--------|-----------------------|---------------|
| prn_3_12 | 3710 | "She lives by herself in a small apartment. She does everything herself." | *Avec qui vit-elle ?* | "By herself (alone)." | **"By herself"** — literally the phrase the `hint` tells the learner to listen for ("Écoutez *by herself*") — normalizes to `by herself` ≠ `by herself (alone)`, and is not in `alternatives` (`Alone.`, `She lives alone.`). | Add `"By herself"` to `alternatives` (and/or drop the `(alone)` from the keyed answer). |
| cond_3_07 | 2889 | "If you exercise every day you will feel better. If I were younger I would run a marathon." | *Quel type de conditionnel est la deuxième phrase ?* | "Type 2 (second conditional)." | **"Type 2"** — the most natural short answer — fails (`type 2` ≠ `type 2 (second conditional)`); `alternatives` are `Conditional 2.` / `Second conditional.` but **not** `Type 2`. (The sibling item cond_3_11 *does* accept `type 2`.) | Add `"Type 2"` to `alternatives`. |

### 4b. Missing common short-form answers — 2 findings

| id | line | audio | question | answer | rejected valid answer | suggested fix |
|----|------|-------|----------|--------|-----------------------|---------------|
| prs_3_12 | 3584 | "She works at a school and teaches English…" | *Quel est son métier ?* | "She is a teacher." (alt: "She teaches English.") | **"teacher"** / **"a teacher"** — the single most natural answer to "what is her job" — is rejected (`teacher` ≠ `she is teacher` after article-strip). | Add `"A teacher"` (also matches bare `teacher` via article-strip) to `alternatives`. |
| prs_3_13 | 3585 | "Do you exercise every day? Yes I go jogging every morning before work." | *Quand va-t-il courir ?* | "Every morning before work." (alt: "Before work.") | **"Every morning"** — a correct, complete answer to "when" — is not accepted. | Add `"Every morning"` to `alternatives`. |

### 4c. Minor / low-severity

| id | line | question | note |
|----|------|----------|------|
| prc_3_13 | 3626 | *Pourquoi ne travaille-t-il pas ?* | Accepts "Because he is on holiday." / "He is on holiday." but not the bare **"On holiday."** Low severity; consider adding. |

No other coverage gaps were found — the yes/no metalinguistic items (ut_*, vs_*, ut_3_09, etc.)
all accept the bare `yes`/`no` a learner would type, and the number/place/time items are well
covered by their short-form alternatives plus article-stripping.

---

## Summary

| Dimension | Items flagged |
|-----------|---------------|
| 1 — Data integrity & answerability | **Structural: 0** (no dup ids, no empty `audio`/`question`/`answer`, no garbling). **Answerability: 1** — rs_3_07 (question presupposes a phone call absent from the audio). |
| 2 — Answer accuracy | Keyed `answer` correct in **all 82**. **1** over-accepting-alternatives item (tbi_3_15: "Last night"/"Yesterday morning" not supported by audio). |
| 3 — Difficulty calibration | Systemic: **all 82 uniformly `diffLevel: 3`**; ~10+ A1–A2 single-fact comprehension items over-tagged to the top tier. Plus a design note: metalinguistic-terminology items are a different (harder) skill than listening comprehension. |
| 4 — Alternative answers | **5** total: 2 parenthetical-answer blocks (prn_3_12 "By herself", cond_3_07 "Type 2"), 2 missing short forms (prs_3_12 "teacher"/"a teacher", prs_3_13 "Every morning"), 1 minor (prc_3_13 "On holiday"). |

**Total listening-comp exercises reviewed: 82 (full pass, no sampling).** Data integrity is
strong — no structural defects, and every keyed `answer` is correctly derivable from its audio.
The genuine findings are one templated-question mismatch (rs_3_07), one over-accepting
alternative set (tbi_3_15), the systemic blanket `diffLevel: 3` tagging, and five
alternative-answer gaps — the two most impactful being the **parenthetical keyed answers**
(prn_3_12, cond_3_07) that reject the exact short answer the exercise's own hint points the
learner toward.
