import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: "/Learning_React_IBM_edX",
  plugins: [react()],
})
