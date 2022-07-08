import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  root: './src',
  mode: 'development',
  publicDir: '../public',
  build: {
    minify: false,
    outDir: '../www',
    rollupOptions: {
      output: {
        manualChunks: {},
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    svelte({preprocess: sveltePreprocess()}),
  ],
  rollupDedupe: ['svelte'],
  server: {
    hmr: {
      protocole: 'ws',
      host: 'localhost',
    },
  },
});
