import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/chariot-telescopique.jpg";

const ChariotTelescopique = () => {
  const products = [
    { label: "4m", value: "4m" },
    { label: "6m", value: "6m" },
    { label: "7m", value: "7m" },
    { label: "9m", value: "9m" },
    { label: "10m", value: "10m" },
    { label: "12m", value: "12m" },
    { label: "14m", value: "14m" },
    { label: "17m", value: "17m" },
    { label: "18m", value: "18m" },
  ];

  return (
    <ProductTemplate
      title="Location Chariot Télescopique Fixe 4m à 18m | EAP Location"
      description="Location chariot télescopique fixe de 4m à 18m. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="chariot télescopique, télescopique fixe, manitou, merlo, location matériel BTP"
      canonicalUrl="/manutention/chariot-telescopique"
      heroTitle="Chariot Télescopique"
      heroHighlight="Fixe - 4m à 18m"
      heroSubtitle="Location courte ou longue durée, avec ou sans opérateur. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Chariot télescopique fixe"
      products={products}
      productSelectorTitle="Quelle hauteur pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Chariot Télescopique Fixe"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default ChariotTelescopique;
