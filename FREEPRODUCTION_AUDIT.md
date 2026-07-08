# Free-Production Exercise Audit

## Methodology

The app's `free-production` exercises show the learner a `keyword` (a word or phrase) plus a
French `instruction` (almost always *"Écris une phrase avec le mot donné."*), an optional
`example`, a `hint`, and an `explanation`. The learner writes their **own free sentence**.
Unlike every other exercise type audited in this series, there is **no exact-answer matching
and no grammar checking**. The entire correctness test is in `checkAnswer`
(`src/views/ExerciseView.js` ~L1082):

```js
if (ex.type === 'free-production') {
  const words = raw.trim().split(/\s+/);
  return words.length >= 4 && raw.toLowerCase().includes(ex.keyword.toLowerCase());
}
```

An answer is accepted **iff** it (a) has 4+ whitespace-separated words **and** (b) its raw
text, lowercased, **contains `ex.keyword` (lowercased) as a literal substring**. Nothing
else is checked — grammar, meaning, and word order are all ignored.

Because grading is intentionally lenient, the bug classes differ fundamentally from prior
audits (no answer-key to be wrong, no distractors to collide). The high-value checks here
are instead:

1. **Substring-match failures for legitimate answers.** The classic trap is an inflected
   form: a base-form keyword (`go`) in a past-tense context, where a correct answer
   ("I went…") does **not** contain the substring "go". Mechanically, I also tested a
   stronger signal: **does the exercise's own `example` pass its own `checkAnswer`?** If the
   supplied model sentence fails, the keyword is broken.
2. **Substring-match false *positives* / degenerate keywords.** Because `.includes()` is a
   raw substring test (no word boundaries), very short keywords match *inside* unrelated
   words, so the check can't verify the learner actually used the target word.
3. **Uniform difficulty tagging** unrelated to content.

I extracted all **122** `type: 'free-production'` objects from `src/data/exercises.js` via a
Node import of the module (`getAllExercises()`), bypassing the mixed single/double-quote and
single/multi-line source formatting, then reviewed every one — no sampling. I additionally
ran each object's `example` field (present on 87 of 122) through the *actual* `checkAnswer`
logic as an automated integrity gate.

---

## Dimension 1 — Data integrity & the substring trap

**Automated structural checks (all 122):** **no duplicate ids**, **no missing/empty
`keyword`**, **no missing `instruction`**. Clean.

### 1a. Irregular-verb substring trap (the headline mechanical check) — 0 findings

I checked every keyword against its instruction/hint/explanation/example for the
go→went / see→saw / buy→bought / run→ran class of trap (base-form keyword in a context that
forces an inflected answer that drops the base substring).

**Zero occurrences.** The dataset is *designed* around this: every past-tense / perfect item
supplies the **already-inflected form as the keyword** — `went`, `arrived`, `wrote`,
`bought`, `was built`, `was invented`, `had already`, `had never`, `have seen`,
`has been working`, `gave up`, etc. Since the learner is told to include that exact string,
the go→went failure mode never fires. This is the single most valuable mechanical check for
this type, and the data passes it cleanly.

### 1b. Keywords whose own model answer cannot pass the check — 2 findings

These are genuinely broken: no natural correct sentence (including the exercise's own
example/hint) contains the keyword as a substring, so a correct learner is wrongly rejected.

| id | line | keyword | instruction / example | issue | suggested fix |
|----|------|---------|-----------------------|-------|---------------|
| fts_3_03 | 3743 | `I think will` | ex: *"I think she will pass the exam."* | Non-contiguous phrase. "I think" and "will" are always separated by a subject in real English, so no natural sentence contains the literal substring "I think will". **The exercise's own `example` fails its own `checkAnswer`** (verified programmatically — the only one of 87 examples that does). | Change keyword to `I think` (or `will`); the "I think + will" pattern belongs in the hint, not as a single literal-match string. |
| adj_3_07 | 5378 | `adjectives order` | instruction: *"…une phrase décrivant un objet avec 3 adjectifs dans le bon ordre."* / hint: *"ex: I bought a lovely little old Italian clock."* | The keyword is a **meta-label**, not a word to put in a sentence. The model answer "I bought a lovely little old Italian clock" does **not** contain "adjectives order". The item is effectively unpassable unless the learner literally types "adjectives order". | Give a real anchor word the sentence must contain (e.g. an object noun like `clock`), or convert to a different exercise type; a word-order/ordering check cannot be done by substring match. |

