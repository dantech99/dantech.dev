import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// mdx integration
import mdx from '@astrojs/mdx';

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), sanity()],
  output: "server",
  adapter: vercel()
});