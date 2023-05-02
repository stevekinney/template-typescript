import { defineConfig } from 'vite';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: pkg.name,
      fileName: 'index',
    },
  },
});
