import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Keep edits visible when the project lives on a Windows drive mounted in WSL.
  server: { watch: { usePolling: true, interval: 300 } },
});
