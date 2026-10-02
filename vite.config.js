import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
