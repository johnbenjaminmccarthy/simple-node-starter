# AGENTS.md

This file is guidance for code-writing agents working in this repository.

## Project overview (fill this in)

- **What this package does**: <one sentence>
- **Primary entrypoint(s)**: <e.g. `lib/index.ts`, exported APIs, CLI entrypoint if any>
- **Runtime environment**: <Node version, platform notes>
- **Key constraints**: <e.g. ESM-only, no Node globals, backwards-compat requirements>

## Repo structure (edit as needed)

- `lib/`: TypeScript source
- `dist/`: Build output (published)
- `test/unit/`: Unit tests
- `test/integration/`: Integration tests

## Commands (what to run)

All commands use `pnpm`.

### Setup

```bash
pnpm install
```

### Quality gate (preferred)

Use this before opening a PR or after non-trivial changes:

```bash
pnpm check
```

If you need to auto-fix lint/format issues:

```bash
pnpm check:fix
```

### Build

```bash
pnpm build
```

### Lint / Format / Types (individually)

```bash
pnpm lint         # or pnpm lint:fix
pnpm format       # or pnpm format:fix
pnpm typecheck
```

### Tests

```bash
pnpm test
pnpm test:unit
pnpm test:integration
```

## Tooling notes

- **TypeScript 7 (native compiler)** with `isolatedDeclarations`: every exported symbol needs an
  explicitly written type. Config files follow the pattern
  `const config: SomeConfigType = {...}; export default config;` — keep that pattern when editing
  them.
- **oxlint** (`oxlint.config.ts`) is category-based: correctness/suspicious/perf are errors,
  pedantic is warnings, style is deliberately off. Type-aware rules (e.g. `no-floating-promises`)
  run via `oxlint-tsgolint` (`--type-aware` in the lint scripts). Prefer adjusting category levels
  over adding individual rules.
- **oxfmt** (`oxfmt.config.ts`) uses built-in defaults plus import sorting (type imports first,
  then builtin/external/internal/relative groups) and `package.json` key sorting.
- `pnpm check:fix` runs the lint fixer once; files with both duplicate imports and type-only
  import violations may need a second pass (`no-duplicates` merges first, then
  `consistent-type-imports` extracts the `type` specifier).

## Release workflow (Changesets)

When preparing a release:

```bash
pnpm ci:add       # add a changeset describing user-facing changes
pnpm ci:version   # bump versions and update changelogs
pnpm ci:publish   # publish + push tags
```

## Notes for agents (fill this in)

- **How to run the package locally**: <dev script, example usage, env vars>
- **How to add a new feature safely**: <tests to add, patterns to follow>
- **CI expectations**: <what must pass, any quirks>
