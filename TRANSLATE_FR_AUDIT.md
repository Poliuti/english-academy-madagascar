# Translate-FR (EN→FR) Exercise Audit

## Methodology

The app's `translate-fr` exercises show an English sentence (`english` field) and ask
the learner to type a French translation. The answer is checked by normalised exact
string match against `answer`, plus any strings in `acceptedAnswers` / `alternatives`.
The shared normaliser (in `ExerciseView.js` `checkAnswer`, ~line 995) lowercases, trims,
**strips accents** (so accent-less typing is accepted), normalises œ/æ ligatures, strips
punctuation, collapses whitespace, and honours slash-variants inside a single token
(e.g. `heureux/heureuse`). It does **not** strip French articles (le/la/les), does not
understand parentheses in the answer, and does not equate tu/vous, nous/on, or
futur-simple/futur-proche.

This audit read every `type: 'translate-fr'` object in `src/data/exercises.js`
(132 exercises, across the single-line, multi-line and minified formatting styles). For
each one I checked all four dimensions: correct functioning (data integrity), answer
accuracy (natural, correct French), difficulty calibration, and — the core bug class
carried over from the error-correct audit — whether a learner could produce a different
but equally valid French sentence that the checker would wrongly reject.

I excluded marginal cases (e.g. every conceivable synonym) and list only genuine,
confident findings. Encoding of accented characters is clean throughout; no missing
`english`/`answer` fields, no swapped fields, no duplicate ids were found.

Two structural facts frame the findings:
- **All 132 translate-fr exercises are hard-coded `diffLevel: 3`**, so the difficulty
  field carries no real signal — see Dimension 3.
- **The tu/vous register gap is systemic**: English 2nd-person "you" is register-neutral,
  but almost every answer locks in a single register with no alternative — see Dimension 4.

---

## Dimension 1 — Correct functioning (data-integrity bugs)

| id | line | english | answer | issue | suggested fix |
|----|------|---------|--------|-------|---------------|
| mod_3_10 | 2652 | She can speak English and French. | `Elle parle (sait parler) anglais et français.` | Answer contains a literal parenthetical `(sait parler)`. Exact-match will reject both natural learner inputs ("Elle parle anglais et français" / "Elle sait parler anglais et français"). | Set `answer:'Elle sait parler anglais et français.'` and add `acceptedAnswers:['Elle parle anglais et français.']`. Remove parentheses. |
| phv_3_07 | 4217 | I need to find out when the next flight leaves. | `J'ai besoin de découvrir / savoir quand part le prochain vol.` | Embedded multi-word ` / ` (spaced, two verbs) is not the single-token slash-variant the normaliser supports; the raw string with " / " won't match natural input. | Pick one as `answer` (`...de savoir quand part le prochain vol.`) and put the other verb-variant in `acceptedAnswers`. |
| pp_3_06 | 2747 | Have they arrived yet? | `Sont-ils déjà arrivés ?` (alt: `Ont-ils déjà arrive ?`) | The **alternative** is ungrammatical: *arriver* takes *être*, not *avoir* ("Ont-ils arrivé" is wrong), and "arrive" is unaccented/unagreed. Only widens acceptance to a wrong form, but is bad data. | Remove the `Ont-ils déjà arrive ?` alternative (or replace with `Est-ce qu'ils sont déjà arrivés ?`). |
| sa_3_09 | 3213 | Nobody came. | `Personne n'est venu.` (alt: `Aucun n'est venu.`) | Alternative `Aucun n'est venu` is unnatural/incorrect without an antecedent noun. Harmless (only broadens acceptance) but poor data. | Drop the alternative or replace with `Personne n'est venu.` variants only. |

---

## Dimension 2 — Answer accuracy (correct, natural French)

| id | line | english | answer | issue | suggested fix |
|----|------|---------|--------|-------|---------------|
| cond_3_05 | 2878 | If it rains, the match will be cancelled. | `Si il pleut, le match sera annulé.` | **Ungrammatical primary answer**: elision is obligatory — must be "S'il pleut", never "Si il". The correct form only survives because it happens to be in `alternatives`. The displayed model answer is wrong. | Make `answer:"S'il pleut, le match sera annulé."` (the current alternative). |
| art_3_11 | 2383 | I need a doctor urgently. | `J'ai besoin d'un médecin d'urgence.` | "un médecin d'urgence" naturally reads as "an emergency(-room) doctor", losing the adverbial "urgently". | Prefer `J'ai besoin d'un médecin de toute urgence.` (or `J'ai besoin d'urgence d'un médecin.`); keep the current as an accepted variant if desired. |
| art_3_09 | 2381 | She is an excellent doctor. | `Elle est une excellente médecin.` | With an article + qualifying adjective before a profession, idiomatic French uses *c'est*: "C'est une excellente médecin." "Elle est une excellente…" is a mild calque. | Prefer `C'est une excellente médecin.`; keep `Elle est un excellent médecin.` / `Elle est une excellente médecin.` as accepted variants. |

