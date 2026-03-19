# CLAUDE.md — Kettlebell Guide

## Project Overview

A self-contained single-page kettlebell fitness application. No build tools, no frameworks, no dependencies beyond Google Fonts. Open `index.html` directly in a browser.

**Stack:** Pure HTML + embedded CSS + embedded JavaScript
**Assets:** `gifs/` — 21 exercise demonstration GIFs (~65 MB)

---

## File Structure

```
Romi110.github.io/
├── index.html      # Entire application (CSS + JS embedded)
└── gifs/           # Exercise demo GIFs (one per exercise)
    ├── deadlift.gif
    ├── swing.gif
    └── ... (21 total)
```

---

## Architecture

### Single-File App

All CSS lives in a `<style>` block in `<head>`. All JavaScript lives in a `<script>` block at the end of `<body>`. No separate files, no build step.

### Tab / Panel System

Four top-level tabs each map to a hidden panel:

```
Tab button  →  showPanel(id, btn)  →  #panel-{id}.active
```

Only one `.panel` is visible at a time — toggled via the `.active` CSS class (`display: none` → `display: block`).

---

## Key Data Structures

### `EXERCISES` (array, 22 objects)

```js
{
  id:     'swing',
  name:   'Kettlebell Swing',
  muscle: 'hinge',        // hinge | squat | push | pull | core | total
  score:  10,             // 1–10 effectiveness rating
  tag:    'Essential',    // Form Builder | Essential | Technical | Advanced | Mastery Move | ...
  gif:    'gifs/swing.gif',
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

Each group has 4 ranked exercises with beginner / intermediate / advanced set-rep prescriptions.

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

Theme preference persisted in `localStorage` key `theme`. Toggle with `toggleTheme()`.

---

## Key Functions

| Function | Purpose |
|---|---|
| `showPanel(id, btn)` | Switch active tab/panel |
| `renderExercises()` | Render exercise grid filtered by `currentMuscle` |
| `showMuscle(m, btn)` | Set muscle filter and re-render exercises |
| `renderCircuit()` | Render current level/day circuit |
| `showLevel(level, btn)` | Switch circuit difficulty |
| `selectDay(i)` | Switch circuit day |
| `renderBodyGroups()` | Render ranked exercises for `currentGroup` |
| `showGroup(id, btn)` | Switch active body group |
| `toggleGif(btn)` | Expand/collapse exercise GIF demo |
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
   <button class="tab" onclick="showPanel('mytab', this)">Label</button>
   ```
2. Add a panel div anywhere inside `.wrap`:
   ```html
   <div class="panel" id="panel-mytab">...</div>
   ```
3. If the panel needs dynamic rendering, add a branch in `showPanel()`:
   ```js
   if (id === 'mytab') renderMyTab();
   ```

---

## How to Add a New Exercise

Add an object to the `EXERCISES` array with all required fields. It will automatically appear in the correct muscle group filter. If no GIF exists, set `gif: null` — the demo button will be hidden.

---

## Tabs (Current)

| Tab | Panel ID | Content |
|---|---|---|
| Exercises by Muscle | `panel-exercises` | Exercise cards filterable by muscle group |
| Workout Circuits | `panel-circuits` | 3-level × 3-day × 3-option structured circuits |
| Body Group Workouts | `panel-bodygroups` | Top 4 ranked exercises per muscle group |
| Tips & Strategies | `panel-tips` | Beginner guide — weight selection, progressions, safety, mistakes, warm-up |
