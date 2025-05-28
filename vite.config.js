import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: 'all',  // Allow all hosts to fix the blocked request issue
  },
});
