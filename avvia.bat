@echo off
title English Academy Madagascar — Avvio
chcp 65001 >nul 2>&1

echo ============================================
echo   English Academy Madagascar
echo ============================================
echo.

REM ── 1. Avvia Ollama in background (se non già attivo) ──────────────────
REM     OLLAMA_ORIGINS=* abilita le richieste dal browser (CORS fix)
set OLLAMA_ORIGINS=*

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

REM ── 3. Attendi che Ollama sia pronto, poi apri il browser ────────────
echo [3/3] Attesa Ollama pronto (max 30 sec)...
set /a _att=0
:_wait_ollama
set /a _att+=1
if %_att% gtr 30 goto _open_browser
powershell -Command "try { $null = Invoke-WebRequest -Uri 'http://localhost:11434/api/tags' -UseBasicParsing -TimeoutSec 1; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel% neq 0 (
    timeout /t 1 /nobreak >nul
    goto _wait_ollama
)
:_open_browser

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
