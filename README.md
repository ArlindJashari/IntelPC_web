# IPC 2026 Control Panel Redesign

A Cursor-ready Vite + React project that reorganizes the IPC 2026 mockup into the original page structure while keeping the approved Lift-off / aerospace control-panel visual style.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL in your browser.

## What changed vs the previous package

This is not just a static HTML preview. It is a real React project with:

- Vite + React setup
- Componentized layout
- Data-driven campaign content
- Organized page structure based on `IPC_2026_Mockup.html`
- Lift-off/control-panel styling from the approved design direction
- Functional tabs
- Functional upload modal
- Functional Photo Wall filters
- Functional heart toggles
- Responsive behavior

## Key files

```txt
src/App.jsx
src/data/campaignData.js
src/components/Hero.jsx
src/components/InfoBar.jsx
src/components/Tabs.jsx
src/components/ChallengesPanel.jsx
src/components/TrainingsPanel.jsx
src/components/PrizesPanel.jsx
src/components/PhotoWallPanel.jsx
src/components/UploadModal.jsx
src/styles/tokens.css
src/styles/app.css
```

## Design goal

Use the exact organization/content rhythm from `IPC_2026_Mockup.html`:

1. Hero
2. Persistent Info Bar
3. Tab Navigation
4. Active Panel Content
5. Footer note
6. Upload Modal

But restyle it using the approved reference style:

- Light grey control-panel chassis
- Dark display modules
- Red urgency accents
- Mission-control details
- Compact mono labels
- Strong visual hierarchy
- No messy mixed sections around the hero

## References included

See the `references/` folder for the original uploaded source files and design tokens.
