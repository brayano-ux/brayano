// Génère public/og.png (1200 × 630), l'aperçu affiché lors d'un partage sur WhatsApp ou les réseaux sociaux.
// À relancer uniquement si le titre ou l'identité change : node scripts/og.mjs
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const font = (pkg, file) =>
  readFileSync(require.resolve(`@fontsource-variable/${pkg}/files/${file}`)).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Sora;src:url(data:font/woff2;base64,${font('sora', 'sora-latin-wght-normal.woff2')});font-weight:100 800}
@font-face{font-family:Inst;src:url(data:font/woff2;base64,${font('instrument-sans', 'instrument-sans-latin-wght-normal.woff2')});font-weight:400 700}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;color:#eef1f7;font-family:Inst;
background:radial-gradient(900px 520px at 88% 0%,rgba(61,134,255,.38),transparent 62%),radial-gradient(620px 420px at 0% 100%,rgba(130,114,255,.2),transparent 62%),#060a13}
.brand{display:flex;align-items:center;gap:18px;font:700 34px Sora;letter-spacing:-.03em}.brand span{font-weight:400;color:#a6b0c6}
h1{font:600 76px/1.05 Sora;letter-spacing:-.035em;max-width:960px}
h1 b{font-weight:600;background:linear-gradient(100deg,#45d6ff,#3d86ff 60%,#8272ff);-webkit-background-clip:text;color:transparent}
p{font-size:30px;color:#a6b0c6}
</style></head><body>
<div class="brand"><svg width="60" height="60" viewBox="0 0 36 36"><defs><linearGradient id="g" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#45d6ff"/><stop offset=".55" stop-color="#3d86ff"/><stop offset="1" stop-color="#5a5cf0"/></linearGradient></defs><rect width="36" height="36" rx="10" fill="url(#g)"/><path d="M12.5 9.5h7a4.25 4.25 0 0 1 0 8.5h-7m0 0h8.25a4.25 4.25 0 0 1 0 8.5H12.5Zm0-17v17" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="27.5" cy="9" r="2" fill="#fff"/></svg>Brayano <span>Service</span></div>
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
