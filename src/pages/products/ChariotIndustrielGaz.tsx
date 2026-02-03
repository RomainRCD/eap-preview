import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-industriel-gaz.jpg";

const ChariotIndustrielGaz = () => {
  const products = [
    { label: "1,5T", value: "1,5T" },
    { label: "2,5T", value: "2,5T" },
    { label: "3,5T", value: "3,5T" },
    { label: "5T", value: "5T" },
    { label: "8T", value: "8T" },
    { label: "10T", value: "10T" },
    { label: "12T", value: "12T" },
    { label: "14T", value: "14T" },
    { label: "16T", value: "16T" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Industriel Gaz (GPL) jusqu'à 16T | EAP Location"
      description="Location chariot industriel gaz GPL de 1,5T à 16T. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot industriel gaz, fenwick gaz, chariot GPL, location chariot élévateur"
      canonicalUrl="/manutention/chariot-industriel-gaz"
      heroTitle="Chariot Industriel"
      heroHighlight="Gaz (GPL)"
      heroSubtitle="De 1,5T à 16T. Location courte ou longue durée, partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot industriel gaz"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Industriel Gaz"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotIndustrielGaz;
