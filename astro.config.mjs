// import { defineConfig } from 'astro/config';

// import react from '@astrojs/react';

// import tailwindcss from '@tailwindcss/vite';

// import sitemap from '@astrojs/sitemap';

// import robotsTxt from 'astro-robots-txt';

// import vercel from "@astrojs/vercel/static";

// export default defineConfig({
//     site: 'https://welcomecure-corporate.com',
//     output: "server",
//     adapter: vercel(),
//     integrations: [
//         react(),
//         sitemap({ filter: (page) => page !== '/404' }),
//         robotsTxt({
//             sitemap: true,
//             policy: [{ userAgent: '*', disallow: '/' }],
//         })],
//     vite: { plugins: [tailwindcss()] }
// });

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// 👇 use the serverless adapter (not static!)
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://welcomecure-corporate.com",
  output: "server", // SSR required for Tina
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({ filter: (page) => page !== "/404" }),
    robotsTxt({
      sitemap: true,
      policy: [{ userAgent: "*", disallow: "/" }],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
