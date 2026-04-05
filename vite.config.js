import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'prop-types': path.resolve(__dirname, 'src/shims/prop-types.js'),
    },
  },
})
