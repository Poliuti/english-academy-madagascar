# Word-Order Exercises — Linguistic & Data-Quality Audit

Scope: every `type: 'word-order'` exercise in `src/data/exercises.js` (**377** exercises reviewed).
Read-only audit. No changes made to `exercises.js`. Fixes to be applied separately.

Companion to `ERROR_CORRECT_AUDIT.md`, `TRANSLATE_AUDIT.md`, `TRANSLATE_FR_AUDIT.md` (same methodology/tone/format).

---

## Methodology

### How a word-order exercise is graded (recap)
Each exercise gives a shuffled `words` array of draggable tokens and a target `answer`
sentence. The learner clicks tokens one-by-one; the app joins the clicked tokens with
single spaces, then applies exactly one regex fixup —
`.replace(/\s+([.!?,;?])/g, '$1')` — to glue a trailing-punctuation token onto the
previous word. The resulting string is passed to `checkAnswer` (`src/views/ExerciseView.js`
~L995), which lowercases, trims, strips accents/ligatures, strips punctuation, collapses
whitespace, expands contractions, strips articles, supports slash-variants and a small
`SYNONYMS` table, then compares against `ex.answer`, each of `ex.acceptedAnswers[]`, and
each of `ex.alternatives[]`.

**Key consequence:** because grading strips punctuation and collapses whitespace, the ONLY
thing that must be exactly right is the *multiset of word tokens* the learner can produce
vs. the multiset the accepted sentence needs. If the `words` bag is missing a token that
`answer` requires, or carries an extra token `answer` never uses, the puzzle is
**literally unsolvable** — the learner can never build a string that matches.

### Dimension 1 — programmatic word-set-mismatch check (the high-value, mechanical check)
A Node script (`import`/eval of `exercises.js`, flatten all categories, filter
`type==='word-order'`) compared, for every one of the 377 exercises:

- `tokens(words)`  = each element of `words`, lowercased, all punctuation stripped, empties dropped.
- `tokens(answer)` = `answer` split on whitespace, each piece lowercased, punctuation stripped, empties dropped.

and reported any element whose **count differs** between the two multisets
(`extraInWords` = token present in `words` but not needed by `answer`;
`missingFromWords` = token `answer` needs but `words` cannot supply). Casing is used only
for the comparison; the tables below report original casing/id. The script also checked
for missing/empty `words`, missing `answer`, and duplicate ids. For each hit I then
manually confirmed no `acceptedAnswers`/`alternatives` entry rescues the bag.

This programmatic pass is the single most actionable check for this exercise type and was
run across all 377 (not eyeballed). **It found 13 confirmed structural bugs** (below).

### Dimensions 2–4
Qualitative pass over a structured dump of all 377 `answer` strings (with diffLevel/level,
acceptedAnswers, alternatives), reading the actual content: grammar of the target sentence
(dim 2), difficulty vs. diffLevel and vs. same-grammar-point siblings (dim 3), and — the
recurring, type-specific bug class — whether the fixed word bag permits *another*
grammatically valid ordering that is not in `acceptedAnswers`/`alternatives` (dim 4).

---

## Dimension 1 — Corretto funzionamento (data integrity)

### 1a. Word-set mismatches — CONFIRMED UNSOLVABLE (13 findings)

Every row was verified against all `acceptedAnswers`/`alternatives`; none is rescued.

