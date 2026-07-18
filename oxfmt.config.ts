import type { OxfmtConfig } from "oxfmt";

const config: OxfmtConfig = {
  // Formatting style follows oxfmt's built-in (Prettier-compatible) defaults.
  jsdoc: true,
  sortImports: {
    // Type-only imports first, then oxfmt's default group order. Groups are
    // separated by blank lines (newlinesBetween defaults to true).
    groups: [
      "type",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "unknown",
    ],
  },
  ignorePatterns: ["dist", "node_modules", "pnpm-lock.yaml", ".changeset/README.md"],
};

export default config;