---

## Dimension 3 — Difficulty calibration

**Systemic finding: every one of the 132 translate-fr exercises is tagged `diffLevel: 3`.**
The field is uniform and therefore non-informative — it appears to be inherited from the
"L3" grammar sub-sections rather than assigned by sentence complexity. Many exercises are
genuinely level 3 (subjonctif, plus-que-parfait, passive, inversions — e.g. con_3_07 line
3837 *afin que … puisse*, comp_3_07 line 3096 *que je connaisse*, cond_3_09 line 3887
"Had she studied…", rel_3_02 line 5546 *dont*, sf_3_10 line 4779 past-perfect-continuous).
But a large subset are trivially easy present-tense / single-clause sentences that would
be FLE A1–A2 (diffLevel 1–2). Representative sample of clear mismatches (not exhaustive —
the whole set needs recalibration if the field is meant to be meaningful):

| id | line | english | answer | true level | why |
|----|------|---------|--------|-----------|-----|
| art_3_10 | 2382 | The children love the beach. | Les enfants adorent la plage. | 1 | present, one clause, basic vocab |
| pl_3_11 | 2434 | She has two cats and three dogs. | Elle a deux chats et trois chiens. | 1 | avoir + numbers, no difficulty |
| tbi_3_10 | 2496 | There are many birds in Madagascar. | Il y a beaucoup d'oiseaux à Madagascar. | 1 | il y a + noun |
| prep_3_12 | 2550 | The book is between the pen and the eraser. | Le livre est entre le stylo et la gomme. | 1 | être + one preposition |
| int_3_11 | 3137 | Why are you late? | Pourquoi es-tu en retard ? | 1 | 4-word question |
| tobe_3_08 | 3251 | He is a doctor and she is a nurse. | Il est médecin et elle est infirmière. | 1 | être + profession |
| prs_3_08 | 3571 | He works at the hospital. | Il travaille à l'hôpital. | 1 | present, one clause |
| prs_3_11 | 3574 | The sun rises in the east. | Le soleil se lève à l'est. | 1–2 | one reflexive present verb |
| adv_3_08 | 3372 | He always speaks too fast. | Il parle toujours trop vite. | 1–2 | present + adverbs |
| sa_3_08 | 3212 | I want something to drink. | Je veux quelque chose à boire. | 1–2 | present + indefinite |
| imp_3_08 | 3173 | Open the book at page twenty. | Ouvre le livre à la page vingt. | 1–2 | single imperative |
| pl_3_10 | 2433 | The children played all day. | Les enfants ont joué toute la journée. | 2 | plain passé composé |
| irv_3_09 | 3290 | She bought some bread this morning. | Elle a acheté du pain ce matin. | 2 | passé composé + partitive |
| pos_3_10 | 3334 | He lost his keys. | Il a perdu ses clés. | 2 | passé composé, one clause |
| int_3_09 | 3135 | How much does this book cost? | Combien coûte ce livre ? | 2 | simple question |
| prc_3_10 | 3614 | It is not raining right now. | Il ne pleut pas en ce moment. | 2 | present negation |

---

## Dimension 4 — Accepting valid alternatives (missing `acceptedAnswers`)

### 4a. tu/vous register (systemic)

English "you/your/imperatives" is register-neutral; both *tu* and *vous* forms are
correct French, but each answer locks in one register with no alternative. Every case
below should gain the opposite-register form in `acceptedAnswers`. (Note int_3_08 is
inconsistent with q_3_10: the two "How long have you…" items pick opposite registers.)

