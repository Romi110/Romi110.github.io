# Reading Page — Plan

## Vision

A visually rich personal reading page with three sections:
- **Read** — books you've finished, with cover, rating, and your short review
- **Currently Reading** — what's open on your nightstand right now
- **TBR (To Be Read)** — your backlog; visitors can upvote entries to tell you what to pick next

Optional community layer: visitors can leave comments on individual book cards.

---

## Page Layout

```
┌─────────────────────────────────────┐
│  HERO: "Romesh's Bookshelf"         │
│  tagline + stat summary (N read)    │
└─────────────────────────────────────┘

[ All ]  [ Reading ]  [ Read ]  [ TBR ]   ← filter tabs

┌───────┐ ┌───────┐ ┌───────┐           ← book card grid
│ cover │ │ cover │ │ cover │
│ title │ │ title │ │ title │
│ ★★★★☆ │ │ tbr 🔼│ │ ★★★★★ │
└───────┘ └───────┘ └───────┘

Click a card → book detail drawer/modal
  - Full review text
  - Comment thread (visitors)
  - TBR: vote button
```

---

## Data Model

### Option A — Static (no backend)

Store all book data in `src/data/books.js`. Add a book = edit the file + commit + deploy.

**Pros:** zero infra, instant load
**Cons:** every update requires a code deploy; no live comments or votes

### Option B — Supabase (recommended)

Add books via Supabase Table Editor or a small admin form — no code deploy needed. Comments and TBR votes are stored live.

**Recommended if you want:**
- Adding a book without touching code
- Visitor comments or TBR voting
- Flawless data updates (edit a review → live within seconds)

---

## Recommended Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro (existing) | Already set up, static shell |
| Data store | Supabase (new fresh project) | Real-time, auth, RLS — same pattern as planned book club |
| Auth | Supabase Auth (email/password) | You need admin access to add/edit books |
| Comments | Supabase `book_comments` table | Optional; needs auth or anonymous |
| TBR Votes | Supabase `tbr_votes` table | Anonymous by IP or authenticated |
| Images | Stored URL (Open Library / your own upload) | Book covers via Open Library Covers API — free |
| Fonts | Bebas Neue + DM Sans (existing) | Already loaded |
| Theme | New `reading` theme in `themes.css` | Warm library tones (same palette family as book club) |

---

## Supabase Tables

### `books`
```sql
id          uuid primary key
title       text not null
author      text not null
cover_url   text                 -- Open Library or custom image URL
status      text                 -- 'read' | 'reading' | 'tbr'
rating      int2                 -- 1–5, null if not read yet
review      text                 -- your short review, null if not read
genre       text                 -- optional tag
date_read   date                 -- null if not read
created_at  timestamptz default now()
sort_order  int2                 -- manual ordering control
```

### `tbr_votes`
```sql
id          uuid primary key
book_id     uuid references books(id) on delete cascade
voter_fp    text                 -- browser fingerprint or anon ID (no auth needed)
created_at  timestamptz default now()
-- unique(book_id, voter_fp) to prevent double votes
```

### `book_comments`
```sql
id          uuid primary key
book_id     uuid references books(id) on delete cascade
username    text not null        -- entered at comment time (no full auth required)
body        text not null
created_at  timestamptz default now()
```
*No auth required for comments — just a username field. Add RLS + rate limiting later if spam becomes an issue.*

---

## RLS Policies

| Table | Public Read | Insert | Update | Delete |
|---|---|---|---|---|
| `books` | ✅ | admin only | admin only | admin only |
| `tbr_votes` | ✅ (aggregate) | anyone (1 per fingerprint) | ❌ | ❌ |
| `book_comments` | ✅ | anyone | ❌ | admin only |

Admin = you, identified by `service_role` key used only server-side or manually in the dashboard.

For this static site (no server), admin operations happen directly in the Supabase Table Editor. The page is read-only for visitors except votes + comments.

---

## Book Cover Strategy

Use the **Open Library Covers API** — free, no key needed:

```
https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg
```

When adding a book in Supabase, paste the ISBN and generate the URL. Fallback to a generated placeholder (CSS gradient + initials) if no cover found.

---

## "Flawless Updating" Workflow

1. Finish a book → open Supabase Table Editor
2. Find the row (or insert new row) → set `status = 'read'`, `rating`, `review`, `date_read`
3. Save → change is live on the page within seconds (client fetches on load)

No git commits, no deploys, no code changes required for content updates.

---

## Phases

### Phase 1 — Schema & Data
- [ ] Create fresh Supabase project (or reuse existing)
- [ ] Create `books`, `tbr_votes`, `book_comments` tables
- [ ] Set RLS policies
- [ ] Seed initial read books + TBR list

### Phase 2 — Page Shell
- [ ] Create `src/pages/reading.astro`
- [ ] Create `src/styles/reading.css`
- [ ] Add `reading` theme to `themes.css`
- [ ] Wire Supabase client (bundled script, same pattern as existing pages)

### Phase 3 — Book Grid
- [ ] Fetch and render all books with filter tabs (All / Reading / Read / TBR)
- [ ] Book card: cover image, title, author, star rating (read) or vote count (TBR)
- [ ] Responsive grid: 2-col 500px → 3-col 768px → 4-col 1100px

### Phase 4 — Book Detail
- [ ] Click card → modal or slide-in drawer
- [ ] Read books: full review text, rating, date finished
- [ ] TBR: vote button (1 vote per browser, stored by fingerprint)

### Phase 5 — Comments (Optional)
- [ ] Comment list per book in detail view
- [ ] Name + comment form → inserts to `book_comments`
- [ ] Optimistic render

### Phase 6 — Polish
- [ ] Loading states, error handling
- [ ] Empty states ("No books yet", "No TBR entries")
- [ ] Add reading page link to home page (`index.astro`)

---

## Theme Direction

Same warm library tones as the shelved book club design:

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#f5efe0` | Parchment page background |
| `--bg2` | `#ede3cf` | Card / section backgrounds |
| `--ink` | `#1a3a2a` | Deep green headings |
| `--accent` | `#c9a84c` | Gold stars, CTAs |
| `--muted` | `#6b5744` | Secondary text, dates |
| `--border` | `#c9b99a` | Card borders |

---

## Open Questions

1. **Comments — auth or anonymous?** Anonymous (just a name field) is lower friction but gets spammed. Auth (Supabase) is cleaner but requires signup flow.
2. **TBR votes — show who voted or just count?** Counts only is simpler and less creepy.
3. **Admin form on the page or just use Supabase Table Editor?** Table Editor is fine for now; build an admin form later if it becomes tedious.
4. **Star rating display** — 1–5 stars with half-star? Or a `/10` score like the kettlebell exercises?
