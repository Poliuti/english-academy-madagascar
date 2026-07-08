# Fill-Blank Exercise Audit

## Methodology

The app's `fill-blank` exercises present a `template` string containing a single blank
marker `___` (occasionally a `verbHint` in parentheses, e.g. a base verb to conjugate)
and ask the learner to type the missing word(s). The answer is checked by `checkAnswer`
in `src/views/ExerciseView.js` (~L1007): lowercase + trim, accent/ligature stripping,
punctuation stripping (`.!?,;:`), whitespace collapse, two-way English contraction
expansion, a/an/the article-flexibility, single-token slash variants (`happy/glad`), a
small `SYNONYMS` table, and a present-perfect `'s = has` fix. It compares against
`ex.answer`, `ex.acceptedAnswers[]` and legacy `ex.alternatives[]`.

I extracted all **544** `type: 'fill-blank'` objects from `src/data/exercises.js` to
uniform JSON via a Node import of the module (bypassing the mixed single/double-quote,
single/multi-line/minified source formatting), then reviewed every one against the four
dimensions. Dimensions 1, 2 and 4 were audited exhaustively (no sampling). Dimension 3's
systemic batch pattern is summarised by representative examples per mis-tagged batch, with
full id-prefix / count / line-range stated for each.

Because the normaliser already resolves contractions, articles, British/American spelling
and the listed synonyms, those variations were **not** flagged. Only genuine gaps remain.

The recurring bug class (per prior audits) is dimension 4: the answer key locks in one
resolution of a blank that English fills more than one equally valid way.

---

## Dimension 1 — Data integrity

Automated checks across all 544 items: **no duplicate ids**, **no missing `template` or
`answer`**, **no empty/truncated/stray-fragment `acceptedAnswers`** (the `'She'`/`'We'`
lone-word pattern from the error-correct audit does **not** occur here), and **no template
with zero `___` markers**.

**Multi-blank templates (9).** These carry two `___` markers and are intentional by
design — the `answer` supplies both fills. They function (the normaliser strips the joining
comma), but they are inherently fragile and mostly lack join-variant coverage; see
Dimension 4. Listed here for completeness:

| id | line | template | answer |
|----|------|----------|--------|
| r08 | 81 | My father ___ at seven and ___ home at six. | starts work, comes back |
| b07 | 442 | You use your ___ to see and your ___ to hear. | eyes, ears |
| past12 | 1157 | When she ___ (arrive) home, her family ___ (be) already there. | arrived / was |
| prep07 | 2039 | She lives ___ home and goes ___ school every day. | at, to |
| pastc07 | 2075 | While she ___ (study), he ___ (sleep). | was studying, was sleeping |
| cond06 | 2122 | If she ___ (leave) earlier, she ___ (not/miss) the bus. | had left, wouldn't have missed |
| cond07 | 2123 | If you ___ (heat) ice, it ___ (melt). | heat, melts |
| fc04 | 2156 | ___ you ___ (use) the computer tonight? | Will, be using |
| cmp06 | 2182 | My car is ___ fast ___ yours. | as, as |

No other data-integrity defects found.

---

## Dimension 2 — Answer accuracy

Every `answer` grammatically and naturally fills its blank per the instruction's grammar
point. **No wrong verb form, wrong tense, agreement error or non-fitting answer was found.**
Two minor issues, both about an accepted *alternative* that is wrong/inconsistent rather
than the primary `answer`:

| id | line | template | answer | issue | suggested fix |
|----|------|----------|--------|-------|---------------|
| ta_sw_02 | 758 | He ___ comes late. Maybe once a year. | rarely (ALT: seldom, **never**) | The alternative **"never"** contradicts the context "Maybe once a year" — *He never comes late. Maybe once a year* is self-contradictory. `rarely`/`seldom` are correct. | Remove `"never"` from `alternatives`. |
| q_1_09 | 2567 | ___ do you prefer, tea or coffee? | What | For a closed two-item choice, **"Which"** is the standard interrogative — and its own sibling `int_1_10` (nearly identical prompt "___ do you prefer: tea or coffee?") answers `"Which"`. Inconsistent. | Accept `"Which"` (add to `acceptedAnswers`); `"What"` is colloquially tolerable so keep it. |

