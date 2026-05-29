import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import enapterTheme from "@enapter/design-theme/astro"
import partytown from '@astrojs/partytown';

import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), enapterTheme(), partytown(), sitemap()],
  site: "https://fw.enapter.com/",
  output: "static",
});