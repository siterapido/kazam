import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import process from 'node:process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajusta a base automaticamente em ambiente de CI do GitHub
  // Para GitHub Pages de projeto: https://<user>.github.io/<repo>/
  // Em dev local permanece '/'
  base: (() => {
    const repo = process.env.GITHUB_REPOSITORY
    const isCI = !!process.env.CI
    if (isCI && repo) {
      const name = repo.split('/')[1]
      return `/${name}/`
    }
    return '/'
  })(),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
