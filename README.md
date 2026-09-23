# Airbnb Listing Clone

A pixel-perfect, high-performance, and responsive clone of an Airbnb property listing page built with modern Vanilla Web Technologies. Designed with zero build tools or external framework dependencies, delivering near-instant page loads, fluid micro-interactions, and accessible interactive components.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-success?style=for-the-badge)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 🌟 Overview

This project showcases a production-ready recreation of Airbnb's core listing experience. It replicates complex UI patterns—such as multi-stage modal photo tours, full-screen keyboard-navigable lightboxes, dynamic scroll-spying tabs, and an intelligent sticky booking widget—using clean, modular vanilla JavaScript and modern CSS.

---

## ✨ Key Features

### 📸 Immersive Media Experience
- **Interactive 5-Photo Hero Grid**: Clickable primary and secondary hero photos with an integrated *"Show all photos"* trigger.
- **Photo Tour Modal**: Full-page overlay with dual-pane layout:
  - Synchronized thumbnail navigation column for fast indexing.
  - Room-by-room photo stream organized by space with accompanying amenity tags.
- **Full-Screen Lightbox**:
  - Edge-to-edge high-resolution image viewing.
  - Image counter, previous/next controls, and looped cycling.
  - Full keyboard accessibility: <kbd>←</kbd> / <kbd>→</kbd> arrow keys to navigate, and <kbd>Esc</kbd> to return to the photo tour.

### 📌 Intelligent Sticky Reserve Widget
- **Scroll-Aware Docking Engine**: Stays in document flow while the hero photo gallery is on screen, docks gracefully as a sticky element during content scrolling, and anchors cleanly above the reviews section without overlapping.
- **Coordinated Layout**: Both the Reserve card and the *"Report this listing"* trigger move together as a unified sidebar unit.
- **Micro-Interactions**: Custom CTA button equipped with hover states, gradient shine animations, and subtle active press feedback.

### 🧭 Scroll-Spying Navigation Tabs
- **Smooth Anchor Scrolling**: Quick jumping to *Photos*, *Amenities*, *Reviews*, and *Location*.
- **`IntersectionObserver` Tracking**: Automatically updates the active tab indicator as the user scrolls through the listing page.

### 🏡 Comprehensive Listing Sections
- **Guest Favourite Badge**: Prominent social proof card highlighting overall rating, laurel insignia, and review volume.
- **Host & Co-Host Profile**: Detailed host badge, years hosting, responsiveness metrics, and co-host directory.
- **Where You'll Sleep**: Interactive card grid displaying sleeping arrangements and bed configurations per room.
- **Amenities Showcase**: Grouped amenities list with iconography, categorized features, and availability flags.
- **Interactive Calendar Preview**: Two-month date picker display showing check-in/checkout dates, stay duration, and night calculation.
- **Detailed Reviews Engine**: Category breakdown bars (Cleanliness, Accuracy, Check-in, Communication, Location, Value), tag filters, and verified guest feedback.
- **Location & Map Preview**: Neighbourhood overview, location pin, and area highlights.
- **Similar Stays Carousel**: Recommendation card grid featuring nearby accommodations, pricing, and ratings.

---

## 🏗️ Architecture & Tech Stack

Built strictly with native web technologies to guarantee maximum performance, portability, and zero supply-chain overhead:

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Structure** | **Semantic HTML5** | Accessible layout (`<header>`, `<main>`, `<section>`, `<aside>`, `<article>`, `<nav>`) with ARIA attributes and dialog semantics. |
| **Styling** | **Vanilla CSS3** | Custom properties (CSS variables), CSS Grid, Flexbox, media queries, keyframe animations, and custom scroll behaviors. |
| **Logic** | **Vanilla JavaScript (ES6+)** | Dynamic DOM rendering, `IntersectionObserver` API, keyboard event listeners, and responsive scroll recalculations. |
| **Data** | **JavaScript Object Model** | Self-contained mock dataset (`listing-data.js`) supporting easy backend or API integration. |

---

## 📁 Project Structure

```text
airbnb-listing-clone/
├── .gitignore          # Git exclusion rules (ignores local IDE cache & logs)
├── README.md           # Project documentation and specifications
└── public/             # Deployable static assets
    ├── index.html      # HTML entry point and root mounting container
    ├── theme.css       # Design tokens, color system, typography & base resets
    ├── app.css         # Component styling, layouts, animations & responsive rules
    ├── listing-data.js # Listing dataset, room specs, photos & reviews
    └── app.js          # Core app controller, modal systems & sticky booking logic
```

---

## 🚀 Getting Started

No build step, transpilation, or package installations are required. You can run the application directly using any static file server or your preferred browser.

### Option 1: Python Built-In HTTP Server (Recommended)

From the project root:

```bash
# Navigate to the public folder
cd public

# Start a local HTTP server
python -m http.server 5500
```

Open your browser and navigate to:
```
http://localhost:5500
```

### Option 2: Node.js `npx serve`

```bash
npx serve public -p 5500
```

### Option 3: VS Code Live Server

1. Open the project folder in VS Code.
2. Right-click [`public/index.html`](file:///e:/Projects/airbnb-listing-clone/public/index.html).
3. Select **"Open with Live Server"**.

### Option 4: Direct File Inspection

Simply double-click [`public/index.html`](file:///e:/Projects/airbnb-listing-clone/public/index.html) to open it directly in Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge.

---

## ⌨️ Keyboard Shortcuts & Accessibility

| Key | Context | Action |
| :--- | :--- | :--- |
| <kbd>→</kbd> / <kbd>Right Arrow</kbd> | Lightbox Modal | Advance to next photo |
| <kbd>←</kbd> / <kbd>Left Arrow</kbd> | Lightbox Modal | Return to previous photo |
| <kbd>Esc</kbd> | Lightbox Modal | Close lightbox and return to Photo Tour |
| <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> | Global | Navigate interactive elements with visible focus rings |

---

## ⚡ Performance & Optimization Highlights

- **Zero JavaScript Bundle Overhead**: No React, Vue, or Webpack runtime overhead.
- **GPU-Accelerated Animations**: Transitions and hover states utilize `transform` and `opacity` properties for 60 FPS rendering.
- **Passive Event Listeners**: Window scroll events use `{ passive: true }` and `requestAnimationFrame` for buttery-smooth scrolling.
- **Decoupled Data Architecture**: Listing data is isolated in [`listing-data.js`](file:///e:/Projects/airbnb-listing-clone/public/listing-data.js), allowing drop-in connection to REST or GraphQL APIs.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
