import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    // define: {
    //   'process.env': env,
    // },
    // base: './',
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: 'named',
          namedExport: 'ReactComponent',
          ref: true,
          svgo: false,
        },
        include: '**/*.svg',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      port: 3000, // Добавьте эту строку
    },
  };
});
