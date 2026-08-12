// Pages produits. Toutes les fiches passent par ProductPage (données : src/data/products.json).
// ChariotRotatif garde une mise en page dédiée (formulaire multi-étapes), mais son CONTENU
// (titre, SEO, profondeur de gamme, options) vient de products.json comme toutes les autres.
export { default as ChariotRotatif } from './ChariotRotatif';
export { default as ProductPage } from './ProductPage';
