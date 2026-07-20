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
  variants?: { label: string; value: string }[];
  name: string;
  category: string;
  spec?: string;
  description?: string[];
}

export const PRODUCTS: Record<string, ProductInfo> = PRODUCTS_DATA as Record<string, ProductInfo>;
