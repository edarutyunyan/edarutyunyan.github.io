import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "edarutyunyan.github.io",
  build: {
    outDir: "build"
  }
})
