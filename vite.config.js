import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` must match the GitHub Pages repo path: https://<user>.github.io/<repo>/
// Repo is "My-Resum-", so the site is served from "/My-Resum-/".
export default defineConfig({
  base: '/My-Resum-/',
  plugins: [react(), tailwindcss()],
})
