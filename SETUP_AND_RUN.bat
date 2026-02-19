@echo off
TITLE Kodnest Movie Explorer - Setup & Run

echo ===================================================
echo   KODNEST MOVIE EXPLORER - AUTOMATED SETUP
echo ===================================================
echo.

:: 1. Check Node.js
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is NOT installed. Please install it from https://nodejs.org/
    pause
    exit
)
echo [OK] Node.js is installed.

:: 2. Install Backend
echo.
echo [STEP 1/3] Installing Backend Dependencies...
cd server
call npm install
cd ..

:: 3. Install Frontend
echo.
echo [STEP 2/3] Installing Frontend Dependencies...
cd client
call npm install
cd ..

:: 4. Check Environment & Database
echo.
echo [STEP 3/3] Checking Configurations...
if not exist "server\.env" (
    echo [WARNING] server\.env not found. Creating default...
    (
        echo PORT=5000
        echo DB_HOST=localhost
        echo DB_USER=root
        echo DB_PASSWORD=
        echo DB_NAME=kodnest_movie_db
        echo JWT_SECRET=dev_secret_key
        echo TMDB_API_KEY=your_tmdb_api_key_here
    ) > server\.env
    echo [INFO] Default .env created. Please edit it if you have a MySQL password.
)

echo.
echo ===================================================
echo   SETUP COMPLETE! STARTING APPLICATION...
echo ===================================================
echo.
echo [IMPORTANT] Ensure your MySQL Server is RUNNING.
echo [INFO] Starting Backend (Port 5000) and Frontend (Port 5174)...
echo.

start cmd /k "cd server && npm run dev"
start cmd /k "cd client && npm run dev"

echo Application launched in new windows.
echo You can close this window.
pause
