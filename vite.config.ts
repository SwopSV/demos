import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite-plugin-gh-pages ska inte importeras här

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/demos/',
});
