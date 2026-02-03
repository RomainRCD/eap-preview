import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/gerbeur-transpalette.jpg";

const GerbeurTranspalette = () => {
  const products = [
    { label: "Transpalette manuel", value: "Transpalette manuel" },
    { label: "Transpalette électrique", value: "Transpalette électrique" },
    { label: "Gerbeur manuel", value: "Gerbeur manuel" },
    { label: "Gerbeur électrique", value: "Gerbeur électrique" },
    { label: "Gerbeur à mât rétractable", value: "Gerbeur mât rétractable" },
  ];

  return (
    <ProductTemplate
      title="Location Gerbeur et Transpalette | EAP Location"
      description="Location gerbeur et transpalette : manuel ou électrique. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="gerbeur, transpalette, transpalette électrique, manutention légère, location matériel"
      canonicalUrl="/manutention/gerbeur-transpalette"
      heroTitle="Gerbeur"
      heroHighlight="& Transpalette"
      heroSubtitle="Manuel ou électrique. Manutention légère. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Gerbeur et transpalette"
      products={products}
      productSelectorTitle="Quel équipement pour votre besoin ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix=""
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default GerbeurTranspalette;
