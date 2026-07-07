import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

// Images produits
import imgNacelleCiseauxElectrique from "@/assets/products/nacelle-ciseaux-electrique.webp";
import imgNacelleCiseauxDiesel from "@/assets/products/nacelle-ciseaux-diesel.webp";
import imgNacelleArticuleeElectrique from "@/assets/products/nacelle-articulee-electrique.webp";
import imgNacelleArticuleeDiesel from "@/assets/products/nacelle-articulee-diesel.webp";
import imgNacelleTelescopique from "@/assets/products/nacelle-telescopique.webp";
import imgNacelleAraignee from "@/assets/products/nacelle-araignee.webp";
import imgNacelleCamion from "@/assets/products/nacelle-camion.webp";
import imgEchafaudageRoulant from "@/assets/products/echafaudage-roulant.webp";
import imgPirPirl from "@/assets/products/pir-pirl.webp";
import imgNacelleMat from "@/assets/products/nacelle-mat.webp";
import imgPlateformeSuspendue from "@/assets/products/plateforme-suspendue.webp";
import imgMonteMateriaux from "@/assets/products/monte-materiaux.webp";

const TravailEnHauteur = () => {
  const products = [
    { name: "Nacelle ciseaux électrique", slug: "nacelle-ciseaux-electrique", description: "8m à 33m", image: imgNacelleCiseauxElectrique},
    { name: "Nacelle ciseaux diesel", slug: "nacelle-ciseaux-diesel", description: "10m à 33m", image: imgNacelleCiseauxDiesel},
    { name: "Nacelle articulée électrique", slug: "nacelle-articulee-electrique", description: "12m à 20m", image: imgNacelleArticuleeElectrique},
    { name: "Nacelle articulée diesel", slug: "nacelle-articulee-diesel", description: "12m à 48m", image: imgNacelleArticuleeDiesel},
    { name: "Nacelle télescopique", slug: "nacelle-telescopique", description: "14m à 57m", image: imgNacelleTelescopique},
    { name: "Nacelle araignée", slug: "nacelle-araignee", description: "Accès difficile", image: imgNacelleAraignee},
    { name: "Nacelle sur camion", slug: "nacelle-camion", description: "Avec chauffeur", image: imgNacelleCamion},
    { name: "Échafaudage roulant", slug: "echafaudage-roulant", description: "4,8m à 12,8m", image: imgEchafaudageRoulant},
    { name: "PIR / PIRL", slug: "pir-pirl", description: "Plateforme individuelle", image: imgPirPirl},
    { name: "Nacelle à mât", slug: "nacelle-mat", description: "Verticale compacte", image: imgNacelleMat},
    { name: "Plateforme suspendue", slug: "plateforme-suspendue", description: "Travaux façade", image: imgPlateformeSuspendue},
    { name: "Monte-matériaux", slug: "monte-materiaux", description: "Jusqu'à 37m / 400kg", image: imgMonteMateriaux},
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Location Nacelle & Travail en Hauteur | EAP Location"
        description="Location de nacelles et équipements pour le travail en hauteur : nacelles ciseaux, articulées, télescopiques, échafaudages. Disponibilité France entière."
        keywords="location nacelle, PEMP, nacelle articulée, nacelle télescopique, travail en hauteur"
        canonicalUrl="/travail-en-hauteur"
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Travail en Hauteur</span>
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
            Travail en Hauteur
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
                to={`/travail-en-hauteur/${product.slug}`}
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

export default TravailEnHauteur;
