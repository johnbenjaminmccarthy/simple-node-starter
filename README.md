# simple-node-starter

[![CI](https://github.com/johnbenjaminmccarthy/simple-node-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/johnbenjaminmccarthy/simple-node-starter/actions/workflows/ci.yml)

Minimal template for a publishable **Node.js + TypeScript** package.

### Includes

- **TypeScript 7 (native compiler)**: strict options + `isolatedDeclarations`, source in `lib/`,
  output to `dist/`, ESM (`"type": "module"`)
- **oxlint**: category-based lint config (correctness/suspicious/perf as errors, pedantic as
  warnings) with type-aware rules powered by `oxlint-tsgolint`, plus import hygiene
  (`import type` enforcement, no duplicate imports)
- **oxfmt**: fast formatting with import sorting (type imports first, then
  builtin/external/internal groups), JSDoc formatting, and `package.json` key sorting
- **Vitest**: unit + integration test targets
- **Changesets**: versioning + changelog-friendly releases

### Requirements

- **Node**: >= 24
- **Package manager**: `pnpm` >= 11

### Setup

```bash
pnpm install
```

### Daily commands

```bash
pnpm check        # lint + format check + typecheck + tests
pnpm check:fix    # lint:fix + format:fix + typecheck + tests
pnpm build        # emits to dist/
```

### Individual commands

```bash
pnpm lint         # or pnpm lint:fix
pnpm format       # or pnpm format:fix
pnpm typecheck
pnpm test
pnpm test:unit
pnpm test:integration
```

### Releasing (Changesets)

```bash
pnpm ci:add       # add a changeset
pnpm ci:version   # bump versions + update changelog
pnpm ci:publish   # publish + push tags
```
