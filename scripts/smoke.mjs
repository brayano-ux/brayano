// Contrôle du site construit dans un vrai navigateur : toutes les pages du sitemap, erreurs de console,
// images cassées, débordement horizontal, liens internes, liens WhatsApp, menu mobile et formulaire de devis.
// Usage : npm run build && npm run smoke
import { createRequire } from 'node:module';
import { preview } from 'astro';
import { mkdirSync, readFileSync } from 'node:fs';

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
// Les pages contrôlées sont celles du sitemap généré, plus la page 404.
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname.replace(/(.)\/$/, '$1'));
pages.push('/404');
const internalLinks = new Set();
const problems = [];

const server = await preview({ root: process.cwd(), logLevel: 'silent', server: { port: 4391 } });
const base = `http://localhost:${server.port}`;
const browser = await chromium.launch();
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const checkViewport = async (vp) => {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on('console', (m) => m.type() === 'error' && problems.push(`[${vp.name}] console : ${m.text()}`));
  page.on('pageerror', (e) => problems.push(`[${vp.name}] exception : ${e.message}`));
  page.on('requestfailed', (r) => problems.push(`[${vp.name}] requête échouée : ${r.url()}`));

  for (const path of pages) {
    const res = await page.goto(base + path, { waitUntil: 'networkidle' });
    if (path !== '/404' && res.status() !== 200) problems.push(`[${vp.name}] ${path} → ${res.status()}`);

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
      internal: [...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href')),
      smallTargets: [...document.querySelectorAll('a, button')]
        // Critère WCAG 2.5.8 : les liens insérés dans une phrase sont exemptés de la taille minimale.
        .filter((e) => getComputedStyle(e).display !== 'inline')
        .filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && (r.height < 24 || r.width < 24); })
        .map((e) => e.textContent.trim().slice(0, 40)),
    }));

    if (report.overflow > 0) problems.push(`[${vp.name}] ${path} débordement horizontal de ${report.overflow}px`);
    if (report.brokenImages.length) problems.push(`[${vp.name}] ${path} images cassées : ${report.brokenImages.join(', ')}`);
    if (report.hidden) problems.push(`[${vp.name}] ${path} ${report.hidden} bloc(s) restés invisibles après défilement`);
    if (report.h1 !== 1) problems.push(`[${vp.name}] ${path} ${report.h1} balise(s) h1`);
    if (report.anchors.length) problems.push(`[${vp.name}] ${path} ancres sans cible : ${report.anchors.join(', ')}`);
    if (report.smallTargets.length) problems.push(`[${vp.name}] ${path} cibles trop petites : ${report.smallTargets.join(' | ')}`);
    report.internal.forEach((href) => internalLinks.add(href.split('#')[0].split('?')[0] || '/'));
    for (const href of report.whatsapp) {
      const url = new URL(href);
      if (url.pathname !== '/237683260520' || !url.searchParams.get('text')) problems.push(`[${vp.name}] lien WhatsApp invalide : ${href}`);
    }
    if (path === '/' && report.whatsapp.length < 5) problems.push(`[${vp.name}] trop peu de liens WhatsApp (${report.whatsapp.length})`);

    if (SHOTS) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      await page.screenshot({ path: `${SHOTS}/${vp.name}${path === '/' ? '-accueil' : path.replaceAll('/', '-')}.png`, fullPage: true });
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
};
await Promise.all(viewports.map(checkViewport));

// Sans JavaScript, tout le contenu doit rester lisible.
const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
const p = await noJs.newPage();
await p.goto(base + '/');
const invisible = await p.evaluate(() => [...document.querySelectorAll('[data-reveal], .msg')].filter((e) => getComputedStyle(e).opacity === '0').length);
if (invisible) problems.push(`sans JavaScript : ${invisible} bloc(s) invisibles`);
await noJs.close();

// Chaque lien interne rencontré doit mener à une page existante.
{
  const context = await browser.newContext();
  for (const href of internalLinks) {
    const res = await context.request.get(base + href);
    if (res.status() !== 200) problems.push(`lien interne cassé : ${href} → ${res.status()}`);
  }
  await context.close();
}

