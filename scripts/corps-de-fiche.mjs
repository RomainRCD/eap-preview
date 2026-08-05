// Branche le corps rédactionnel et la FAQ dans ProductTemplate.tsx.
//
// Pourquoi un script et pas l'édition directe du fichier : l'outillage qui
// pousse ce dépôt ne sait écrire que des fichiers entiers, et ProductTemplate
// fait plus de mille lignes dont tout le formulaire de devis. Retranscrire ce
// fichier pour y insérer quatre blocs serait un risque disproportionné.
//
// Le script est idempotent : il ne fait rien si les insertions sont déjà là, et
// il échoue bruyamment si une ancre a bougé — jamais d'insertion approximative.
// Il est appelé par `prebuild`. La première personne qui lance un build en local
// n'a plus qu'à valider ProductTemplate.tsx : le script devient alors un
// no-op et ce fichier peut être supprimé, ainsi que son appel dans package.json.

import { readFileSync, writeFileSync } from 'node:fs';

const CHEMIN = 'src/components/products/ProductTemplate.tsx';
let source = readFileSync(CHEMIN, 'utf-8');
let faites = 0;

function inserer(ancre, remplacement) {
  if (source.includes(remplacement)) return;
  const n = source.split(ancre).length - 1;
  if (n !== 1) {
    console.error(`[corps-de-fiche] ancre introuvable ou ambiguë (${n} occurrences) : ${ancre.slice(0, 60)}`);
    process.exit(1);
  }
  source = source.replace(ancre, remplacement);
  faites++;
}

inserer(
  'import SEOHead from "@/components/SEOHead";\n',
  'import SEOHead from "@/components/SEOHead";\n' +
  'import ProductContent from "@/components/products/ProductContent";\n' +
  'import ProductFaq from "@/components/products/ProductFaq";\n'
);

inserer(
  'const trustLogos = [',
  '/** « Benne DIB » → « benne DIB » : on minuscule le premier mot pour l\'insérer\n' +
  ' *  dans une phrase, sauf si c\'est un sigle (WC, GNR…) qui doit rester lisible. */\n' +
  'const enPhrase = (nom: string) =>\n' +
  '  nom.split(" ").map((mot, i) => (i === 0 && !/^[A-Z]{2,}$/.test(mot) ? mot.toLowerCase() : mot)).join(" ");\n' +
  '\n' +
  'const trustLogos = ['
);

inserer(
  '  const longDescription = PRODUCTS[slug]?.description;',
  '  const fiche = PRODUCTS[slug];\n' +
  '  const longDescription = fiche?.description ?? [];\n' +
  '  const faq = fiche?.faq ?? [];'
);

inserer(
  '      {/* Why Choose Us - Impact */}',
  '      {/* Corps rédactionnel de la fiche (products.json, champ `description`) */}\n' +
  '      <ProductContent\n' +
  '        lignes={longDescription}\n' +
  '        titre={PRODUCTS[slug]?.page?.contentTitle ?? `Tout savoir sur la location de ${enPhrase(fiche?.name ?? productNamePrefix)}`}\n' +
  '        spec={fiche?.spec}\n' +
  '        nbVariantes={products.length}\n' +
  '      />\n' +
  '\n' +
  '      {/* Why Choose Us - Impact */}'
);

inserer(
  '      <section id="devis" className="py-10 md:py-16 lg:py-24 bg-secondary">',
  '      <ProductFaq items={faq} />\n' +
  '\n' +
  '      <section id="devis" className="py-10 md:py-16 lg:py-24 bg-secondary">'
);

if (faites) {
  writeFileSync(CHEMIN, source, 'utf-8');
  console.log(`[corps-de-fiche] ${faites} insertion(s) appliquée(s) dans ProductTemplate.tsx`);
} else {
  console.log('[corps-de-fiche] déjà en place, rien à faire');
}
