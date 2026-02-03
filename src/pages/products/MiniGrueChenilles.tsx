import ProductTemplate from "@/components/products/ProductTemplate";
import heroImage from "@/assets/products/mini-grue-chenilles.jpg";

const MiniGrueChenilles = () => {
  const products = [
    { label: "5T - 20m", value: "5T-20m" },
    { label: "6T - 22m", value: "6T-22m" },
    { label: "6T - 24m", value: "6T-24m" },
    { label: "8T - 26m", value: "8T-26m" },
  ];

  return (
    <ProductTemplate
      title="Location Mini Grue Télescopique sur Chenilles | EAP Location"
      description="Location mini grue télescopique sur chenilles de 5T-20m à 8T-26m. Disponibilité 99%, devis en 2h, livraison partout en France."
      keywords="mini grue chenilles, grue télescopique, spider crane, levage, location matériel BTP"
      canonicalUrl="/manutention/mini-grue-chenilles"
      heroTitle="Mini Grue Télescopique"
      heroHighlight="Sur Chenilles"
      heroSubtitle="De 5T-20m à 8T-26m. Location courte ou longue durée. Partout en France."
      heroImage={heroImage}
      heroImageAlt="Mini grue télescopique sur chenilles"
      products={products}
      productSelectorTitle="Quelle configuration pour votre chantier ?"
      productSelectorSubtitle="Sélectionnez et obtenez un devis immédiat"
      productNamePrefix="Mini Grue Chenilles"
      category="manutention"
      categoryLabel="Manutention"
    />
  );
};

export default MiniGrueChenilles;
