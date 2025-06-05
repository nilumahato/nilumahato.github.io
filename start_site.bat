@echo off
echo ================================
echo Jekyll Site Setup and Launch
echo ================================
echo.

echo Checking if Ruby is installed...
ruby --version > nul 2>&1
if %errorlevel% neq 0 (
    echo Ruby is not installed or not in PATH
    echo Please install Ruby from: https://rubyinstaller.org/downloads/
    echo Choose Ruby+Devkit version and restart this script
    pause
    exit /b 1
)

echo Ruby found! Installing Jekyll and Bundler...
gem install jekyll bundler

echo.
echo Installing project dependencies...
cd /d "%~dp0"
bundle install

echo.
echo Starting Jekyll development server...
echo Your site will be available at: http://localhost:4000
echo Press Ctrl+C to stop the server
echo.
bundle exec jekyll serve --livereload

pause