// Formulaire de devis : erreurs accessibles, puis message et lien WhatsApp corrects.
for (const width of [390, 1280]) {
  const context = await browser.newContext({ viewport: { width, height: 844 } });
  const page = await context.newPage();
  await page.addInitScript(() => { window.__opened = []; window.open = (url) => { window.__opened.push(url); return null; }; });
  await page.goto(base + '/contact?service=publicite', { waitUntil: 'networkidle' });
  const tag = `[formulaire ${width}px]`;
  if (await page.locator('[data-quote-done]').isVisible()) problems.push(`${tag} la confirmation est visible avant tout envoi`);
  if ((await page.locator('#q-service').inputValue()) !== 'Publicité Facebook et Instagram') problems.push(`${tag} service non présélectionné depuis l'URL`);
  await page.locator('#q-service').selectOption('');

  await page.locator('[data-quote-form] button[type=submit]').click();
  const invalid = await page.locator('[aria-invalid="true"]').count();
  if (invalid !== 4) problems.push(`${tag} ${invalid} champ(s) en erreur au lieu de 4 sur un envoi vide`);
  if (!(await page.locator('#q-name-err').isVisible())) problems.push(`${tag} message d'erreur du nom invisible`);
  if ((await page.evaluate(() => document.activeElement?.id)) !== 'q-name') problems.push(`${tag} le focus ne va pas au premier champ en erreur`);
  if ((await page.evaluate(() => window.__opened.length)) !== 0) problems.push(`${tag} WhatsApp ouvert malgré des erreurs`);
  if (SHOTS && width === 390) await page.screenshot({ path: `${SHOTS}/formulaire-erreurs.png`, fullPage: true });

  await page.fill('#q-name', 'Awa Ngono');
  if (await page.locator('#q-name-err').isVisible()) problems.push(`${tag} l'erreur ne disparaît pas après correction`);
  await page.fill('#q-phone', '6 99 00 11 22');
  await page.locator('#q-service').selectOption({ label: 'Création de sites web' });
  await page.fill('#q-description', 'Un site pour ma boutique à Akwa, avec « catalogue » & prix.');
  await page.fill('#q-budget', '150 000 FCFA');
  await page.locator('[data-quote-form] button[type=submit]').click();

  if (!(await page.locator('[data-quote-done]').isVisible())) problems.push(`${tag} état de confirmation absent`);
  if (await page.locator('[data-quote-form]').isVisible()) problems.push(`${tag} le formulaire reste affiché après validation`);
  const recap = await page.locator('[data-quote-recap]').inputValue();
  for (const part of ['Nom : Awa Ngono', 'Service : Création de sites web', 'Budget indicatif : 150 000 FCFA', '« catalogue » & prix']) {
    if (!recap.includes(part)) problems.push(`${tag} récapitulatif incomplet : « ${part} »`);
  }
  const href = await page.locator('[data-quote-wa]').getAttribute('href');
  const wa = new URL(href);
  if (wa.pathname !== '/237683260520' || wa.searchParams.get('text') !== recap) problems.push(`${tag} lien WhatsApp du devis incorrect`);
  const opened = await page.evaluate(() => window.__opened);
  if (opened.length !== 1 || opened[0] !== href) problems.push(`${tag} ouverture de WhatsApp non déclenchée`);
  if (!(await page.locator('[data-quote-mail]').getAttribute('href')).includes('body=')) problems.push(`${tag} lien e-mail sans message`);
  if (SHOTS && width === 390) await page.screenshot({ path: `${SHOTS}/formulaire-confirmation.png`, fullPage: true });

  await page.locator('[data-quote-edit]').click();
  if ((await page.inputValue('#q-name')) !== 'Awa Ngono') problems.push(`${tag} la saisie est perdue en revenant au formulaire`);
  await context.close();
}

await browser.close();
await server.stop();

if (problems.length) {
  console.error(`✗ ${problems.length} problème(s)\n` + [...new Set(problems)].join('\n'));
  process.exit(1);
}
console.log(`✓ ${pages.length} pages × ${viewports.length} formats, ${internalLinks.size} liens internes et le formulaire de devis contrôlés : aucun problème détecté`);
