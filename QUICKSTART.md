# 🚀 Quick Start Guide

## Step 1: Get the Files

You have downloaded the portfolio package. Extract it to your desired location.

## Step 2: Add Your Images

### Profile Photo
1. Take or choose a professional photo (square, 500x500px recommended)
2. Name it `profile.jpg`
3. Place it in: `images/profile.jpg`

### Project Screenshots
1. Take screenshots of your GitHub projects
2. Optimize them (keep under 300KB each)
3. Place them in: `images/projects/`
4. Name them clearly: `parameterx.jpg`, `xssion.jpg`, etc.

## Step 3: Update Your Information

Open `index.html` in a text editor and update:

### Personal Info (Lines ~160-180)
```html
<h1>Alham Rizvi</h1>  <!-- Change to your name -->
<p class="role">Your Title</p>  <!-- Change to your role -->
<p class="tagline">Your tagline...</p>  <!-- Change tagline -->
```

### Social Links
Find and replace ALL instances of:
- `https://www.linkedin.com/in/alham-rizvi/` → Your LinkedIn
- `its47h4m@gmail.com` → Your email
- `https://github.com/alhamrizvi-cloud` → Your GitHub
- `https://instagram.com/alhamrizvii` → Your Instagram
- etc.

## Step 4: Update Projects

Find the projects section (~line 400) and update each project:

```html
<div class="project-card glass-strong">
    <div class="project-image">
        <!-- Add your image -->
        <img src="images/projects/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-description">
            Your project description
        </p>
        <div class="tech-stack">
            <span class="tech-tag">Your</span>
            <span class="tech-tag">Tech</span>
            <span class="tech-tag">Stack</span>
        </div>
    </div>
</div>
```

## Step 5: Test Locally

### Option A: Python
```bash
cd portfolio-folder
python -m http.server 8000
# Visit: http://localhost:8000
```

### Option B: Just open the file
Double-click `index.html` to open in your browser

## Step 6: Deploy to GitHub

### Create Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name it (e.g., `portfolio` or `username.github.io`)
4. Don't initialize with README

### Push Your Code
```bash
cd portfolio-folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click Save
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Step 7: Custom Domain (Optional)

### If you have a domain:
1. Create a file named `CNAME` (no extension) in the root
2. Add your domain: `www.yourdomain.com`
3. Configure your DNS:
   - Add CNAME record: `www` → `your-username.github.io`
   - Or A records pointing to GitHub IPs

## 🎨 Customization

### Change Colors
Edit `css/style.css`, find `:root` section:
```css
:root {
    --bg-primary: #ffffff;     /* Background */
    --text-primary: #000000;   /* Text color */
    --accent: #000000;         /* Accent color */
}
```

### Change Theme Default
The theme automatically detects system preference. To force a default:
- Edit `js/main.js`
- Find `ThemeManager` class
- Modify initialization logic

### Add More Projects
Copy a project card block and modify:
1. Change image source
2. Update title
3. Update description
4. Update tech tags

## 📱 Test on Mobile

Before deploying, test on mobile:
1. Open Chrome DevTools (F12)
2. Click device toolbar icon
3. Select different devices
4. Check all sections work

## ✅ Checklist Before Going Live

- [ ] Profile photo added
- [ ] All personal info updated
- [ ] All social links updated
- [ ] Project screenshots added
- [ ] Project info updated
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested on mobile
- [ ] All images optimized
- [ ] No broken links
- [ ] Theme toggle works
- [ ] Menu works
- [ ] Smooth scrolling works

## 🆘 Common Issues

### Images not showing
- Check file paths
- Ensure correct file extensions (.jpg not .jpeg)
- Check image files aren't corrupted

### Theme not switching
- Check browser console for errors
- Try clearing cache (Ctrl+Shift+Delete)
- Ensure JavaScript is enabled

### Page looks weird
- Clear browser cache
- Try incognito mode
- Check different browser

## 📧 Need Help?

Email: its47h4m@gmail.com

## 🎉 You're Done!

Your portfolio should now be live! Share it on:
- LinkedIn
- Twitter
- GitHub README
- Resume

---

**Next Steps:**
1. Share your portfolio link
2. Get feedback
3. Keep it updated
4. Add new projects regularly

**Good luck! 🚀**
