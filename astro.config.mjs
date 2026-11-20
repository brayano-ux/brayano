// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL provisoire tant qu'aucun nom de domaine n'est connecté : définir PUBLIC_SITE_URL sur Vercel.
const site = process.env.PUBLIC_SITE_URL ?? 'https://brayano-service.vercel.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
