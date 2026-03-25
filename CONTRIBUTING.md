# Contributing to FridOS

Thanks for your interest in contributing to FridOS! This is a kid-friendly terminal where children explore computers, learn typing, and have fun.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/snoell/fridos.git
cd fridos

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The app runs at `http://localhost:3000`.

## Project Overview

FridOS is a pure client-side Nuxt 4 / Vue 3 app. The entire UI is a single xterm.js terminal. See [CLAUDE.md](CLAUDE.md) for a detailed architecture overview.

## Adding a New Command

The easiest way to contribute is by adding a new terminal command:

1. Create `app/utils/commands/<name>.js`
2. Export a named function matching the filename:
   ```js
   export const name = (terminal, ...args) => {
   	// write output via terminal.writeln()
   }
   ```
3. Export a `helpSummary` string so it shows up in `help`
4. Optionally export `hidden = true` to hide it from the help listing

That's it — commands are auto-discovered via `import.meta.glob`. No registration step needed.

## Development Workflow

1. **Fork** the repository and create a feature branch from `main`
2. Make your changes
3. Run `pnpm build` to verify the production build succeeds
4. Run `pnpm exec eslint .` to check for linting issues
5. Open a **pull request** against `main`

## Commit Messages

This project uses [semantic-release](https://github.com/semantic-release/semantic-release), so commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat: add new command` — triggers a minor release
- `fix: correct math parsing` — triggers a patch release
- `docs: update README` — no release
- `chore: update dependencies` — no release

## Code Style

- **Tabs** for indentation (enforced by ESLint via `@nuxt/eslint`)
- Run `pnpm exec eslint . --fix` to auto-fix formatting issues

## Values

This project prioritizes **inclusivity**. Family-related features (like gallery commands) should never assume a traditional family structure. All families are welcome.

## Reporting Issues

Found a bug or have an idea? [Open an issue](https://github.com/snoell/fridos/issues) with a clear description. For bugs, include steps to reproduce.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
