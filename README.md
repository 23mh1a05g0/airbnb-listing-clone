# Airbnb Listing Clone

> 🚀 **Live Demo:** **[https://stay-listing-showcase.onrender.com](https://stay-listing-showcase.onrender.com)**

A pixel-perfect, high-performance, and responsive clone of an Airbnb property listing page built with modern **React 19**, **Vite**, and **Vanilla CSS**. Designed with a modular component architecture, fluid micro-interactions, full keyboard accessibility, and an intelligent scroll-aware sticky booking engine.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-00c7b7?style=for-the-badge&logo=render&logoColor=white)](https://stay-listing-showcase.onrender.com)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 🌟 Overview

This project delivers a production-grade recreation of Airbnb's core property listing experience. It replicates complex UI patterns—such as multi-stage modal photo tours, full-screen keyboard-navigable lightboxes, dynamic scroll-spying tabs, and an intelligent sticky booking widget—using reusable React components and performant native CSS.

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
  - Full keyboard accessibility: <kbd>←</kbd> / <kbd>→</kbd> arrow keys to navigate, and <kbd>Esc</kbd> to return to the photo tour or main listing.

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

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Component-driven UI with reactive state management, hooks, and clean lifecycle handling. |
| **Build Tool** | **Vite 8** | Ultra-fast development server with Hot Module Replacement (HMR) and optimized rollup production bundles. |
| **Styling** | **Vanilla CSS3** | Custom properties (CSS variables), CSS Grid, Flexbox, media queries, keyframe animations, and custom scroll behaviors. |
| **State & Navigation** | **React Hooks** | View state coordination (`main`, `tour`, `lightbox`), active photo indexing, and keyboard shortcut event listeners. |
| **Data Architecture** | **ES Modules** | Decoupled listing data module (`listingData.js`), structured for easy drop-in connection to REST or GraphQL APIs. |

---

## 📁 Project Structure

```text
airbnb-listing-clone/
├── index.html                   # Root HTML entry point mounting React root
├── vite.config.js               # Vite configuration with React plugin
├── package.json                 # Project dependencies, scripts & metadata
├── .gitignore                   # Git exclusion rules (node_modules, dist, logs)
├── README.md                    # Project documentation
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main listing layout, modal state & keyboard coordinator
    ├── data/
    │   └── listingData.js       # Listing dataset, room specs, photos & reviews
    ├── styles/
    │   ├── theme.css            # Design tokens, color system, typography & base resets
    │   └── app.css              # Component styling, layouts, animations & responsive rules
    └── components/
        ├── Header.jsx           # Top navigation bar, search pill & user menu
        ├── TitleRow.jsx         # Listing title, share & save actions
        ├── PhotoGrid.jsx        # 5-photo hero grid with "Show all photos" trigger
        ├── NavigationTabs.jsx   # Sticky tabs with scroll-spy IntersectionObserver
        ├── ListingOverview.jsx  # Rooms/guests count, guest favourite, host & highlights
        ├── SleepingArrangements.jsx # "Where you'll sleep" room photo cards
        ├── Amenities.jsx        # Categorized amenities list & "Show all 50" trigger
        ├── CalendarSection.jsx  # Interactive two-month calendar preview
        ├── BookingWidget.jsx    # Smart sticky Reserve card with docking engine
        ├── ReviewsSection.jsx   # Overall score, category rating bars, tags & reviews grid
        ├── LocationSection.jsx  # Location map placeholder & neighbourhood highlights
        ├── HostDetails.jsx      # Host bio, host statistics & co-hosts grid
        ├── Policies.jsx         # House rules, cancellation & safety policies
        ├── NearbyStays.jsx      # Recommended stays carousel
        ├── PhotoTourModal.jsx   # Full-page dual-pane photo tour overlay
        └── LightboxModal.jsx    # Full-screen lightbox with keyboard & arrow navigation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/23mh1a05g0/airbnb-listing-clone.git
cd airbnb-listing-clone
npm install
```

### Development Server

Start the local Vite development server with HMR:

```bash
npm run dev
```

Vite will serve the application locally (typically at `http://localhost:5500` or `http://localhost:5173`).

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ⌨️ Keyboard Shortcuts & Accessibility

| Key | Context | Action |
| :--- | :--- | :--- |
| <kbd>→</kbd> / <kbd>Right Arrow</kbd> | Lightbox Modal | Advance to next photo |
| <kbd>←</kbd> / <kbd>Left Arrow</kbd> | Lightbox Modal | Return to previous photo |
| <kbd>Esc</kbd> | Lightbox Modal | Close lightbox and return to Photo Tour |
| <kbd>Esc</kbd> | Photo Tour Modal | Close photo tour and return to Main Listing |
| <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> | Global | Navigate interactive elements with visible focus rings |

---

## ⚡ Performance & Optimization Highlights

- **Sub-Second Build & Bundle Times**: Vite roll-up compilation creates lean, tree-shaken chunks.
- **GPU-Accelerated Animations**: Transitions and hover states utilize `transform` and `opacity` properties for 60 FPS rendering.
- **Scroll Docking Engine**: Calculation loop with passive event listeners ensures the sticky reservation widget moves without frame drops.
- **Decoupled Data Architecture**: Listing data is isolated in [`src/data/listingData.js`](file:///src/data/listingData.js), allowing seamless hookup to backend microservices or REST/GraphQL endpoints.

---

## 🤖 AI Config Files — How to Use

Copy the contents of this folder into the root of your actual project repo, preserving the paths:

```text
your-project/
  CLAUDE.md
  AGENTS.md
  .claude/
    agents/
      fidelity-reviewer.md
      a11y-auditor.md
```

- `CLAUDE.md` / `AGENTS.md` — read automatically by Claude Code / other agents at session start. Edit the "Runtime constraint" section if your actual deployment differs from Hatchable, and edit the tech stack section to match what you actually shipped.
- `.claude/agents/*.md` — two subagents you can invoke explicitly in Claude Code, e.g.:
  - *"Use the fidelity-reviewer subagent to check the Amenities section I just built"*
  - *"Use the a11y-auditor subagent to check the Lightbox before I move on"*

These are meant to reflect a real workflow, not just satisfy the "include config files" requirement — actually invoke the subagents as you build so the review comments in your prompt log are genuine.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
