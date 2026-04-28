# English Academy Madagascar

Application web d'apprentissage de l'anglais pour étudiants malgaches.  
Grammaire · Vocabulaire · Dialogues · Boky fampianarana · Tutor IA

**🌐 Version en ligne :** https://english-academy-madagascar.vercel.app

---

## Accès rapide

| Mode | Action |
|------|--------|
| En ligne (n'importe quel appareil) | Ouvre https://english-academy-madagascar.vercel.app |
| En local (PC prof) | Double-clique sur `avvia.bat` |
| Premier lancement (Tutor IA) | Double-clique sur `setup.bat` une seule fois |

---

## Utilisation en local (Windows)

### Premier lancement — Setup unique
```
Double-clique sur setup.bat
```
Ce script :
1. Vérifie qu'Ollama est installé (sinon : https://ollama.com/download)
2. Télécharge le modèle IA `llama3.2:3b` (~2 Go, une seule fois)

### Lancement quotidien
```
Double-clique sur avvia.bat
```
Ce script :
1. Démarre Ollama en arrière-plan (pour le Tutor IA)
2. Démarre un serveur HTTP local sur le port 3000
3. Ouvre automatiquement l'app dans le navigateur

---

## Plusieurs étudiants sur un même PC

Chaque étudiant doit avoir son **profil navigateur** séparé :

- **Chrome** : clic sur l'avatar en haut à droite → "Ajouter un profil"
- **Firefox** : Menu → Aide → Informations de dépannage → Ouvrir le dossier profil (créer profil via `firefox -P`)
- **Edge** : clic sur l'avatar → "Ajouter un profil"

Les données (XP, progression, streak) sont stockées dans `localStorage`, isolé par profil navigateur.

---

## Tutor IA (Ollama)

Le chatbot fonctionne **entièrement en local** — aucune donnée envoyée sur Internet.

| Prérequis | Lien |
|-----------|------|
| Ollama | https://ollama.com/download |
| Modèle | `ollama pull llama3.2:3b` (via setup.bat) |

**Pour utiliser depuis d'autres appareils sur le même réseau :**
1. Démarre Ollama avec : `set OLLAMA_HOST=0.0.0.0 && ollama serve`
2. Dans l'app → Tutor → ⚙️ changer l'adresse vers l'IP du PC (ex: `192.168.1.X:11434`)

---

## Génération audio (TTS local)

Les fichiers audio sont pré-générés avec [kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx).  
Pour regénérer (après ajout de nouveaux contenus) :

```bash
python scripts/generate_audio.py
```

Pour vérifier les fichiers manquants :
```bash
python scripts/check_audio.py
python scripts/check_audio.py --fix   # régénère les manquants
```

---

## Structure du projet

```
├── avvia.bat          # Lancement quotidien (Windows)
├── setup.bat          # Premier lancement / installation
├── index.html
├── src/
│   ├── main.js        # Router SPA
│   ├── data/
│   │   ├── exercises.js   # ~200 exercices
│   │   ├── theory.js      # Grammaire (21 sections)
│   │   ├── boky.js        # Manuel bilingue FR/MG
│   │   ├── vocabulary.js  # Vocabulaire thématique
│   │   ├── dialogues.js   # Dialogues scénarisés
│   │   └── audio-map.js   # Index audio pré-générés
│   ├── views/         # Composants UI
│   └── styles/        # CSS
├── public/audio/      # Fichiers WAV (kokoro af_sarah)
└── scripts/
    ├── generate_audio.py  # Génération TTS
    └── check_audio.py     # Audit audio
```
