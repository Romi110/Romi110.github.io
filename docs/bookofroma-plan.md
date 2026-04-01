# Book of Roma — Page Plan

## Overview

A contemplative, book-like page presenting *Roma: A personal book of tenets* — 7 philosophical tenets drawn from Stoicism, Buddhism, Taoism, Sufism, Existentialism, and Confucianism, with parables and a curated reading list.

**Page:** `src/pages/roma.astro`
**CSS:** `src/styles/roma.css`
**Theme:** `roma` / `roma-dark` (added to `themes.css`)
**Nav link:** Add "Roma" to home page or nav

---

## Document Structure (source material)

| Section | Content |
|---|---|
| The Seven Lines | 7 one-line tenets — a morning reading |
| Tenet 1–7 | Each has: Statement · 3 Quotes · Explanation · Real Life · What It Is Not · Remember bullets |
| Stories | 11 parables (see full list below) — newer additions include explicit `Tenets: X, Y` tags |
| Final Word | Closing reflection |
| Sources & Further Reading | 8 traditions, 16+ books with annotations |

---

## Page Layout

### Hero

```
┌──────────────────────────────────────────┐
│  ROMA                                    │
│  A personal book of tenets               │
│                                          │
│  [ dark mode toggle ]                    │
└──────────────────────────────────────────┘
```

- Large display title: **ROMA** (Bebas Neue, oversized)
- Subtitle: *A personal book of tenets* (DM Sans italic, muted)
- Thin horizontal rule below

---

### The Seven Lines Block

Displayed immediately below the hero — always visible, not hidden in a tab.

```
┌──────────────────────────────────────────┐
│  The Seven Lines                         │
│  Read these once in the morning.         │
│  ─────────────────────────────           │
│  1. What disturbs you is never...        │
│  2. It is not the losing...              │
│  3. The wall between you...              │
│  ...                                     │
└──────────────────────────────────────────┘
```

- Parchment card with a subtle left border accent
- Each line numbered, generous line spacing
- Small italic note: *"Read these once in the morning. That is enough."*
- Clicking a line jumps to its tenet section (anchor link)

---

### Main Nav Tabs

Four tabs below the Seven Lines block:

```
[ Tenets ]  [ Stories ]  [ Final Word ]  [ Sources ]
```

Switches the active panel below (same `showPanel` pattern from other pages).

---

### Panel: Tenets

Two-column layout on desktop, single column on mobile.

**Left sidebar** — tenet navigator:
```
┌───────────────┐
│ 1 The Mind    │  ← active
│ 2 The Grip    │
│ 3 The Wall    │
│ 4 The Present |
│ 5 The Action  │
│ 6 The Making  │
│ 7 The Humility│
└───────────────┘
```

- Short title for each tenet
- Clicking highlights that tenet and renders its content on the right
- Active tenet highlighted with accent color left-border

**Right content area** — tenet detail:

```
┌────────────────────────────────────────────┐
│  Tenet 1                                   │
│  THE MIND MAKES THE WORLD                  │
│                                            │
│  "What disturbs you is never the           │
│   event — it is what you make of it."      │
│                                            │
│  ── Quotes ─────────────────────           │
│  [quote 1]  [quote 2]  [quote 3]           │
│                                            │
│  ── What This Actually Means ──────        │
│  [body text]                               │
│                                            │
│  ── What It Looks Like ────────────        │
│  ▸ You get cut off in traffic...           │
│  ▸ You wake up tired...                    │
│  ▸ Someone doesn't reply...                │
│  ▸ You lose a job...                       │
│                                            │
│  ── What It Is Not ────────────────        │
│  [body text]                               │
│                                            │
│  ┌─────────────────────────────────┐       │
│  │ Remember                        │       │
│  │ • The event and your inter...   │       │
│  │ • Suffering almost always...    │       │
│  └─────────────────────────────────┘       │
└────────────────────────────────────────────┘
```

**Sub-section treatments:**
- **Statement** — large centered pull-quote with decorative quote marks, accent color, italic
- **Quotes** — 4 side-by-side quote cards (stack on mobile), each with quote text + attribution
- **What This Actually Means** — body text, full width
- **What It Looks Like in Real Life** — each bolded scenario becomes a callout strip with a left accent bar
- **What It Is Not** — body text, slightly muted styling
- **Remember** — a distinct parchment/inset card with bullet points, subtle background

---

### Panel: Stories

**Full story list (11 total):**

| Story | Tenets |
|---|---|
| The Two Brothers | 1, 4 |
| The Carpenter's Tools | 2, 6 |
| The Bridge | 3, 4 |
| The Surgeon's Question | 1, 7 |
| The Apology | 4, 5, 7 |
| The Translator | 5, 6, 7 |
| The Fire | 2, 3, 4 |
| The Long Grudge | 1, 4, 7 |
| The Gardener | 3, 5, 6 |
| The River | 1, 4 |
| The Two Scientists | 5, 6, 7 |

