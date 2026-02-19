@echo off
TITLE DEBUG BACKEND - Kodnest Movie Explorer
echo ===================================================
echo   STARTING BACKEND (Port 5000)
echo ===================================================
cd server
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting Node.js Server...
node index.js
echo.
echo ===================================================
echo   BACKEND SERVER CRASHED OR STOPPED!
echo ===================================================
echo.
pause
