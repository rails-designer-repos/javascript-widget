import { resolve } from "path";
import { defineConfig } from "vite";
import { terser } from "rollup-plugin-terser";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/widget.js"),
      fileName: "v1/embed",
      formats: ["es"],
    },

    rollupOptions: {
      plugins: [terser()],
      output: {
        compact: true
      }
    }
  },
})
