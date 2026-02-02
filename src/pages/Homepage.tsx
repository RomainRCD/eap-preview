import { ArrowRight, CheckCircle, Building, TrendingUp, Users, Zap, Shield, MapPin, Shovel, Package, Hammer, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/layout/PageLayout";
import heroBackground from "@/assets/hero-chantier.png";

// Logos entreprises BTP
import logoAssaAbloy from "@/assets/logos/assa-abloy.jpg";
import logoEdf from "@/assets/logos/edf.png";
import logoNordex from "@/assets/logos/nordex.jpg";
import logoTriangleHorizon from "@/assets/logos/triangle-horizon.jpg";
import logoEiffage from "@/assets/logos/eiffage.jpg";
import logoVinci from "@/assets/logos/vinci.jpg";

// Images catalogue
import catalogTerrassement from "@/assets/catalog/terrassement.jpeg";
import catalogTravailHauteur from "@/assets/catalog/travail-en-hauteur.jpeg";
import catalogManutention from "@/assets/catalog/manutention.jpeg";
import catalogCompactage from "@/assets/catalog/compactage.jpeg";
import catalogBaseVie from "@/assets/catalog/base-vie.jpeg";
import catalogAutres from "@/assets/catalog/autres.jpeg";

const Homepage = () => {
  // Catégories du catalogue
  const catalogCategories = [
    {
      title: "Terrassement",
      icon: Shovel,
      description: "Pelles, mini-pelles, chargeuses",
      link: "/terrassement",
      image: catalogTerrassement,
    },
    {
      title: "Travail en Hauteur",
      icon: Building,
      description: "Nacelles, PEMP, échafaudages",
      link: "/travail-en-hauteur",
      image: catalogTravailHauteur,
    },
    {
      title: "Manutention",
      icon: Package,
      description: "Chariots télescopiques, élévateurs",
      link: "/manutention",
      image: catalogManutention,
    },
    {
      title: "Compactage",
      icon: Hammer,
      description: "Rouleaux, plaques vibrantes",
      link: "/compactage",
      image: catalogCompactage,
    },
    {
      title: "Base Vie",
      icon: Home,
      description: "Bungalows, roulottes, sanitaires",
      link: "/base-vie",
      image: catalogBaseVie,
    },
    {
      title: "Autres",
      icon: Wrench,
      description: "Groupes électrogènes, outillage",
      link: "/autres",
      image: catalogAutres,
    },
  ];

  // Les 4 piliers du service EAP
  const missionPillars = [
    {
      icon: Users,
      title: "1 Interlocuteur Unique",
      description: "Un conseiller dédié de A à Z pour vos demandes de location sur toute la France.",
      accent: "bg-primary",
    },
    {
      icon: Zap,
      title: "Réponse Sous 2h Maximum",
      description: "Nous assurons une efficacité opérationnelle en permanence.",
      accent: "bg-accent",
    },
    {
      icon: Shield,
      title: "Meilleur prix garanti",
      description: "Notre équipe recherche l'offre disponible, la plus proche et au meilleur prix.",
      accent: "bg-success",
    },
    {
      icon: MapPin,
      title: "Disponibilité à 99%",
      description: "Nous apportons la solution à votre besoin presque systématiquement.",
      accent: "bg-primary",
    },
  ];

  // Logos de confiance
  const trustLogos = [
    { name: "ASSA ABLOY", logo: logoAssaAbloy },
    { name: "EDF", logo: logoEdf },
    { name: "Nordex", logo: logoNordex },
    { name: "Triangle Horizon", logo: logoTriangleHorizon },
    { name: "Eiffage", logo: logoEiffage },
    { name: "Vinci", logo: logoVinci },
  ];

  // Stats clés
  const keyStats = [
    { number: "2 400", label: "Agences partenaires", icon: Building },
    { number: "99%", label: "Disponibilité garantie", icon: CheckCircle },
    { number: "< 2h", label: "Temps de réponse", icon: TrendingUp },
  ];

  return (
    <PageLayout>
      <SEOHead
        title="EAP Location | Location Matériel BTP Partout en France"
        description="EAP Location, spécialiste de la location de matériel BTP pour professionnels. Terrassement, travaux en hauteur, manutention, compactage. 2400 agences partenaires en France."
        keywords="location matériel BTP, location engins chantier, chariot télescopique, nacelle, pelle mécanique, France"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Chantier BTP au coucher du soleil" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/75 to-secondary/60"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              <CheckCircle className="w-4 h-4" />
              N°1 de la location BTP en France
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Louez votre matériel BTP
              <span className="block text-primary mt-2">partout en France</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              +2 400 agences partenaires à votre service. Réponse garantie sous 2h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="cta" size="xl" className="group" asChild>
                <Link to="/catalogue">
                  OBTENIR UN DEVIS GRATUIT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="phone" size="xl" asChild>
                <a href="tel:0368385456">
                  03 68 38 54 56
                </a>
              </Button>
            </div>

            {/* Stats dans le hero */}
            <div className="flex flex-wrap gap-8">
              {keyStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau Trust Logos */}
      <section className="py-10 md:py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustLogos.map((company, index) => (
              <div 
                key={index}
                className="h-20 md:h-28 bg-white rounded-xl border border-border flex items-center justify-center p-4 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="max-h-[56px] md:max-h-[90px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Notre</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Catalogue
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              EAP location propose la plus large gamme de matériels BTP en France. Vous retrouverez dans notre catalogue du matériel de terrassements, de travaux en hauteur, de manutention, de compactage, de base vie et du matériel spécifique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {catalogCategories.map((category, index) => (
              <Link 
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Mission - Les 4 piliers */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-wider mb-2 font-semibold">Notre Engagement</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Pourquoi travailler avec nous ?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Un service professionnel pensé pour répondre aux exigences des entreprises du BTP.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {missionPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${pillar.accent} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="text-center mt-14">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-left">
                <p className="text-white font-display font-semibold text-lg">Besoin d'un devis rapidement ?</p>
                <p className="text-white/60 text-sm">Notre équipe vous répond sous 2h maximum.</p>
              </div>
              <Button variant="cta" size="xl" className="group" asChild>
                <Link to="/catalogue">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Homepage;
