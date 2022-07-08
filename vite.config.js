import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  root: './src',
  mode: 'development',
  publicDir: '../public',
  build: {
    outDir: '../www',
    rollupOptions: {
      output: {
        manualChunks: {},
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    svelte({/* plugin options */ }),
  ],
  rollupDedupe: ['svelte'],
});
