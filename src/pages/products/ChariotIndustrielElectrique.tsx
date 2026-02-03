import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-industriel-electrique.jpg";

const ChariotIndustrielElectrique = () => {
  const products = [
    { label: "1,5T", value: "1,5T" },
    { label: "2,5T", value: "2,5T" },
    { label: "3,5T", value: "3,5T" },
    { label: "5T", value: "5T" },
    { label: "6T", value: "6T" },
    { label: "8T", value: "8T" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Industriel Électrique jusqu'à 8T | EAP Location"
      description="Location chariot industriel électrique de 1,5T à 8T. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot industriel électrique, fenwick électrique, chariot zéro émission, location chariot élévateur"
      canonicalUrl="/manutention/chariot-industriel-electrique"
      heroTitle="Chariot Industriel"
      heroHighlight="Électrique"
      heroSubtitle="De 1,5T à 8T. Location courte ou longue durée, partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot industriel électrique"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Industriel Électrique"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotIndustrielElectrique;