### 1c. Keyword/hint tense inconsistency (low mechanical risk) — 1 note

| id | line | keyword | hint | note |
|----|------|---------|------|------|
| phv_3_01 | 3537 | `gave up` (past) | *"give up + gérondif ou nom"* | Keyword is past but the hint models the present base "give up". The `example` ("He gave up his job…") passes, so it is not broken; but a learner following the hint's "give up …-ing" would write present-tense "give up", which fails to contain "gave up". Align hint tense with keyword. |

---

## Dimension 2 — Keyword quality

### 2a. Degenerate short keywords — substring matches inside unrelated words — 5 findings

`checkAnswer` uses `String.includes()` with **no word boundaries**. Keywords of ≤3 letters
that also occur *inside* common words make condition (b) trivially true even when the learner
never used the target word — the exercise cannot verify what it claims to teach.

| id | line | keyword | matches as substring inside… | issue | suggested fix |
|----|------|---------|------------------------------|-------|---------------|
| art_3_03 | 2384 | `a` | *cat, water, many, plan* — almost every sentence | The check is meaningless: any 4-word sentence with the letter "a" passes. | Require a concrete carrier (e.g. keyword `a book`) or special-case whole-word matching for articles. |
| art_3_01 | 2382 | `an` | *many, plan, can, want* | Same; matches inside dozens of common words. | As above (e.g. `an apple`). |
| art_3_02 | 2383 | `the` | *there, other, they('re), then* | Passes on "there/they" without any article used. | As above (e.g. `the sun`). |
| prep_3_01 | 2548 | `at` | *water, cat, late, that* | Passes without the preposition. | e.g. keyword `at 7` / `at home`. |
| prep_3_04 | 2551 | `by` | *baby, nearby, maybe* | Passes without the preposition. | e.g. keyword `by bus`. |

(`why`, q_3_01, is 3 letters but does not appear inside common words, so it is **not** flagged.)

### 2b. Keywords that are already 4+ words (trivialise the length gate) — 2 findings

The 4-word minimum exists to force a real sentence; a keyword that is itself 4 words
auto-satisfies it, so any fragment containing the phrase passes.

| id | line | keyword | note |
|----|------|---------|------|
| cond_3_02 | 2884 | `If I had known` | 4 words; the length gate adds nothing. Pedagogically defensible as a fixed chunk — low severity. |
| sf_3_07 | 4769 | `for a long time` | 4 words; same. Low severity. |

No stray markup, encoding artifacts, or mismatched punctuation were found in any keyword.

---

## Dimension 3 — Difficulty calibration

**Every one of the 122 items is `diffLevel: 3`; none carries a `level` field.** The entire
free-production type is blanket-tagged at the top difficulty regardless of content — the same
"uniform-by-convention rather than by content" pattern flagged in prior audits, here applied
to 100% of the type.

This *may* be an intentional design choice (producing a whole original sentence is a
higher-order skill than filling a blank). But the tag then fails to distinguish content
difficulty at all: A1/A2 keywords sit at the same level 3 as genuinely B2+ ones.

**Clearly over-tagged (A1–A2 content at level 3):**

| id(s) | keyword(s) | actual level |
|-------|-----------|--------------|
| art_3_01/02/03 | `an`, `the`, `a` | A1 |
| pl_3_01…04 | `children`, `teeth`, `women`, `leaves` | A1–A2 |
| prep_3_01/04 | `at`, `by` | A1 |
| q_3_01 | `why` | A1 |
| adv_3_01/02/03 | `always`, `quickly`, `never` | A1–A2 |
| sa_3_01/03 | `some`, `something` | A1–A2 |
| tbi_3_01/02 | `there is`, `there are` | A1 |

**Appropriately at level 3 (B1–B2), for contrast:** `will have finished` (fp_3_01, future
perfect), `If I had known` (cond_3_02, 3rd conditional), `has been working` (tc_3_01, present
perfect continuous), `be used to` (ut_3_11), `whose`/`which` in relative clauses (rel_3_07/03),
`however`/`therefore` (discourse connectors). These confirm level 3 is right for the advanced
items and mis-set for the basics.

Suggested fix: re-grade by content (articles/basic plurals/basic prepositions → 1; frequency
& quantity basics → 2; keep tense/aspect/conditional/discourse/relative items at 3), or, if
the uniform tag is intentional, document that free-production difficulty reflects task type
rather than grammar level.

---

## Dimension 4 — Exploitability & guidance

**Systemic (design-level, stated once, not per-item):** any 4-word string containing the
keyword passes, including grammatical nonsense ("book book book the sun"). Word count is
whitespace-only, and the keyword test is a raw substring. This is an intentional
leniency tradeoff of the type and is **not** flagged per item — except where a keyword is so
short it is *additionally* exploitable via substring-inside-word matching, which is captured
as **Dimension 2a** (`a`, `an`, `the`, `at`, `by`). Those five are the items where the design
tradeoff crosses into "the check verifies essentially nothing."

**Learner guidance:** hints/explanations are otherwise **good** across the set. Of 122 items,
87 carry a concrete `example` sentence and the remaining 35 (the `*_3_08…_12` / `adj_3_*`
batches) embed an example directly in the hint (`hint: 'ex: …'`) plus a grammar-point
`explanation`. Since there is no other correctness signal, this guidance is the pedagogical
backbone, and it is present and relevant everywhere except the two broken items in 1b (where
the example/hint cannot actually demonstrate a passing answer).

**Duplicate keywords (informational, not defects):** 9 keyword strings recur across two ids
each — `always`, `went`, `the best`, `whose`, `which`, `have never`, `had never`, `since`,
`will be studying` — but each pair drills a different grammar topic/context (e.g. `which` as
question word q_3_04 vs. relative pronoun rel_3_03). Not flagged as bugs.

---

## Summary

| Dimension | Items flagged |
|-----------|---------------|
| 1 — Data integrity & substring trap | **Irregular-verb substring trap: 0** (by design — inflected forms are the keywords). 2 broken keywords whose own model answer can't pass the check (fts_3_03, adj_3_07) + 1 keyword/hint tense inconsistency (phv_3_01). No duplicate ids / empty fields. |
| 2 — Keyword quality | 5 degenerate short keywords matching inside unrelated words (a, an, the, at, by) + 2 already-4-word keywords (low severity). |
| 3 — Difficulty calibration | Systemic: **all 122 uniformly `diffLevel: 3`**; ~15+ A1–A2 keywords (articles, basic plurals/prepositions/adverbs/quantifiers, there is/are) over-tagged to the top tier. |
| 4 — Exploitability | 0 new per-item findings beyond the 5 short keywords already in Dim 2a; general leniency is a documented design tradeoff. Learner guidance (examples/hints) is otherwise solid. |

**Total free-production exercises reviewed: 122 (full pass, no sampling).** The headline
mechanical check — the irregular-verb base-form-vs-past substring trap — is **clean (0)**,
because the data deliberately supplies inflected forms as keywords. The two genuinely broken
items are keyword-design failures caught by the "does the example pass its own check?" gate:
`fts_3_03` (`I think will`, a non-contiguous phrase whose own example fails) and `adj_3_07`
(`adjectives order`, a meta-label no correct sentence contains). The most systemic issues are
the five substring-degenerate short keywords and the blanket `diffLevel: 3` tagging of the
entire type.
