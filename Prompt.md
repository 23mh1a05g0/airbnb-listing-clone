# Master Prompt — Airbnb Listing Page Clone

## Context

I'm building a pixel-accurate, desktop-only clone of a specific Airbnb listing page for a
take-home assignment. The reference is a live site with three views: the Listing Page, a
"Photo Tour" overlay, and a single-photo Lightbox. I'm attaching screenshots of all three
views. Match them as closely as possible: layout, spacing, typography, colors, icons,
copy, and interaction behavior (hover states, sticky headers, keyboard navigation, focus
states). Desktop viewport only (~1440px design target) — no responsive/mobile work needed.

## Tech stack

- Next.js 14 (App Router) + React + TypeScript
- Tailwind CSS for styling
- Static/mock JSON data (no backend) — store all listing content in a `data/listing.ts`
  file so it's easy to edit
- Icons: use `lucide-react` or inline SVGs matching Airbnb's thin-outline icon style
  (kitchen utensils, wifi, workspace, car, pool, hot tub, paw print, camera, etc.)
- No component library — build components from scratch with Tailwind for full control
  over pixel matching

## Design tokens

- Primary brand color / CTA pink: `#FF385C` (Airbnb "Rausch")
- Text: near-black `#222222` for headings, `#717171` for secondary text
- Borders: light gray `#DDDDDD` / `#EBEBEB`
- Font: system font stack approximating Airbnb's rounded sans (`ui-sans-serif, -apple-system,
  "Helvetica Neue", Arial, sans-serif` is a reasonable substitute for their proprietary
  "Circular" font)
- Border radius: generous rounding — 12px on cards/images, full-pill on buttons and the
  search bar
- Base spacing unit: 8px scale

## Project structure

```
app/
  layout.tsx
  page.tsx                    # Listing Page (route: /)
  photo-tour/page.tsx         # Photo Tour overlay (route: /photo-tour)
  lightbox/[index]/page.tsx   # OR handle photo-tour + lightbox as modal state on top of "/"
components/
  Header.tsx                  # top nav: logo, search pill, Become a host, globe, menu
  ListingHeader.tsx           # title + Share/Save
  PhotoGrid.tsx                # 1 large + 4 small grid, "Show all photos" pill
  StickyTabs.tsx               # Photos | Amenities | Reviews | Location, sticky on scroll
  BookingCard.tsx              # sticky price/date/guest/Reserve card
  GuestFavouriteBanner.tsx
  HostInfo.tsx
  Highlights.tsx               # icon + title + description rows
  Description.tsx              # emoji-rich text, "Show more" expand
  SleepingArrangements.tsx     # "Where you'll sleep" 2-card row
  Amenities.tsx                 # 2-col icon list + "Show all N amenities"
  AvailabilityCalendar.tsx     # 2-month calendar, prev/next month arrows
  Reviews.tsx                    # big score, guest-favourite blurb, category bars,
                                 # tag filter pills, review cards grid
  PhotoTourOverlay.tsx          # thumbnail grid grouped by room + full-size sections below
  Lightbox.tsx                  # single photo, counter "X of N", prev/next, Esc/arrow keys
data/
  listing.ts                    # all copy + amenities + reviews + photo metadata as typed data
