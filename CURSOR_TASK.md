# Cursor Task — IPC 2026 Reorganized Lift-off Style Implementation

You are working inside a Vite + React project. The goal is to keep the approved aerospace / control-panel visual style, but organize the website exactly like the original `IPC_2026_Mockup.html` reference.

## Important direction

Do **not** turn this back into a messy full-dashboard collage. The user approved the visual style, not the previous scattered section organization.

The page structure must follow the original mockup:

1. Full hero section at the top
2. Persistent info bar below the hero
3. Tab navigation below the info bar
4. Tab panel content below the navigation
5. Footer note
6. Upload modal

## Must preserve from the approved style

- Light grey industrial chassis background
- Dark display-black cards and panels
- Urgency red buttons/progress/highlights
- Compact mono labels and technical UI details
- Subtle grid lines, panel borders, screws, and radar/control details
- High contrast and premium product-review quality

## Must preserve from `IPC_2026_Mockup.html`

- Hero content:
  - INTEL PC CHAMPIONS 2026
  - JUNE 3 – JULY 15, 2026 · PARTNER SHOWCASE
  - Placeholder — final campaign artwork will replace this block

- Info bar content:
  - Trainings: 8 of 14 complete
  - Challenges: 3 of 7 complete
  - Store: 3/4 reps · 56/72 trainings

- Tabs:
  - Overview
  - Trainings
  - Prizes
  - Challenges
  - Photo Wall

- Challenges tab:
  - Exact 7 individual challenge cards from the HTML mockup
  - Store Challenge section
  - Dev note annotations
  - Photo upload behavior

- Trainings tab:
  - Week 3 current week
  - Week 2
  - Week 1
  - All training names from the HTML mockup

- Photo Wall tab:
  - Filter chips
  - All photo wall placeholder cards
  - Heart reaction behavior

- Upload modal:
  - Uploading for dynamic challenge name
  - Drag/drop placeholder
  - Browse Files button
  - Optional caption field
  - Character counter

## Implementation notes

- Main data lives in `src/data/campaignData.js`.
- Main styling lives in `src/styles/app.css` and `src/styles/tokens.css`.
- Avoid adding new colors outside the token palette unless absolutely necessary.
- Do not replace the content with generic filler.
- Keep responsive behavior working.
- Keep the app buildable with `npm run build`.

## Validation checklist

Before finishing, run:

```bash
npm install
npm run build
```

Then verify:

- Hero is full-width and organized at the top.
- Info bar sits directly under hero.
- Tabs sit directly under info bar.
- Challenges content appears inside the Challenges tab only.
- Store Challenge appears below Your Challenges, not floating around the hero.
- Photo Wall filters work.
- Heart toggles work.
- Upload modal opens from upload buttons and displays the correct challenge name.
