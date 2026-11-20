// Génère public/og.png (1200 × 630), l'aperçu affiché lors d'un partage sur WhatsApp ou les réseaux sociaux.
// À relancer uniquement si le titre ou l'identité change : node scripts/og.mjs
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const font = (pkg, file) =>
  readFileSync(require.resolve(`@fontsource-variable/${pkg}/files/${file}`)).toString('base64');

const logo = readFileSync('src/assets/marque/logo-mark.png').toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Sora;src:url(data:font/woff2;base64,${font('sora', 'sora-latin-wght-normal.woff2')});font-weight:100 800}
@font-face{font-family:Inst;src:url(data:font/woff2;base64,${font('instrument-sans', 'instrument-sans-latin-wght-normal.woff2')});font-weight:400 700}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;color:#0a1a3a;font-family:Inst;
background:radial-gradient(900px 520px at 90% 0%,rgba(37,99,235,.2),transparent 62%),radial-gradient(620px 420px at 0% 100%,rgba(2,132,199,.12),transparent 62%),#ffffff}
.brand{display:flex;align-items:center;gap:18px;font:700 34px Sora;letter-spacing:-.03em}.brand span{font-weight:400;color:#44537a}
h1{font:600 76px/1.05 Sora;letter-spacing:-.035em;max-width:960px}
h1 b{font-weight:600;background:linear-gradient(100deg,#0284c7,#2563eb 55%,#6d5df6);-webkit-background-clip:text;color:transparent}
p{font-size:30px;color:#44537a}
</style></head><body>
<div class="brand"><img src="data:image/png;base64,${logo}" width="64" height="61" alt="">Brayano <span>Service</span></div>
<h1>Faites du numérique un <b>véritable levier</b> de croissance.</h1>
<p>Sites web · Publicité · Intelligence artificielle · Logiciels — Douala</p>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await browser.close();
console.log('public/og.png généré');
