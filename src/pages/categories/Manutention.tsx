import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

// Images produits
import heroChariot from "@/assets/hero-chariot.jpg";

// Images produits
import imgChariotIndustrielDiesel from "@/assets/products/chariot-industriel-diesel.webp";
import imgChariotIndustrielGaz from "@/assets/products/chariot-industriel-gaz.webp";
import imgChariotIndustrielElectrique from "@/assets/products/chariot-industriel-electrique.webp";
import imgChariotSemiIndustriel from "@/assets/products/chariot-semi-industriel.webp";
import imgChariotToutTerrain from "@/assets/products/chariot-tout-terrain.webp";
import imgChariotTelescopique from "@/assets/products/chariot-telescopique.webp";
import imgChariotRotatif from "@/assets/products/chariot-rotatif.webp";
import imgChariotGrosTonnage from "@/assets/products/chariot-gros-tonnage.webp";
import imgGrueMobile from "@/assets/products/grue-mobile.webp";
import imgMiniGrueChenilles from "@/assets/products/mini-grue-chenilles.webp";
import imgMiniGrueAraignee from "@/assets/products/mini-grue-araignee.webp";
import imgGerbeurTranspalette from "@/assets/products/gerbeur-transpalette.webp";

const Manutention = () => {
  const products = [
    { name: "Chariot industriel diesel", slug: "chariot-industriel-diesel", description: "1,5T à 16T", image: imgChariotIndustrielDiesel },
    { name: "Chariot industriel gaz", slug: "chariot-industriel-gaz", description: "1,5T à 16T", image: imgChariotIndustrielGaz },
    { name: "Chariot industriel électrique", slug: "chariot-industriel-electrique", description: "1,5T à 8T", image: imgChariotIndustrielElectrique },
    { name: "Chariot semi-industriel", slug: "chariot-semi-industriel", description: "2T à 5T", image: imgChariotSemiIndustriel },
    { name: "Chariot tout terrain", slug: "chariot-tout-terrain", description: "4x2 ou 4x4, 2T à 5T", image: imgChariotToutTerrain },
    { name: "Chariot télescopique fixe", slug: "chariot-telescopique", description: "4m à 18m", image: imgChariotTelescopique },
    { name: "Chariot télescopique rotatif", slug: "chariot-rotatif", description: "16m à 35m, 360°", image: imgChariotRotatif },
    { name: "Chariot télescopique gros tonnage", slug: "chariot-gros-tonnage", description: "6T-9m à 33T-12m", image: imgChariotGrosTonnage },
    { name: "Grue mobile", slug: "grue-mobile", description: "35T à 160T", image: imgGrueMobile },
    { name: "Mini grue télescopique sur chenilles", slug: "mini-grue-chenilles", description: "5T-20m à 8T-26m", image: imgMiniGrueChenilles },
    { name: "Mini grue araignée", slug: "mini-grue-araignee", description: "3T à 4T", image: imgMiniGrueAraignee },
    { name: "Gerbeur / Transpalette", slug: "gerbeur-transpalette", description: "Manutention légère", image: imgGerbeurTranspalette },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Location Chariot Télescopique & Manutention | Travax"
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

export default Manutention;