| id | line | words | answer | issue | suggested fix |
|----|------|-------|--------|-------|---------------|
| `art_2_15` | 2371 | `the, to, go, They, school, every, day` | They go to school every day. | Extra `the` in bag; answer has no "the" — leftover token, unsolvable | Remove `"the"` from `words` |
| `tbi_2_14` | 2484 | `no, There, the, is, bus, today` | There is no bus today. | Extra `the` in bag — leftover token | Remove `"the"` from `words` |
| `prep_1_13` | 2519 | `on, She, her, the, birthday, July, is, in, 3rd` | Her birthday is on July 3rd. | Bag is corrupt: 3 stray tokens (`She`, `the`, `in`) that answer never uses | Set `words` to `["Her","birthday","is","on","July","3rd"]` |
| `mod_2_11` | 2637 | `could, you, the, door, Could, open, ?` | Could you open the door? | Duplicate: both `could` and `Could`; answer needs one | Remove the lowercase `"could"` |
| `mod_2_14` | 2640 | `not, You, here, mustn't, smoke` | You mustn't smoke here. | Extra `not`: `mustn't` already supplies "not"; leftover token | Remove `"not"` from `words` |
| `cond_1_15` | 2856 | `had, known, would, If, she, have, told, him` | If she had known, she would have told him. | Answer needs **two** `she`; bag has one — unsolvable | Add a second `"she"` to `words` |
| `cond_2_11` | 2868 | `you, would, do, If, what, won, lottery, the` | What would you do if you won the lottery? | Answer needs **two** `you`; bag has one | Add a second `"you"`; also note `won` (bag) vs `won` — ok, only "you" missing |
| `cond_2_13` | 2870 | `have, I, told, had, you, known, If, would` | If I had known, I would have told you. | Answer needs **two** `I`; bag has one | Add a second `"I"` |
| `cond_2_14` | 2871 | `help, him, I, could, if, would` | I would help him if I could. | Answer needs **two** `I`; bag has one | Add a second `"I"` |
| `fp_2_13` | 3046 | `already, By, you, the, will, have, left, time, I` | By the time I arrive, you will have already left. | Bag missing `arrive` entirely — unsolvable | Add `"arrive"` to `words` |
| `irr09` | 2248 | `she, the, exam, passed, ?, Did` | Did she pass the exam? | Bag has `passed` but answer needs base form `pass` (do-support) | Change `"passed"` → `"pass"` |
| `adv_1_15` | 3356 | `loudly, Please, not, speak, so` | Please do not speak so loudly. | Bag missing `do`; answer needs it. Puzzle is only "solvable" via the ungrammatical `alternatives` entry `"Please not speak so loudly."` | Add `"do"` to `words`; **remove** the ungrammatical `alternatives` entry |
| `con_1_14` | 3433 | `raining, it, go, Although, out, was, we, went` | Although it was raining we went out. | Extra `go`: answer uses `went`, not `go` — leftover token | Remove `"go"` from `words` |

Note on `adv_1_15`: the ungrammatical `alternatives:["Please not speak so loudly."]` looks
like a prior band-aid that "fixed" solvability by accepting a broken sentence rather than
correcting the bag. It should be removed once `do` is added.

### 1b. Missing/empty `words`, missing `answer`, garbled sentences
**Zero findings.** Every word-order exercise has a non-empty `words` array and a
parseable `answer` sentence.

### 1c. Duplicate ids (among word-order)
**Zero findings.** No duplicate ids within the word-order set.

---

## Dimension 2 — Risposte accurate (grammar of the target answer)

**Zero grammar errors** in the target `answer` sentences.

Two constructions are colloquial but standard and are NOT flagged as errors:
`comp_2_10` "He sings better than her." and `f04`/`fam10` "…older than me." (object-pronoun
after `than` is accepted in modern usage; the formal "than she"/"than I" is not required).

---

## Dimension 3 — Esercizi commisurati alla difficoltà

Difficulty in this file is assigned **per grammar-topic tier**: within each topic the
`*_1_*` ids are the easier tier (`diffLevel:1`) and `*_2_*` the harder tier
(`diffLevel:2`), and the app's tier filter splits each topic pool accordingly. That design
is internally consistent, so a `diffLevel:1` future-perfect item being objectively harder
than a `diffLevel:1` present-simple item is **by design**, not a bug, and is not flagged.

One genuine within-tier outlier:

| id | line | answer | issue | suggested fix |
|----|------|--------|-------|---------------|
| `cond_1_15` | 2856 | If she had known, she would have told him. | **Third conditional** (past-perfect + would-have) sits in the `cond_1_*` (tier-1) batch alongside first/second-conditional siblings `cond_1_12`–`cond_1_14`. It is structurally identical to the tier-2 items `cond_2_13`/`cond_2_14`, so it is mistiered relative to its own topic. | Move to `diffLevel:2` (and it already has the dim-1 missing-`she` bug) |

Otherwise **zero** difficulty findings: no whole id-batch was found uniformly mistagged
against its own topic siblings.

---

## Dimension 4 — Diverse soluzioni accettate (valid alternative orderings not accepted)

The type-specific recurring bug class. Each row is a grammatically valid, natural ordering
constructible from the **same** word bag that current grading would mark wrong. Grading
strips punctuation, so comma differences are irrelevant — only word order matters.
Suggested fix in every case: add the alternative to `acceptedAnswers`.

### 4a. Reversible conditional / subordinate clauses (main-clause ↔ subordinate-clause order)
Both orders are fully standard; none of these accept the reversal.

| id | line | answer | valid alternative to accept |
|----|------|--------|-----------------------------|
| `cond_1_12` | 2853 | If it rains, I will stay home. | I will stay home if it rains. |
| `cond_1_13` | 2854 | If I were rich, I would fly. | I would fly if I were rich. |
| `cond_1_14` | 2855 | If he studied harder, he would pass. | He would pass if he studied harder. |
| `cond_2_12` | 2869 | If you study, you will pass. | You will pass if you study. |
| `cond_2_15` | 2872 | If she came, I would be happy. | I would be happy if she came. |
| `con_2_12` | 3446 | Because she did not eat she got sick. | She got sick because she did not eat. |
| `con_2_13` | 3447 | Although she was tired she worked well. | She worked well although she was tired. (currently accepts only though/even-though front-position synonyms, not the reversal) |
| `con09` | 2304 | Since it was cold outside, we put on our coats. | We put on our coats since it was cold outside. |
| `ppt_1_12` | 2765 | By the time I arrived, she had left. | She had left by the time I arrived. |
| `ppt_2_11` | 2780 | By the time I arrived, she had left. | She had left by the time I arrived. |
| `fp_1_15` | 3032 | She will have already left by the time you arrive. | (front-position is fine as is; end-position already given — no change) — *not flagged* |

### 4b. Frontable time / frequency adverbials (SVO+adverbial ↔ fronted adverbial)
Fronting these adverbials is completely idiomatic; a learner may reasonably produce it.

| id | line | answer | valid alternative to accept |
|----|------|--------|-----------------------------|
| `r03` | 39 | I go to school every day. | Every day I go to school. |
| `fd15` / `v15` | 1236 / 730 | I eat rice every day. | Every day I eat rice. |
| `ps05` | 918 | He plays football every Saturday. | Every Saturday he plays football. |
| `past04` | 1098 | They watched television last night. | Last night they watched television. |
| `pts_1_12` | 3633 | She went to the market yesterday. | Yesterday she went to the market. |
| `pts_2_08` | 3644 | She went to the market yesterday. | Yesterday she went to the market. |
| `tim11` | 590 | We always have lunch at noon. | At noon we always have lunch. |
| `ps11` | 963 | He usually reads the newspaper in the morning. | In the morning he usually reads the newspaper. |
| `adv08` | 2275 | She usually wakes up at six. | Usually she wakes up at six. |
| `adv_1_12` | 3353 | She always drinks coffee in the morning. | In the morning she always drinks coffee. |
| `tc_1_12` | 3470 | She goes jogging every morning. | Every morning she goes jogging. |
| `tc_2_11` | 3484 | She drinks coffee every morning. | Every morning she drinks coffee. |
| `prep_2_12` | 2534 | I walk to church on Sunday mornings. | On Sunday mornings I walk to church. |
| `sa_1_12` | 3194 | She bought some milk at the market. | At the market she bought some milk. |
| `phv_1_12` | 3509 | She gave up smoking two years ago. | Two years ago she gave up smoking. |
| `phv_2_11` | 3523 | He gave up smoking five years ago. | Five years ago he gave up smoking. |

(`ta11` "They are sometimes late for school." — mid-position `sometimes` is the only fully
natural placement; fronting is marginal — *not flagged*.)

### 4c. Separable phrasal verbs — particle can move around the object
`turn on/off + object` is separable, so `turn the light on` is equally correct.

| id | line | answer | valid alternative to accept |
|----|------|--------|-----------------------------|
| `phv_1_13` | 3510 | Turn on the light please. | Turn the light on please. (also: Please turn on the light.) |
| `phv_1_14` | 3511 | Turn off the TV before bed. | Turn the TV off before bed. |
| `phv_2_12` | 3524 | Please turn off the lights. | Please turn the lights off. |

### 4d. "please" / request-marker placement
`please` moves freely to the front of a request or imperative.

| id | line | answer | valid alternative to accept |
|----|------|--------|-----------------------------|
| `v10` | 711 | Can you help me please? | Please can you help me? |
| `mod_1_15` | 2625 | Could you help me please? | Please could you help me? |
| `imp07` | 2207 | Close the door, please. | Please close the door. |
| `imp_2_07` | 3165 | Be quiet please. | Please be quiet. |

### 4e. Symmetric coordination (A and B ↔ B and A, order semantically free)

| id | line | answer | valid alternative to accept |
|----|------|--------|-----------------------------|
| `b04` | 417 | We have two eyes and two ears. | We have two ears and two eyes. |
| `n03` | 1390 | I have three books and two pens. | I have two pens and three books. |
| `pv_1_13` | 2898 | English and French are spoken all over the world. | French and English are spoken all over the world. |

---

## Summary

| Dimension | Findings |
|-----------|----------|
| 1a. Word-set mismatch (unsolvable) | **13** |
| 1b. Missing/empty words or answer, garbled | 0 |
| 1c. Duplicate ids | 0 |
| 2. Grammar error in target answer | 0 |
| 3. Difficulty miscalibration | 1 (`cond_1_15`) |
| 4a. Reversible conditional/subordinate clause | 10 |
| 4b. Frontable time/frequency adverbial | 16 |
| 4c. Separable phrasal-verb particle movement | 3 |
| 4d. "please" placement | 4 |
| 4e. Symmetric coordination | 3 |
| **Total exercises reviewed** | **377** |

**Highest-priority, most actionable:** the **13 word-set mismatches** in Dimension 1a —
each is a confirmed, mechanically-verified, *unsolvable* puzzle. Note `cond_1_15` appears
in both Dim 1a (missing second `she`) and Dim 3 (third conditional mistiered); `adv_1_15`'s
fix should also remove its ungrammatical `alternatives` band-aid.
