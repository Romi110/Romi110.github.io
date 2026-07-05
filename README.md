# 🏋️ Kettlebell Guide

A beginner-friendly, single-page kettlebell training guide covering exercises, structured workout circuits, muscle-group rankings, and training strategy — all in one self-contained HTML file.

**Live site:** [romi110.github.io](https://romi110.github.io)

---

## Features

- **🔥 Exercises by Muscle** — 21 exercises with effectiveness scores (1–10), form tips, and animated demos, filterable by movement pattern (hinge, squat, push, pull, core, total body)
- **📋 Workout Circuits** — 3 difficulty levels × 3 days × 3 options each (27 complete workouts), with coach's notes for every session
- **🎯 Body Group Workouts** — top exercises ranked per muscle group, with beginner / intermediate / advanced set-rep prescriptions
- **🎓 Tips & Strategies** — how to pick your first bell, a 4-week onboarding plan, safety rules, common mistakes with fixes, a 7-minute warm-up protocol, and progression strategy
- **🌙 Dark mode** — toggle in the top-right corner, preference saved between visits
- **📱 Fully responsive** — works on phones, tablets, and desktop

## Running Locally

No build step, no dependencies. Just open the file:

```bash
git clone https://github.com/Romi110/Romi110.github.io.git
cd Romi110.github.io
open index.html        # macOS
# or: xdg-open index.html (Linux) / start index.html (Windows)
```

## Project Structure

```
├── index.html      # The entire app — HTML, CSS, and JavaScript in one file
├── gifs/           # Exercise demonstration GIFs (21 files)
├── CLAUDE.md       # Architecture documentation for AI-assisted development
└── README.md       # This file
```

## Tech

Pure HTML + CSS + vanilla JavaScript. The only external resource is Google Fonts (Bebas Neue, DM Sans). No frameworks, no build tools, no tracking.

## Contributing / Extending

See [CLAUDE.md](CLAUDE.md) for the app architecture — data structures, theme system, and step-by-step guides for adding new exercises or tabs.

## Disclaimer

This guide is for general fitness information only and is not medical advice. Consult a qualified professional before starting a new exercise program, especially if you have pre-existing conditions or injuries.
