import type { ViteUserConfig } from "vitest/config";

import { defineConfig } from "vitest/config";

const config: ViteUserConfig = defineConfig({
  test: {
    environment: "node",
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});

export default config;
