// Prérend en HTML statique toutes les pages du sitemap.
//
// Pourquoi : le site est une SPA. Sans prérendu, le HTML servi ne contient ni
// titre, ni description, ni contenu — tout arrive après exécution du JavaScript.
// Google finit par exécuter le JS, mais en second passage et avec du retard :
// début août 2026, la seule fiche indexée l'était sous le titre générique de
// index.html. Ici, chaque page est rendue au build avec ses vraies balises et
// son vrai contenu ; le navigateur hydrate ensuite (voir src/main.tsx).
//
// Chaîne : vite build (client) -> vite build --ssr (entry-server) -> ce script.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(root, 'dist');
const SSR_ENTRY = join(root, 'dist-ssr/entry-server.js');

if (!existsSync(SSR_ENTRY)) {
  console.error(`[prerender] ${SSR_ENTRY} introuvable — le build SSR n'a pas tourné.`);
  process.exit(1);
}

const { render } = await import(pathToFileURL(SSR_ENTRY).href);

// Les routes à prérendre sont EXACTEMENT celles du sitemap : une seule source.
const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf-8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/www\.eap-location\.fr([^<]*)<\/loc>/g)].map(
  (m) => m[1] || '/'
);

// Routes réelles volontairement absentes du sitemap (pas à indexer, mais qui
// doivent exister en statique sinon elles répondraient 404).
const EXTRA_ROUTES = ['/devis'];
for (const r of EXTRA_ROUTES) if (!routes.includes(r)) routes.push(r);

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');
const START = '<!--seo-defaults-start-->';
const END = '<!--seo-defaults-end-->';
if (!template.includes(START) || !template.includes(END)) {
  console.error('[prerender] marqueurs SEO absents de dist/index.html.');
  process.exit(1);
}

let done = 0;
const failures = [];

for (const route of routes) {
  try {
    const { html, head } = render(route);
    if (!html || html.length < 500) throw new Error(`rendu vide ou trop court (${html.length} caractères)`);
    if (!head.includes('<title')) throw new Error('aucune balise title produite');

    const before = template.slice(0, template.indexOf(START));
    const after = template.slice(template.indexOf(END) + END.length);
    const page = (before + head + after).replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    const dir = route === '/' ? DIST : join(DIST, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), page, 'utf-8');
    done++;
  } catch (e) {
    failures.push(`${route} : ${e.message}`);
  }
}

// Page 404 : servie par la règle de repli de public/_redirects pour toute URL
// inconnue. Elle porte noindex (voir src/pages/NotFound.tsx), ce qui évite que
// Google indexe des pages vides — l'hébergement ne sachant pas distinguer une
// URL valide d'une URL morte.
try {
  const { html, head } = render('/url-inexistante-generateur-de-404');
  if (!head.includes('noindex')) throw new Error("la page 404 ne porte pas noindex");
  const before = template.slice(0, template.indexOf(START));
  const after = template.slice(template.indexOf(END) + END.length);
  writeFileSync(
    join(DIST, '404.html'),
    (before + head + after).replace('<div id="root"></div>', `<div id="root">${html}</div>`),
    'utf-8'
  );
} catch (e) {
  failures.push(`404.html : ${e.message}`);
}

if (failures.length) {
  console.error(`[prerender] ${failures.length} page(s) en échec :`);
  failures.forEach((f) => console.error('  - ' + f));
  process.exit(1);
}
console.log(`[prerender] ${done} pages prérendues sur ${routes.length}`);
