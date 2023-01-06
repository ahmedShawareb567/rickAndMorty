import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlPurge from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPurge({}) as any],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/assets/scss/global";` },
    },
  },
  server: {
    port: 3000,
  },
});
