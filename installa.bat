@echo off
chcp 65001 >nul 2>&1
title English Academy Madagascar — Installazione

echo.
echo ============================================================
echo   English Academy Madagascar — Installazione automatica
echo ============================================================
echo.

REM ── Percorso cartella app ────────────────────────────────────────────────
set "APP_DIR=%~dp0"
set "APP_DIR=%APP_DIR:~0,-1%"

REM ── 1. Controlla Python ──────────────────────────────────────────────────
echo [1/4] Controllo Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  [ERRORE] Python non trovato.
    echo  Scarica e installa Python da: https://www.python.org/downloads/
    echo  Assicurati di spuntare "Add Python to PATH" durante l'installazione.
    echo.
    pause
    start https://www.python.org/downloads/
    exit /b 1
)
echo  [OK] Python trovato.

REM ── 2. Controlla Ollama ──────────────────────────────────────────────────
echo [2/4] Controllo Ollama...
ollama --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo  [ERRORE] Ollama non trovato.
    echo  Scarica e installa Ollama da: https://ollama.com/download
    echo  Poi riesegui questo file.
    echo.
    pause
    start https://ollama.com/download
    exit /b 1
)
echo  [OK] Ollama trovato.

REM ── 3. Scarica modello AI (se non presente) ──────────────────────────────
echo [3/4] Controllo modello AI (llama3.2:3b)...
echo  (potrebbe richiedere qualche minuto al primo avvio)
ollama list | find "llama3.2:3b" >nul 2>&1
if %errorlevel% neq 0 (
    echo  Scarico il modello llama3.2:3b (circa 2 GB)...
    ollama pull llama3.2:3b
    if %errorlevel% neq 0 (
        echo  [ATTENZIONE] Download modello fallito. Riprovare con internet attivo.
    ) else (
        echo  [OK] Modello scaricato.
    )
) else (
    echo  [OK] Modello gia' presente.
)

REM ── 4. Copia avvio automatico nella cartella Startup di Windows ──────────
echo [4/4] Configuro avvio automatico...
set "STARTUP=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
copy /Y "%APP_DIR%\avvia_silent.vbs" "%STARTUP%\EnglishAcademy.vbs" >nul
if %errorlevel% neq 0 (
    echo  [ERRORE] Impossibile copiare in Startup. Prova a eseguire come amministratore.
) else (
    echo  [OK] Avvio automatico configurato.
)

REM ── 5. Crea collegamento sul Desktop ─────────────────────────────────────
set "DESKTOP=%USERPROFILE%\Desktop"
set "SHORTCUT=%DESKTOP%\English Academy.lnk"
powershell -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%SHORTCUT%'); $s.TargetPath = '%APP_DIR%\avvia_silent.vbs'; $s.WorkingDirectory = '%APP_DIR%'; $s.IconLocation = '%APP_DIR%\avvia_silent.vbs'; $s.Description = 'English Academy Madagascar'; $s.Save()" >nul 2>&1
if exist "%SHORTCUT%" (
    echo  [OK] Collegamento creato sul Desktop.
) else (
    echo  [ATTENZIONE] Collegamento Desktop non creato, usa avvia.bat manualmente.
)

echo.
echo ============================================================
echo   Installazione completata!
echo.
echo   Da ora:
echo   - L'app si avvia AUTOMATICAMENTE all'accensione del PC
echo   - Oppure clicca "English Academy" sul Desktop
echo   - L'app aprira' il browser su http://localhost:3000
echo   - Funziona SENZA INTERNET
echo ============================================================
echo.
echo Premi un tasto per avviare l'app adesso...
pause >nul

start "" "%APP_DIR%\avvia_silent.vbs"
