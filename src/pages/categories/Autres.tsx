import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

// Images produits
import imgGroupeElectrogene from "@/assets/products/groupe-electrogene.webp";
import imgCompresseur from "@/assets/products/compresseur.webp";
import imgEclairage from "@/assets/products/eclairage.webp";
import imgBetonniere from "@/assets/products/betonniere.webp";
import imgBroyeur from "@/assets/products/broyeur.webp";
import imgDumper from "@/assets/products/dumper.webp";
import imgMarteauPiqueur from "@/assets/products/marteau-piqueur.webp";
import imgAspirateur from "@/assets/products/aspirateur.webp";

const Autres = () => {
  const products = [
    { name: "Groupe électrogène", slug: "groupe-electrogene", description: "10kVA à 500kVA", image: imgGroupeElectrogene},
    { name: "Compresseur d'air", slug: "compresseur", description: "Mobile chantier", image: imgCompresseur},
    { name: "Pompe à eau", slug: "pompe-eau", description: "Immergée, surface" },
    { name: "Éclairage chantier", slug: "eclairage", description: "Tour lumineuse", image: imgEclairage},
    { name: "Bétonnière", slug: "betonniere", description: "350L à 750L", image: imgBetonniere},
    { name: "Broyeur de branches", slug: "broyeur", description: "Espaces verts", image: imgBroyeur},
    { name: "Dumper", slug: "dumper", description: "1T à 10T", image: imgDumper},
    { name: "Marteau piqueur", slug: "marteau-piqueur", description: "Démolition", image: imgMarteauPiqueur},
    { name: "Découpeuse thermique", slug: "decoupeuse", description: "Béton, asphalte" },
    { name: "Aspirateur industriel", slug: "aspirateur", description: "Chantier", image: imgAspirateur},
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Location Matériel BTP Divers | Travax"
        description="Location de matériel BTP : groupes électrogènes, compresseurs, pompes, éclairage chantier, outillage professionnel."
        keywords="location groupe électrogène, compresseur chantier, outillage BTP"
        canonicalUrl="/autres"
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Autres</span>
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
            Autres Équipements
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
                to={`/autres/${product.slug}`}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-40 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-muted-foreground text-sm">Image à venir</span>
                  )}
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

export default Autres;
