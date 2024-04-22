import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';
  const isAnalyze = mode === 'analyze';

  return {
    plugins: [
      react(),
      EnvironmentPlugin('all'),
      checker({
        typescript: true,
      }),
    ],
    optimizeDeps: {
      include: ['react'],
    },
    css: {
      devSourcemap: isDev,
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
      sourcemap: isAnalyze,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    esbuild: {
      sourcemap: isDev,
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  };
});
