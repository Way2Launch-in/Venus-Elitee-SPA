# Venus Elitee Spa — Vanilla Website

A premium wellness & family spa website built with vanilla HTML, CSS, and JavaScript. No build tools, frameworks, or dependencies required.

## 📁 Project Structure

```
venus-elitee-spa/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with design tokens
├── script.js           # All interactions (vanilla JS)
├── assets/
│   ├── logo.png                # Main brand logo
│   ├── hero-gold.jpg           # Hero background image
│   ├── brand-green.webp        # About section image
│   ├── favicon.png             # Browser tab icon
│   ├── Company_logo.png        # Way 2 Launch credit logo
│   ├── s1.jpeg–s6.jpeg         # Service card images (6 total)
│   └── v2.jpeg, v3.jpeg, v5.jpeg, v6.jpeg, v7.jpeg, v8.jpeg  # Gallery images (6 total)
└── README.md
```

## ✨ Features

- **Mobile-first responsive design** — Hamburger menu, fluid typography, touch-friendly
- **Scroll reveal animations** — IntersectionObserver-based, staggered entrance
- **Sticky navigation** — Transparent → solid on scroll, auto-hide mobile menu
- **Image lightbox** — Gallery opens in modal with keyboard navigation
- **WhatsApp integration** — All CTAs link to WhatsApp with pre-filled messages
- **Booking form** — Submits via WhatsApp with formatted enquiry details
- **SEO ready** — Semantic HTML, meta tags, Open Graph, JSON-LD schema
- **Accessibility** — ARIA labels, keyboard focus, reduced motion support
- **Performance** — Lazy-loaded images, no external JS dependencies

## 🎨 Design Tokens (CSS Custom Properties)

```css
:root {
  --font-display: "Cormorant Garamond", serif;
  --font-ui: "Jost", sans-serif;
  --primary: oklch(0.2 0.01 60);        /* Deep charcoal */
  --primary-foreground: oklch(1 0 0);   /* White */
  --muted-foreground: oklch(0.74 0.014 85);
  --accent: oklch(0.97 0.012 85);
  --card: oklch(1 0 0);
  --border: oklch(0.79 0.13 85 / 20%);
  --gold: oklch(0.79 0.13 85);
  --botanical: oklch(0.45 0.12 150);
  --gradient-gold: linear-gradient(135deg, oklch(0.79 0.13 85), oklch(0.92 0.08 85));
  --shadow-luxe: 0 20px 40px -15px oklch(0.13 0.006 60 / 40%);
  --maxw: 78rem;
}
```

## 📱 Breakpoints

| Size | Range | Usage |
|------|-------|-------|
| Mobile | `< 640px` | Single column, hamburger menu, stacked CTAs |
| Tablet | `640–1023px` | 2-col grids, mobile menu toggle |
| Desktop | `≥ 1024px` | 3-col grids, full nav visible |

## 🔧 Quick Start

```bash
# Option 1: Python (built-in on most systems)
python -m http.server 8080

# Option 2: Node.js
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8080`

## 🚀 Deployment

### Netlify (recommended)
1. Drag the entire folder to Netlify dashboard, or
2. Connect Git repo → Build command: `echo "static site"` → Publish dir: `.`

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages
Push to `main` branch → Settings → Pages → Deploy from branch

### Any Static Host
Upload all files (including `assets/`) to your web server. No server-side processing needed.

## 📋 Sections

1. **Hero** — Full-screen background, logo, tagline, dual CTAs (Book / WhatsApp), trust badges
2. **About** — Brand image + descriptive copy + feature list + WhatsApp CTA
3. **Services** — 6 service cards with images, icons, descriptions, WhatsApp enquiry links
4. **Offers** — Promotional banner with claim buttons
5. **Gallery** — 8-image masonry grid with lightbox viewer
6. **Why Choose Us** — 6 benefit cards on cream surface
7. **Reviews** — 4.4★ rating, star display, Google reviews link
8. **Location** — Address card + embedded Google Map + direction buttons
9. **Booking** — Form submits formatted enquiry via WhatsApp
10. **Footer** — Logo, contact, quick links, copyright, Way 2 Launch credit

## 🎯 Key Interactions (script.js)

| Function | Purpose |
|----------|---------|
| `renderServices()` | Builds service cards from data array |
| `renderWhy()` | Builds benefit cards |
| `renderGallery()` | Builds gallery grid + lightbox triggers |
| `initReveal()` | IntersectionObserver scroll animations |
| `initNav()` | Sticky header + mobile menu toggle |
| `initLightbox()` | Gallery modal open/close/keyboard |
| `initBooking()` | Form → WhatsApp deep link |

## ♿ Accessibility Checklist

- ✅ Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`)
- ✅ Skip-link compatible (`sr-only` heading)
- ✅ Alt text on all images
- ✅ ARIA labels on icon-only buttons
- ✅ Focus-visible outlines
- ✅ Reduced motion (`prefers-reduced-motion`) support
- ✅ Color contrast ratios (WCAG AA)
- ✅ Keyboard-navigable lightbox (Esc to close)

## 📝 License

Built for Venus Elitee Spa by **Way 2 Launch**. All rights reserved.