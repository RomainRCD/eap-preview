import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/grue-mobile.jpg";

const GrueMobile = () => {
  const products = [
    { label: "35T", value: "35T" },
    { label: "40T", value: "40T" },
    { label: "50T", value: "50T" },
    { label: "60T", value: "60T" },
    { label: "70T", value: "70T" },
    { label: "80T", value: "80T" },
    { label: "100T", value: "100T" },
    { label: "130T", value: "130T" },
    { label: "160T", value: "160T" },
  ];

  return (
    <ProductTemplate
      title="Location Grue Mobile 35T à 160T | EAP Location"
      description="Location grue mobile de 35T à 160T. Avec grutier certifié. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="grue mobile, location grue, grue automotrice, levage, location matériel BTP"
      canonicalUrl="/manutention/grue-mobile"
      heroTitle="Grue Mobile"
      heroHighlight="35T à 160T"
      heroSubtitle="Avec grutier certifié. Location courte ou longue durée. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Grue mobile"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Grue Mobile"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default GrueMobile;
