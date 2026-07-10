# Billy Hrehowsik Portfolio

A professional, modern portfolio website for Billy Hrehowsik—IT Support Professional, Developer, and Technical Problem Solver.

**Live Site:** https://billyhrehowsik.github.io

---

## Overview

This is a static, fully responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. The site is designed to be:

- **Fast & Lightweight** — No dependencies, no build process, pure web standards
- **Professional** — Clean, modern design suitable for recruiters and hiring managers
- **Accessible** — WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **Responsive** — Beautiful on desktop, tablet, and mobile devices
- **SEO-Friendly** — Structured data, Open Graph metadata, semantic HTML
- **Easy to Update** — Simple file structure, clear documentation

The portfolio showcases:

- Technical background and IT support experience
- Featured projects (PurchaseLog, FullThrottle/WonkKart, CampusConnect, Documentation)
- Professional skills across IT support, programming, and game development
- Resume with download/view options
- Direct contact information and social links

---

## Project Structure

```
billyhrehowsik.github.io/
│
├── index.html                          # Main portfolio page
├── 404.html                            # Custom 404 page
├── .nojekyll                           # Disable Jekyll processing
│
├── css/
│   └── styles.css                      # All styling (responsive, dark/light mode)
│
├── js/
│   └── script.js                       # Navigation, theme toggle, interactivity
│
├── assets/
│   ├── favicon.svg                     # Browser tab icon
│   ├── social-preview.png              # Open Graph preview image
│   ├── Billy-Hrehowsik-Resume.pdf      # Resume (add your actual resume here)
│   │
│   ├── images/
│   │   └── (project screenshots and images go here)
│   │
│   └── icons/
│       └── (optional: custom icons)
│
└── README.md                           # This file
```

---

## Technologies Used

- **HTML5** — Semantic markup, accessibility
- **CSS3** — Custom properties (variables), Grid/Flexbox, animations, dark mode
- **JavaScript (Vanilla)** — No frameworks, no build process
- **GitHub Pages** — Free static hosting

**No external dependencies** — The site works entirely without npm, webpack, or a build process.

---

## Features

### Navigation & UI

- **Sticky Navigation** — Smooth scrolling to sections
- **Mobile Menu** — Hamburger menu for mobile devices with smooth animations
- **Active Section Indicator** — Navigation highlights the current section
- **Dark/Light Theme Toggle** — Saves preference in localStorage
- **Back-to-Top Button** — Appears when scrolling down

### Sections

1. **Home** — Profile intro, professional headline, quick links
2. **About** — Professional biography
3. **Experience** — IT Support Services experience at Montclair State University
4. **Projects** — Featured project cards with individual detail pages
   - PurchaseLog (Full-Stack Web App)
   - FullThrottle / WonkKart (Game Development)
   - CampusConnect (UX Design)
   - Technical Documentation (Knowledge Base)
5. **Skills** — Organized by category (IT Support, Programming, Tools, etc.)
6. **Resume** — Download/view options for resume PDF
7. **Contact** — Email, GitHub, LinkedIn, location information

### Accessibility

- Skip-to-content link
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation throughout
- High color contrast (WCAG AA)
- Focus indicators on all interactive elements
- Reduced motion support
- Screen reader friendly

### Performance

- Lighthouse-optimized
- Minimal JavaScript
- Optimized CSS
- Fast initial load
- No render-blocking resources

---

## Setup & Deployment

### Prerequisites

- A GitHub account
- The repository `billyhrehowsik.github.io` (must be public)
- Basic familiarity with Git

### Initial Deployment

1. **Create/Verify Repository**
   - Go to https://github.com/new
   - Create a public repository named `billyhrehowsik.github.io`
   - Clone the repository locally

2. **Add Portfolio Files**
   - Copy all project files into the repository root
   - Ensure `.nojekyll`, `index.html`, `css/`, `js/`, and `assets/` are in the root

