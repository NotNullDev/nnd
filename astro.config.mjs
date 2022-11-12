import { defineConfig } from "astro/config";
import remarkReadingTime from "./rehype-reading-time";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  markdown: {
    // remarkPlugins: [remarkReadingTime],
    rehypePlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  site: "https://notnulldev.com",
});
