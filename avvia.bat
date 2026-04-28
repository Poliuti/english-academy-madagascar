@echo off
title English Academy Madagascar — Avvio
chcp 65001 >nul 2>&1

echo ============================================
echo   English Academy Madagascar
echo ============================================
echo.

REM ── 1. Avvia Ollama in background (se non già attivo) ──────────────────
tasklist /FI "IMAGENAME eq ollama.exe" 2>nul | find /I "ollama.exe" >nul
if %errorlevel% neq 0 (
    echo [1/3] Avvio Ollama in background...
    start "" /B ollama serve
) else (
    echo [1/3] Ollama gia' in esecuzione.
)

REM ── 2. Avvia server HTTP locale (Python) ──────────────────────────────
echo [2/3] Avvio server locale sulla porta 3000...
start "" /B python -m http.server 3000 --directory "%~dp0"

REM ── 3. Attendi e apri il browser ──────────────────────────────────────
echo [3/3] Attesa 3 secondi...
timeout /t 3 /nobreak >nul

echo Apertura app nel browser...
start http://localhost:3000

echo.
echo ============================================
echo  App aperta su: http://localhost:3000
echo  Ollama:        http://localhost:11434
echo ============================================
echo  Premi un tasto per chiudere questa finestra
echo  (il server continua a girare in background)
echo ============================================
pause >nul
