import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path"; // Installed manually
import dts from "vite-plugin-dts"; // Installed manually
import { libInjectCss } from "vite-plugin-lib-inject-css"; // Installed manually

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    libInjectCss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(import.meta.dirname, "lib/main.ts"),
      name: "table-ui",
      fileName: "table-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
