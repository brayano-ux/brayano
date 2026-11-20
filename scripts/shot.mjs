// Captures rapides : node shot.mjs <dossier> <largeur> <chemin...>
import { createRequire } from 'node:module';
import { preview } from 'astro';
const { chromium } = createRequire(import.meta.url)('playwright');
const [dir, width, ...paths] = process.argv.slice(2);
const server = await preview({ root: process.cwd(), logLevel: 'silent', server: { port: 4395 } });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +width, height: 900 }, reducedMotion: 'reduce' });
for (const path of paths) {
  await p.goto(`http://localhost:${server.port}${path}`, { waitUntil: 'networkidle' });
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 700) { await p.evaluate((t) => window.scrollTo(0, t), y); await p.waitForTimeout(60); }
  await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(250);
  await p.screenshot({ path: `${dir}/w${width}${path === '/' ? '-accueil' : path.replaceAll('/', '-')}.png`, fullPage: true });
}
await b.close(); await server.stop();
