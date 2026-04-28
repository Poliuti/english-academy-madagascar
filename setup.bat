@echo off
title English Academy — Setup iniziale
chcp 65001 >nul 2>&1

echo ============================================
echo   English Academy — Setup iniziale
echo   (esegui una sola volta)
echo ============================================
echo.

REM ── Verifica che ollama sia installato ────────────────────────────────
where ollama >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRORE] Ollama non trovato.
    echo Scaricalo da: https://ollama.com/download
    echo.
    pause
    exit /b 1
)

echo [1/2] Ollama trovato. Avvio...
start "" /B ollama serve
timeout /t 2 /nobreak >nul

echo [2/2] Download modello llama3.2:3b (circa 2 GB)...
echo       Attendi il completamento del download.
echo.
ollama pull llama3.2:3b

echo.
echo ============================================
echo  Setup completato!
echo  Ora puoi usare avvia.bat per avviare l'app.
echo ============================================
pause