3. **Commit & Push**
   ```bash
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Select **Deploy from a branch**
     - Choose **main** branch and **/ (root)** folder
     - Click **Save**

5. **Wait for Build**
   - GitHub Pages will build your site (typically 1-2 minutes)
   - Your site will be live at `https://billyhrehowsik.github.io`

6. **Verify Deployment**
   - Visit `https://billyhrehowsik.github.io`
   - Check that all links, images, CSS, and JavaScript work
   - Test on mobile devices
   - Verify the resume PDF link works

---

## Customization

### Update Personal Information

All personal information is in `index.html`. Search for these placeholders and update:

- **Email:** `billyhrehowsik@gmail.com` → your email
- **GitHub URL:** `https://github.com/billyhrehowsik` → your GitHub profile
- **LinkedIn:** Search for `coming soon` in the Contact section
- **Location:** `Middletown, New Jersey` → your location
- **About Text:** The biography section (id: `about`)
- **Professional Summary:** Hero section subtitle and description

### Add Your Resume

1. **Prepare Resume**
   - Convert your resume to PDF format
   - Name it: `Billy-Hrehowsik-Resume.pdf`

2. **Add to Repository**
   - Place the file at: `assets/Billy-Hrehowsik-Resume.pdf`
   - The download and view links in the Resume section will work automatically

3. **Commit & Push**
   ```bash
   git add assets/Billy-Hrehowsik-Resume.pdf
   git commit -m "Add resume"
   git push
   ```

### Add Project Screenshots

1. **Prepare Images**
   - Screenshot dimensions: **1200×675px** (2:1 aspect ratio) for project cards
   - Use PNG or WebP for best quality
   - Optimize file sizes (keep under 500KB per image)

2. **Organize in Folders**
   ```
   assets/
   ├── project-screenshots/
   │   ├── purchaselog/
   │   │   ├── dashboard.png
   │   │   └── analytics.png
   │   ├── wonkkart/
   │   │   ├── gameplay.png
   │   │   └── menu.png
   │   └── campusconnect/
   │       ├── home.png
   │       └── services.png
   ```

3. **Update HTML**
   - Find the project detail sections (search for `project-detail`)
   - Replace placeholder sections with actual images
   - Use semantic `<img>` tags with descriptive `alt` text

4. **Commit & Push**
   ```bash
   git add assets/project-screenshots/
   git commit -m "Add project screenshots"
   git push
   ```

### Add Social Preview Image

The `assets/social-preview.png` is used when sharing your portfolio on social media (Twitter, LinkedIn, etc.).

1. **Create Image**
   - Dimensions: **1200×630px**
   - Include your name, title, and portfolio URL
   - Keep text readable at small sizes

2. **Replace File**
   ```bash
   cp your-image.png assets/social-preview.png
   git add assets/social-preview.png
   git commit -m "Update social preview image"
   git push
   ```

### Update Navigation Links

All navigation links are in the `<nav>` section of `index.html`. To add or modify sections:

1. Find the `<ul class="nav-links">` in `index.html`
2. Add or modify `<li><a href="#section-id">Label</a></li>`
3. Create corresponding `<section id="section-id">` in the HTML
4. Save and push

### Add New Projects

1. **Add Project Card**
   - Copy an existing `.project-card` in the projects grid
   - Update title, description, tech badges, and link

2. **Create Detail Page**
   - Copy an existing `.project-detail` section
   - Update all content with your project details
   - Use the same ID format: `#project-[name]`

3. **Update Navigation**
   - Make sure the project link points to the correct detail section ID

### Customize Colors & Theme

Edit CSS variables in `css/styles.css` (lines 1-50):

```css
:root {
    --bg-primary: #0f0f1e;          /* Main background */
    --accent: #00d4ff;              /* Primary accent color */
    --accent-dark: #0099cc;         /* Darker accent for hover */
    --text-primary: #e0e0e0;        /* Main text color */
    /* ... other variables ... */
}
```

Update for light mode:
```css
--light-bg-primary: #ffffff;
--light-text-primary: #1a1a1a;
/* ... etc ... */
```

### Update Company/Education Info

