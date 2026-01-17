# 🎨 Portfolio Template

A modern, beautiful portfolio template built with **React**, **Vite**, and **Tailwind CSS**. Features smooth animations, dark/light mode, and a fully responsive design.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎨 **Beautiful Design** - Clean, modern UI with smooth animations
- 🌙 **Dark/Light Mode** - Toggle between themes with a single click
- 📱 **Fully Responsive** - Looks great on mobile, tablet, and desktop
- 🎭 **Smooth Animations** - Page transitions powered by Framer Motion
- 🧩 **Easy to Customize** - Well-organized code structure

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** or **Bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Visit [http://localhost:8080](http://localhost:8080)

---

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── resume.pdf            # Your resume (download button)
│   └── robots.txt
├── src/
│   ├── assets/               # Images and media files
│   │   └── profile.jpg       # Your profile image
│   ├── components/           # Reusable UI components
│   │   ├── GridBackground.jsx
│   │   ├── Navigation.jsx    # Site navigation & your name
│   │   ├── PageTransition.jsx
│   │   ├── RippleButton.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/               # Base UI components
│   ├── hooks/
│   │   └── use-theme.jsx     # Theme management
│   ├── lib/
│   │   └── utils.js          # Utility functions
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # About, skills & experience
│   │   ├── Lab.jsx           # Projects showcase
│   │   ├── Connect.jsx       # Social links & contact
│   │   └── NotFound.jsx      # 404 page
│   ├── App.jsx               # Main app component
│   ├── App.css
│   ├── index.css             # Global styles & theme
│   └── main.jsx              # Entry point
├── index.html                # HTML template & page title
├── package.json
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── vercel.json               # Vercel deployment config
```

---

## 🎯 How to Customize

### 1. Update Your Name & Branding

**File:** `src/components/Navigation.jsx`

```jsx
// Line 30 - Change "your name" to your actual name
<Link to="/" className="...">
  John Doe  {/* Your name here */}
</Link>
```

**File:** `index.html`

```html
<!-- Update the page title -->
<title>John Doe | Portfolio</title>
<meta name="description" content="John Doe - Full Stack Developer Portfolio" />
```

---

### 2. Home Page

**File:** `src/pages/Home.jsx`

Update the hero section tagline (around lines 58-78):

```jsx
<motion.h1>Building things that are</motion.h1>
<motion.h1>beautiful, <span>functional,</span></motion.h1>
<motion.h1>and meaningful.</motion.h1>
```

**Add Your Profile Image:**
1. Add your image to `src/assets/profile.jpg`
2. Import and use it in Home.jsx:
   ```jsx
   import profileImage from "@/assets/profile.jpg";
   // Use: <img src={profileImage} alt="Your Name" />
   ```

**Add Your Resume:**
1. Place your resume PDF in the `public/` folder as `resume.pdf`
2. The download button will automatically work

---

### 3. About Page

**File:** `src/pages/About.jsx`

#### Update Your Bio (around line 95):
```jsx
<p className="t-body leading-relaxed">
  I'm a passionate developer... {/* Write your own bio */}
</p>
```

#### Update Your Tools (around line 36):
```jsx
const toolCategories = [
  {
    icon: faCode,
    categoryName: "Development Tools",
    tools: [
      { name: "VS Code", desc: "Code Editor" },
      { name: "Git", desc: "Version Control" },
      // Add your tools here
    ]
  },
  // Add more categories
];
```

#### Update Your Skills (around line 64):
```jsx
const languages = [
  { name: "JavaScript", proficiency: "Advanced" },
  { name: "React", proficiency: "Advanced" },
  { name: "Python", proficiency: "Intermediate" },
  // Add your skills
];
```

---

### 4. Projects Page

**File:** `src/pages/Lab.jsx`

Update the projects array (around line 13):

```jsx
const projects = [
  {
    title: "My Awesome Project",
    description: "A description of what this project does and the technologies used.",
    type: "open-source",  // or "client"
    liveUrl: "https://myproject.com",      // Optional: live demo URL
    githubUrl: "https://github.com/...",   // Optional: GitHub repo
    downloadUrl: "/files/project.zip",     // Optional: download link
  },
  // Add more projects
];
```

**Add Project Screenshots:**
Replace the placeholder in the project card with your screenshot:
```jsx
<img 
  src="/screenshots/project1.png" 
  alt="Project Name"
  className="aspect-video rounded-2xl object-cover"
/>
```

---

### 5. Connect/Contact Page

**File:** `src/pages/Connect.jsx`

Update your social links (around line 8):

```jsx
const socialLinks = [
  {
    icon: faXTwitter,
    url: "https://x.com/yourusername",
    label: "X (Twitter)",
  },
  {
    icon: faLinkedinIn,
    url: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: faGithub,
    url: "https://github.com/yourusername",
    label: "GitHub",
  },
  // Add or remove social platforms
];
```

**Available Icons:**
- `faXTwitter` - X (Twitter)
- `faLinkedinIn` - LinkedIn
- `faGithub` - GitHub
- `faDribbble` - Dribbble
- `faInstagram` - Instagram
- `faYoutube` - YouTube
- `faBehance` - Behance

Import additional icons from `@fortawesome/free-brands-svg-icons`

---

### 6. Styling & Theme

**File:** `src/index.css`

The theme colors are defined using CSS variables:

```css
:root {
  --background: 0 0% 100%;      /* Light mode background */
  --foreground: 0 0% 3.9%;      /* Light mode text */
  --primary: 0 0% 9%;           /* Primary accent color */
  /* ... more variables */
}

.dark {
  --background: 0 0% 3.9%;      /* Dark mode background */
  --foreground: 0 0% 98%;       /* Dark mode text */
  /* ... more variables */
}
```

**File:** `tailwind.config.js`

Customize fonts, breakpoints, and animations.

---

## 🖼️ Adding Images

### Profile Image
```
src/assets/profile.jpg
```

### Project Screenshots
```
public/screenshots/project-1.png
public/screenshots/project-2.png
```

### Favicon
Replace the favicon in `index.html`:
```html
<link rel="icon" href="/favicon.ico">
```

---

## 📦 Building for Production

```bash
npm run build
# or
bun run build
```

The production files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

This template works seamlessly with:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repo at [vercel.com](https://vercel.com)
3. Deploy with one click

### Netlify
1. Push your code to GitHub
2. Import at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 18](https://react.dev) | UI Framework |
| [Vite](https://vitejs.dev) | Build Tool |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [React Router](https://reactrouter.com) | Routing |
| [Font Awesome](https://fontawesome.com) | Icons |
| [Radix UI](https://www.radix-ui.com) | UI Primitives |

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

MIT License - Feel free to use this template for your personal portfolio!

---

## 💡 Tips

1. **Keep it personal** - Add your unique personality to the design
2. **Update regularly** - Keep your projects and skills current
3. **Optimize images** - Compress images for faster loading
4. **Test responsiveness** - Check on multiple devices
5. **SEO** - Update meta tags in `index.html` for better discoverability

---

Made with ❤️ using React & Tailwind CSS
