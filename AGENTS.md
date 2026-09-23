# AGENTS.md

Tool-agnostic instructions for any AI coding agent (Codex, Cursor, Claude Code, etc.)
working in this repository. Content mirrors CLAUDE.md; kept in sync manually since not
every tool reads CLAUDE.md.

## Project

Pixel-accurate, desktop-only clone of a single Airbnb-style listing page, built for the
PlayPower Labs take-home assignment. The reference is a live URL (see README.md) — it is
the single source of truth for visual and behavioral fidelity. This is **not** a general
Airbnb replica: no auth, no search results, no host dashboard, no payments. Scope is three
views only: Listing Page, Photo Tour overlay, Lightbox.

## Tech stack

- Deployed runtime: Hatchable static SPA (no Next.js/Tailwind build pipeline in production —
  see "Runtime constraint" below)
- Local dev: React + TypeScript
- Styling: plain CSS / CSS modules matching Hatchable's supported output (avoid introducing
  a Tailwind/PostCSS build step unless Hatchable's pipeline supports it — check before adding)
- No backend. All content lives in `data/listing.ts` as typed mock data.

## Runtime constraint (important)

The original design used Next.js + Tailwind, but the deployment target (Hatchable) does not
run that build pipeline. Do not reintroduce Next.js-only APIs (`next/image`, `next/link`,
app-router file conventions) or a Tailwind JIT build unless you've confirmed Hatchable
supports it. When in doubt, prefer plain React + CSS that works in a static SPA output.

## Priorities, in order

1. **Behavioral correctness** of the three-view flow: photo grid → Photo Tour → Lightbox.
   Every photo (grid tiles, Photo Tour thumbnails, Photo Tour large room photos) must open
   the *same* Lightbox component at the correct index — never a separate single-image view.
2. **Accessibility**: keyboard `Tab` order, visible focus rings, `Escape`/`ArrowLeft`/
   `ArrowRight` in the Lightbox, `role="dialog"` + `aria-modal="true"` on overlays, focus
   trapped inside open overlays, focus returned to the trigger element on close.
3. **Sticky navigation**: sub-nav tabs (Photos/Amenities/Reviews/Location) must scroll-link
   to their sections and reflect the active section; the booking card must stay pinned
   while its column is in view.
4. **Visual fidelity**: spacing, color, type, icon choice matching the reference screenshots
   in `/reference-screenshots` (if present) — this comes after behavior is correct, not
   before.

## Conventions

- One component per file under `components/`, PascalCase filenames
- All copy/content changes go in `data/listing.ts`, never hardcoded in components
- Icons: prefer semantically matching icons per amenity/highlight (a fan icon for cooling,
  not a generic square) — check against reference screenshots before picking a glyph
- Do not add new npm dependencies without checking Hatchable's supported package list first

## When fixing a bug

State which of the three views (Listing Page / Photo Tour / Lightbox) is affected, make the
smallest change that fixes it, and confirm the fix doesn't regress keyboard navigation or
focus handling in the other two views before considering it done.

## Explicitly out of scope

Mobile/responsive layouts, real booking/payment logic, real authentication, a real map
embed (a static placeholder is fine for the Location section), backend/API routes.
