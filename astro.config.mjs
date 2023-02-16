import { defineConfig } from 'astro/config';

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'http://mtanthony.com/',
  output: "server",
  adapter: cloudflare()
});