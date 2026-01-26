import { Phone, Mail, Clock, ArrowRight, ChevronRight, Shovel, Building, Package, Hammer, Home, Wrench, MapPin, Users, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Homepage = () => {
  // Catégories du catalogue - comme sur le vrai site
  const catalogCategories = [
    {
      title: "Terrassement",
      icon: Shovel,
      description: "Pelles, mini-pelles, chargeuses",
      link: "/terrassement",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400&h=300&fit=crop",
    },
    {
      title: "Travail en Hauteur",
      icon: Building,
      description: "Nacelles, PEMP, échafaudages",
      link: "/travail-en-hauteur",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
    },
    {
      title: "Manutention",
      icon: Package,
      description: "Chariots télescopiques, élévateurs",
      link: "/manutention",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: "Compactage",
      icon: Hammer,
      description: "Rouleaux, plaques vibrantes",
      link: "/compactage",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      title: "Base Vie",
      icon: Home,
      description: "Bungalows, roulottes, sanitaires",
      link: "/base-vie",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
    },
    {
      title: "Autres",
      icon: Wrench,
      description: "Groupes électrogènes, outillage",
      link: "/autres",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    },
  ];

  // Les 4 piliers du service EAP
  const missionPillars = [
    {
      icon: Users,
      title: "1 Interlocuteur Unique",
      description: "Un conseiller dédié de A à Z pour vos demandes de location sur toute la France.",
    },
    {
      icon: Zap,
      title: "Réponse Sous 2h Maximum",
      description: "Nous assurons une efficacité opérationnelle en permanence.",
    },
    {
      icon: Shield,
      title: "Meilleur prix garanti",
      description: "Notre équipe recherche l'offre disponible, la plus proche et au meilleur prix.",
    },
    {
      icon: MapPin,
      title: "Disponibilité à 99%",
      description: "Nous apportons la solution à votre besoin presque systématiquement.",
    },
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
          <div className="flex items-center gap-4">
            <a href="mailto:contact@eap-location.fr" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              Contact@eap-location.fr
            </a>
            <a href="tel:0368385456" className="flex items-center gap-1.5 font-semibold hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              03.68.38.54.56
            </a>
          </div>
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

      {/* Hero Section - Style sobre et corporate */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight mb-6">
            LOUEZ VOTRE MATÉRIEL BTP
            <span className="block text-primary mt-2">PARTOUT EN FRANCE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Disponibilité du Lundi au Vendredi de 7h30 à 18h
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="xl" asChild>
              <Link to="/devis">
                OBTENEZ VOTRE DEVIS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="phone" size="xl" asChild>
              <a href="tel:0368385456">
                <Phone className="w-5 h-5" />
                APPELEZ-NOUS
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-secondary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact@eap-location.fr
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              03.68.38.54.56
            </span>
          </div>
        </div>
      </section>

      {/* Section Fonctionnement */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Le fonctionnement de notre service</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">La Technique</h2>
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">Notre Mission</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Pourquoi travailler avec nous ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {missionPillars.map((pillar, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Téléphone */}
          <div className="text-center mt-12">
            <Button variant="phone" size="xl" asChild>
              <a href="tel:0368385456">
                <Phone className="w-5 h-5" />
                03 68 38 54 56
              </a>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">Service BtoB pour les pros</p>
            <p className="text-muted-foreground text-xs">Un service assuré par des professionnels pour des professionnels.</p>
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
