import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
const { dependencies } = require("./package.json");
import Unocss from "unocss/vite";

const chunks = Object.entries(dependencies as { [key: string]: string }).map(
  ([key, value]) => key,
);

export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
    }),
    AutoImport({
      imports: [
        {
          classnames: [["default", "classnames"]],
        },
      ],
      dts: "./types/auto-imports.d.ts",
    }),
    // Components({}),
    Unocss(),
  ],
  build: {
    // cssCodeSplit: true,
    target: "modules",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            for (let i = 0; i < chunks.length; i++) {
              if (id.includes(chunks[i])) {
                return chunks[i];
              }
            }
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
