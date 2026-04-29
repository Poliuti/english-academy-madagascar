@echo off
title English Academy Madagascar — Configuration initiale
chcp 65001 >nul 2>&1

echo ============================================
echo   English Academy Madagascar
echo   Configuration initiale (premier demarrage)
echo ============================================
echo.
echo Ce script va :
echo   1. Configurer OLLAMA_ORIGINS (CORS)
echo   2. Telecharger le modele IA (~2 GB)
echo   3. Confirmer la fin de la configuration
echo.
echo ATTENTION : l'etape 2 peut prendre 5-10 minutes.
echo.
pause

echo.
echo [1/3] Configuration de la variable OLLAMA_ORIGINS...
setx OLLAMA_ORIGINS "*" >nul 2>&1
echo     OK — OLLAMA_ORIGINS=* configure en permanence.

echo.
echo [2/3] Telechargement du modele llama3.2:3b...
echo       (Attendez la fin, ne fermez pas cette fenetre)
echo.
ollama pull llama3.2:3b

echo.
echo [3/3] Verification du modele installe...
ollama list

echo.
echo ============================================
echo  CONFIGURATION TERMINEE !
echo.
echo  Vous pouvez maintenant lancer avvia.bat
echo  pour demarrer l'application.
echo ============================================
echo.
pause
