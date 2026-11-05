@echo off
cd /d "%~dp0"
title Arun Mohan Portfolio Server
cls
color 0F

echo ================================================================
echo   ARUN MOHAN - ULTRA MODERN PORTFOLIO (REACT + VITE)
echo ================================================================
echo.

echo [1/3] Checking Node.js environment...
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not found in PATH.
    echo Please install Node.js from https://nodejs.org/ to run this project.
    echo.
    pause
    exit /b 1
)

echo [2/3] Checking project dependencies...
if not exist "node_modules" (
    echo [INFO] Installing required packages...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
)

echo [3/3] Starting development server...
echo.
echo ================================================================
echo   Server URL: http://localhost:3000/
echo   Vite will automatically open the site in your default browser.
echo   To stop the server, press Ctrl+C in this terminal.
echo ================================================================
echo.

call npm run dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo [INFO] Server stopped.
    pause
)
