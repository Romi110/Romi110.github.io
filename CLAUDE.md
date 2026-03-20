# CLAUDE.md — Romesh's Website

## Project Overview

A static multi-page personal website built with **Astro** and hosted on GitHub Pages via GitHub Actions. Supabase is wired up for future interactivity (leaderboards, etc.).

**Stack:** Astro (static output) · Supabase client skeleton · Google Fonts
**Deploy:** GitHub Actions → `actions/deploy-pages` on push to `master`

---

## File Structure

```
Romi110.github.io/
├── src/
│   ├── layouts/
│   │   └── Base.astro          # Shared HTML shell (fonts, themes.css, base.css, nav slot)
│   ├── pages/
│   │   ├── index.astro         # Landing page (home theme)
│   │   └── kettlebell.astro    # Kettlebell Guide (kb-light / kb-dark themes)
│   ├── components/
│   │   ├── Nav.astro           # Sticky back-link nav bar (used on inner pages)
│   │   ├── ExerciseCard.astro  # Pre-rendered exercise card (build time)
│   │   ├── TipCard.astro       # Tip card with optional GIF toggle
│   │   └── MistakeItem.astro   # Mistake / exercise-tip item with accent variant
│   ├── data/
│   │   ├── exercises.js        # EXERCISES array (22 items) + helper fns
│   │   ├── circuits.js         # CIRCUITS object (3 levels × 3 days × 3 options)
│   │   ├── bodyGroups.js       # BODY_GROUPS array (6 groups × 4 exercises)
│   │   └── freeExercises.js    # FREE_EXERCISE_GROUPS array (6 categories, 50+ GIF exercises)
│   └── lib/
│       └── supabase.js         # Supabase client (env vars via PUBLIC_ prefix)
├── public/
│   └── assets/
│       ├── themes.css          # Color palettes (data-theme selectors)
│       ├── base.css            # Shared utilities: reset, .wrap, .panel, .tabs
│       ├── kettlebell.css      # Kettlebell-page-specific styles
│       └── gifs/ tips/         # Static media assets
├── .github/workflows/
│   └── deploy.yml              # Build → upload artifact → deploy to Pages
├── astro.config.mjs
└── package.json
```

---

## Architecture

### Astro Static Build

`output: 'static'` — Astro pre-renders all pages at build time. No server runtime.

### Layout System

`Base.astro` loads on every page. It:
- Sets `data-theme` on `<html>`
- Links `themes.css` and `base.css`
- Provides a `nav` slot (before body content) and `head` slot (for page-specific CSS/meta)

**To add a new page:**
1. Create `src/pages/mypage.astro`
2. Import `Base` and optionally `Nav`
3. Pass `<link slot="head" rel="stylesheet" href="/assets/mypage.css">` for page-specific CSS
4. Add the theme to `public/assets/themes.css`

### Tab / Panel System

Four top-level tabs each map to a hidden panel:

```
Tab button  →  showPanel(id, btn)  →  #panel-{id}.active
```

`.panel { display: none }` / `.panel.active { display: block }` — defined in `base.css`.

### Passing Data to Browser Scripts

**Do not use `define:vars`** — it wraps the script in an IIFE, breaking `onclick=` handlers.

Instead, embed data as a hidden element and read it in a plain `<script is:inline>`:

```astro
<div id="page-data" data-json={JSON.stringify(myData)} hidden></div>
<script is:inline>
const myData = JSON.parse(document.getElementById('page-data').dataset.json);
// functions defined here are global — safe to use from onclick=""
</script>
```

### Pre-rendered vs. JS-rendered Content

| Content | Strategy |
|---|---|
| Exercise cards | Pre-rendered at build time via `ExerciseCard.astro`; filtered client-side via `card.dataset.muscle` |
| Workout circuits | JS-rendered into `#circuit-content` from `CIRCUITS` data |
| Body group rank cards | JS-rendered into `#group-content` from `BODY_GROUPS` data |
| Tips panel | Static Astro components (`TipCard`, `MistakeItem`) |
| Free exercises viewer | JS-rendered into `#free-viewer` from `FREE_EXERCISE_GROUPS` data |

---

## CSS Architecture

Three layers, loaded in order:

| File | Purpose |
|---|---|
| `themes.css` | Color palette variables per `data-theme` |
| `base.css` | Reset, `.wrap`, `.panel`, `.tabs` — shared across all pages |
| `{page}.css` | Page-specific styles (e.g. `kettlebell.css`) |

