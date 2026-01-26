import { Phone, Mail, Clock, ArrowRight, ChevronRight, Shovel, Building, Package, Hammer, Home, Wrench, MapPin, Users, Shield, Zap, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
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
  // Catégories du catalogue - comme sur le vrai site
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EAP Location | Location Matériel BTP Partout en France"
        description="EAP Location, spécialiste de la location de matériel BTP pour professionnels. Terrassement, travaux en hauteur, manutention, compactage. 2400 agences partenaires en France."
        keywords="location matériel BTP, location engins chantier, chariot télescopique, nacelle, pelle mécanique, France"
        canonicalUrl="/"
      />

      {/* Top Bar - Infos contact */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Lundi - Vendredi : 7h30 - 18h
            </span>
          </div>
          <a href="tel:0368385456" className="flex items-center gap-1.5 font-semibold hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            03.68.38.54.56
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground block leading-tight">EAP Location</span>
              <span className="text-xs text-muted-foreground">Location matériel BTP</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <button className="text-muted-foreground font-medium text-sm hover:text-primary transition-colors flex items-center gap-1">
                Catalogue
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
            </div>
            <Link to="/contact" className="text-muted-foreground font-medium text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="cta" asChild>
              <Link to="/devis">
                Obtenir un devis
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Plus dynamique */}
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
                <Link to="/devis">
                  OBTENIR UN DEVIS GRATUIT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="phone" size="xl" asChild>
                <a href="tel:0368385456">
                  <Phone className="w-5 h-5" />
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

      {/* Notre Mission - Les 4 piliers - Plus punchy */}
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
                <Link to="/devis">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* À propos */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">A Propos de nous</h4>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                EAP location est une société Française spécialisée dans la location de matériels BTP pour professionnels. Notre service s'adresse aux professionnels sur le territoire français. Nous sommes en partenariat avec 2400 agences, ce qui nous permet d'assurer un service de qualité où que vous soyez.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Accueil</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contactez-nous !</Link>
                </li>
                <li>
                  <Link to="/terrassement" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terrassement</Link>
                </li>
                <li>
                  <Link to="/travail-en-hauteur" className="text-secondary-foreground/80 hover:text-primary transition-colors">Travail en Hauteur</Link>
                </li>
                <li>
                  <Link to="/manutention" className="text-secondary-foreground/80 hover:text-primary transition-colors">Manutention</Link>
                </li>
                <li>
                  <Link to="/compactage" className="text-secondary-foreground/80 hover:text-primary transition-colors">Compactage</Link>
                </li>
                <li>
                  <Link to="/base-vie" className="text-secondary-foreground/80 hover:text-primary transition-colors">Base Vie</Link>
                </li>
                <li>
                  <Link to="/autres" className="text-secondary-foreground/80 hover:text-primary transition-colors">Autres</Link>
                </li>
                <li>
                  <Link to="/mentions-legales" className="text-secondary-foreground/80 hover:text-primary transition-colors">Mentions Légales</Link>
                </li>
              </ul>
            </div>

            {/* Informations de contact */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Informations de Contact</h4>
              <ul className="space-y-3 text-sm text-secondary-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>15 avenue du Great EASTERN, 80330 LONGUEAU</span>
                </li>
                <li>Zone d'intervention : France métropole + EUROPE</li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:0368385456" className="hover:text-primary transition-colors font-semibold">03.68.38.54.56</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Lundi – Vendredi : 7h30 – 18h</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:contact@eap-location.fr" className="hover:text-primary transition-colors">Contact@eap-location.fr</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date().getFullYear()} EAP Location. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 z-50">
        <div className="flex gap-3">
          <Button variant="phone" className="flex-1" asChild>
            <a href="tel:0368385456">
              <Phone className="w-4 h-4" />
              Appeler
            </a>
          </Button>
          <Button variant="cta" className="flex-1" asChild>
            <Link to="/devis">
              Devis Express
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