Search for:
- `Montclair State University` → update with your university
- `Information Technology` → update with your degree
- `September 2023 – May 2026` → update with your dates
- `Service Desk Technician` → update with your role

---

## GitHub Username Change (Important!)

If you changed your GitHub username from `w0nk362` to `billyhrehowsik`:

### Update Git Remote URL

1. **Check Current Remote**
   ```bash
   git remote -v
   ```

2. **Update Remote**
   ```bash
   git remote set-url origin https://github.com/billyhrehowsik/billyhrehowsik.github.io.git
   ```

3. **Verify Change**
   ```bash
   git remote -v
   ```

### Update All Repository Links

In `index.html`, verify these links use `billyhrehowsik`:

- `https://github.com/billyhrehowsik` (Hero section)
- `https://github.com/billyhrehowsik/purchlog` (PurchaseLog project)
- Any other repository URLs in project detail sections

### Update LinkedIn & Resume

After deploying the website:
- Add your portfolio URL to your LinkedIn profile
- Add the portfolio URL to your resume

---

## Local Development

To test the site locally before publishing:

### Using Python

```bash
cd path/to/billyhrehowsik.github.io
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

### Using Node.js (with http-server)

```bash
npm install -g http-server
cd path/to/billyhrehowsik.github.io
http-server
```

### Using VS Code Live Server Extension

1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## Testing Checklist

Before publishing, verify:

- [ ] All navigation links work (smooth scroll to sections)
- [ ] All internal links work (`#home`, `#about`, `#projects`, etc.)
- [ ] External links open in new tabs (GitHub, email, LinkedIn)
- [ ] Resume PDF downloads/opens correctly
- [ ] Theme toggle works (dark/light mode)
- [ ] Mobile menu opens and closes
- [ ] All text is readable (sufficient contrast)
- [ ] Images load and display correctly
- [ ] No console errors (open DevTools)
- [ ] Keyboard navigation works (Tab through elements)
- [ ] Page loads fast (Lighthouse score > 90)
- [ ] Responsive design works on mobile/tablet/desktop

### Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Lighthouse Audit

Run a Lighthouse audit in Chrome DevTools:
1. Open DevTools (F12)
2. Click "Lighthouse"
3. Click "Analyze page load"
4. Aim for scores > 90 in all categories

---

## Making Updates

### Standard Workflow

