@echo off
TITLE DEBUG LAUNCH - Kodnest Movie Explorer

echo ===================================================
echo   DEBUG MODE: STARTING APPS
echo ===================================================
echo.

echo 1. Starting Backend (Server)...
start "BACKEND_DEBUG" cmd /k "cd server && npm install && npm run dev || echo BACKEND FAILED & pause"

echo 2. Starting Frontend (Client)...
start "FRONTEND_DEBUG" cmd /k "cd client && npm install && npm run dev || echo FRONTEND FAILED & pause"

echo.
echo Check the two new windows. Do they show errors?
echo.
pause
