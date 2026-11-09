import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://almukhlis.ac.id',
  build: {
    assets: '_assets'
  }
});
