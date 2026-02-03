import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/mini-grue-araignee.jpg";

const MiniGrueAraignee = () => {
  const products = [
    { label: "3T", value: "3T" },
    { label: "3,5T", value: "3,5T" },
    { label: "4T", value: "4T" },
  ];

  return (
    <ProductTemplate
      title="Location Mini Grue Araignée 3T à 4T | EAP Location"
      description="Location mini grue araignée de 3T à 4T. Idéale pour espaces restreints. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="mini grue araignée, spider crane, grue compacte, levage intérieur, location matériel BTP"
      canonicalUrl="/manutention/mini-grue-araignee"
      heroTitle="Mini Grue"
      heroHighlight="Araignée"
      heroSubtitle="De 3T à 4T. Idéale pour espaces restreints. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Mini grue araignée"
      products={products}
      productSelectorTitle="Quelle capacité pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Mini Grue Araignée"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default MiniGrueAraignee;