---

## Dimension 3 — Difficulty calibration

**Systemic mis-tag.** Every auto-generated batch with an id containing `_1_` or `_sw_`
was assigned `diffLevel: 1` uniformly, **regardless of the grammar it drills**. The
hand-tagged original items in the same categories carry `level` tags and `diffLevel: 3`
for exactly the same grammar points. This is the same "whole id-batch mistagged by naming
convention" pattern flagged in the translate audit.

A useful distinction for the fix: the **`_1_`** items require producing the *full*
construction (auxiliary + participle, modal-perfect, passive `be` + participle, etc.) and
match their `diffLevel: 3` siblings in complexity — these are clearly under-tagged. The
**`_sw_`** items reduce the same grammar to a single content-word gap inside an
already-scaffolded sentence (e.g. supply just the past participle), so `diffLevel: 1`–`2`
is more defensible for them; they are borderline, not clear errors.

### Tier A — B1/B2 grammar tagged diffLevel 1 (should be diffLevel 3)

| batch (id prefix) | lines (approx) | count | current | sibling / target | representative item |
|-------------------|----------------|-------|---------|------------------|---------------------|
| `fp_1_` future perfect | 3024–3028 | 5 | d1 | fp01… = **d3/B2** | fp_1_07 "By next month, she ___ completed the course" → *will have completed* |
| `cond_1_` conditionals (2nd/3rd) | 2848–2852 | 5 | d1 | cond06 = **d3/B2**, cond01… = d3/B1 | cond_1_10 "If he had called, I ___ answered" → *would have* (3rd cond.) |
| `tc_1_` tense chooser | 3465–3469 | 5 | d1 | tc01… = d3/B1 | tc_1_11 "By the time they arrive, I ___ everything" → *will have prepared* (future perfect) |
| `pp_1_` present perfect | 2716–2720 | 5 | d1 | pp01… = d3/B1 | pp_1_07 "I ___ known him since 2010" → *have* |
| `ppt_1_` past perfect | 2760–2764 | 5 | d1 | patp01… = d3/B1 | ppt_1_08 "She ___ never seen such a big city" → *had never seen* |
| `pv_1_` passive voice | 2892–2896 | 5 | d1 | pass01… = d3/B1 | pv_1_09 "The bridge ___ built in 1900" → *was* |
| `rs_1_` reported speech | 2936–2940 | 5 | d1 | rs01… = d3/B1 | rs_1_08 "He said he ___ call me" → *would* |
| `fc_1_` future continuous | 2980–2984 | 5 | d1 | fc01… = d3/B1 | fc_1_09 "At this time tomorrow, they ___ flying" → *will be* |
| `pc_1_` past continuous | 2672–2676 | 5 | d1 | pastc01… = d3/B1 | pc_1_08 "They ___ not working last night" → *were not working* |
| `tm_1_` time markers | 2804–2808 | 5 | d1 | tm01… = d3/B1 | tm_1_11 "They have known each other ___ 2015" → *since* |
| `con_1_` connectors | 3426–3430 | 5 | d1 | con01… = d3/B1 | con_1_09 "It was cold; ___, we enjoyed our walk" → *however* |
| `phv_1_` phrasal verbs | 3504–3508 | 5 | d1 | pv01… (phrasalVerbs) = d3/B1 | phv_1_10 "The meeting has been ___ until next week" → *put off* |
| `vs_1_` gerund/infinitive | 5025–5070 | 5 | d1 | (no d3 sibling) B1 | vs_1_07 "She hopes ___ Paris one day (visit)" → *to visit* |
| `rel_1_` relative clauses | 5420–5465 | 5 | d1 | (no d3 sibling) B1/B1+ | rel_1_12 "The student ___ results were the best" → *whose* |
| `sf_1_` since/for | 4607–4647 | 5 | d1 | (no d3 sibling) B1 | sf_1_11 "He hasn't called me ___ we argued" → *since* |
| `cu_1_` countable/uncountable | 3387–3391 | 5 | d1 | cu09 = d3/B1, cu01… = d2/A2 | cu_1_11 "She has ___ patience with difficult students" → *little* |

