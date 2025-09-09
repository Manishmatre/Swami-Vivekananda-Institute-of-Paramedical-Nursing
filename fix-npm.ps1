# PowerShell script to fix npm issues with spaces in path
Set-Location -Path "C:\Users\Pc\Desktop\Arionextech Software\Swami Vivekananda Institute of Paramedical & Nursing"

Write-Host "Cleaning previous installations..." -ForegroundColor Yellow
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue

Write-Host "Installing dependencies..." -ForegroundColor Green
npm install --force

Write-Host "Starting development server..." -ForegroundColor Cyan
npx vite --host --port 3000
