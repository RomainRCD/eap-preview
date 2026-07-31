// Données produits : src/data/products.json — SOURCE UNIQUE, éditée par l'outil Site de Pilot.
// Ce fichier ne contient que le typage et les helpers. Ne pas remettre les données ici.

import PRODUCTS_DATA from './products.json';

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
  description?: string[];
  /** Surcharges rédactionnelles d'une fiche historique (SEO + hero + titre du sélecteur).
   *  Champ ADMIN : l'outil Site de Pilot ne peut pas l'écrire (absent de sa liste blanche).
   *  Absent = ProductPage génère ces textes depuis name/spec/description. */
  page?: {
    title?: string; description?: string; keywords?: string;
    heroTitle?: string; heroHighlight?: string; heroSubtitle?: string;
    selectorTitle?: string; selectorSubtitle?: string;
    namePrefix?: string; imageAlt?: string;
  };
}

export const PRODUCTS: Record<string, ProductInfo> = PRODUCTS_DATA as Record<string, ProductInfo>;

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
