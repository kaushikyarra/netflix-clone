@echo off
TITLE FORCE CLEAN START - Kodnest Movie Explorer

echo ===================================================
echo   KILLING OLD PROCESSES...
echo ===================================================
taskkill /F /IM node.exe
echo.
echo All Node.js processes terminated.

echo ===================================================
echo   STARTING FRESH (Port 5000 ^& 5175)
echo ===================================================
echo.

start cmd /k "cd server && npm run dev"
start cmd /k "cd client && npm run dev"

echo.
echo Please go to: http://localhost:5175
echo.
pause