**Adding styles for a new page:** create `public/assets/{page}.css` and link it via `<link slot="head">` in the page's `<Base>` call. Never put page-specific styles in `base.css`.

---

## Key Data Structures

### `EXERCISES` (array, 22 objects) — `src/data/exercises.js`

```js
{
  id:     'swing',
  name:   'Kettlebell Swing',
  muscle: 'hinge',        // hinge | squat | push | pull | core | total
  score:  10,             // 1–10 effectiveness rating
  tag:    'Essential',    // Form Builder | Essential | Technical | Advanced | Mastery Move | ...
  gif:    '/assets/gifs/swing.gif',  // null if no GIF
  desc:   '...',
  form:   '...',
}
```

Helper functions exported alongside: `getScoreColor(score)`, `getMuscleAccent(muscle)`, `getTagClass(tag)`.

### `CIRCUITS` (object keyed by level) — `src/data/circuits.js`

```js
CIRCUITS.beginner.days[0].options[0]
// → { label, desc, muscles[], exercises[{ n, d }] }
// day also has: { label, icon, title, meta, tip }
```

Three levels: `beginner`, `intermediate`, `advanced`. Three days per level. Three options per day (A / B / C).

### `BODY_GROUPS` (array, 6 objects) — `src/data/bodyGroups.js`

```js
{
  id: 'hinge', label: 'Glutes & Hamstrings', icon: '🍑', desc: '...',
  exercises: [{ name, tag, muscles[], why, beg, int, adv }]  // 4 exercises, ranked
}
```

### `FREE_EXERCISE_GROUPS` (array, 6 objects) — `src/data/freeExercises.js`

```js
{
  id: 'core', label: 'Core', folder: 'Core', icon: '🏋️',
  exercises: [{ file, name, muscles[], desc }]  // GIF filename relative to /assets/completeKBgifs/{folder}/
}
```

Six categories: `core`, `hip-hinge`, `knee-bend`, `pull`, `push`, `warmup`. GIFs live at `/assets/completeKBgifs/{folder}/{file}`.

---

## Theme System

All palettes live in `public/assets/themes.css`. Each page sets `data-theme` on `<html>` via `Base.astro`'s `theme` prop.

| Theme | Used by | Character |
|---|---|---|
| `home` | `index.astro` | Pure black, minimal, no accent |
| `kb-light` | `kettlebell.astro` (default) | White bg, warm orange accent |
| `kb-dark` | `kettlebell.astro` (toggled) | Dark warm bg, orange accent |

**Adding a new page theme:** add a `[data-theme="mytheme"]` block to `themes.css` and pass `theme="mytheme"` to `<Base>`.

### Core variables (required in every theme)

| Variable | Purpose |
|---|---|
| `--ink` | Primary text color |
| `--on-ink` | Text color FOR USE ON an `--ink`-colored background |
| `--muted` | Secondary/decorative text (≥ 4:1 contrast on `--bg`) |
| `--bg`, `--bg2` | Page and section backgrounds |
| `--border` | Borders and dividers |
| `--radius` | Base border-radius (12px) |

### Contrast rules — follow when adding new themes or buttons

1. **`--ink` is a text color, not a background.** If used as a background (e.g. active button), pair it with `--on-ink` — never hardcode `#fff` or `#000`.
2. **`--muted` must achieve ≥ 4:1 contrast against `--bg`** (WCAG AA).
3. **Hero / banner backgrounds: use a fixed dark color, not `--ink`.** `--ink` flips between themes.
4. **Never hardcode `#fff` or `#000` as text on a theme variable background.**

---

## Components

### `Nav.astro` (shared)

Sticky top bar with a back-link. Use on all inner pages (not the home page).

```astro
<Nav slot="nav" label="Home">
  <!-- optional right-side content via slot -->
  <button onclick="toggleTheme()">🌙</button>
</Nav>
```

Props: `label` (link text, default `'Home'`), `href` (link target, default `'/'`).

### `ExerciseCard.astro`

Pre-rendered at build time. Requires `exercise` prop (one `EXERCISES` object). Outputs `data-muscle` attribute for client-side CSS filtering.

### `TipCard.astro`

Props: `icon`, `title`, `imgSrc?`, `imgAlt?`. Body content via `<slot />`.

### `MistakeItem.astro`

