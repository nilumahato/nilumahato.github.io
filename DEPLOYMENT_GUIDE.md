# 🚀 Website Deployment Guide

## Current Issue
Your website shows raw text because Jekyll isn't processing the files. Here are two solutions:

## Solution 1: GitHub Pages (Easiest) ⭐

### Step 1: Create Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" 
3. Name it: `nilumahato.github.io`
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Files
```bash
# In your project folder, run:
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/nilumahato/nilumahato.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under Source: select "Deploy from a branch"
4. Branch: select "main"
5. Folder: select "/ (root)"
6. Click **Save**

🎉 Your site will be live at: `https://nilumahato.github.io`

---

## Solution 2: Local Development

### Prerequisites
- Install Ruby from [rubyinstaller.org](https://rubyinstaller.org/downloads/)
- Choose "Ruby+Devkit" version

### Quick Start
1. **Double-click** `start_site.bat` in your project folder
2. Follow the prompts
3. Visit: http://localhost:4000

### Manual Commands
```powershell
# Install Jekyll
gem install jekyll bundler

# Navigate to project
cd "c:\Users\Aarati\Desktop\nilumahato.github.io"

# Install dependencies
bundle install

# Start server
bundle exec jekyll serve
```

---

## Custom Domain Setup (aaratimahato.com.np)

After GitHub Pages is working:

1. **In GitHub repository settings:**
   - Go to Pages section
   - Under "Custom domain", enter: `aaratimahato.com.np`
   - Click Save

2. **With your domain provider:**
   - Add DNS records pointing to GitHub Pages
   - CNAME record: `www` → `nilumahato.github.io`
   - A records for apex domain → GitHub Pages IPs

---

## Quick Check Commands

```powershell
# Check if Ruby is installed
ruby --version

# Check if Jekyll is installed
jekyll --version

# Check if site builds
bundle exec jekyll build
```

---

## File Structure Verification

Your site should have:
- ✅ `_config.yml`
- ✅ `index.html`
- ✅ `_tabs/about.md`
- ✅ `_posts/` (with your project posts)
- ✅ `Gemfile`

---

## Support

If you encounter issues:
1. Check the `SETUP_INSTRUCTIONS.md` file
2. Ensure Ruby is properly installed
3. Try GitHub Pages first (simpler)
4. For local development, restart PowerShell after Ruby installation

🎯 **Recommended:** Start with GitHub Pages deployment for immediate results!
