@echo off

echo.
echo YTDL protocol for MPV
echo.

:: Check mpv.exe location
set MPVPATH=%~dp0mpv.exe
if not exist "%MPVPATH%" call :die "mpv.exe not found inside the current folder."
echo Path: "%MPVPATH%" 

:: Command line arguments (no quotes)
set MPVARGS=--no-resume-playback --fullscreen
:: HKEY_CLASSES_ROOT works for all users but requires administrator
:: set REGPATH=HKEY_CLASSES_ROOT\ytdl
set REGPATH=HKEY_CURRENT_USER\SOFTWARE\Classes\ytdl

echo.
echo Creating keys...
reg add %REGPATH%\DefaultIcon /f
reg add %REGPATH%\shell /f
reg add %REGPATH%\shell\open /f
reg add %REGPATH%\shell\open\command /f

echo.
echo Adding protocol...
reg add %REGPATH% /f /ve /t REG_SZ /d "URL:YTDL Protocol"
reg add %REGPATH% /f /v "URL Protocol" /t REG_SZ /d ""
reg add %REGPATH%\shell\open\command /f /ve /t REG_SZ /d "\"%MPVPATH%\" %MPVARGS% -- \"%%1\""

:die
if not [%1] == [] echo %~1
echo. && pause
exit