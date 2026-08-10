import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Prérendu (scripts/prerender.mjs) : on embarque les dépendances dans le
  // bundle SSR. Sans ça, Node les charge en externe et casse sur les paquets
  // CommonJS qui n'exposent pas d'exports nommés (react-helmet-async).
  ssr: {
    noExternal: true,
  },
}));
