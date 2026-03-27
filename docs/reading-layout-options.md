# Reading Page — Layout Options

---

## Option 1 — Uniform Cover Card Grid

### Concept
Every entry in the grid — series or standalone — is the exact same card shape and size. No exceptions. Series are treated as a single entry with visual cues that hint at multiple books. All detail lives in a modal, never inline.

### Visual
```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │
│ ░cover░ │  │ ░cover░ │  │ ░cover░ │  │ ░cover░ │
│ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │
│ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │  │ ░░░░░░░ │
│─────────│  │─────────│  │─────────│  │─────────│
│ Title   │  │ Series  │  │ Title   │  │ Title   │
│ Author  │  │ Author  │  │ Author  │  │ Author  │
│ ★★★★☆ 4/5│  │Series·7 │  │ ★★★★★ 5/5│  │  TBR   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
 standalone    series       standalone   standalone
```

### Series card treatment
- Same 2:3 cover aspect ratio as standalones
- No cover image: placeholder shows the series name + author in the styled gradient (same as standalone fallback)
- "Stack effect": 2 ghost cards offset 4px and 8px behind the main card, slightly lighter in color — implies a collection without breaking the grid
- Badge in top-right: `Series · 7 books`
- Progress indicator at bottom instead of stars: `6 / 7 read` with a thin gold fill bar

### On click — series modal
- Header: series name, author, genre, progress bar
- Body: scrollable list of each book with its individual status badge, star rating, and a short review if set
- Each book row is tappable to open a nested single-book detail (or just display inline)

### On click — standalone modal
- Header: cover + title + author + genre + status tag
- Body: star rating (large), review quote, date finished
- Series context line if applicable: "Book 3 of the Mistborn series"

### Grid layout
- 2 col at 500px → 3 col at 768px → 4 col at 1100px
- Cards are uniform height via `align-items: start` (no stretch distortion)
- Cover area fixed aspect-ratio so all covers align regardless of image dimensions

### Filtering
- Filter tabs: All / Read / In Progress / TBR
- Series status derived from books: all read = Read, any reading = In Progress, none started = TBR
- Filtering hides/shows cards, no layout reflow weirdness

### What changes from current
- Remove the `series-card` / `series-books` expandable row pattern entirely
- Series become a first-class card entry the same size as standalones
- Stack effect added as pure CSS (pseudo-elements or sibling divs)
- Modal gets a second layout variant: single book vs series book list

### Complexity: Low–Medium
Pure CSS + small JS changes. No new page structure needed. Mostly a refactor of the series card component and modal content.

---

## Option 3 — Shelf Layout

### Concept
Books are rendered as vertical spines on a wooden shelf — tall, thin cards displaying the title rotated 90°, colored by genre or series. Series books are grouped together on the shelf under a shared label. Clicking a spine "pulls" it out of the shelf and flips open a full detail card to the right (desktop) or below (mobile).

### Visual — Desktop
```
  Sun Eater                Red Rising        Standalones
  ┌──┐┌──┐┌──┐┌──┐┌──┐┌──┐  ┌──┐┌──┐┌──┐    ┌──┐  ┌──┐  ┌──┐
  │▓▓││▓▓││▓▓││▓▓││░░││░░│  │▓▓││▓▓││▓▓│    │▓▓│  │▓▓│  │░░│
  │  ││  ││  ││  ││  ││  │  │  ││  ││  │    │  │  │  │  │  │
  │  ││  ││  ││  ││  ││  │  │  ││  ││  │    │  │  │  │  │  │
  │①ᴿ││②ᴿ││③ᴿ││④ᴿ││⑤ᵀ││⑥ᵀ│  │①ᴿ││②ᴿ││③ᴿ│    │SW│  │PH│  │20│
  │  ││  ││  ││  ││  ││  │  │  ││  ││  │    │  │  │  │  │  │
  └──┘└──┘└──┘└──┘└──┘└──┘  └──┘└──┘└──┘    └──┘  └──┘  └──┘
  ══════════════════════════════════════════════════════════════ ← shelf
  ▓ = read  ░ = TBR    ᴿ = read  ᵀ = TBR
```

