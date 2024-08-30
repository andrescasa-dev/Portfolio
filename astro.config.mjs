import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), icon(), mdx()],
  vite: {
    define: {
      'process.env.ASTRO_DEVTOOLBAR_DISABLED': 'true',
    },
  },
});