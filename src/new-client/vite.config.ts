import { resolve } from "path"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import eslint from "@rollup/plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins:
    mode === "development"
      ? [
          {
            ...eslint({ include: "src/**/*.+(js|jsx|ts|tsx)" }),
            enforce: "pre",
          },
          reactRefresh(),
        ]
      : [],
}))
