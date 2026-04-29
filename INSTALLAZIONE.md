# 📚 Guide d'installation — English Academy Madagascar

## Prérequis

- Windows 10 ou 11
- Python 3.x installé ([python.org](https://www.python.org/downloads/))
- Connexion internet pour l'installation initiale

---

## Étape 1 : Télécharger et installer Ollama

1. Aller sur → **https://ollama.com/download**
2. Cliquer sur **"Download for Windows"**
3. Double-cliquer sur le fichier téléchargé et l'installer normalement

---

## Étape 2 : Configuration initiale *(une seule fois)*

Double-cliquer sur **`setup_premier_demarrage.bat`**

Ce script va automatiquement :
- ✅ Configurer les permissions nécessaires (CORS)
- ✅ Télécharger le modèle IA **llama3.2:3b** (~2 Go)

⏳ *Attendre **5 à 10 minutes** selon la vitesse de connexion*

---

## Étape 3 : Utilisation quotidienne

Double-cliquer sur **`avvia.bat`** à chaque démarrage.

L'application s'ouvre automatiquement dans le navigateur.

---

## ✅ Fonctionne sans internet après l'installation

Une fois configuré, tout fonctionne hors ligne :

| Fonctionnalité | Hors ligne |
|---|---|
| Cours de grammaire (Théorie) | ✅ |
| Boky fampianarana (bilingue FR/MG) | ✅ |
| Exercices interactifs | ✅ |
| Synthèse vocale (audio) | ✅ |
| Tutor IA (Ollama) | ✅ |

---

## ❓ Problèmes fréquents

| Problème | Solution |
|---|---|
| "Ollama hors ligne" | Patienter quelques secondes — la page se reconnecte automatiquement |
| "Modèle non trouvé" | Ouvrir un terminal et lancer : `ollama pull llama3.2:3b` |
| Page blanche | Vérifier que Python est installé : `python --version` dans un terminal |
| Ollama ne démarre pas | Relancer `avvia.bat` en tant qu'administrateur |

---

## 📁 Structure des fichiers

```
english-academy-madagascar/
├── avvia.bat                    ← Lancer chaque jour
├── setup_premier_demarrage.bat  ← Lancer UNE seule fois
├── INSTALLAZIONE.md             ← Ce guide
├── index.html
├── public/audio/                ← Fichiers audio (synthèse vocale)
└── src/                         ← Code source de l'application
```
