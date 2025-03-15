import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Importa el plugin

export default defineConfig({
  plugins: [react(), svgr()], // Agrega el plugin a la lista
});
