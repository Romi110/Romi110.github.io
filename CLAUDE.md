# CLAUDE.md — Kettlebell Guide

## Project Overview

A self-contained single-page kettlebell fitness application. No build tools, no frameworks, no dependencies beyond Google Fonts. Open `index.html` directly in a browser.

**Stack:** Pure HTML + embedded CSS + embedded JavaScript
**Assets:** `media/` — 21 exercise demonstration videos (H.264 MP4, ~3.3 MB total)

---

## File Structure

```
Romi110.github.io/
├── index.html      # Entire application (CSS + JS embedded)
├── 404.html        # GitHub Pages not-found page (standalone, own styles)
├── README.md       # User-facing project documentation
├── CLAUDE.md       # This file — architecture docs for AI-assisted development
└── media/          # Exercise demo videos (one per exercise)
    ├── deadlift.mp4
    ├── swing.mp4
    └── ... (21 total)
```

---

## Architecture

### Single-File App

All CSS lives in a `<style>` block in `<head>`. All JavaScript lives in a `<script>` block at the end of `<body>`. No separate files, no build step.

### Tab / Panel System

Four top-level tabs each map to a hidden panel:

```
Tab button (data-panel="{id}")  →  showPanel(id)  →  #panel-{id}.active
```

Only one `.panel` is visible at a time — toggled via the `.active` CSS class (`display: none` → `display: block`).

- Tabs carry ARIA roles (`role="tab"`, `aria-selected`, `aria-controls`); panels are `role="tabpanel"`.
- `showPanel(id)` finds the button via its `data-panel` attribute and syncs `location.hash` with `history.replaceState`, so tabs are linkable (`/#tips`). A `hashchange` listener + init call restore the panel from the URL.

---

## Key Data Structures

### `EXERCISES` (array, 21 objects)

```js
{
  id:     'swing',
  name:   'Kettlebell Swing',
  muscle: 'hinge',        // hinge | squat | push | pull | core | total
  score:  10,             // 1–10 effectiveness rating
  tag:    'Essential',    // Form Builder | Essential | Technical | Advanced | Mastery Move | ...
  demo:   'media/swing.mp4',
  desc:   '...',
  form:   '...',
}
```

### `CIRCUITS` (object keyed by level)

```js
CIRCUITS.beginner.days[0].options[0]
// → { label, desc, muscles[], exercises[{ n, d }], tip }
```

Three levels: `beginner`, `intermediate`, `advanced`.
Three days per level. Three options per day (A / B / C).

### `BODY_GROUPS` (array, 6 objects)

```js
{
  id: 'hinge', label: 'Glutes & Hamstrings', icon: '🍑', desc: '...',
  exercises: [
    { name, tag, muscles[], why, beg, int, adv }
  ]
}
```

Each group has 4 ranked exercises (5 for `total`) with beginner / intermediate / advanced set-rep prescriptions.

---

## Theme System

CSS custom properties on `:root` (light) and `[data-theme="dark"]`:

| Variable | Purpose |
|---|---|
| `--ink`, `--muted` | Text colors |
| `--bg`, `--bg2`, `--border` | Surface and border colors |
| `--accent` | Orange (#D85A30) — primary accent |
| `--accent2` | Green (#1D9E75) |
| `--accent3` | Blue (#378ADD) |
| `--gold` | Gold (#BA7517) |
| `--opt-a-*` / `--opt-b-*` / `--opt-c-*` | Option card colors (A=orange, B=blue, C=green) |
| `--grp-color`, `--grp-header`, `--grp-bg` | Set per `.grp-{id}` class on rank cards |

Theme preference persisted in `localStorage` key `theme`. Toggle with `toggleTheme()`. On first visit (no saved preference), the OS `prefers-color-scheme` is used.

---

## Key Functions

| Function | Purpose |
|---|---|
| `showPanel(id)` | Switch active tab/panel, sync URL hash + ARIA state |
| `activatePanelFromHash()` | Restore active panel from `location.hash` (init + `hashchange`) |
| `renderExercises()` | Render exercise grid filtered by `currentMuscle` |
| `showMuscle(m, btn)` | Set muscle filter and re-render exercises |
| `renderCircuit()` | Render current level/day circuit |
| `showLevel(level, btn)` | Switch circuit difficulty |
| `selectDay(i)` | Switch circuit day |
| `renderBodyGroups()` | Render ranked exercises for `currentGroup` |
| `showGroup(id, btn)` | Switch active body group |
| `toggleGif(btn)` | Expand/collapse exercise video demo — the `<video>` src is set from `data-src` on first open (deferred loading), and paused on close |
| `toggleTheme()` / `applyTheme(dark)` | Dark mode management |

---

## State Variables

```js
let currentMuscle = 'all';     // Exercises panel muscle filter
let currentLevel  = 'beginner';// Circuits panel difficulty level
let currentDay    = 0;         // Circuits panel day index
let currentGroup  = 'hinge';   // Body Groups panel active group
```

---

## Styling Conventions

- **Typography:** Bebas Neue (display / numbers), DM Sans 300/400/500 (body)
- **Border radius:** `--radius` = 12px (cards), 8–10px (secondary elements)
- **Spacing:** 8px base unit
- **Transitions:** 0.2s hover states, 0.35s GIF reveal animation
- **Mobile breakpoints:** 680px (option grid), 600px (exercise grid / rank cards), 500px (hero / tabs)

---

## How to Add a New Tab

1. Add a tab button inside `.tabs`:
   ```html
   <button class="tab" id="tab-mytab" data-panel="mytab" role="tab" aria-selected="false"
           aria-controls="panel-mytab" onclick="showPanel('mytab')">Label</button>
   ```
2. Add a panel div anywhere inside `.wrap`:
   ```html
   <div class="panel" id="panel-mytab" role="tabpanel" aria-labelledby="tab-mytab">...</div>
   ```
3. If the panel needs dynamic rendering, add a branch in `showPanel()`:
   ```js
   if (id === 'mytab') renderMyTab();
   ```

The tab is automatically linkable as `/#mytab` — no extra routing code needed.

---

## How to Add a New Exercise

Add an object to the `EXERCISES` array with all required fields. It will automatically appear in the correct muscle group filter. If no demo video exists, set `demo: null` — the demo button will be hidden.

To add a demo video, encode as H.264 MP4 (see existing files):

```bash
ffmpeg -i in.gif -movflags faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 27 -preset slow -an media/name.mp4
```

---

## Gotchas

- **Exercise names are duplicated strings, not references.** `CIRCUITS` and `BODY_GROUPS` use free-typed display names (e.g. `'KB Swing'`, `'Kettlebell Swing'`, `'KB Deadlift (3 sec lower)'`) rather than `EXERCISES` ids. Renaming an exercise requires a manual search across all three data structures.
- **Demo videos load lazily.** `renderExercises()` emits `<video data-src=...>` with no `src`; `toggleGif()` sets `src` on first open. Don't add `src` directly in the template or all 21 videos download on page load.
- **`404.html` duplicates minimal styles on purpose** — it must be standalone since GitHub Pages serves it for any bad URL.

---

## Tabs (Current)

| Tab | Panel ID | Content |
|---|---|---|
| Exercises by Muscle | `panel-exercises` | Exercise cards filterable by muscle group |
| Workout Circuits | `panel-circuits` | 3-level × 3-day × 3-option structured circuits |
| Body Group Workouts | `panel-bodygroups` | Top 4 ranked exercises per muscle group |
| Tips & Strategies | `panel-tips` | Beginner guide — weight selection, progressions, safety, mistakes, warm-up |
