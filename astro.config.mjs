// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://www.reubenhu.my.id',
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: passthroughImageService()
  }
});