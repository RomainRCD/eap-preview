import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-semi-industriel.jpg";

const ChariotSemiIndustriel = () => {
  const products = [
    { label: "2T", value: "2T" },
    { label: "2,5T", value: "2,5T" },
    { label: "3T", value: "3T" },
    { label: "3,5T", value: "3,5T" },
    { label: "4T", value: "4T" },
    { label: "5T", value: "5T" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Semi-Industriel 2T à 5T | EAP Location"
      description="Location chariot semi-industriel de 2T à 5T. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot semi-industriel, location chariot élévateur, manutention, location matériel BTP"
      canonicalUrl="/manutention/chariot-semi-industriel"
      heroTitle="Chariot Semi-Industriel"
      heroHighlight="2T à 5T"
      heroSubtitle="Location courte ou longue durée, partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot semi-industriel"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Semi-Industriel"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotSemiIndustriel;
