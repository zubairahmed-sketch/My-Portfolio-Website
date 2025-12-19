# Zubair Ahmed - Professional Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS showcasing full-stack web development and AI/ML expertise.

## 🚀 Features

- **Modern Design**: Sleek, gradient-based UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dynamic Content**: Skills, services, and projects pulled live from MongoDB via the Railway backend
- **Email Automation**: EmailJS-powered contact form with instant notifications and auto-reply
- **Dark Theme**: Eye-catching dark mode with purple/blue gradient accents
- **Fast Performance**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Optimized meta tags and semantic HTML

## 📋 Sections

1. **Navigation Bar** - Fixed responsive navbar with smooth scroll links
2. **Hero Section** - Eye-catching intro with CTA buttons and social links
3. **About** - Personal bio, experience summary, and key statistics
4. **Skills** - Comprehensive skill categories with proficiency levels
5. **Services** - Dynamic service offerings sourced from MongoDB
6. **Projects** - Featured portfolio projects with live data, descriptions, and links
7. **Contact** - Contact form and direct communication channels
8. **Footer** - Quick links and social media connections

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend API**: Node.js / Express hosted on Railway
- **Database**: MongoDB Atlas
- **Email**: EmailJS (contact form + auto response)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   Create `.env.local` with:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_public_key
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open automatically at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
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
- Static copy lives inside the relevant components (Hero, About, Contact, etc.)
- Dynamic collections (skills, services, projects) are stored in MongoDB — update the documents and the site refreshes automatically

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

### Deploy the Frontend (Vercel Recommended)
1. Push the repo to GitHub
2. Import the project in Vercel
3. Add the EmailJS environment variables in Vercel project settings
4. Trigger a deploy (`npm run build` is handled automatically)

### Deploy the Backend (Railway)
The companion backend lives in the `Portfolio-Backend` repository. Deploy it on Railway and configure:
- `MONGODB_URI` – MongoDB Atlas connection string
- `PORT` – optional port (defaults to 8080)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Zubair Ahmed**
- Full Stack Web Developer & AI/ML Specialist
- Email: za0183625@gmail.com
- Portfolio: https://my-portfolio-website-git-main-zubair-ahmeds-projects-3ef6df70.vercel.app

---

Built with ❤️ using React, Vite, and Tailwind CSS
