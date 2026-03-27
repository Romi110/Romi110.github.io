/**
 * BOOKS — Static reading list data
 *
 * status:      'read' | 'reading' | 'tbr'
 * rating:      1–5 (null if not read)
 * review:      short personal review (null if not read)
 * series:      series name string, or null for standalones
 * seriesOrder: position within series (1-based), or null
 * cover:       path to image in /assets/covers/, or null
 * genre:       display genre tag
 * dateRead:    'YYYY-MM' string, or null
 * pages:       page count — first US/UK hardcover or trade paperback (Goodreads), or null
 * isAuthor:    true = author-level TBR card (no specific book chosen yet)
 */

export const BOOKS = [

  // ── Sun Eater ──────────────────────────────────────────────
  {
    id: 'sun-eater-1',
    title: 'Empire of Silence',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 1,
    pages: 604,
    dateRead: null,
  },
  {
    id: 'sun-eater-2',
    title: 'Howling Dark',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 2,
    pages: 560,
    dateRead: null,
  },
  {
    id: 'sun-eater-3',
    title: 'Demon in White',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 3,
    pages: 608,
    dateRead: null,
  },
  {
    id: 'sun-eater-4',
    title: 'Kingdoms of Death',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 4,
    pages: 592,
    dateRead: null,
  },
  {
    id: 'sun-eater-5',
    title: 'Ashes of Man',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 5,
    pages: 560,
    dateRead: null,
  },
  {
    id: 'sun-eater-6',
    title: 'Disquiet Gods',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 6,
    pages: 704,
    dateRead: null,
  },
  {
    id: 'sun-eater-7',
    title: 'Shadows Upon Time',
    author: 'Christopher Ruocchio',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fantasy',
    series: 'Sun Eater',
    seriesOrder: 7,
    pages: 928,
    dateRead: null,
  },

  // ── Sword of Kaigen ────────────────────────────────────────
  {
    id: 'sword-of-kaigen',
    title: 'The Sword of Kaigen',
    author: 'M.L. Wang',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: null,
    seriesOrder: null,
    pages: 384,
    dateRead: null,
  },

  // ── Red Rising trilogy ─────────────────────────────────────
  {
    id: 'red-rising-1',
    title: 'Red Rising',
    author: 'Pierce Brown',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Red Rising',
    seriesOrder: 1,
    pages: 382,
    dateRead: null,
  },
  {
    id: 'red-rising-2',
    title: 'Golden Son',
    author: 'Pierce Brown',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Red Rising',
    seriesOrder: 2,
    pages: 442,
    dateRead: null,
  },
  {
    id: 'red-rising-3',
    title: 'Morning Star',
    author: 'Pierce Brown',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Red Rising',
    seriesOrder: 3,
    pages: 514,
    dateRead: null,
  },

  // ── Mistborn Era 1 ─────────────────────────────────────────
  {
    id: 'mistborn-1',
    title: 'The Final Empire',
    author: 'Brandon Sanderson',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Mistborn',
    seriesOrder: 1,
    pages: 541,
    dateRead: null,
  },
  {
    id: 'mistborn-2',
    title: 'The Well of Ascension',
    author: 'Brandon Sanderson',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Mistborn',
    seriesOrder: 2,
    pages: 590,
    dateRead: null,
  },
  {
    id: 'mistborn-3',
    title: 'The Hero of Ages',
    author: 'Brandon Sanderson',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Mistborn',
    seriesOrder: 3,
    pages: 572,
    dateRead: null,
  },

  // ── Hobbit / Elantris (Fantasy standalones) ────────────────
  {
    id: 'hobbit',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: null,
    seriesOrder: null,
    pages: 310,
    dateRead: null,
  },
  {
    id: 'elantris',
    title: 'Elantris',
    author: 'Brandon Sanderson',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: null,
    seriesOrder: null,
    pages: 492,
    dateRead: null,
  },

  // ── Dune ───────────────────────────────────────────────────
  {
    id: 'dune-1',
    title: 'Dune',
    author: 'Frank Herbert',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Dune',
    seriesOrder: 1,
    pages: 604,
    dateRead: null,
  },
  {
    id: 'dune-2',
    title: 'Dune Messiah',
    author: 'Frank Herbert',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Dune',
    seriesOrder: 2,
    pages: 226,
    dateRead: null,
  },

  // ── Sci-Fi standalones ─────────────────────────────────────
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: null,
    seriesOrder: null,
    pages: 476,
    dateRead: null,
  },
  {
    id: '2001-space-odyssey',
    title: '2001: A Space Odyssey',
    author: 'Arthur C. Clarke',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: null,
    seriesOrder: null,
    pages: 224,
    dateRead: null,
  },
  {
    id: 'rendezvous-rama',
    title: 'Rendezvous with Rama',
    author: 'Arthur C. Clarke',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: null,
    seriesOrder: null,
    pages: 243,
    dateRead: null,
  },

  // ── Foundation ─────────────────────────────────────────────
  {
    id: 'foundation-1',
    title: 'Foundation',
    author: 'Isaac Asimov',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Foundation',
    seriesOrder: 1,
    pages: 244,
    dateRead: null,
  },
  {
    id: 'foundation-2',
    title: 'Foundation and Empire',
    author: 'Isaac Asimov',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Foundation',
    seriesOrder: 2,
    pages: 247,
    dateRead: null,
  },
  {
    id: 'foundation-3',
    title: 'Second Foundation',
    author: 'Isaac Asimov',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Science Fiction',
    series: 'Foundation',
    seriesOrder: 3,
    pages: 249,
    dateRead: null,
  },

  // ── The Hunger Games ───────────────────────────────────────
  {
    id: 'hunger-games-1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Dystopian',
    series: 'The Hunger Games',
    seriesOrder: 1,
    pages: 374,
    dateRead: null,
  },
  {
    id: 'hunger-games-2',
    title: 'Catching Fire',
    author: 'Suzanne Collins',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Dystopian',
    series: 'The Hunger Games',
    seriesOrder: 2,
    pages: 391,
    dateRead: null,
  },
  {
    id: 'hunger-games-3',
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Dystopian',
    series: 'The Hunger Games',
    seriesOrder: 3,
    pages: 390,
    dateRead: null,
  },

  // ── Percy Jackson ──────────────────────────────────────────
  {
    id: 'pjo-1',
    title: 'The Lightning Thief',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Percy Jackson',
    seriesOrder: 1,
    pages: 377,
    dateRead: null,
  },
  {
    id: 'pjo-2',
    title: 'The Sea of Monsters',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Percy Jackson',
    seriesOrder: 2,
    pages: 279,
    dateRead: null,
  },
  {
    id: 'pjo-3',
    title: "The Titan's Curse",
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Percy Jackson',
    seriesOrder: 3,
    pages: 312,
    dateRead: null,
  },
  {
    id: 'pjo-4',
    title: 'The Battle of the Labyrinth',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Percy Jackson',
    seriesOrder: 4,
    pages: 361,
    dateRead: null,
  },
  {
    id: 'pjo-5',
    title: 'The Last Olympian',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Percy Jackson',
    seriesOrder: 5,
    pages: 381,
    dateRead: null,
  },

  // ── Heroes of Olympus ──────────────────────────────────────
  {
    id: 'hoo-1',
    title: 'The Lost Hero',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Heroes of Olympus',
    seriesOrder: 1,
    pages: 557,
    dateRead: null,
  },
  {
    id: 'hoo-2',
    title: 'The Son of Neptune',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Heroes of Olympus',
    seriesOrder: 2,
    pages: 513,
    dateRead: null,
  },
  {
    id: 'hoo-3',
    title: 'The Mark of Athena',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Heroes of Olympus',
    seriesOrder: 3,
    pages: 574,
    dateRead: null,
  },
  {
    id: 'hoo-4',
    title: 'The House of Hades',
    author: 'Rick Riordan',
    cover: null,
    status: 'read',
    rating: null,
    review: null,
    genre: 'Fantasy',
    series: 'Heroes of Olympus',
    seriesOrder: 4,
    pages: 597,
    dateRead: null,
  },

  // ── The Locked Tomb ────────────────────────────────────────
  { id: 'locked-tomb-1', title: 'Gideon the Ninth',   author: 'Tamsyn Muir', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fantasy', series: 'The Locked Tomb', seriesOrder: 1, pages: 448,  dateRead: null },
  { id: 'locked-tomb-2', title: 'Harrow the Ninth',   author: 'Tamsyn Muir', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fantasy', series: 'The Locked Tomb', seriesOrder: 2, pages: 512,  dateRead: null },
  { id: 'locked-tomb-3', title: 'Nona the Ninth',     author: 'Tamsyn Muir', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fantasy', series: 'The Locked Tomb', seriesOrder: 3, pages: 464,  dateRead: null },
  { id: 'locked-tomb-4', title: 'Alecto the Ninth',   author: 'Tamsyn Muir', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fantasy', series: 'The Locked Tomb', seriesOrder: 4, pages: null, dateRead: null },

  // ── The Stormlight Archive ─────────────────────────────────
  { id: 'stormlight-1', title: 'The Way of Kings',  author: 'Brandon Sanderson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Stormlight Archive', seriesOrder: 1, pages: 1007, dateRead: null },
  { id: 'stormlight-2', title: 'Words of Radiance', author: 'Brandon Sanderson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Stormlight Archive', seriesOrder: 2, pages: 1087, dateRead: null },
  { id: 'stormlight-3', title: 'Oathbringer',       author: 'Brandon Sanderson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Stormlight Archive', seriesOrder: 3, pages: 1248, dateRead: null },
  { id: 'stormlight-4', title: 'Rhythm of War',     author: 'Brandon Sanderson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Stormlight Archive', seriesOrder: 4, pages: 1232, dateRead: null },
  { id: 'stormlight-5', title: 'Wind and Truth',    author: 'Brandon Sanderson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Stormlight Archive', seriesOrder: 5, pages: 1376, dateRead: null },

  // ── Hierarchy ──────────────────────────────────────────────
  { id: 'hierarchy-1', title: 'The Will of the Many', author: 'James Islington', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Hierarchy', seriesOrder: 1, pages: 560, dateRead: null },

  // ── The Expanse ────────────────────────────────────────────
  { id: 'expanse-1', title: 'Leviathan Wakes',    author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 1, pages: 561, dateRead: null },
  { id: 'expanse-2', title: "Caliban's War",       author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 2, pages: 595, dateRead: null },
  { id: 'expanse-3', title: "Abaddon's Gate",      author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 3, pages: 539, dateRead: null },
  { id: 'expanse-4', title: 'Cibola Burn',         author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 4, pages: 485, dateRead: null },
  { id: 'expanse-5', title: 'Nemesis Games',       author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 5, pages: 534, dateRead: null },
  { id: 'expanse-6', title: "Babylon's Ashes",     author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 6, pages: 544, dateRead: null },
  { id: 'expanse-7', title: 'Persepolis Rising',   author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 7, pages: 541, dateRead: null },
  { id: 'expanse-8', title: "Tiamat's Wrath",      author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 8, pages: 530, dateRead: null },
  { id: 'expanse-9', title: 'Leviathan Falls',     author: 'James S.A. Corey', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Expanse', seriesOrder: 9, pages: 528, dateRead: null },

  // ── The Green Bone Saga ────────────────────────────────────
  { id: 'green-bone-1', title: 'Jade City',    author: 'Fonda Lee', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Green Bone Saga', seriesOrder: 1, pages: 560, dateRead: null },
  { id: 'green-bone-2', title: 'Jade War',     author: 'Fonda Lee', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Green Bone Saga', seriesOrder: 2, pages: 656, dateRead: null },
  { id: 'green-bone-3', title: 'Jade Legacy',  author: 'Fonda Lee', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Green Bone Saga', seriesOrder: 3, pages: 736, dateRead: null },

  // ── Babel (standalone) ─────────────────────────────────────
  { id: 'babel', title: 'Babel', author: 'R.F. Kuang', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: null, seriesOrder: null, pages: 545, dateRead: null },

  // ── Malazan Book of the Fallen ─────────────────────────────
  { id: 'malazan-1',  title: 'Gardens of the Moon', author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 1,  pages: 666,  dateRead: null },
  { id: 'malazan-2',  title: 'Deadhouse Gates',     author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 2,  pages: 943,  dateRead: null },
  { id: 'malazan-3',  title: 'Memories of Ice',     author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 3,  pages: 1187, dateRead: null },
  { id: 'malazan-4',  title: 'House of Chains',     author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 4,  pages: 1008, dateRead: null },
  { id: 'malazan-5',  title: 'Midnight Tides',      author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 5,  pages: 944,  dateRead: null },
  { id: 'malazan-6',  title: 'The Bonehunters',     author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 6,  pages: 1163, dateRead: null },
  { id: 'malazan-7',  title: "Reaper's Gale",       author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 7,  pages: 1184, dateRead: null },
  { id: 'malazan-8',  title: 'Toll the Hounds',     author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 8,  pages: 1383, dateRead: null },
  { id: 'malazan-9',  title: 'Dust of Dreams',      author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 9,  pages: 1006, dateRead: null },
  { id: 'malazan-10', title: 'The Crippled God',    author: 'Steven Erikson', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Malazan Book of the Fallen', seriesOrder: 10, pages: 896,  dateRead: null },

  // ── The Bound and the Broken ───────────────────────────────
  { id: 'bound-broken-1', title: 'Of Blood and Fire',     author: 'Ryan Cahill', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bound and the Broken', seriesOrder: 1, pages: 518,  dateRead: null },
  { id: 'bound-broken-2', title: 'Of Darkness and Light', author: 'Ryan Cahill', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bound and the Broken', seriesOrder: 2, pages: 811,  dateRead: null },
  { id: 'bound-broken-3', title: 'Of War and Ruin',       author: 'Ryan Cahill', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bound and the Broken', seriesOrder: 3, pages: 1028, dateRead: null },

  // ── The Faithful and the Fallen ────────────────────────────
  { id: 'faithful-fallen-1', title: 'Malice', author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Faithful and the Fallen', seriesOrder: 1, pages: 608, dateRead: null },
  { id: 'faithful-fallen-2', title: 'Valor',  author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Faithful and the Fallen', seriesOrder: 2, pages: 512, dateRead: null },
  { id: 'faithful-fallen-3', title: 'Ruin',   author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Faithful and the Fallen', seriesOrder: 3, pages: 592, dateRead: null },
  { id: 'faithful-fallen-4', title: 'Wrath',  author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Faithful and the Fallen', seriesOrder: 4, pages: 496, dateRead: null },

  // ── The Kingkiller Chronicle ───────────────────────────────
  { id: 'kingkiller-1', title: 'The Name of the Wind',  author: 'Patrick Rothfuss', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Kingkiller Chronicle', seriesOrder: 1, pages: 662, dateRead: null },
  { id: 'kingkiller-2', title: "The Wise Man's Fear",   author: 'Patrick Rothfuss', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Kingkiller Chronicle', seriesOrder: 2, pages: 994, dateRead: null },

  // ── Realm of the Elderlings — Farseer Trilogy ──────────────
  { id: 'farseer-1', title: "Assassin's Apprentice", author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Farseer Trilogy', seriesOrder: 1, pages: 356, dateRead: null },
  { id: 'farseer-2', title: 'Royal Assassin',        author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Farseer Trilogy', seriesOrder: 2, pages: 675, dateRead: null },
  { id: 'farseer-3', title: "Assassin's Quest",      author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Farseer Trilogy', seriesOrder: 3, pages: 757, dateRead: null },

  // ── Realm of the Elderlings — The Liveship Traders ─────────
  { id: 'liveship-1', title: 'Ship of Magic',   author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Liveship Traders', seriesOrder: 1, pages: 880, dateRead: null },
  { id: 'liveship-2', title: 'The Mad Ship',    author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Liveship Traders', seriesOrder: 2, pages: 912, dateRead: null },
  { id: 'liveship-3', title: 'Ship of Destiny', author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Liveship Traders', seriesOrder: 3, pages: 789, dateRead: null },

  // ── Realm of the Elderlings — The Tawny Man Trilogy ────────
  { id: 'tawny-man-1', title: "Fool's Errand",    author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Tawny Man Trilogy', seriesOrder: 1, pages: 661, dateRead: null },
  { id: 'tawny-man-2', title: 'The Golden Fool',  author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Tawny Man Trilogy', seriesOrder: 2, pages: 722, dateRead: null },
  { id: 'tawny-man-3', title: "Fool's Fate",      author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Tawny Man Trilogy', seriesOrder: 3, pages: 839, dateRead: null },

  // ── Realm of the Elderlings — The Rain Wild Chronicles ─────
  { id: 'rain-wild-1', title: 'Dragon Keeper',    author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Rain Wild Chronicles', seriesOrder: 1, pages: 448, dateRead: null },
  { id: 'rain-wild-2', title: 'Dragon Haven',     author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Rain Wild Chronicles', seriesOrder: 2, pages: 404, dateRead: null },
  { id: 'rain-wild-3', title: 'City of Dragons',  author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Rain Wild Chronicles', seriesOrder: 3, pages: 340, dateRead: null },
  { id: 'rain-wild-4', title: 'Blood of Dragons', author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Rain Wild Chronicles', seriesOrder: 4, pages: 362, dateRead: null },

  // ── Realm of the Elderlings — Fitz and the Fool ────────────
  { id: 'fitz-fool-1', title: "Fool's Assassin", author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Fitz and the Fool', seriesOrder: 1, pages: 680, dateRead: null },
  { id: 'fitz-fool-2', title: "Fool's Quest",    author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Fitz and the Fool', seriesOrder: 2, pages: 752, dateRead: null },
  { id: 'fitz-fool-3', title: "Assassin's Fate", author: 'Robin Hobb', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'Fitz and the Fool', seriesOrder: 3, pages: 904, dateRead: null },

  // ── Alastair Reynolds (Author TBR) ────────────────────────
  { id: 'author-alastair-reynolds', title: 'Alastair Reynolds', author: 'Alastair Reynolds', isAuthor: true, cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: null, seriesOrder: null, pages: null, dateRead: null },

  // ── Children of Time ──────────────────────────────────────
  { id: 'children-time-1', title: 'Children of Time',   author: 'Adrian Tchaikovsky', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'Children of Time', seriesOrder: 1, pages: 600, dateRead: null },
  { id: 'children-time-2', title: 'Children of Ruin',   author: 'Adrian Tchaikovsky', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'Children of Time', seriesOrder: 2, pages: 591, dateRead: null },
  { id: 'children-time-3', title: 'Children of Memory', author: 'Adrian Tchaikovsky', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'Children of Time', seriesOrder: 3, pages: 480, dateRead: null },

  // ── The Empirium Trilogy ───────────────────────────────────
  { id: 'empirium-1', title: 'Furyborn',     author: 'Claire Legrand', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Empirium Trilogy', seriesOrder: 1, pages: 512, dateRead: null },
  { id: 'empirium-2', title: 'Kingsbane',    author: 'Claire Legrand', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Empirium Trilogy', seriesOrder: 2, pages: 560, dateRead: null },
  { id: 'empirium-3', title: 'Lightbringer', author: 'Claire Legrand', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Empirium Trilogy', seriesOrder: 3, pages: 576, dateRead: null },

  // ── The Burning ────────────────────────────────────────────
  { id: 'burning-1', title: 'Rage of Dragons',        author: 'Evan Winter', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Burning', seriesOrder: 1, pages: 544, dateRead: null },
  { id: 'burning-2', title: 'The Fires of Vengeance', author: 'Evan Winter', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Burning', seriesOrder: 2, pages: 448, dateRead: null },

  // ── The Culture ────────────────────────────────────────────
  { id: 'culture-1',  title: 'Consider Phlebas',    author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 1,  pages: 471, dateRead: null },
  { id: 'culture-2',  title: 'The Player of Games', author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 2,  pages: 292, dateRead: null },
  { id: 'culture-3',  title: 'Use of Weapons',      author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 3,  pages: 354, dateRead: null },
  { id: 'culture-4',  title: 'The State of the Art',author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 4,  pages: 213, dateRead: null },
  { id: 'culture-5',  title: 'Excession',           author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 5,  pages: 454, dateRead: null },
  { id: 'culture-6',  title: 'Inversions',          author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 6,  pages: 308, dateRead: null },
  { id: 'culture-7',  title: 'Look to Windward',    author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 7,  pages: 341, dateRead: null },
  { id: 'culture-8',  title: 'Matter',              author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 8,  pages: 593, dateRead: null },
  { id: 'culture-9',  title: 'Surface Detail',      author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 9,  pages: 627, dateRead: null },
  { id: 'culture-10', title: 'The Hydrogen Sonata', author: 'Iain M. Banks', cover: null, status: 'tbr', rating: null, review: null, genre: 'Science Fiction', series: 'The Culture', seriesOrder: 10, pages: 517, dateRead: null },

  // ── The First Law ──────────────────────────────────────────
  { id: 'first-law-1', title: 'The Blade Itself',       author: 'Joe Abercrombie', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The First Law', seriesOrder: 1, pages: 531, dateRead: null },
  { id: 'first-law-2', title: 'Before They Are Hanged', author: 'Joe Abercrombie', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The First Law', seriesOrder: 2, pages: 543, dateRead: null },
  { id: 'first-law-3', title: 'Last Argument of Kings', author: 'Joe Abercrombie', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The First Law', seriesOrder: 3, pages: 639, dateRead: null },

  // ── The Licanius Trilogy ───────────────────────────────────
  { id: 'licanius-1', title: 'The Shadow of What Was Lost', author: 'James Islington', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Licanius Trilogy', seriesOrder: 1, pages: 688, dateRead: null },
  { id: 'licanius-2', title: 'An Echo of Things to Come',  author: 'James Islington', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Licanius Trilogy', seriesOrder: 2, pages: 752, dateRead: null },
  { id: 'licanius-3', title: 'The Light of All That Falls', author: 'James Islington', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Licanius Trilogy', seriesOrder: 3, pages: 816, dateRead: null },

  // ── The Echoes Saga ────────────────────────────────────────
  { id: 'echoes-1',  title: 'Rise of the Ranger',    author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 1,  pages: 536,  dateRead: null },
  { id: 'echoes-2',  title: 'Echoes of the Past',    author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 2,  pages: null, dateRead: null },
  { id: 'echoes-3',  title: 'Empire of Dirt',        author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 3,  pages: 440,  dateRead: null },
  { id: 'echoes-4',  title: 'Relic of the Gods',     author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 4,  pages: 524,  dateRead: null },
  { id: 'echoes-5',  title: 'The Fall of Neverdark', author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 5,  pages: null, dateRead: null },
  { id: 'echoes-6',  title: 'Kingdom of Bones',      author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 6,  pages: 622,  dateRead: null },
  { id: 'echoes-7',  title: 'Age of the King',       author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 7,  pages: 630,  dateRead: null },
  { id: 'echoes-8',  title: 'The Knights of Erador', author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 8,  pages: 634,  dateRead: null },
  { id: 'echoes-9',  title: 'Last of the Dragorn',   author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 9,  pages: 596,  dateRead: null },
  { id: 'echoes-10', title: 'A Clash of Fates',      author: 'Philip C. Quaintrell', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Echoes Saga', seriesOrder: 10, pages: 774,  dateRead: null },

  // ── Joe Abercrombie (Author TBR) ──────────────────────────
  { id: 'author-joe-abercrombie', title: 'Joe Abercrombie', author: 'Joe Abercrombie', isAuthor: true, cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: null, seriesOrder: null, pages: null, dateRead: null },

  // ── The Black Tongue Thief (standalone) ───────────────────
  { id: 'black-tongue-thief', title: 'The Black Tongue Thief', author: 'Christopher Buehlman', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: null, seriesOrder: null, pages: 432, dateRead: null },

  // ── A Spear Cuts Through Water (standalone) ───────────────
  { id: 'spear-cuts-water', title: 'A Spear Cuts Through Water', author: 'Simon Jimenez', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: null, seriesOrder: null, pages: 464, dateRead: null },

  // ── The Bloodsworn Saga ────────────────────────────────────
  { id: 'bloodsworn-1', title: 'The Shadow of the Gods', author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bloodsworn Saga', seriesOrder: 1, pages: 464, dateRead: null },
  { id: 'bloodsworn-2', title: 'The Hunger of the Gods', author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bloodsworn Saga', seriesOrder: 2, pages: 512, dateRead: null },
  { id: 'bloodsworn-3', title: 'The Fury of the Gods',   author: 'John Gwynne', cover: null, status: 'tbr', rating: null, review: null, genre: 'Fantasy', series: 'The Bloodsworn Saga', seriesOrder: 3, pages: 560,  dateRead: null },

];

// ── Spine colors — keyed by genre ────────────────────────────
// Genre determines color; all books in a genre share the same palette.
// A legend on the page maps color → genre for the reader.
export const SPINE_COLORS = {
  'Fantasy':          { bg: '#102818', text: '#7ecc90' },
  'Science Fiction':  { bg: '#0c1a2e', text: '#7ab8d8' },
  'Science Fantasy':  { bg: '#1e0e34', text: '#c4a0e8' },
  'Dystopian':        { bg: '#2e0a0a', text: '#e87070' },
};

export function getSpineColor(book) {
  return SPINE_COLORS[book.genre] || { bg: '#1a1a1a', text: '#c9a84c' };
}

/**
 * Flat shelf groups — all non-TBR books on one shelf, series kept together.
 * Returns: [{ type:'series', name, books } | { type:'standalone', book }]
 * Preserves the order books appear in the BOOKS array.
 */
export function getShelfBookGroups(books) {
  const shelfBooks = books.filter(b => b.status !== 'tbr');
  const seriesMap  = new Map();
  const result     = [];

  for (const book of shelfBooks) {
    if (book.series) {
      if (!seriesMap.has(book.series)) {
        const group = { type: 'series', name: book.series, books: [] };
        seriesMap.set(book.series, group);
        result.push(group);
      }
      seriesMap.get(book.series).books.push(book);
    } else {
      result.push({ type: 'standalone', book });
    }
  }

  for (const entry of result) {
    if (entry.type === 'series') {
      entry.books.sort((a, b) => a.seriesOrder - b.seriesOrder);
    }
  }

  return result;
}

/** Get only TBR books */
export function getTbrBooks(books) {
  return books.filter(b => b.status === 'tbr');
}

/** Render stars HTML: filled + empty, plus numeric label */
export function renderStars(rating) {
  if (!rating) return '';
  const filled = '★'.repeat(rating);
  const empty  = '☆'.repeat(5 - rating);
  return `<span class="stars" aria-label="${rating} out of 5 stars">
    <span class="stars-filled">${filled}</span><span class="stars-empty">${empty}</span>
  </span><span class="stars-num">${rating}/5</span>`;
}
