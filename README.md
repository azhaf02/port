# Alex Mercer — Developer Portfolio

A premium, modern developer portfolio built with React + Vite, featuring GSAP animations and Lenis smooth scrolling.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool & dev server
- **GSAP** — Professional-grade animations
- **Lenis** — Butter-smooth scrolling
- **CSS Custom Properties** — Design tokens & theming

## Features

- 🎨 Dark editorial design with gold accent palette
- ✨ GSAP entrance & scroll-triggered animations
- 🌊 Lenis smooth scrolling
- 📱 Fully responsive (mobile-first)
- 🔤 Syne + DM Sans typography pairing
- 🌌 Ambient orb backgrounds & grid texture
- 🪟 Glassmorphism nav with blur effect
- 🎯 Skill cards, project cards, contact form

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   └── Contact.jsx
    └── styles/
        ├── index.css
        ├── navbar.css
        ├── hero.css
        ├── about.css
        ├── projects.css
        └── contact.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Customization

- **Name & Content** — Edit text in each component under `src/components/`
- **Colors** — Modify CSS variables in `src/styles/index.css`
- **Projects** — Update the `projects` array in `Projects.jsx`
- **Skills** — Update the `skills` array in `About.jsx`
- **Social Links** — Update the `socials` array in `Contact.jsx`
- **Fonts** — Change Google Fonts import in `index.html`
