import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/user": 'http://localhost:5000',
      "/api":'http://localhost:5000',
    },
  },
  plugins: [react()],
})
