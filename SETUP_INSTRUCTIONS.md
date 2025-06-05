# Jekyll Site Setup Guide

## Quick Fix: GitHub Pages Deployment (Recommended)

The easiest way to get your site running is through GitHub Pages:

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Create a new repository named `nilumahato.github.io`
3. Make it public

### 2. Upload Your Files
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git branch -M main
git remote add origin https://github.com/nilumahato/nilumahato.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

Your site will be available at: `https://nilumahato.github.io`

## Alternative: Local Development Setup

### Step 1: Install Ruby
1. Download Ruby+Devkit from: https://rubyinstaller.org/downloads/
2. Choose "Ruby+Devkit 3.2.X (x64)" - latest version
3. Run installer with default settings
4. When prompted, run `ridk install` and select option 3

### Step 2: Setup Jekyll
Open a NEW PowerShell window and run:
```powershell
gem install jekyll bundler
cd "c:\Users\Aarati\Desktop\nilumahato.github.io"
bundle install
```

### Step 3: Run Your Site
```powershell
bundle exec jekyll serve
```
Visit: http://localhost:4000

## Current Issue Fix

Your site shows raw text because Jekyll isn't processing the files. The front matter (the --- sections) should be processed by Jekyll to generate proper HTML.

## Domain Configuration

Your CNAME file points to `aaratimahato.com.np`. To use this custom domain:
1. Set up GitHub Pages first
2. In repository settings > Pages, add your custom domain
3. Configure DNS with your domain provider to point to GitHub Pages

## Quick Commands (After Ruby Installation)

```powershell
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Troubleshooting
- **Ruby not found**: Restart PowerShell after installation
- **Permission errors**: Run as Administrator
- **Gem conflicts**: Run `bundle update`
- **Site not loading**: Check if port 4000 is free