1. **Make Changes** — Edit HTML, CSS, or JS files locally
2. **Test Locally** — Use Python/Node.js server to verify changes
3. **Commit & Push** — Send changes to GitHub
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push
   ```
4. **Verify Deployment** — Visit the live site after ~1-2 minutes

### Common Updates

**Update About Section:**
- Edit the `<section id="about">` in `index.html`

**Change Skills:**
- Edit the `.skills-grid` section in `index.html`
- Add/remove skill categories and items

**Add Projects:**
- Add `.project-card` to the projects grid
- Create new `.project-detail` section for the detail page
- Test the links work

**Update Contact Info:**
- Edit the `<section id="contact">` in `index.html`

---

## SEO & Social Sharing

### Meta Tags

The portfolio includes:
- Open Graph tags (for social media sharing)
- Twitter Card tags
- Schema.org JSON-LD (for search engines)
- Canonical URL

When you update the site, these are auto-configured. No additional work needed.

### Testing Social Sharing

To preview how your portfolio looks when shared:

- **Twitter:** https://twitter.com/search?q=YOUR_URL
- **Facebook:** https://www.facebook.com/sharer/sharer.php?u=YOUR_URL
- **LinkedIn:** https://www.linkedin.com/sharing/share-offsite/?url=YOUR_URL

---

## Custom Domain (Optional)

To use a custom domain instead of `billyhrehowsik.github.io`:

1. **Register Domain** — Use Namecheap, GoDaddy, or similar
2. **Configure DNS**
   - Add CNAME record: `www.yourdomain.com` → `billyhrehowsik.github.io`
   - Or A records pointing to GitHub Pages IPs
3. **Update GitHub Pages Settings**
   - Go to repository **Settings** → **Pages**
   - Under "Custom domain," enter your domain
   - GitHub will create a `CNAME` file
4. **Update Links**
   - Search `billyhrehowsik.github.io` in the code
   - Replace with your custom domain where appropriate

---

## Troubleshooting

### Site Not Live

- **Verify repository is public** — GitHub Pages requires a public repository
- **Check Settings → Pages** — Ensure "Deploy from a branch" is selected
- **Wait 2-3 minutes** — GitHub needs time to build and deploy
- **Check status in Actions tab** — See if the build succeeded or failed

### Styles Not Loading

- Verify `css/` folder exists in repository root
- Check file paths are relative (e.g., `css/styles.css`, not `/css/styles.css`)
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `.nojekyll` file exists (disables Jekyll processing)

### Images Not Showing

- Verify image files are in `assets/` folder
- Check image paths in HTML are correct and relative
- Ensure images are PNG, JPG, or WebP format
- Verify image file names match exactly (case-sensitive on GitHub)

### Resume Not Downloading

- Verify `assets/Billy-Hrehowsik-Resume.pdf` exists
- Check the link `href="assets/Billy-Hrehowsik-Resume.pdf"`
- Ensure PDF is valid (not corrupted)
- Clear browser cache

### Navigation Not Working

- Check all section IDs match the navigation links
- Verify no typos in `<section id="...">` IDs
- Open browser DevTools Console to check for JavaScript errors
- Ensure `js/script.js` is loading (check Network tab)

### Mobile Menu Not Closing

- JavaScript might not be loading — check browser console for errors
- Verify `js/script.js` is in the root `js/` folder
- Try hard refresh (Ctrl+Shift+R) to clear cache

---

## File Size & Performance

### Current Metrics

- **HTML:** ~50KB
- **CSS:** ~40KB
- **JavaScript:** ~6KB
- **Total (gzipped):** ~30KB

### Optimization Tips

1. **Images** — Optimize with TinyPNG or ImageOptim
2. **Lazy Loading** — Add `loading="lazy"` to below-fold images
3. **Caching** — GitHub Pages automatically caches assets
4. **Minimize Requests** — Inline critical CSS if needed

---

## License

This portfolio template is free to use and modify for personal use. Attribution to Billy Hrehowsik is appreciated but not required.

---

## Support & Questions

If you encounter issues:

1. **Check this README** — Most common questions are answered here
2. **Review the HTML Comments** — The code includes helpful comments
3. **Check Browser Console** — Look for JavaScript errors (F12 → Console)
4. **Test Locally First** — Use a local server before pushing to GitHub
5. **Clear Cache** — Hard refresh (Ctrl+Shift+R) to clear browser cache

---

## Maintenance

### Regular Tasks

- **Update Resume** — When your experience changes
- **Add Projects** — As you complete new work
- **Update Skills** — As you learn new technologies
- **Refresh Content** — Keep the About section current
- **Check Links** — Verify external links still work

### Annual Review

- Review and update all dates (graduation, employment, etc.)
- Verify all links are still valid
- Check LinkedIn and GitHub reflect the same information
- Update photo/profile if desired
- Review project descriptions for accuracy

---

## Next Steps

1. ✅ **Deploy the site** — Follow the "Setup & Deployment" section
2. ✅ **Add your resume** — Place PDF in `assets/Billy-Hrehowsik-Resume.pdf`
3. ✅ **Update personal info** — Email, GitHub, location, bio
4. ✅ **Add project details** — Fill in real project information
5. ✅ **Add screenshots** — Include project images
6. ✅ **Test thoroughly** — Use the testing checklist
7. ✅ **Share** — Add to LinkedIn, resume, job applications

---

## Version History

- **v1.0** (2025-07-10) — Initial portfolio release
  - Professional design with dark/light mode
  - 4 featured projects with detail pages
  - Complete skills section
  - Contact and resume sections
  - Mobile responsive, accessible, fast

---

**Built with ❤️ for Billy Hrehowsik**

Made to be professional, maintainable, and future-proof.
