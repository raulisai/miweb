import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Enable Svelte 5 features
  compilerOptions: {
    enableSourcemap: true
  },
  preprocess: [
    vitePreprocess({
      // Enable TypeScript in Svelte files
      script: {
        // This enables type checking in Svelte files
        // and provides better IDE support
        compilerOptions: {
          // Any TypeScript compiler options
        }
      },
      // Enable PostCSS
      style: {
        postcss: true
      }
    })
  ],
  kit: {
    adapter: adapter(),
    // Enable TypeScript in Svelte files
    typescript: {
      // Enable type checking in Svelte files
      config: (config) => ({
        ...config,
        include: [...(config.include || []), 'src/**/*.d.ts', 'src/**/*.ts', 'src/**/*.js', 'src/**/*.svelte']
      })
    }
  }
};

export default config;
