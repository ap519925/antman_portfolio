import { defineConfig } from 'astro/config';

// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import svelte from '@astrojs/svelte';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    svelte(),
    sentry(),
    spotlightjs()
  ]
});