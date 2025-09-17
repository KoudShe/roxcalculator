
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let build: UserConfig['build'] = undefined;
  let esbuild: UserConfig['esbuild'] = undefined;
  let define: UserConfig['define'] = undefined;
  // Use '/' para desenvolvimento local e também para produção em preview
  const base: UserConfig['base'] = '/'

  if (mode === 'development') {
    build = {
      minify: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    }

    esbuild = {
      jsxDev: true,
      keepNames: true,
      minifyIdentifiers: false,
    }

    define = {
      'process.env.NODE_ENV': '"development"',
      '__DEV__': 'true',
    }
  }

  return {
    plugins: [react()],
    build,
    esbuild,
    define,
    base,
    resolve: {
      alias: {
        '@': '/',
      }
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }
})

