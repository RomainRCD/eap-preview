import { Link } from "react-router-dom";
import { Shovel, Building, Package, Hammer, Home, Wrench, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";

// Images catalogue
import catalogTerrassement from "@/assets/catalog/terrassement.jpeg";
import catalogTravailHauteur from "@/assets/catalog/travail-en-hauteur.jpeg";
import catalogManutention from "@/assets/catalog/manutention.jpeg";
import catalogCompactage from "@/assets/catalog/compactage.jpeg";
import catalogBaseVie from "@/assets/catalog/base-vie.jpeg";
import catalogAutres from "@/assets/catalog/autres.jpeg";

const Catalogue = () => {
  const categories = [
    {
      title: "Terrassement",
      icon: Shovel,
      description: "Pelles, mini-pelles, chargeuses, tombereaux",
      link: "/terrassement",
      image: catalogTerrassement,
      count: 8,
    },
    {
      title: "Travail en Hauteur",
      icon: Building,
      description: "Nacelles, PEMP, échafaudages, plateformes",
      link: "/travail-en-hauteur",
      image: catalogTravailHauteur,
      count: 12,
    },
    {
      title: "Manutention",
      icon: Package,
      description: "Chariots télescopiques, élévateurs, transpalettes",
      link: "/manutention",
      image: catalogManutention,
      count: 11,
    },
    {
      title: "Compactage",
      icon: Hammer,
      description: "Rouleaux, plaques vibrantes, pilonneuses",
      link: "/compactage",
      image: catalogCompactage,
      count: 6,
    },
    {
      title: "Base Vie",
      icon: Home,
      description: "Bungalows, roulottes, sanitaires, vestiaires",
      link: "/base-vie",
      image: catalogBaseVie,
      count: 8,
    },
    {
      title: "Autres",
      icon: Wrench,
      description: "Groupes électrogènes, compresseurs, outillage",
      link: "/autres",
      image: catalogAutres,
      count: 10,
    },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="Catalogue Matériel BTP | EAP Location"
        description="Découvrez notre catalogue complet de matériel BTP en location : terrassement, travail en hauteur, manutention, compactage, base vie et plus encore."
        keywords="catalogue BTP, location matériel chantier, engins terrassement, nacelle, chariot télescopique"
        canonicalUrl="/catalogue"
      />

      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Notre Catalogue
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Sélectionnez une catégorie pour découvrir nos équipements disponibles à la location partout en France.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                        {category.title}
                      </h2>
                      <span className="text-white/60 text-sm">{category.count} produits</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Voir les produits
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Catalogue;
