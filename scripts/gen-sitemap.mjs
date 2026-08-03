// Génère public/sitemap.xml à partir de src/data/products.json et de la table de routes.
// Lancé automatiquement avant chaque build (script "prebuild"), donc jamais périmé :
// une fiche ajoutée ou supprimée depuis l'outil Site de Pilot est répercutée au déploiement suivant.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.eap-location.fr';
const products = JSON.parse(readFileSync(join(root, 'src/data/products.json'), 'utf-8'));

const CATEGORIES = ['terrassement', 'travail-en-hauteur', 'manutention', 'compactage', 'base-vie', 'autres'];
const today = new Date().toISOString().slice(0, 10);

// Google ignore <priority> et <changefreq> : on ne met que <loc> et <lastmod>.
const urls = [
  '/',
  '/catalogue',
  ...CATEGORIES.map((c) => `/${c}`),
  ...Object.keys(products).sort().map((slug) => `/${products[slug].category}/${slug}`),
  '/contact',
  '/mentions-legales',
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml, 'utf-8');
console.log(`sitemap.xml : ${urls.length} URLs (${Object.keys(products).length} fiches produits)`);
