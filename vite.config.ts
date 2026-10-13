import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { pages } from './src/data/pages.ts'

// GitHub Pages project site: https://ab-s0lution.github.io/le-fournil-de-prosper-rennes/
// Multi-page build: every HTML file is generated from src/data/pages.ts by scripts/make-pages.mjs.
const input = Object.fromEntries(
  pages.map((p, i) => [p.key === 'article' ? `article-${i}` : p.key, decodeURIComponent(new URL(p.file, import.meta.url).pathname)]),
)

export default defineConfig({
  base: '/le-fournil-de-prosper-rennes/',
  plugins: [tailwindcss()],
  build: {
    target: 'es2022',
    rollupOptions: { input },
  },
})
