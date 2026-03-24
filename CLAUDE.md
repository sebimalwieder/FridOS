# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What is FridOS

FridOS is a kid-friendly terminal interface built with Nuxt 4 / Vue 3 and xterm.js. Kids learn typing, letters, numbers, and basic math by interacting with a real-feeling terminal. Pure client-side — no backend.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Build for production
pnpm preview      # Preview production build
```

## Architecture

The entire UI is a single xterm.js terminal. User input flows through:

**Terminal.client.vue** (keyboard capture) → **command-handler.js** (auto-discovery + routing) → **commands/*.js** (execution) → writes back to terminal and/or mutates global state

### Key Files

- `app.config.ts` — Parent-facing configuration (kid's name, prompt, theme, emojis)
- `app/components/Terminal.client.vue` — xterm.js wrapper; handles input, renders overlays
- `app/utils/command-handler.js` — Auto-discovers commands via `import.meta.glob`. Special routing: single letters → alphabet, numbers → number, math expressions → math
- `app/utils/commands/` — One file per command, auto-discovered. No registration needed.
- `app/utils/terminal-config.js` — `createTerminalConfig(theme)` builds xterm config from app config
- `app/composables/states.js` — Global reactive state via `useState` (image viewer, audio, clicker, clock)
- `app/composables/assets.js` — Dynamic asset loading via `import.meta.glob`
- `shared/utils/constants.js` — `TEXT_STYLES` (ANSI escape codes)

### Adding a New Command

1. Create `app/utils/commands/<name>.js`
2. Export a named function matching the filename: `export const name = (terminal, ...args) => {}`
3. Export `helpSummary` string for the help listing
4. Optionally export `hidden = true` to hide from help

No registration step — auto-discovered by `import.meta.glob`.

### Configuration

All personalization lives in `app.config.ts` (Nuxt's `defineAppConfig`). Accessed via `useAppConfig().fridos`. Version is read from `package.json` at build time via `runtimeConfig.public.version`.

### State Management

No Pinia/Vuex — uses Nuxt `useState` composables in `app/composables/states.js`.

### Assets

- Alphabet images: `app/assets/img/alphabet/` — filename first letter = mapped letter
- Gallery images: `app/assets/img/<command>/` (e.g., mom/, dad/)
- Audio: `app/assets/audio/`
- Font: Monaspace Argon (SIL Open Font License)

### Important Values

This project prioritizes inclusivity. Family-related features (gallery commands) should never assume a traditional family structure. All families are welcome.
