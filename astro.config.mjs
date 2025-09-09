import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import vercel from "@astrojs/vercel";

export default defineConfig({
    site: 'https://welcomecure-corporate.vercel.app',
    output: "server",
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