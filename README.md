# Airbnb Listing Page Clone — HTML v11

This ZIP is the current HTML/JavaScript version deployed to Hatchable as v11.

## Run locally

No Node.js or build step is required.

Option 1: open `public/index.html` directly in a browser.

Option 2 (recommended): from the `public` directory run a simple local server:

```bash
python -m http.server 5500
```

Then open:

http://localhost:5500

## Current v11 behavior

- Desktop Airbnb-style listing page.
- Sticky/smart Reserve card.
- Reserve card does not stick while the photo gallery is visible.
- Reserve card + Report this listing move together.
- Reserve card stops before the Reviews / Guest Favourite section.
- Reserve button has hover, shine, press, and subtle pulse animation.
- Listing tabs smooth-scroll and track the active section.
- Photo Tour opens as a full-page overlay.
- Photo Tour thumbnails scroll to their matching large column photo.
- Large Photo Tour column images open the full-screen Lightbox.
- Lightbox supports previous/next navigation and keyboard arrows.
- Escape returns from Lightbox to Photo Tour.
- Responsive CSS is included, although the assignment target is desktop-first.

## Project structure

airbnb-listing-html-v11/
└── public/
    ├── index.html
    ├── theme.css
    ├── app.css
    ├── listing-data.js
    └── app.js