The parallel `_sw_` participle batches for the same grammar (borderline; consider `diffLevel: 2`):
`fp_sw_` (10, L3993–4002), `fc_sw_` (10, L3949–3958), `ppt_sw_` (10, L4316–4325),
`pc_sw_` (10, L4156–4165), `tc_sw_` (8, L4511–4518), `phv_sw_` (10, L4199–4208),
`cond_sw_` (6, L3872–3877), `cu_sw_` (7, L3921–3927).

### Tier B — A2 grammar tagged diffLevel 1 (should be diffLevel 2)

| batch (id prefix) | lines (approx) | count | current | sibling / target | representative item |
|-------------------|----------------|-------|---------|------------------|---------------------|
| `comp_1_` comparatives | 3070–3074 | 5 | d1 | cmp01… = d2/A2 | comp_1_08 "January is ___ month of the year (cold)" → *the coldest* |
| `imp_1_` imperatives | 3150–3154 | 5 | d1 | imp04… = d2/A2 | imp_1_11 "___ late to class" → *Don't be* |
| `int_1_` wh-questions | 3111–3115 | 5 | d1 | intr01… = d2/A2 | int_1_09 "___ long have you been learning English?" → *How* |
| `sa_1_` some/any | 3189–3193 | 5 | d1 | sa01… = d2/A2 | sa_1_10 "___ has left a message for you" → *Someone* |
| `irv_1_` irregular verbs | 3267–3271 | 5 | d1 | irr01… = d2/A2 | irv_1_09 "He ___ me a beautiful letter (write)" → *wrote* |
| `pos_1_` possessives | 3309–3313 | 5 | d1 | pos01… = d2/A2 | pos_1_11 "That bag is ___ (she owns it)" → *hers* |
| `adv_1_` adverbs | 3348–3352 | 5 | d1 | adv01… = d2/A2 | adv_1_07 "She speaks very ___ (quiet)" → *quietly* |
| `mod_1_` modals | 2617–2621 | 5 | d1 | mod01… = d2/A2, mod07 = d3/B1 | mod_1_11 "She ___ be at the market" → *might* |
| `pts_1_` past simple | 3628–3632 | 5 | d1 | past01… = d2/A2 | pts_1_11 "I ___ her at the market (see)" → *saw* |
| `fts_1_` future simple | 3713–3717 | 5 | d1 | fut01… = d2/A2 | fts_1_10 "___ he be at the meeting?" → *Will* |
| `gt_` be going to | 5608–5675 | 14 | d1 | (no sibling) A2 | gt_1_12 "We ___ (be) late if we don't leave now" → *are going to be* |
| `ut_` used to | 4797–4854 | 14 | d1 | (no sibling) A2/B1 | ut_1_05 "I ___ like vegetables, but now I love them" → *didn't use to* |
| `prn_1_` pronouns (reflexive) | 3667–3673 | 7 | d1 | pr01… = d1/A1 (but reflexives A2) | prn_1_09 "She taught ___ to swim" → *herself* |

Batches whose `diffLevel: 1` is **correct** (A1 grammar): `prep_1_`, `art_1_`, `pl_1_`,
`tbi_1_`/`tbi_sw_`, `q_1_`, `prs_1_`, `prc_1_`/`prc_sw_`, `tobe_1_`, and all the
vocabulary `_sw_` sets (`r_sw`, `b_sw`, `n_sw`, `v_sw`, `ta_sw`, `col`…). No action.

---

## Dimension 4 — Accepting valid alternatives

### 4a — Underspecified single-verb blanks (no `verbHint`, missing synonym)

The instruction asks only for "the correct verb form"/"the correct word"; with no verb
supplied, a second everyday verb fits equally and is rejected.

