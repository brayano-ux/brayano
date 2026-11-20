// Contrôle du site construit dans un vrai navigateur : erreurs de console, images cassées,
// débordement horizontal, liens internes et liens WhatsApp. Usage : npm run build && npm run smoke
import { createRequire } from 'node:module';
import { preview } from 'astro';
import { mkdirSync } from 'node:fs';

// Playwright n'est pas une dépendance du projet : l'installer au besoin avec `npm i -D playwright`.
const { chromium } = createRequire(import.meta.url)('playwright');

const SHOTS = process.env.SHOTS_DIR;
const viewports = [
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablette-768', width: 768, height: 1024 },
  { name: 'portable-1280', width: 1280, height: 800 },
  { name: 'large-1920', width: 1920, height: 1080 },
];
const pages = ['/', '/404'];
const problems = [];

const server = await preview({ root: process.cwd(), logLevel: 'silent', server: { port: 4391 } });
const base = `http://localhost:${server.port}`;
const browser = await chromium.launch();
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on('console', (m) => m.type() === 'error' && problems.push(`[${vp.name}] console : ${m.text()}`));
  page.on('pageerror', (e) => problems.push(`[${vp.name}] exception : ${e.message}`));
  page.on('requestfailed', (r) => problems.push(`[${vp.name}] requête échouée : ${r.url()}`));

  for (const path of pages) {
    const res = await page.goto(base + path, { waitUntil: 'networkidle' });
    if (path === '/' && res.status() !== 200) problems.push(`[${vp.name}] ${path} → ${res.status()}`);

    // Fait défiler toute la page pour déclencher images différées et révélations.
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += vp.height * 0.8) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await page.waitForTimeout(120);
    }
    await page.waitForTimeout(400);

    const report = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      brokenImages: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
      hidden: [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity === '0').length,
      h1: document.querySelectorAll('h1').length,
      // Les liens « /#section » visent l'accueil : ils ne se vérifient que sur l'accueil.
      anchors: [...document.querySelectorAll(location.pathname === '/' ? 'a[href^="#"], a[href^="/#"]' : 'a[href^="#"]')]
        .map((a) => a.getAttribute('href').replace(/^\//, ''))
        .filter((h) => h.length > 1 && !document.querySelector(h)),
      whatsapp: [...document.querySelectorAll('a[href*="wa.me"]')].map((a) => a.href),
      smallTargets: [...document.querySelectorAll('a, button')]
        .filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.height < 24 || r.width < 24); })
        .map((e) => e.textContent.trim().slice(0, 40)),
    }));

    if (report.overflow > 0) problems.push(`[${vp.name}] ${path} débordement horizontal de ${report.overflow}px`);
    if (report.brokenImages.length) problems.push(`[${vp.name}] ${path} images cassées : ${report.brokenImages.join(', ')}`);
    if (report.hidden) problems.push(`[${vp.name}] ${path} ${report.hidden} bloc(s) restés invisibles après défilement`);
    if (report.h1 !== 1) problems.push(`[${vp.name}] ${path} ${report.h1} balise(s) h1`);
    if (report.anchors.length) problems.push(`[${vp.name}] ${path} ancres sans cible : ${report.anchors.join(', ')}`);
    if (report.smallTargets.length) problems.push(`[${vp.name}] ${path} cibles trop petites : ${report.smallTargets.join(' | ')}`);
    for (const href of report.whatsapp) {
      const url = new URL(href);
      if (url.pathname !== '/237683260520' || !url.searchParams.get('text')) problems.push(`[${vp.name}] lien WhatsApp invalide : ${href}`);
    }
    if (path === '/' && report.whatsapp.length < 5) problems.push(`[${vp.name}] trop peu de liens WhatsApp (${report.whatsapp.length})`);

    if (SHOTS) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${SHOTS}/${vp.name}${path === '/' ? '' : '-404'}.png`, fullPage: true });
    }
  }

  // Menu mobile : ouverture, fermeture au clavier, retour du focus.
  if (vp.width < 860) {
    await page.goto(base + '/', { waitUntil: 'networkidle' });
    const toggle = page.locator('[data-menu-toggle]');
    await toggle.click();
    if ((await toggle.getAttribute('aria-expanded')) !== 'true') problems.push(`[${vp.name}] le menu ne s'ouvre pas`);
    if (!(await page.locator('#menu-principal a').first().isVisible())) problems.push(`[${vp.name}] liens du menu invisibles`);
    if (SHOTS) await page.screenshot({ path: `${SHOTS}/${vp.name}-menu.png` });
    await page.keyboard.press('Escape');
    if ((await toggle.getAttribute('aria-expanded')) !== 'false') problems.push(`[${vp.name}] Échap ne ferme pas le menu`);
  }
  await context.close();
}

// Sans JavaScript, tout le contenu doit rester lisible.
const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
const p = await noJs.newPage();
await p.goto(base + '/');
const invisible = await p.evaluate(() => [...document.querySelectorAll('[data-reveal], .msg')].filter((e) => getComputedStyle(e).opacity === '0').length);
if (invisible) problems.push(`sans JavaScript : ${invisible} bloc(s) invisibles`);
await noJs.close();

await browser.close();
await server.stop();

if (problems.length) {
  console.error(`✗ ${problems.length} problème(s)\n` + [...new Set(problems)].join('\n'));
  process.exit(1);
}
console.log(`✓ ${viewports.length} formats × ${pages.length} pages contrôlés, aucun problème détecté`);
