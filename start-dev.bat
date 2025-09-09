@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install --force
echo Starting development server...
call npx vite --host --port 3000
pause
