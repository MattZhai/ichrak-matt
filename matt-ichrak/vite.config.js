import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import''

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