### Visual — on spine click (desktop)
```
  ┌──┐ ┌──┐ ┌──┐ ←pulled→ ┌──────────────────────────────┐
  │  │ │  │ │▲▲│           │  Empire of Silence           │
  │  │ │  │ │  │           │  Christopher Ruocchio        │
  │  │ │  │ │  │           │  Book 1 of Sun Eater · 2018  │
  └──┘ └──┘ └──┘           │                              │
  ══════════════            │  ★★★★★  5/5                  │
                            │                              │
                            │  "Review text here..."       │
                            └──────────────────────────────┘
```

### Spine card design
- Fixed dimensions: ~60px wide × 220px tall
- Background color: per-series color (each series gets a unique dark color from a palette) or per-genre for standalones
- Title: rotated 90° (`writing-mode: vertical-rl`), Bebas Neue, truncated if too long
- Book number (for series): small numeral at the bottom of the spine
- Status indicator: full opacity = read, 40% opacity = TBR, subtle glow = reading
- Hover: spine lifts slightly (`translateY(-8px)`) with shadow

### Series grouping on shelf
- Series books are adjacent with no gap between them — visually appear as one thick book block
- Series label appears above the group on a small tab/tag
- Slight shared background behind the group to visually bind them

### Detail panel
- **Desktop (≥768px):** slides in as a fixed right panel (~340px wide), shelf remains visible
- **Mobile (<768px):** expands below the tapped spine as an accordion card, full width
- Content: cover image (if available) or large styled placeholder, title, author, rating, review, series context, genre tag, date read
- Close: click outside, click X, or press Escape

### Shelf aesthetics
- Horizontal shelf line: warm wood tone (`#8b6914` or similar), subtle shadow below
- Shelf background: slightly recessed feel via gradient or inset shadow
- Between series groups: a small gap (~1.5rem) acts as a divider
- Standalone books can have a dedicated "Standalone" shelf section or sit at the end of the main shelf

### Filtering
- Filter tabs above the shelf: All / Read / TBR / By Genre
- Filtered-out spines fade to near-invisible (opacity 0.1) rather than disappearing — maintains the shelf silhouette
- Active filter highlights matching spines with a gold border

### Responsive behavior
| Breakpoint | Behavior |
|---|---|
| < 500px | Spines slightly narrower (52px), shelf scrolls horizontally within each group |
| 500–767px | Same horizontal scroll, detail opens below as full-width card |
| ≥ 768px | Shelf wraps to multiple rows if needed, detail panel slides in from right |

### Animation
- Spine hover: `translateY(-8px)` lift + box shadow grow (0.15s)
- Spine select: lifts to `translateY(-16px)`, detail panel slides in (0.25s ease-out)
- Detail close: panel slides out, spine returns to shelf
- Filter: non-matching spines fade out (0.2s), not removed from DOM

### What changes from current
- `reading-grid` replaced with `.shelf-container` holding `.shelf-row` sections
- Book cards replaced with `.spine` elements
- New `.detail-panel` component (sticky right on desktop, inline on mobile)
- `filterBooks()` replaced with opacity-based filter that preserves shelf layout
- `groupBooks()` in `books.js` already handles the grouping — just needs a different render path

### Complexity: High
New layout paradigm, new interaction model, new responsive pattern. CSS `writing-mode` for vertical text, sticky panel positioning, accordion behavior for mobile. Significantly more CSS and JS than Option 1 but produces something that looks like no other personal site page.

---

## Comparison

| | Option 1 | Option 3 |
|---|---|---|
| Development effort | Low–Medium | High |
| Uniqueness | Medium — clean but familiar | Very high — shelf is rare |
| Mobile experience | Excellent — standard grid | Good — horizontal scroll + accordion |
| Scalability (50+ books) | Excellent — grid handles it well | Medium — shelf gets long, needs sections |
| Adding cover images later | Drop-in swap | Same |
| Supabase migration later | Zero changes to layout | Zero changes to layout |
| Feels like kettlebell page | Slightly (card grid) | Not at all |

---

## Recommendation

- **Ship something soon, iterate later:** Option 1
- **Make a statement, willing to invest the time:** Option 3
- **Mix:** Option 1 grid for TBR, Option 3 shelf for completed reads — two sections, two feels