> Note: The original 4 stories (Two Brothers through Surgeon's Question) don't have explicit tenet tags in the source — the tenet mappings above are inferred from content and should be added when building the data structure.

**Layout:** 3-column card grid on desktop, 2-column on tablet, 1-column on mobile.

```
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ The Two       │ │ The           │ │ The Bridge    │
│ Brothers      │ │ Carpenter's   │ │               │
│               │ │ Tools         │ │ Tenets: 3, 4  │
│ Tenets: 1, 4  │ │ Tenets: 2, 6  │ │               │
│ [excerpt...]  │ │ [excerpt...]  │ │ [excerpt...]  │
│ [ Read → ]    │ │ [ Read → ]    │ │ [ Read → ]    │
└───────────────┘ └───────────────┘ └───────────────┘
...
```

**Tenet filter bar** above the grid — filter stories to only those relevant to a given tenet:

```
Filter by tenet:
[ All ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ 7 ]
```

- Active filter highlights pill button; unmatched cards fade/hide
- "All" resets to show all 11
- Filter state tracked in a `currentStoryFilter` variable

**Card behavior:**
- Each card shows: story title + tenet number chips + 1–2 sentence teaser
- "Read →" expands the card inline (full story replaces card content, collapse button appears)
- At the bottom of expanded story: italicized closing line in distinct muted-italic style with top rule
- No explicit "Lesson:" label — just the closing italic line as written
- Only one story expanded at a time (expanding another collapses the current)

---

### Panel: Final Word

Simple centered text treatment.

```
┌────────────────────────────────────────────┐
│                                            │
│  "None of this is new. Everything in       │
│   this book was observed first by          │
│   someone who had already run out          │
│   of easier answers..."                    │
│                                            │
│  [full text, centered, generous margins]   │
│                                            │
└────────────────────────────────────────────┘
```

- Max-width constrained prose, centered on page
- Pull-quote treatment for first sentence
- No sub-sections — just the text

---

### Panel: Sources

Accordion by tradition. Each tradition is a collapsible section.

```
▼ Stoicism
   Marcus Aurelius — Meditations
   Relevant to: Tenets 1, 4, 5, 7
   [annotation text]

   Epictetus — Enchiridion
   ...

▶ Buddhism
▶ Taoism
▶ Hindu Philosophy
▶ Sufism
▶ Existentialism
▶ Confucianism
▶ Modern & Western
```

- Each source entry: **Title** · Author · Date · Annotation text · "Tenets: 1, 4, 5, 7" badge chips
- Tradition headers act as toggle buttons (accordion, one open at a time or multi-open)
- Tradition icon or small label (e.g. "Stoicism", "Buddhism") rendered with muted badge

---

## Theme: `roma` / `roma-dark`

### Light (`roma`)
| Variable | Value | Notes |
|---|---|---|
| `--bg` | `#f5f0e8` | Warm parchment |
| `--bg2` | `#ede7d9` | Slightly deeper parchment |
| `--ink` | `#1c1712` | Near-black warm brown |
| `--on-ink` | `#f5f0e8` | Parchment on dark |
| `--muted` | `#6b5e4e` | Warm mid-brown |
| `--accent` | `#8b4513` | Saddle brown / terra cotta |
| `--accent2` | `#4a6741` | Muted sage green |
| `--border` | `#d4c9b5` | Warm light border |
| `--radius` | `10px` | |

### Dark (`roma-dark`)
| Variable | Value | Notes |
|---|---|---|
| `--bg` | `#1a1610` | Deep warm black |
| `--bg2` | `#23201a` | Slightly lighter |
| `--ink` | `#e8dece` | Warm off-white cream |
| `--on-ink` | `#1a1610` | Dark on cream |
| `--muted` | `#9e8f7a` | Warm mid-tone |
| `--accent` | `#c47a45` | Warm amber-orange |
| `--accent2` | `#7aad6e` | Soft sage |
| `--border` | `#3a342c` | Dark warm border |

---

## Typography

- **Display / Tenet number** — Bebas Neue, 80–120px
- **Tenet title / Section heading** — Bebas Neue, 28–40px, letter-spaced
- **Pull quotes / Statement** — DM Sans 300 italic, 20–24px, centered
- **Body text** — DM Sans 400, 16–17px, line-height 1.75
- **Quote attributions** — DM Sans 300, 13px, muted, small-caps
- **Remember bullets** — DM Sans 500, 15px
- **Story card titles** — Bebas Neue, 22px

---

## Data Strategy

All tenet and story data will be inline in the frontmatter (not a separate data file — it's one-page content). The tenet detail panel is JS-rendered from an embedded JSON element (same pattern as bookshelf):

```astro
<div id="roma-data" data-json={JSON.stringify(romaData)} hidden></div>
<script is:inline>
const romaData = JSON.parse(document.getElementById('roma-data').dataset.json);
// renderTenet(id), renderStory(id) — global functions
</script>
```

The `romaData` object:
```js
{
  tenets: [
    {
      id: 'mind',
      number: 1,
      title: 'The Mind Makes the World',
      statement: 'What disturbs you is never the event...',
      quotes: [{ text, author, source, year }],
      meaning: '...',    // paragraph(s)
      realLife: [{ bold, body }],  // 4 items
      notThis: '...',
      remember: ['...', '...']     // 5 bullets
    },
    ...
  ],
  stories: [
    { id: 'two-brothers', title: 'The Two Brothers', excerpt: '...', body: '...', moral: '...' },
    ...
  ]
}
```

Sources section can be pre-rendered at build time (static Astro markup with accordion behavior via JS class toggle) — no need to embed in JSON.

---

## Key JS Functions (inline script)

| Function | Purpose |
|---|---|
| `showPanel(id, btn)` | Switch Tenets / Stories / Final Word / Sources tabs |
| `showTenet(id)` | Render tenet detail into right panel; highlight sidebar item |
| `renderTenet(tenet)` | Build HTML for a full tenet (statement, quotes, sections, remember) |
| `jumpToTenet(number)` | Switch to Tenets panel and auto-select that tenet (called from Seven Lines clicks) |
| `filterStories(tenet)` | Show/hide story cards by tenet number; `'all'` resets |
| `expandStory(id)` | Expand story card inline; collapses any currently open card |
| `collapseStory(id)` | Collapse an expanded story card back to preview |
| `checkRomaPassword()` | Read input value, compare to `'roma'`, show/hide gate overlay |
| `toggleAccordion(id)` | Open/close a source tradition section |
| `toggleRomaTheme()` / `applyRomaTheme(dark)` | Dark mode, persisted to `localStorage` key `roma-theme` |

---

## Mobile Considerations

- Tenet sidebar collapses into a horizontal scrolling pill-nav above the content area on mobile (< 700px)
- Story grid: 2 cols → 1 col at 560px
- Quote cards: 3 across → 1 across at 600px
- Seven Lines block: full width, larger font
- Tab labels may abbreviate or wrap at 480px

---

## Implementation Order

1. Add `roma` / `roma-dark` theme variables to `themes.css`
2. Create `src/styles/roma.css`
3. Build `src/pages/roma.astro`:
   - Hero + Seven Lines (static, pre-rendered)
   - Four tab panels (static shell)
   - Embed `romaData` JSON
   - Inline script with all JS functions
4. Pre-render Sources section as static Astro markup
5. Style and test light/dark toggle
6. Add link to Roma page from home page

---

## Decisions

1. **Seven Lines clicks** — clicking a line switches to the Tenets panel and auto-selects that tenet (calls `showPanel('tenets')` then `showTenet(id)`).
2. **Story detail** — inline card expand. The card grows in place; "Read →" becomes "Close ✕". Only one open at a time.
3. **Home page access** — Roma is linked from the home page nav grid but behind a password gate (password: `"roma"`).

---

## Password Gate

The Roma page is publicly deployed but gated with a client-side password prompt. This is a soft gate (obscurity, not security) — appropriate for a personal page you want to share selectively.

**Behavior:**
- On page load, check `localStorage` key `roma-unlocked`. If `'true'`, skip the gate.
- Otherwise, a full-screen overlay covers all content with a centered prompt:

```
┌──────────────────────────────────┐
│                                  │
│         R O M A                  │
│                                  │
│   [ password input ]             │
│   [ Enter ]                      │
│                                  │
│   (wrong password: subtle shake) │
│                                  │
└──────────────────────────────────┘
```

- Correct password (`"roma"`) — fade out overlay, set `localStorage['roma-unlocked'] = 'true'`
- Wrong password — input shakes (CSS `@keyframes shake`), clears after animation
- Enter key submits the form
- Overlay uses `--bg` / `--ink` theming, same font stack as the page

**Home page link code** (in `index.astro`):

```astro
<a href="/roma" class="nav-card">Roma</a>
```

No special handling needed on the home page — the gate lives entirely within `roma.astro`.

**Gate JS (inline, runs before page content is visible):**

```js
function checkRomaPassword() {
  const input = document.getElementById('roma-password-input');
  if (input.value === 'roma') {
    localStorage.setItem('roma-unlocked', 'true');
    document.getElementById('roma-gate').style.display = 'none';
  } else {
    input.classList.remove('shake');
    void input.offsetWidth; // reflow to restart animation
    input.classList.add('shake');
    input.value = '';
  }
}

// On load
if (localStorage.getItem('roma-unlocked') === 'true') {
  document.getElementById('roma-gate').style.display = 'none';
}
```

> The gate is purely cosmetic — the page HTML is still delivered to the browser. Do not use this for anything sensitive.
