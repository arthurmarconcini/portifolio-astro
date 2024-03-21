import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  image: {
    domains: ["avatars.githubusercontent.com", "github.com", "letsenhance.io"],
    remotePatterns: [{
      protocol: "https"
    }]
  },
  output: "server",
  adapter: netlify()
});