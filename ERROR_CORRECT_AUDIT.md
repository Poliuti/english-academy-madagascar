# Error-Correct Exercise Ambiguity Audit

## Methodology

The app's `error-correct` exercises present a grammatically wrong English sentence
and ask the learner to retype the fully corrected sentence. The answer is checked by
exact string match (after normalising contractions, accents and punctuation) against
the `answer` field, plus any strings in an `alternatives` array. Some exercises also
carry an `acceptedAnswers` array; whether the runtime honours that field or only
`alternatives` is a separate concern, but where a plausible correction is missing from
**both** it is flagged here.

This audit read every `type: 'error-correct'` object in `src/data/exercises.js`
(297 exercises, across all three quote/formatting styles — single-line, multi-line and
minified). For each one I asked: *is the supplied `answer` the only grammatically valid
way to fix the broken sentence, or could a reasonable learner produce a different,
equally correct sentence that the checker would reject?*

I deliberately excluded single-fix cases: subject–verb agreement with one target
(`She wake → She wakes`), irregular past/participle spelling (`goed → went`,
`was wrote → was written`), adjective order, article-before-uncountable, modal `to`,
preposition choice, `who` vs `which` for people vs things, etc. Only cases with a
genuine second valid correction are listed.

The recurring bug pattern is the same one found in **v31**: the broken sentence
contains an aspect/structure choice that English resolves in more than one way, but the
answer key locks in a single resolution.

## Findings

| id | line (approx) | sentence | current answer | plausible unaccepted alternative | reasoning |
|----|------|----------|----------------|-----------------------------------|-----------|
| v31 | 746 | He has wrote a letter. | He has written a letter. | He wrote a letter. | No time adverb → past simple is as valid as present perfect (the original bug). |
| col36 | 1354 | I have buy a yellow car. | I have bought a yellow car. | I bought a yellow car. | No time marker → past simple equally correct. |
| fd30 | 1251 | I have eat too much breads. | I have eaten too much bread. | I ate too much bread. | Past simple fixes both errors and is fully grammatical. |
| sch33 | 374 | I have learn many things at school. | I have learnt many things at school. | I learnt many things at school. | Past simple valid; `acceptedAnswers` covers "learned" spelling but not the past-simple option. |
| irv_3_07 | 3288 | I have saw that film. | I have seen that film. | I saw that film. | No adverb → past simple equally valid. |
| pp_3_03 | 2744 | I have see that movie before. | I have seen that movie before. | I saw that movie before. | "before" works with past simple too. |
| pp_3_12 | 4306 | Have you ever went abroad for work? | Have you ever been abroad for work? | Have you ever gone abroad for work? | "gone" is a valid participle here; the exercise's own explanation admits it, but only "been" is accepted. |
| sch27 | 368 | I am studying English since two years. | I have been studying English for two years. | I have studied English for two years. | Present perfect simple is a standard, accepted alternative to the continuous with a durative verb. |
| v33 | 748 | I have play tennis since 5 years. | I have been playing tennis for 5 years. | I have played tennis for 5 years. | Perfect simple vs continuous both accepted for "play + for". |
| num32 | 1457 | I am studying English since two year. | I have been studying English for two years. | I have studied English for two years. | Same perfect-simple/continuous ambiguity. |
| tc_3_02 | 3490 | I am living here since ten years. | I have been living here for ten years. | I have lived here for ten years. | "live" takes perfect simple or continuous interchangeably. |
| sf_3_12 | 4785 | I'm living in Antananarivo for six months. | I have been living in Antananarivo for six months. | I have lived in Antananarivo for six months. | Same perfect-simple/continuous ambiguity. |
| fam29 | 250 | She have a children. | She has a child. | She has children. | The "a + plural" error can be fixed to singular OR to bare plural; both grammatical. |
| sa10 | 2223 | I don't have no time. | I don't have any time. | I have no time. | Double negative fixable two ways; the explanation itself names both. |
| sa_3_04 | 3208 | She didn't eat nothing. | She didn't eat anything. | She ate nothing. | Double negative → "didn't...anything" or "ate nothing", both correct. |
| sa_3_07 | 3211 | There isn't no sugar. | There isn't any sugar. | There is no sugar. | Double negative fixable either way. |
| cu06 | 2287 | Can I have an advice? | Can I have some advice? | Can I have a piece of advice? | "a piece of advice" is the classic fix and is explicitly accepted in cu_3_05, but not here. |
| cu05 | 2286 | I have many informations. | I have a lot of information. | I have much information. | "much information" is a grammatical uncountable quantifier fix. |
| rel_3_08 | 5573 | This is the person which I told you about. | This is the person who I told you about. | This is the person that I told you about. (also "whom") | Defining relative + person-object: who / whom / that (or zero) are all valid; only "who" accepted. |
| con05 | 2300 | Although she was tired, but she worked. | Although she was tired, she worked. | She was tired, but she worked. | Redundant "although…but" fixable by dropping either connector. |
| con_3_08 | 3841 | Although the weather was bad, but we went outside. | Although the weather was bad, we went outside. | The weather was bad, but we went outside. | Drop "although" (keep "but") is equally valid; `acceptedAnswers` only covers the "although/though/even though" side. |
| con_3_06 | 3830 | She was tired, despite she studied all night. | She was tired, despite having studied all night. | She was tired, despite studying all night. (or "…although she studied all night.") | "despite + simple gerund" and "although + clause" are both valid corrections. |
| ta30 | 874 | We are rarely angry never. | We are rarely angry. | We are never angry. | The double adverb can be fixed by dropping either "rarely" or "never"; both grammatical. |
| ta03 | 784 | I go sometimes to the market. | I sometimes go to the market. | I go to the market sometimes. | End-position "sometimes" is valid; only mid-position and fronted forms are accepted. |

## Related (not counted): questionable "errors" with no unique fix

A few exercises mark a stylistic/pedagogical preference as the only error, where the
original sentence is arguably already grammatical, so the "corrected" answer and a
minimally-changed learner answer can both be defensible. These are a slightly different
class from the v31 ambiguity but worth a second look:

- **gt_3_01** (line 5745): "It will rain soon." is flagged wrong in favour of "It is going to rain soon." — `will` for predictions is grammatical.
- **ppt_3_12** (line 4348): "I found my keys after I looked everywhere." is flagged wrong in favour of the past perfect; the all-past-simple original is perfectly acceptable English.

## Summary

- **Error-correct exercises reviewed:** 297
- **Genuine ambiguity issues found (second valid correction rejected):** 24
- **Related "no unique fix" cases noted separately:** 2

Dominant sub-patterns among the 24: present perfect vs past simple with no time marker
(7), present perfect simple vs continuous for durative verbs with `for/since` (5),
double-negative fixable two ways (3), redundant/either-way connector removal (3), plus
article/number, relative-pronoun, uncountable-quantifier and adverb-position choices.