Props: `label`, `imgSrc?`, `imgAlt?`, `accent` (boolean — `true` uses `--accent2` green, `false` uses `--accent` orange).

---

## Key Functions (kettlebell page inline script)

| Function | Purpose |
|---|---|
| `showPanel(id, btn)` | Switch active tab/panel |
| `showMuscle(m, btn)` | CSS show/hide pre-rendered exercise cards by `data-muscle` |
| `renderCircuit()` | JS-render current level/day circuit into `#circuit-content` |
| `showLevel(level, btn)` | Switch circuit difficulty |
| `selectDay(i)` | Switch circuit day |
| `renderBodyGroups()` | JS-render ranked exercises for `currentGroup` into `#group-content` |
| `showGroup(id, btn)` | Switch active body group |
| `toggleGif(btn)` | Expand/collapse GIF demo (`.open` class toggle) |
| `toggleTheme()` / `applyTheme(dark)` | Dark mode — persisted to `localStorage` key `kb-theme` |
| `renderFreeExercises()` | Render category nav + call `renderFreeViewer` for current group/index |
| `renderFreeViewer(grp)` | JS-render current exercise (GIF, muscles, desc, nav bar, dot nav) into `#free-viewer` |
| `showFreeGroup(id)` | Switch active free exercise category; resets index to 0 |
| `freeNav(dir)` | Step prev/next through exercises in current category (+1 / -1, wraps) |
| `freeGoTo(i)` | Jump directly to exercise at index `i` in current category |

---

## State Variables (kettlebell page)

```js
let currentLevel     = 'beginner';                  // Circuits panel difficulty
let currentDay       = 0;                           // Circuits panel day index
let currentGroup     = 'hinge';                     // Body Groups panel active group
let currentFreeGroup = FREE_EXERCISE_GROUPS[0].id;  // Free Exercises active category
let currentFreeIndex = 0;                           // Free Exercises active exercise index
```

---

## Styling Conventions

- **Typography:** Bebas Neue (display / numbers), DM Sans 300/400/500 (body)
- **Border radius:** `--radius` = 12px (cards), 8–10px (secondary elements)
- **Spacing:** 8px base unit
- **Transitions:** 0.2s hover states, 0.35s GIF reveal animation
- **Mobile breakpoints:** 680px (option grid), 600px (exercise grid / rank cards), 500px (hero / tabs)
- **Button group alignment:** All button rows (tabs, muscle filter, circuit level/day, group selector, category nav, dot nav) use `justify-content: center` so they wrap symmetrically on all screen sizes.

---

## How to Add a New Page

1. Create `src/pages/mypage.astro`
2. Import `Base` and `Nav`
3. Create `public/assets/mypage.css` for page-specific styles
4. Add theme to `themes.css` if needed
5. Pass the CSS and Nav via slots:
   ```astro
   <Base title="My Page" theme="mytheme">
     <link slot="head" rel="stylesheet" href="/assets/mypage.css">
     <Nav slot="nav" label="Home" />
     <!-- page content -->
   </Base>
   ```
6. For interactive data, use the hidden JSON element pattern (see Architecture section above)

## How to Add a New Exercise

Add an object to `EXERCISES` in `src/data/exercises.js`. It will automatically appear in the correct muscle group filter. Set `gif: null` if no GIF exists — the demo button will be hidden.

---

## Tabs (Kettlebell page, current)

| Tab | Panel ID | Content |
|---|---|---|
| Exercises by Muscle | `panel-exercises` | Pre-rendered exercise cards, filterable by muscle |
| Workout Circuits | `panel-circuits` | 3-level × 3-day × 3-option structured circuits |
| Body Group Workouts | `panel-bodygroups` | Top 4 ranked exercises per muscle group |
| Tips & Strategies | `panel-tips` | Beginner guide — form, weight selection, progressions, safety |
| Free Exercises | `panel-free` | GIF viewer — browse all exercises by category with dot-nav |

---

## Adding a Games Page (future)

1. Create `src/pages/games.astro` with `theme="games"` (add to `themes.css`)
2. Write game logic in `src/scripts/game.js` — use `import { supabase } from '../lib/supabase.js'` for leaderboard
3. Reference with a regular `<script src="../scripts/game.js">` (bundled by Vite/Astro — ES modules work, no IIFE issue)
4. Add leaderboard as `Leaderboard.astro` — server-renders scores on first load, script refreshes after submission
5. Add Supabase env vars (`PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`) to GitHub repo secrets
