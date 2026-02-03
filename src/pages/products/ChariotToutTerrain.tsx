import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-tout-terrain.jpg";

const ChariotToutTerrain = () => {
  const products = [
    { label: "4x2 - 2T", value: "4x2 2T" },
    { label: "4x2 - 2,5T", value: "4x2 2,5T" },
    { label: "4x2 - 3,5T", value: "4x2 3,5T" },
    { label: "4x4 - 2,5T", value: "4x4 2,5T" },
    { label: "4x4 - 3,5T", value: "4x4 3,5T" },
    { label: "4x4 - 5T", value: "4x4 5T" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Tout Terrain 4x2 et 4x4 | EAP Location"
      description="Location chariot tout terrain 4x2 ou 4x4, de 2T à 5T. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot tout terrain, chariot 4x4, location chariot élévateur, manutention chantier"
      canonicalUrl="/manutention/chariot-tout-terrain"
      heroTitle="Chariot Tout Terrain"
      heroHighlight="4x2 ou 4x4"
      heroSubtitle="De 2T à 5T. Location courte ou longue durée, partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot tout terrain"
      products={products}
      productSelectorTitle="Quelle configuration pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Tout Terrain"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotToutTerrain;
