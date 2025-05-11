/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import viteSvgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), viteSvgr(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./src/__tests__/setup.ts"
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
