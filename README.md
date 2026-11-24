# 🎁 APNA GIFT — Premium Raksha Bandhan Gifting

A responsive, festive e-commerce landing page for Raksha Bandhan gifts, combos and hampers. Built with vanilla HTML, CSS and JavaScript, with Vite for local development and production builds.

> *"Har gift ke peeche ek khoobsurat rishta hota hai."*

**Repository:** https://github.com/pushkardwivedi730-hub/Rakshabandhan-project

---

## ✨ Features

- 🎠 Auto-playing hero slider with festival countdown timer
- 🛍️ Product catalogue with category, budget, search and sort filters
- 🎁 Curated Raksha Bandhan gift combos and bestseller carousels
- 💡 Interactive "Gift Finder" to recommend gifts
- 👀 Quick-view product modals with ratings and pricing
- ❤️ Wishlist and cart drawers with `localStorage` persistence
- ✅ Checkout modal with order summary and form handling
- ⭐ Customer reviews slider and FAQ accordion
- 📱 Fully responsive layout with a mobile navigation drawer
- 🎬 Festival promo video modal
- 🔔 Toast notifications, back-to-top button and smooth scrolling

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Custom CSS3 (responsive, mobile-first) |
| Logic | Vanilla JavaScript (ES6+) |
| Tooling | Vite 6, TypeScript config |
| Utilities | Tailwind CSS 4, PostCSS, Autoprefixer |

> The landing page itself is framework-free. React and other packages in `package.json` are included for AI Studio compatibility and are not required by the current UI.

---

## 🚀 Getting Started

### Option 1 — Open directly

No build step is required. Just open `index.html` in any modern browser.

> An internet connection is needed for the externally hosted product images.

### Option 2 — Run with Vite

**Prerequisite:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev

# Create a production build in dist/
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```text
Rakshabandhan project/
├── index.html          # Page markup + inline application script
├── style.css           # Custom responsive styling
├── script.js           # Standalone master JavaScript logic
├── vedio/              # Festival promo video
├── metadata.json       # Project metadata
├── package.json        # Dependencies and npm scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── .gitignore          # Ignored dependencies, builds, env files and OS junk
```

> `index.html` currently contains the application logic inline (starting around line 1209). `script.js` holds the same master logic as a standalone file.

---

## ⚙️ Notes & Configuration

- **No API keys or `.env` file are required** to run the current landing page.
- `metadata.json` lists an optional server-side Gemini capability, but this repository currently contains only the front-end page.
- Cart and wishlist data persist in the browser under the `localStorage` keys `apnagift_cart` and `apnagift_wishlist`.
- The video folder is named `vedio/` (spelling preserved from the original project).
- No `node_modules`, build output, environment files or OS junk files are committed.

---

## 👤 Author

**Pushkar Dwivedi**

- GitHub: [@pushkardwivedi730-hub](https://github.com/pushkardwivedi730-hub)
- Project: [Rakshabandhan-project](https://github.com/pushkardwivedi730-hub/Rakshabandhan-project)
