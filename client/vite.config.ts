import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'; // Import path from Node.js

const __dirname = path.resolve(); // Use Node.js path to get the current directory


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: __dirname + '/src' }, // Use __dirname directly
    ],
  },
});