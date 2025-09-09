// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    site: 'https://welcomecure-corporate.vercel.app',
    output: "static",
    adapter: vercel({}),
    integrations: [
        react(),
        sitemap({ filter: (page) => page !== '/404' }),
        robotsTxt({
            sitemap: true,
            policy: [{ userAgent: '*', disallow: '/' }],
        })],
    vite: { plugins: [tailwindcss()] }
});