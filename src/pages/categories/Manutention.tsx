import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const Manutention = () => {
  const products = [
    { name: "Chariot télescopique rotatif", slug: "chariot-rotatif", description: "Polyvalent 360°" },
    { name: "Chariot télescopique fixe", slug: "chariot-fixe", description: "Compact et maniable" },
    { name: "Chariot élévateur thermique", slug: "chariot-elevateur-thermique", description: "1,5T à 16T" },
    { name: "Chariot élévateur électrique", slug: "chariot-elevateur-electrique", description: "Silencieux" },
    { name: "Chariot tout terrain", slug: "chariot-tout-terrain", description: "4x4 chantier" },
    { name: "Gerbeur électrique", slug: "gerbeur", description: "Entrepôt" },
    { name: "Transpalette électrique", slug: "transpalette-electrique", description: "Manutention" },
    { name: "Transpalette manuel", slug: "transpalette-manuel", description: "Économique" },
    { name: "Grue auxiliaire", slug: "grue-auxiliaire", description: "Sur camion" },
    { name: "Mini grue araignée", slug: "mini-grue", description: "Levage intérieur" },
    { name: "Manipulateur télescopique", slug: "manipulateur", description: "Agriculture/BTP" },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Location Chariot Télescopique & Manutention | EAP Location"
        description="Location de chariots télescopiques, élévateurs et équipements de manutention. Rotatifs, fixes, thermiques ou électriques. Livraison France entière."
        keywords="location chariot télescopique, chariot élévateur, manutention, Manitou, Merlo"
        canonicalUrl="/manutention"
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Manutention</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="text-white/70 hover:text-white mb-4" asChild>
            <Link to="/catalogue">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au catalogue
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
            Manutention
          </h1>
          <p className="text-white/70 mt-2">
            {products.length} équipements disponibles à la location
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/manutention/${product.slug}`}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image à venir</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Manutention;
