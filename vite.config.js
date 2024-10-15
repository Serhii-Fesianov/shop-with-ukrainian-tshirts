import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://70.34.242.75/api',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
