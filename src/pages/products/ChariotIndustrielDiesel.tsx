import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-industriel-diesel.jpg";

const ChariotIndustrielDiesel = () => {
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
      title="Location Chariot Industriel Diesel (Fenwick) jusqu'à 16T | EAP Location"
      description="Location chariot industriel diesel de 1,5T à 16T. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot industriel diesel, fenwick diesel, location chariot élévateur, location matériel BTP"
      canonicalUrl="/manutention/chariot-industriel-diesel"
      heroTitle="Chariot Industriel"
      heroHighlight="Diesel"
      heroSubtitle="De 1,5T à 16T. Location courte ou longue durée, partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot industriel diesel"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Industriel Diesel"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotIndustrielDiesel;