```

## Screen 1 — Listing Page

**Header (sticky, white bg, bottom border):**
- Airbnb logo + wordmark, pink, left-aligned
- Center: pill-shaped search bar with three segments — "Anywhere" (with small house icon),
  divider, "Anytime", divider, "Add guests" — ending in a circular pink search button with
  a magnifying-glass icon
- Right: "Become a host" text link, globe icon in a circle, hamburger+profile icon in a
  pill/circle

**Title row:**
- H1 listing title, left
- Right: "Share" (upload icon) and "Save" (heart outline icon) as text+icon buttons,
  underlined text

**Photo grid:**
- CSS grid: one large image left (spans 2 rows), 2x2 grid of 4 smaller images right, all
  with rounded corners and small gaps
- On the bottom-right image, overlay a white pill button "⊞ Show all photos" bottom-right
  corner with padding
- Hover: slight brightness/opacity dim on the hovered tile
- Clicking any image or "Show all photos" → opens Photo Tour overlay

**Below the grid, two-column layout (content left ~60%, sticky booking card right ~35%):**

Left column, top to bottom:
1. Sub-nav tabs: "Photos | Amenities | Reviews | Location" — underline under active tab,
   this row becomes sticky (pinned under the header) once scrolled to
2. H1-ish: "Entire serviced apartment in {City, Country}", subtext line:
   "{N} guests · {N} bedroom · {N} bed · {N} bathroom"
3. "Guest favourite" bordered rounded card: laurel-wreath icon left, bold "Guest
   favourite" + description text, right-aligned big rating number + star row, divider,
   "{N} Reviews"
4. Host row: circular host avatar, "Hosted by {Name}", "{N} years hosting" subtext
5. Divider, then 3 "highlight" rows, each: icon left, bold title, gray description below
6. Divider, "Some info has been automatically translated. Show original" gray banner
7. Emoji-rich description paragraph, truncated with "Show more >" link that expands
8. Divider, "Where you'll sleep" — 2 image cards side by side, each with room name + one
   detail line below (e.g. "1 double bed")
9. Divider, "What this place offers" — 2-column icon+label list (strike-through text +
   icon for unavailable amenities like Carbon monoxide alarm, Smoke alarm), "Show all N
   amenities" pill button below
10. Divider, "{N} nights in {City}" with date range subtext, then a 2-month calendar
    (prev/next chevron controls, weekday headers, dates, current/selected range styling)
11. Divider, Reviews section: giant "4.95" numeral flanked by small decorative laurel
    icons, "Guest favourite" heading, description, "How reviews work" link; then a 6-column
    grid of rating categories (Cleanliness, Accuracy, Check-in, Communication, Location,
    Value) each with score + small icon; then a horizontally scrollable row of tag pills
    with counts (Comfort 6, Accuracy 5, Hot tub 5, etc.); then a 2-column grid of review
    cards (avatar, name, "{N} months/years on Airbnb", star row + "{time} ago", review text)

Right column (sticky, stays pinned while scrolling through the left column, in view until
its section ends):
- White card, rounded corners, soft shadow, border
- "Get 10% off your next stay." banner with tag icon + "Terms apply" link + "Claim" button
- Price card: "₹{price} for {N} nights", a 2-cell CHECK-IN / CHECKOUT date box (bordered,
  divided by a vertical line), a GUESTS row with chevron dropdown affordance below it
- "Free cancellation before {date}" gray pill/banner
- Big pink pill "Reserve" button, full width
- "You won't be charged yet" centered gray microtext below the button
- Below the card, outside it: "🚩 Report this listing" gray link

## Screen 2 — Photo Tour overlay

Full-page overlay (not the header's search bar — a simpler top bar):
- Top bar: back chevron/arrow (left), "Photo tour" centered title, share icon + heart/save
  icon (right)
- Below: a grid of thumbnails grouped by room, each thumbnail ~150px with a caption
  underneath (e.g. "Living room 1", "Full kitchen", "Bedroom", "Gym", "Exterior", "Pool",
  "Additional photos") — grid wraps responsively at fixed desktop width
- Below the thumbnail grid, per-room sections stacked vertically: a left column with the
  room name as a large heading + a subtitle line of amenities separated by "·" (e.g. "Sofa
  · Air conditioning · Ceiling fan · TV"), and a right column with one large photo for that
  room. Repeat this two-column block for every room/category.
- Clicking any thumbnail or any large section photo → opens the Lightbox at that photo's
  index

## Screen 3 — Lightbox

- Full-viewport overlay, near-white/light background
- Top bar: grid icon (left, returns to Photo Tour), photo caption/title centered, "{i} of
  {total}" counter + "X" close button (right)
- Center: single large photo, letterboxed, rounded corners, max height leaves room for
  the top bar
- Left/right edges: circular white buttons with chevron-left / chevron-right icons,
  vertically centered, subtle shadow, hover state (slightly larger/darker)
- Keyboard: `ArrowLeft` / `ArrowRight` navigate photos, `Escape` closes back to the Photo
  Tour (or to the Listing Page if opened directly from there)
- Focus is trapped in the overlay while open; closing returns focus to the element that
  opened it

## Interaction & accessibility requirements

- All interactive elements (buttons, tabs, thumbnails, calendar cells) must be reachable
  via `Tab` and show a visible focus ring
- Photo grid tiles, thumbnails, and lightbox controls need `aria-label`s (e.g. "Show all
  photos", "Previous photo", "Next photo", "Close photo viewer")
- Modals (Photo Tour, Lightbox) should trap focus and be dismissible with `Escape`
- Use `role="dialog"` + `aria-modal="true"` on the overlays
- Sticky sub-nav tabs and sticky booking card should use CSS `position: sticky`, not JS
  scroll listeners, unless a scroll listener is required for a specific pixel-snap effect
- Hover states: subtle opacity/shadow/scale transitions (150–200ms ease) on photo tiles,
  buttons, and review cards — match the reference's motion, not necessarily exact easing
  curves you can't inspect

## Data

Put all copy (title, host name, price, description text, highlights, amenities list,
review entries, photo captions/categories) into `data/listing.ts` as typed objects so
content changes don't require touching component code. Use placeholder/your-own photos
(free stock images or generated) rather than pulling the reference site's actual listing
photos — recreate the structure and style, not their copyrighted images.

## Build order (do this incrementally, not all at once)

1. Scaffold Next.js + Tailwind project, set up design tokens in `tailwind.config.ts`
2. Build `Header.tsx` and static page shell
3. Build the Photo Grid + `PhotoTourOverlay` + `Lightbox` navigation flow first (this is
   the most interaction-heavy part and the main grading focus per the assignment)
4. Build the two-column Listing Page body section by section (top to bottom as listed
   above), checking spacing against the screenshots after each section
5. Wire up sticky tabs and sticky booking card
6. Do an accessibility pass: tab order, ARIA labels, focus rings, Escape/Arrow key handling
7. Final side-by-side visual diff pass against the screenshots

Work one section/component at a time and show me the result before moving to the next,
so I can course-correct early rather than after the whole page is built.