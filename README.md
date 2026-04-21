# 📋 Professional Portfolio Website

A beautiful, responsive portfolio website template with a fully functional resume section.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Resume Modal** - Click the resume button to view/download your resume
- **Smooth Animations** - Beautiful fade-in effects and smooth scrolling
- **Professional Layout** - Modern design with gradient backgrounds and smooth transitions
- **Easy Customization** - Simple to personalize with your own information
- **Print & Download** - Print your resume directly from the browser
- **Mobile Friendly** - Touch-friendly buttons and responsive navigation

## 📁 Files Included

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - Interactive functionality
- `README.md` - This file

## 🚀 Getting Started

1. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or drag and drop the file into your browser

2. **Customize Your Information**
   - Edit `index.html` to add your:
     - Name and title
     - About/Bio section
     - Skills and expertise
     - Project descriptions and links
     - Contact information
   - Update the resume section with your real experience

3. **Customize Colors** (Optional)
   - Open `style.css`
   - Find the `:root` section at the top
   - Change the color variables:
     ```css
     --primary-color: #667eea;      /* Main color */
     --secondary-color: #764ba2;    /* Accent color */
     --text-color: #333;            /* Text color */
     --light-bg: #f8f9fa;           /* Light background */
     ```

## 🎨 Key Sections

### Header/Navigation
- Sticky navigation bar with smooth scroll
- Links to all major sections
- Resume button for quick access

### Hero Section
- Large eye-catching introduction
- Call-to-action button
- Beautiful gradient background

### About Section
- Professional summary
- Skills with icons
- Organized skill cards

### Projects Section
- Showcase your work
- Project cards with descriptions
- Links to live projects or GitHub

### Resume Section
- Complete professional resume
- Contact information
- Work experience
- Education and certifications
- Technical skills
- Print and download options

### Contact Section
- Contact links
- Social media connections
- Professional outreach

## 💡 Customization Tips

### Change Your Name and Title
Find this in `index.html`:
```html
<h1>Welcome to My Portfolio</h1>
<p>I'm a Creative Developer & Designer</p>
```

### Update Resume Information
Locate the resume section in the HTML and update:
- Your name
- Email and phone
- Work experience
- Education
- Skills and certifications

### Add Your Projects
Edit the project cards section to include your real projects:
```html
<div class="project-card">
    <div class="project-image" style="background: linear-gradient(...)"></div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <a href="#" class="project-link">View Project →</a>
    </div>
</div>
```

### Update Social Links
Change the contact links to your actual social media profiles:
```html
<a href="https://your-linkedin-url" class="contact-link">
    <i class="fab fa-linkedin"></i> LinkedIn
</a>
```

## 📱 Responsive Breakpoints

The site is optimized for:
- Desktop (1024px and up)
- Tablet (768px to 1024px)
- Mobile (below 768px)

## 🎯 Resume Features

When you click the Resume button:
1. A modal opens showing your complete resume
2. You can **Print** the resume directly (Ctrl+P or Print button)
3. You can **Download** as PDF (requires enabling PDF download)

### Enabling PDF Download

To enable PDF download functionality, add this line to the bottom of your `index.html` file (before closing `</body>`):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

Then uncomment the PDF functionality in `script.js`.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Tips for Best Results

1. **Keep it Updated** - Regularly update your projects, skills, and experience
2. **Profile Picture** - Consider adding a professional profile image in the hero section
3. **Project Images** - Replace gradient placeholders with actual project screenshots
4. **Contact Info** - Make sure all social links and contact info are correct
5. **Mobile Testing** - Test on actual mobile devices to ensure everything looks good

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

## 📄 License

Feel free to use and customize this portfolio template for your personal or professional use.

## 💬 Need Help?

Check the following:
- Make sure all file names match exactly (case-sensitive on some systems)
- Browser developer tools (F12) to debug any issues
- Clear browser cache if changes don't appear

---

**Happy portfolio building! 🎉**
