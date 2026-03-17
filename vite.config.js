import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-query" // add any big libs you use
    ]
  },
  server: {
    watch: {
      usePolling: true, // forces Vite to check file changes
      interval: 100,    // check every 100ms
    }
  },
  esbuild: {
    minify: false, // faster rebuild
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  }
})