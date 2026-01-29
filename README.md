# Alham Rizvi - Offensive Security Researcher Portfolio

A modern, glassmorphic portfolio website showcasing security research, projects, and expertise.

## 🌟 Features

- **Glassmorphic Design**: Enhanced glass effects with 40-60px blur
- **Theme Toggle**: Light/Dark mode with system preference detection
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Buttery-smooth transitions and effects
- **Swipe Navigation**: Interactive about section with swipe/drag support
- **Search Functionality**: Search through projects and content
- **SEO Optimized**: Proper meta tags and structure

## 📁 Directory Structure

```
alham-portfolio/
├── index.html                  # Main homepage
├── css/
│   ├── style.css              # Main stylesheet
│   └── pages.css              # Page-specific styles
├── js/
│   └── main.js                # Main JavaScript file
├── images/
│   ├── profile.jpg            # Your profile photo
│   ├── projects/              # Project screenshots
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── ...
│   └── blog/                  # Blog post images
│       ├── blog1.jpg
│       └── ...
├── pages/
│   ├── resources.html         # Resources & tools page
│   ├── license.html           # MIT License page
│   ├── contact.html           # Contact form page
│   └── privacy.html           # Privacy policy page
├── assets/
│   ├── icons/                 # Favicon and app icons
│   └── fonts/                 # Custom fonts (if any)
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions for deployment
├── README.md                  # This file
├── LICENSE                    # MIT License
└── .gitignore                # Git ignore file
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/alhamrizvi-cloud/portfolio.git
cd portfolio
```

### 2. Add Your Images

Replace the placeholder images with your actual photos:

- **Profile Photo**: `images/profile.jpg` (recommended: 500x500px)
- **Project Screenshots**: Add to `images/projects/`
- **Blog Images**: Add to `images/blog/`

### 3. Update Content

Edit `index.html` to customize:

- Your name and role
- About section content
- Skills and expertise
- Project details
- Social media links

### 4. Test Locally

Simply open `index.html` in your web browser or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### 5. Deploy

#### GitHub Pages (Recommended)

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

#### Other Platforms

- **Netlify**: Drag & drop your folder or connect GitHub
- **Vercel**: Connect GitHub repository
- **Cloudflare Pages**: Connect GitHub repository

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --bg-primary: #ffffff;       /* Background */
    --text-primary: #000000;     /* Text color */
    --text-secondary: #4a4a4a;   /* Secondary text */
    --accent: #000000;           /* Accent color */
}
```

### Adding Your Images

#### Profile Image

```html
<!-- Replace the src in index.html -->
<div class="profile-image">
    <img src="images/profile.jpg" alt="Your Name">
</div>
```

#### Project Images

```html
<!-- Replace #PROJECT_IMAGE placeholder -->
<div class="project-image">
    <img src="images/projects/project-name.jpg" alt="Project Name">
</div>
```

### Adding New Projects

Add a new project card in `index.html`:

```html
<div class="project-card glass-strong">
    <div class="project-image">
        <img src="images/projects/your-project.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-description">
            Description of your project
        </p>
        <div class="tech-stack">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
    </div>
</div>
```

### Updating Social Links

Find and update all instances of social links in `index.html`:

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/your-profile/">

<!-- Email -->
<a href="mailto:your-email@example.com">

<!-- GitHub -->
<a href="https://github.com/your-username">

<!-- And so on... -->
```

## 📄 Page Descriptions

### index.html (Homepage)
- Hero section with profile photo
- About section with swipe feature
- Skills showcase
- Projects portfolio
- Links categories
- Contact section

### pages/resources.html
- Security tools and scripts
- Learning resources
- CTF platforms
- Community links

### pages/license.html
- MIT License details
- Usage permissions
- Limitations and conditions

### pages/contact.html
- Contact form
- Direct contact methods
- Social media links

### pages/privacy.html
- Privacy policy
- Data collection information
- Cookie policy

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript**: No frameworks needed
- **Google Fonts**: Sora & JetBrains Mono
- **SVG Icons**: Scalable vector graphics

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎯 Performance Tips

1. **Optimize Images**:
   - Use WebP format when possible
   - Compress images (aim for <200KB per image)
   - Use appropriate dimensions (don't load 4K images)

2. **Minify Assets** (for production):
   ```bash
   # CSS minification
   npx cssnano css/style.css css/style.min.css
   
   # JS minification
   npx terser js/main.js -o js/main.min.js
   ```

3. **Enable Caching**: Add `.htaccess` or configure your server

4. **Use CDN**: Host images on a CDN for faster loading

## 🔧 Advanced Configuration

### Adding Google Analytics

Add before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Adding Custom Domain

1. Add a `CNAME` file in root with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `yourusername.github.io`
   - Or A records for GitHub Pages IPs

### Setting Up Contact Form

The contact form currently uses `mailto:`. For a real form:

1. **Formspree** (easiest):
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Netlify Forms** (if hosting on Netlify):
   ```html
   <form netlify>
   ```

3. **Custom Backend**: Create your own API endpoint

## 🐛 Troubleshooting

### Images Not Showing

- Check file paths are correct
- Ensure images are in the right folder
- Check file extensions match (jpg vs jpeg)
- Verify image files aren't corrupted

### Theme Not Switching

- Clear browser cache
- Check browser console for errors
- Ensure JavaScript is enabled
- Try in incognito mode

### Mobile Menu Not Working

- Check JavaScript is loaded
- Verify no console errors
- Ensure viewport meta tag is present
- Test in different browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Alham Rizvi**
- LinkedIn: [@alham-rizvi](https://www.linkedin.com/in/alham-rizvi/)
- GitHub: [@alhamrizvi-cloud](https://github.com/alhamrizvi-cloud)
- Email: its47h4m@gmail.com
- Location: Mumbai, Maharashtra, India

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Acknowledgments

- Google Fonts for typography
- SVG icons from various open-source projects
- Inspired by modern glassmorphic design trends

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Email: its47h4m@gmail.com
- Connect on LinkedIn

---

**Made with 💙 by Alham Rizvi**

*Last Updated: January 2026*
