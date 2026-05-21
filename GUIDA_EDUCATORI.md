# 📘 English Academy Madagascar — Guida per gli Educatori

> Versione italiana · [Version française ci-dessous](#-english-academy-madagascar--guide-pour-les-éducateurs)

---

## Cos'è English Academy Madagascar

English Academy Madagascar è un'applicazione web gratuita, utilizzabile anche **senza connessione internet**, pensata per insegnare l'inglese a studenti malgasci a partire dalla loro lingua madre (malgascio e francese).

- **370+ parole** organizzate in 39 argomenti tematici
- **2100+ file audio** con pronuncia nativa
- **Esercizi interattivi** (traduzione, ascolto, spelling, abbinamento)
- **Tutor IA** per pratica conversazionale
- **Vocabolario trilingue** inglese / francese / malgascio
- **Sistema di progressione** con livelli (A1 → C1), XP e streak

---

## 1. Come accedere all'app

Apri il browser (Chrome o Firefox consigliati) e vai all'indirizzo:

```
https://english-academy-madagascar.vercel.app
```

> ⚠️ **Importante:** usa sempre questo indirizzo fisso (URL di produzione), non i link temporanei che Vercel genera ad ogni aggiornamento. Solo con questo URL i profili degli studenti rimangono salvati tra una sessione e l'altra.

L'app funziona anche **offline** dopo il primo caricamento: i dati vengono salvati localmente nel browser sul dispositivo.

---

## 2. Creare un profilo studente

1. Alla prima apertura compare la schermata **"Qui es-tu ?"** (Chi sei?)
2. Cliccare su **"Nouveau profil"**
3. Inserire il nome dello studente e premere **"Créer !"**
4. Scegliere se fare subito un **test di livello iniziale** (consigliato) oppure saltarlo
5. Il profilo è creato e lo studente accede alla dashboard

> 💡 È possibile creare più profili sullo stesso dispositivo, uno per ogni studente. Ogni profilo tiene traccia dei propri progressi separatamente.

### Opzione cloud (salvataggio su più dispositivi)

Se l'app è configurata con Supabase, durante la creazione del profilo viene proposto di impostare un **codice PIN** a 4 cifre. Con questo PIN lo studente può ritrovare il proprio profilo su qualsiasi dispositivo usando il tasto **"Récupérer un profil"**.

---

## 3. La dashboard — Panoramica

Dopo il login lo studente vede la **dashboard**, che mostra:

| Sezione | Descrizione |
|---|---|
| 🎯 **Percorso di apprendimento** | Argomenti sbloccati progressivamente per livello |
| 📊 **Statistiche** | XP totali, livello attuale, streak giornaliero |
| 📚 **Vocabolario** | Schede parole con audio, esercizi di spelling |
| 🎓 **Teoria** | Grammatica inglese spiegata in francese |
| 🎧 **Ascolto** | Esercizi di comprensione audio |
| 🤖 **Tutor IA** | Chatbot per conversare in inglese |
| 🏆 **Modalità competitiva** | Sfida a punteggio cronometrata |
| 🌿 **Migliora le traduzioni** | Proponi correzioni al vocabolario malgascio |

---

## 4. Come usare l'app durante la lezione

### Sessione guidata (classe)
1. Aprire l'argomento del giorno dal **Percorso di apprendimento**
2. Far ascoltare le parole con audio agli studenti
3. Avviare gli esercizi interattivi — ogni esercizio dura 5–15 minuti
4. Controllare i punteggi e le stelle guadagnate a fine sessione

### Studio autonomo (individuale)
- Gli studenti possono usare l'app da soli a casa o in laboratorio
- Il sistema di **ripetizione spaziata** (SM-2) ripropone automaticamente le parole da ripassare
- La streak giornaliera motiva la pratica costante

---

## 5. Modalità Admin (per gli educatori)

La modalità admin permette di **gestire le traduzioni malgasce** del vocabolario.

### Come accedere
1. Dalla dashboard, scorrere in fondo alla pagina
2. Cliccare su **"⚙️ Mode Admin"** (o simile)
3. Inserire il **codice PIN admin**: `2024`

### Cosa si può fare in modalità admin
- **Vedere le proposte** di correzione inviate dagli studenti
- **Approvare o rifiutare** le traduzioni suggerite
- **Sovrascrivere direttamente** una traduzione malgascia
- Vedere quante "segnalazioni" ha ricevuto ogni voce

> 🔒 Cambia il PIN admin modificando il file `src/config.js` nel codice sorgente (campo `MG_ADMIN_PIN`).

---

## 6. Come gli studenti possono suggerire traduzioni

Se uno studente conosce una traduzione malgascia migliore di quella presente nell'app:

1. Dalla dashboard, cliccare su **"🌿 Améliorer les traductions malgaches"**
2. Appare la lista delle traduzioni marcate come **"À vérifier"** (da verificare)
3. Per ogni parola si vedono: la parola inglese, la traduzione francese e la traduzione malgascia attuale
4. Lo studente scrive la sua proposta nel campo di testo e clicca **"✉️ Soumettre"**
5. Appare un messaggio di conferma: la proposta viene salvata

L'educatore riceve le proposte nella **modalità admin** e può accettarle o rifiutarle.

---

## 7. Seguire i progressi degli studenti

Ogni profilo mostra:
- **Livello** (A1, A2, B1, B2, C1)
- **XP totali** guadagnati
- **Streak** (giorni consecutivi di pratica)
- **Titolo** (es. "Débutant courageux", "Explorateur des mots"...)

Al momento i progressi sono salvati localmente nel browser. Per confrontare i progressi tra studenti diversi, chiedere a ciascuno di mostrare la propria schermata profilo.

---

## 8. Domande frequenti

**I progressi si cancellano se aggiorno l'app?**
No. I progressi sono nel browser locale, non nel codice dell'app. Un aggiornamento dell'app non li cancella.

**Uno studente ha perso il suo profilo. Cosa faccio?**
Se aveva impostato un PIN, può recuperarlo con **"Récupérer un profil"** inserendo nome e PIN. Se non aveva PIN, il profilo è solo sul dispositivo originale.

**L'app funziona su smartphone?**
Sì, è responsive e funziona su mobile. Su Android si può anche installare come PWA (icona sul desktop).

**Posso usare l'app senza internet?**
Sì, dopo il primo caricamento. Gli audio e i contenuti vengono memorizzati nella cache del browser.

---

---

# 📘 English Academy Madagascar — Guide pour les Éducateurs

---

## Qu'est-ce qu'English Academy Madagascar ?

English Academy Madagascar est une application web gratuite, utilisable **sans connexion internet**, conçue pour enseigner l'anglais aux élèves malgaches à partir de leur langue maternelle (malgache et français).

- **370+ mots** organisés en 39 thèmes
- **2100+ fichiers audio** avec prononciation native
- **Exercices interactifs** (traduction, écoute, spelling, associations)
- **Tuteur IA** pour la pratique conversationnelle
- **Vocabulaire trilingue** anglais / français / malgache
- **Système de progression** avec niveaux (A1 → C1), XP et streak

---

## 1. Comment accéder à l'application

Ouvrez un navigateur (Chrome ou Firefox recommandés) et allez à l'adresse :

```
https://english-academy-madagascar.vercel.app
```

> ⚠️ **Important :** utilisez toujours cette adresse fixe (URL de production), pas les liens temporaires que Vercel génère à chaque mise à jour. Seule cette URL conserve les profils des élèves d'une session à l'autre.

L'application fonctionne aussi **hors ligne** après le premier chargement : les données sont sauvegardées localement dans le navigateur.

---

## 2. Créer un profil élève

1. Au premier lancement, l'écran **"Qui es-tu ?"** s'affiche
2. Cliquer sur **"Nouveau profil"**
3. Saisir le prénom de l'élève et appuyer sur **"Créer !"**
4. Choisir de faire tout de suite un **test de niveau** (recommandé) ou de le passer
5. Le profil est créé et l'élève accède au tableau de bord

> 💡 Plusieurs profils peuvent coexister sur le même appareil, un par élève. Chaque profil suit sa propre progression séparément.

### Option cloud (sauvegarde multi-appareils)

Si l'application est configurée avec Supabase, lors de la création du profil il est proposé de définir un **code PIN à 4 chiffres**. Avec ce PIN, l'élève peut retrouver son profil sur n'importe quel appareil en cliquant sur **"Récupérer un profil"**.

---

## 3. Le tableau de bord — Vue d'ensemble

Après la connexion, l'élève voit le **tableau de bord**, qui affiche :

| Section | Description |
|---|---|
| 🎯 **Parcours d'apprentissage** | Thèmes débloqués progressivement par niveau |
| 📊 **Statistiques** | XP totaux, niveau actuel, streak quotidien |
| 📚 **Vocabulaire** | Fiches mots avec audio, exercices de spelling |
| 🎓 **Théorie** | Grammaire anglaise expliquée en français |
| 🎧 **Écoute** | Exercices de compréhension audio |
| 🤖 **Tuteur IA** | Chatbot pour converser en anglais |
| 🏆 **Mode compétitif** | Défi de score chronométré |
| 🌿 **Améliorer les traductions** | Proposer des corrections au vocabulaire malgache |

---

## 4. Utiliser l'application en cours

### Session guidée (classe entière)
1. Ouvrir le thème du jour depuis le **Parcours d'apprentissage**
2. Faire écouter les mots avec audio
3. Lancer les exercices interactifs — chaque exercice dure 5 à 15 minutes
4. Vérifier les scores et les étoiles gagnées en fin de session

### Travail autonome (individuel)
- Les élèves peuvent utiliser l'application seuls, à la maison ou en salle informatique
- Le système de **répétition espacée** (SM-2) remet automatiquement en révision les mots à retravailler
- Le streak quotidien encourage une pratique régulière

---

## 5. Mode Admin (pour les éducateurs)

Le mode admin permet de **gérer les traductions malgaches** du vocabulaire.

### Comment y accéder
1. Depuis le tableau de bord, faire défiler jusqu'en bas de la page
2. Cliquer sur **"⚙️ Mode Admin"**
3. Saisir le **code PIN admin** : `2024`

### Ce qu'on peut faire en mode admin
- **Voir les propositions** de correction envoyées par les élèves
- **Approuver ou rejeter** les traductions suggérées
- **Remplacer directement** une traduction malgache
- Voir le nombre de signalements reçus pour chaque entrée

> 🔒 Pour changer le PIN admin, modifier le fichier `src/config.js` dans le code source (champ `MG_ADMIN_PIN`).

---

## 6. Comment les élèves proposent des traductions

Si un élève connaît une meilleure traduction malgache que celle de l'application :

1. Depuis le tableau de bord, cliquer sur **"🌿 Améliorer les traductions malgaches"**
2. La liste des traductions marquées **"À vérifier"** s'affiche
3. Pour chaque mot on voit : le mot anglais, la traduction française et la traduction malgache actuelle
4. L'élève écrit sa proposition dans le champ texte et clique sur **"✉️ Soumettre"**
5. Un message de confirmation apparaît : la proposition est sauvegardée

L'éducateur retrouve les propositions dans le **mode admin** et peut les accepter ou les refuser.

---

## 7. Suivre la progression des élèves

Chaque profil affiche :
- **Niveau** (A1, A2, B1, B2, C1)
- **XP totaux** gagnés
- **Streak** (jours consécutifs de pratique)
- **Titre** (ex. : "Débutant courageux", "Explorateur des mots"…)

Pour l'instant les progrès sont sauvegardés localement dans le navigateur. Pour comparer les progrès entre élèves, demander à chacun d'afficher son écran de profil.

---

## 8. Questions fréquentes

**Les progrès sont-ils supprimés si l'application est mise à jour ?**
Non. Les progrès sont dans le navigateur local, pas dans le code de l'application. Une mise à jour n'efface rien.

**Un élève a perdu son profil. Que faire ?**
S'il avait défini un PIN, il peut le récupérer via **"Récupérer un profil"** en saisissant prénom et PIN. Sans PIN, le profil n'existe que sur l'appareil d'origine.

**L'application fonctionne-t-elle sur smartphone ?**
Oui, elle est responsive et fonctionne sur mobile. Sur Android elle peut aussi être installée comme PWA (icône sur l'écran d'accueil).

**Peut-on utiliser l'application sans internet ?**
Oui, après le premier chargement. Les audios et contenus sont mis en cache par le navigateur.
