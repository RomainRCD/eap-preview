import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-gros-tonnage.jpg";

const ChariotGrosTonnage = () => {
  const products = [
    { label: "6T - 9m", value: "6T-9m" },
    { label: "7T - 10m", value: "7T-10m" },
    { label: "10T - 10m", value: "10T-10m" },
    { label: "14T - 10m", value: "14T-10m" },
    { label: "18T - 10m", value: "18T-10m" },
    { label: "21T - 11m", value: "21T-11m" },
    { label: "25T - 11m", value: "25T-11m" },
    { label: "33T - 12m", value: "33T-12m" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Télescopique Gros Tonnage 6T à 33T | EAP Location"
      description="Location chariot télescopique gros tonnage de 6T-9m à 33T-12m. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot télescopique gros tonnage, chariot 33 tonnes, manitou, merlo, location matériel BTP"
      canonicalUrl="/manutention/chariot-gros-tonnage"
      heroTitle="Chariot Télescopique"
      heroHighlight="Gros Tonnage"
      heroSubtitle="De 6T-9m à 33T-12m. Location courte ou longue durée. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot télescopique gros tonnage"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Gros Tonnage"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotGrosTonnage;
