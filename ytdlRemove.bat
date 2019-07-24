@echo off

echo.
echo YTDL protocol for MPV
set REGPATH=HKEY_CURRENT_USER\SOFTWARE\Classes\ytdl

echo.
echo Removing key...
reg delete %REGPATH% /f

echo.
pause