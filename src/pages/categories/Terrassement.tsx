import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const Terrassement = () => {
  const products = [
    { name: "Mini-pelle", slug: "mini-pelle", description: "De 0,8T à 8T" },
    { name: "Pelle sur chenilles", slug: "pelle-chenilles", description: "De 10T à 50T" },
    { name: "Pelle sur pneus", slug: "pelle-pneus", description: "De 10T à 25T" },
    { name: "Chargeuse sur pneus", slug: "chargeuse-pneus", description: "De 1m³ à 5m³" },
    { name: "Chargeuse sur chenilles", slug: "chargeuse-chenilles", description: "Compacte et puissante" },
    { name: "Chargeuse compacte", slug: "chargeuse-compacte", description: "Bobcat, Manitou" },
    { name: "Tractopelle", slug: "tractopelle", description: "Polyvalent chantier" },
    { name: "Tombereau articulé", slug: "tombereau", description: "Transport matériaux" },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Location Matériel Terrassement | EAP Location"
        description="Location de matériel de terrassement : mini-pelles, pelles sur chenilles, chargeuses, tractopelles. Disponibilité partout en France."
        keywords="location mini-pelle, location pelle mécanique, location chargeuse, terrassement"
        canonicalUrl="/terrassement"
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Terrassement</span>
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
            Terrassement
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
                to={`/terrassement/${product.slug}`}
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

export default Terrassement;
