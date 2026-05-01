@echo off
chcp 65001 >nul 2>&1

REM ── 1. Avvia Ollama (se non gia' attivo) ─────────────────────────────────
set OLLAMA_ORIGINS=*
tasklist /FI "IMAGENAME eq ollama.exe" 2>nul | find /I "ollama.exe" >nul
if %errorlevel% neq 0 (
    start "" /B ollama serve
)

REM ── 2. Avvia server HTTP Python sulla porta 3000 (se non gia' attivo) ────
powershell -Command "try { $null = Invoke-WebRequest -Uri 'http://localhost:3000' -UseBasicParsing -TimeoutSec 1; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel% neq 0 (
    start "" /B python -m http.server 3000 --directory "%~dp0"
)

REM ── 3. Attendi che Ollama sia pronto (max 30 sec) ─────────────────────────
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
start http://localhost:3000