| id | line | template | answer | valid unaccepted alternative |
|----|------|----------|--------|------------------------------|
| r_sw_05 | 17 | They ___ breakfast every morning. | eat | **have** ("have breakfast" is idiomatic; cf. r20 which uses *have*) |
| r20 | 121 | They ___ dinner at seven. | have | **eat** ("eat dinner"; inverse of r_sw_05) |
| r17 | 118 | We ___ home at five. | come | **get** / **arrive** ("We get home at five") |
| v07 | 688 | She ___ coffee. *(negative form required)* | doesn't like | **doesn't drink** (more natural for a beverage; no context forces "like") |
| fd14 | 1235 | She ___ bread. | eats | **likes** ("She likes bread") |

### 4b — Tense-choice / alternative-form gaps

| id | line | template | answer | valid unaccepted alternative |
|----|------|----------|--------|------------------------------|
| fc04 | 2156 | ___ you ___ (use) the computer tonight? | Will, be using | **Will … use** — simple future "Will you use the computer tonight?" is equally (arguably more) natural; only the continuous is accepted. |
| q_1_09 | 2567 | ___ do you prefer, tea or coffee? | What | **Which** (see Dimension 2 — also the standard form). |
| prep_1_11 | 2517 | The shop is ___ the corner. *(in/on/at)* | on | **at** — "at the corner" is a valid location reading within the given in/on/at set. |

### 4c — Multi-blank join-variant gaps

Multi-blank items rely on the normaliser stripping the joining comma, but reject the
common `and`-joined production. `past12` handles this (accepts "arrived and was"); `r08`
has `alternatives`. The rest do not:

| id | line | template | answer | valid unaccepted alternative |
|----|------|----------|--------|------------------------------|
| b07 | 442 | You use your ___ to see and your ___ to hear. | eyes, ears | **"eyes and ears"** (natural join) not accepted. |
| pastc07 | 2075 | While she ___ (study), he ___ (sleep). | was studying, was sleeping | **"was studying and was sleeping"** not accepted. |

(`prep07`, `cond06`, `cmp06`, `cond07` share the pattern but a wrong join is far less
likely for those; lower priority.)

### 4d — Open-ended prompts with an arbitrary accepted subset

These prompts have **no determinate answer**; the accepted list is an arbitrary sample, so
a learner giving a different, equally correct value is wrongly marked wrong.

| id | line | template | accepted | problem |
|----|------|----------|----------|---------|
| tim14 | 602 | It is ___ o'clock. | five, six, two | any hour word (one…twelve) is correct. |
| tim17 | 605 | Today is ___. | Monday, Tuesday, Sunday | any weekday is correct. |
| num14 | 1439 | She is ___ years old. | ten, five, twelve | any age is correct. |
| num20 | 1442 | I am ___ years old. | twenty, fifteen | any age is correct. |
| col14 | 1332 | My shirt is ___. | red, white, blue | any colour is correct. |
| num29 | 1454 | My phone number is two-five-___-eight. | seven | fully arbitrary digit; no correct answer exists. |

Suggested fix: either broaden the accepted lists substantially, add a determining context
clue to the template, or convert these to a format that does not require exact matching.

---

## Summary

| Dimension | Items flagged |
|-----------|---------------|
| 1 — Data integrity | 0 defects (9 intentional multi-blank items catalogued; some feed 4c) |
| 2 — Answer accuracy | 2 (ta_sw_02 contradictory alt; q_1_09 What/Which inconsistency) |
| 3 — Difficulty calibration | Systemic: **16** `_1_`/`_sw_` grammar batches under-tagged to B1/B2 (Tier A) + **13** to A2 (Tier B); ~230+ items across the `_1_`/`_sw_`/`gt_`/`ut_` families uniformly stuck at diffLevel 1 |
| 4 — Valid alternatives | 16 (5 single-verb, 3 tense/form, 2 multi-blank join, 6 open-ended) |

**Total fill-blank exercises reviewed: 544.** Data integrity is clean. The dominant issue
by far is Dimension 3: the entire auto-generated `_1_`/`_sw_` exercise family was
blanket-tagged `diffLevel: 1`, placing B1/B2 grammar (future perfect, passives, reported
speech, 3rd conditional, relative clauses) in the beginner tier alongside genuine A1 items.
