import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // AJOUTE CETTE LIGNE (Mets exactement le nom de ton dépôt GitHub)
})
