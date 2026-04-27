# simple-node-starter

[![CI](https://github.com/johnbenjaminmccarthy/simple-node-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/johnbenjaminmccarthy/simple-node-starter/actions/workflows/ci.yml)

Minimal template for a publishable **Node.js + TypeScript** package.

### Includes

- **TypeScript library build**: source in `lib/`, output to `dist/`, ESM (`"type": "module"`)
- **ESLint**: type-aware linting (flat config) + JSDoc rules
- **Prettier**: formatting (with import-sorting plugin)
- **Vitest**: unit + integration test targets
- **Changesets**: versioning + changelog-friendly releases

### Requirements

- **Node**: >= 22
- **Package manager**: `pnpm`

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
