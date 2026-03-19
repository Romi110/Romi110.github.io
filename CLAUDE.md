# CLAUDE.md — Romesh's Website

## Project Overview

A static multi-page personal website hosted on GitHub Pages. No build tools, no frameworks, no dependencies beyond Google Fonts. Each page is a self-contained HTML file with embedded CSS and JS.

**Stack:** Pure HTML + embedded CSS + embedded JavaScript
**Shared assets:** `assets/` — images, GIFs, and the shared `themes.css`

---

## File Structure

```
Romi110.github.io/
├── index.html          # Landing page (Romesh's Website)
├── kettlebell.html     # Kettlebell Guide app
└── assets/
    ├── themes.css          # Shared color palettes (all themes live here)
    ├── gifs/               # Exercise demo GIFs (21 total)
    ├── tips assests/       # Form tip images (15 images)
    └── completeKBgifs/     # Full organised gif library
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

All palettes live in `assets/themes.css`. Each page sets `data-theme` on `<html>` to pick its palette. Pages with a light/dark toggle switch between two named themes.

| Theme | Used by | Character |
|---|---|---|
| `home` | `index.html` | Pure black, minimal, no accent |
| `kb-light` | `kettlebell.html` (default) | White bg, warm orange accent |
| `kb-dark` | `kettlebell.html` (toggled) | Dark warm bg, orange accent |

**Adding a new page theme:** add a `[data-theme="mytheme"]` block to `assets/themes.css` and set `data-theme="mytheme"` on the page's `<html>` element.

### Core variables (required in every theme)

| Variable | Purpose |
|---|---|
| `--ink` | Primary text color |
| `--on-ink` | Text color FOR USE ON an `--ink`-colored background |
| `--muted` | Secondary/decorative text (≥ 4:1 contrast on `--bg`) |
| `--bg`, `--bg2` | Page and section backgrounds |
| `--border` | Borders and dividers |
| `--radius` | Base border-radius (12px) |

### Kettlebell-specific variables

| Variable | Purpose |
|---|---|
| `--accent` | Orange (#D85A30) — primary accent |
| `--accent2` | Green (#1D9E75) |
| `--accent3` | Blue (#378ADD) |
| `--gold` | Gold (#BA7517) |
| `--opt-a-*` / `--opt-b-*` / `--opt-c-*` | Option card colors (A=orange, B=blue, C=green) |
| `--grp-color`, `--grp-header`, `--grp-bg` | Set per `.grp-{id}` class on rank cards |

Kettlebell theme preference persisted in `localStorage` key `kb-theme`. Toggle with `toggleTheme()`.

### Contrast rules — follow when adding new themes or buttons

1. **`--ink` is a text color, not a background.** If you use `--ink` as a background (e.g. active/selected button), pair it with `--on-ink` as the text color — never hardcode `#fff` or `#000`. `--ink` flips between dark and light across themes; `--on-ink` always provides safe contrast against it.

2. **`--muted` must achieve ≥ 4:1 contrast against `--bg`** (WCAG AA). Use it only for secondary/decorative text.

3. **Hero / banner backgrounds: use a fixed dark color, not `--ink`.** `--ink` flips between themes — a hardcoded value (e.g. `#1a1a1a`) is reliably dark in all contexts.

4. **Never hardcode `#fff` or `#000` as text on a theme variable background.** Always use the paired variable.

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
