// Données produits : src/data/products.json — SOURCE UNIQUE, éditée par l'outil Site de Pilot.
// Ce fichier ne contient que le typage et les helpers. Ne pas remettre les données ici.

import PRODUCTS_DATA from './products.json';
import REDACTION from './fiches-redaction.json';

const images = import.meta.glob('../assets/products/*.{webp,jpg,jpeg,png}', { eager: true, import: 'default' }) as Record<string, string>;
const EXTS = ['webp', 'jpg', 'jpeg', 'png'];
export const productImage = (slug: string): string | undefined => {
  for (const ext of EXTS) {
    const img = images[`../assets/products/${slug}.${ext}`];
    if (img) return img;
  }
  return undefined;
};

export interface ProductInfo {
  name: string;
  category: string;
  spec?: string;
  /** PROFONDEUR DE GAMME : les déclinaisons de la machine elle-même (tonnage, hauteur,
   *  capacité, nb de personnes...). Une variante = un choix possible dans le sélecteur de devis. */
  variants?: { label: string; value: string }[];
  /** OPTIONS / ACCESSOIRES : équipements ajoutables à la machine (BRH, pince de tri, fourches...).
   *  Affichés en bloc « Options disponibles », indicatifs, JAMAIS dans le sélecteur de devis.
   *  Ne jamais mettre une option dans variants (et inversement). */
  options?: string[];
  /** Corps rédactionnel de la fiche, affiché par ProductContent.
   *  Une ligne = un bloc : « **Intertitre :** », « - puce », ou un paragraphe. */
  description?: string[];
  /** Questions fréquentes affichées en bas de fiche et balisées en FAQPage. */
  faq?: { q: string; a: string }[];
  /** Textes AFFICHÉS et SEO de la fiche (hero, balises, titre du sélecteur).
   *  Écrit par l'outil Site de Pilot depuis site-agent v11 (fusion sous-champ par sous-champ).
   *  C'est ici que vit « le titre » au sens de l'utilisateur : heroTitle + heroHighlight.
   *  Absent = ProductPage génère ces textes depuis name/spec/description. */
  page?: {
    title?: string; description?: string; keywords?: string;
    heroTitle?: string; heroHighlight?: string; heroSubtitle?: string;
    selectorTitle?: string; selectorSubtitle?: string; contentTitle?: string;
    namePrefix?: string; imageAlt?: string;
  };
}

/**
 * Surcharges rédactionnelles administrateur — `fiches-redaction.json`.
 *
 * products.json reste la source unique alimentée par l'outil Site de Pilot.
 * Ce fichier-ci porte les fiches retravaillées à la main (corps de page, FAQ,
 * balises SEO), dans le même esprit que le champ `page` : hors périmètre de
 * l'outil, donc jamais écrasé par lui. La surcharge est prioritaire, champ par
 * champ. Quand l'outil saura écrire ces champs, le contenu redescendra dans
 * products.json et l'entrée correspondante disparaîtra d'ici.
 */
const SURCHARGES = REDACTION as Record<string, Partial<ProductInfo>>;

export const PRODUCTS: Record<string, ProductInfo> = Object.fromEntries(
  Object.entries(PRODUCTS_DATA as Record<string, ProductInfo>).map(([slug, fiche]) => [
    slug,
    SURCHARGES[slug] ? { ...fiche, ...SURCHARGES[slug] } : fiche,
  ])
);

export interface CategoryProduct {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

// Liste des produits d'une catégorie, pilotée par products.json (source unique).
// preferredOrder fixe l'ordre d'affichage des produits historiques ; tout produit
// absent de cette liste (nouveau produit, changement de catégorie) est ajouté à la fin.
export const categoryProducts = (category: string, preferredOrder: string[] = []): CategoryProduct[] =>
  Object.entries(PRODUCTS)
    .filter(([, p]) => p.category === category)
    .sort(([a], [b]) => {
      const ia = preferredOrder.indexOf(a);
      const ib = preferredOrder.indexOf(b);
      return (ia === -1 ? preferredOrder.length : ia) - (ib === -1 ? preferredOrder.length : ib);
    })
    .map(([slug, p]) => ({ slug, name: p.name, description: p.spec ?? "", image: productImage(slug) }));

export const categoryCount = (category: string): number =>
  Object.values(PRODUCTS).filter((p) => p.category === category).length;
