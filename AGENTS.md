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
