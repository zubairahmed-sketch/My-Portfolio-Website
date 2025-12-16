# Zubair Ahmed - Professional Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS showcasing full-stack web development and AI/ML expertise.

## 🚀 Features

- **Modern Design**: Sleek, gradient-based UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Dark Theme**: Eye-catching dark mode with purple/blue gradient accents
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Optimized meta tags and semantic HTML

## 📋 Sections

1. **Navigation Bar** - Fixed responsive navbar with smooth scroll links
2. **Hero Section** - Eye-catching intro with CTA buttons and social links
3. **About** - Personal bio, experience summary, and key statistics
4. **Skills** - Comprehensive skill categories with proficiency levels
5. **Services** - Detailed service offerings with technology stacks
6. **Projects** - Featured portfolio projects with descriptions and links
7. **Contact** - Contact form and direct communication channels
8. **Footer** - Quick links and social media connections

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **PostCSS**: For advanced CSS processing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open automatically at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills showcase
│   ├── Services.jsx        # Services offered
│   ├── Projects.jsx        # Portfolio projects
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer section
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## ✨ Customization

### Update Personal Information
Edit the content directly in each component:
- `Hero.jsx` - Main headline and CTA
- `About.jsx` - Bio and statistics
- `Skills.jsx` - Add/remove skill categories
- `Services.jsx` - Service offerings
- `Projects.jsx` - Portfolio projects
- `Contact.jsx` - Contact information

### Change Colors
Modify Tailwind config in `tailwind.config.js`:
```js
colors: {
  primary: '#667eea',      // Main accent color
  secondary: '#764ba2',    // Secondary accent
  dark: '#1a1a2e',         // Dark background
  light: '#f8f9fa'         // Light accent
}
```

### Add Social Links
Update the social media links in:
- `Hero.jsx` (hero section)
- `Contact.jsx` (contact section)
- `Footer.jsx` (footer section)

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Zubair Ahmed**
- Full Stack Web Developer & AI/ML Specialist
- Email: zubairahmed@example.com
- Portfolio: https://your-portfolio.com

---

Built with ❤️ using React, Vite, and Tailwind CSS