| id | line | english | answer (register) | missing alternative |
|----|------|---------|-------------------|----------------------|
| mod_3_09 | 2651 | You should see a doctor. | Tu devrais voir un médecin. (tu) | Vous devriez voir un médecin. |
| mod_3_11 | 2653 | You must not enter without permission. | Tu ne dois pas entrer sans permission. (tu) | Vous ne devez pas entrer sans permission. |
| q_3_10 | 2600 | How long have you been waiting? | Depuis combien de temps attends-tu ? (tu) | Depuis combien de temps attendez-vous ? |
| q_3_11 | 2601 | Who told you that? | Qui t'a dit ça ? (tu) | Qui vous a dit ça ? |
| int_3_08 | 3134 | How long have you been working here? | Depuis combien de temps travaillez-vous ici ? (vous) | Depuis combien de temps travailles-tu ici ? |
| fc_3_06 | 3011 | Will you be using the computer this afternoon? | Utiliseras-tu l'ordinateur cet après-midi ? (tu) | Utiliserez-vous l'ordinateur cet après-midi ? |
| imp_3_08 | 3173 | Open the book at page twenty. | Ouvre le livre à la page vingt. (tu) | Ouvrez le livre à la page vingt. |
| imp_3_09 | 3174 | Don't touch that! | Ne touche pas à ça ! (tu) | Ne touchez pas à ça ! |
| imp_3_10 | 3175 | Sit down and close your books. | Asseyez-vous et fermez vos livres. (vous) | Assieds-toi et ferme tes livres. |
| tobe_3_09 | 3252 | Weren't you at the market this morning? | N'étais-tu pas au marché ce matin ? (tu) | N'étiez-vous pas au marché ce matin ? |
| prc_3_09 | 3613 | What are you doing this weekend? | Que fais-tu ce week-end ? (tu) | Que faites-vous ce week-end ? |
| phv_3_04 | 3531 | You should give up eating so much sugar. | Tu devrais arrêter de manger autant de sucre. (tu) | Vous devriez arrêter de manger autant de sucre. |
| fp_3_05 | 3054 | By the time you arrive, we will have eaten. | Quand tu arriveras, nous aurons déjà mangé. (tu) | Quand vous arriverez, nous aurons déjà mangé. |
| fp_3_09 | 4012 | By the time you arrive, I will have cooked dinner. | Quand tu arriveras, j'aurai préparé le dîner. (tu) | Quand vous arriverez, j'aurai préparé le dîner. |
| gt_3_10 | 5800 | Are you going to tell her the truth, or are you going to keep lying? | Tu vas lui dire la vérité, ou tu vas continuer à mentir ? (tu) | Vous allez lui dire la vérité, ou vous allez continuer à mentir ? |

### 4b. Other valid variants

| id | line | english | answer | missing valid alternative | reasoning |
|----|------|---------|--------|----------------------------|-----------|
| comp_3_07 | 3096 | She is the most intelligent person I know. | C'est la personne la plus intelligente que je connaisse. | …que je connais. (indicative) | After a superlative the subjunctive is optional; the indicative is fully standard. |
| mod_3_09 | 2651 | You should see a doctor. | Tu devrais voir un médecin. | Tu devrais consulter un médecin. | "consulter un médecin" is the more idiomatic collocation and an expected learner answer. |

### 4c. nous/on and futur simple/proche (note, not itemised)

Two further systemic gaps, not tabulated to avoid padding but worth a bulk fix:
- **nous → on**: colloquial-but-correct "on" is never accepted where the answer uses
  "nous" (e.g. prs_3_10 line 3573 *Nous ne mangeons* → *On ne mange*; irv_3_10 line 3291
  *Nous avons vu* → *On a vu*; pts_3_10 line 3656; prc_3_11 line 3615).
- **futur simple ↔ futur proche**: where English uses "will", *aller + infinitif* is often
  equally natural and unaccepted (e.g. fts_3_10 line 3741 *je serai* → *je vais être*).
  Conversely the *going-to* items (gt_*) accept only *aller + inf.* and not futur simple.

---

## Summary

- **Translate-fr exercises reviewed:** 132 (all `diffLevel: 3`)
- **Dimension 1 — functioning bugs:** 4 (2 answer-format bugs blocking valid input; 2 bad alternatives)
- **Dimension 2 — accuracy bugs:** 3 (1 ungrammatical primary answer `Si il`; 2 naturalness/mistranslation)
- **Dimension 3 — difficulty mismatches:** systemic — 100% uniform `diffLevel:3`; ~16+ clearly A1–A2 sentences listed as a representative sample
- **Dimension 4 — missing alternatives:** 15 tu/vous cases + 2 other variants itemised, plus 2 systemic bulk gaps (nous/on, futur simple/proche)

**Overall:** 24 itemised findings plus two systemic issues (uniform diffLevel, register/aspect
alternative gaps). The highest-priority fixes are the functioning bugs (mod_3_10, phv_3_07)
and the ungrammatical `Si il` answer (cond_3_05), since those either reject correct learner
input or present a wrong model answer. The tu/vous gap is the largest by volume and mirrors
the single-resolution-of-an-ambiguous-prompt pattern found in the error-correct audit.
