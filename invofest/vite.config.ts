import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/events': 'http://localhost:3000',
      '/categories': 'http://localhost:3000',
      '/speakers': 'http://localhost:3000'
    },
  },
})
