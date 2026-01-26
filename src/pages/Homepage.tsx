import { Phone, Clock, ArrowRight, Shield, TrendingUp, Wrench, Truck, Users, MapPin, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

import heroImage from "@/assets/hero-chariot.jpg";

// Logos entreprises BTP
import logoAssaAbloy from "@/assets/logos/assa-abloy.jpg";
import logoEdf from "@/assets/logos/edf.png";
import logoNordex from "@/assets/logos/nordex.jpg";
import logoTriangleHorizon from "@/assets/logos/triangle-horizon.jpg";
import logoEiffage from "@/assets/logos/eiffage.jpg";
import logoVinci from "@/assets/logos/vinci.jpg";

const Homepage = () => {
  const trustLogos = [
    { name: "ASSA ABLOY", logo: logoAssaAbloy },
    { name: "EDF", logo: logoEdf },
    { name: "Nordex", logo: logoNordex },
    { name: "Triangle Horizon", logo: logoTriangleHorizon },
    { name: "Eiffage", logo: logoEiffage },
    { name: "Vinci", logo: logoVinci },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Réponse en 2h",
      description: "Devis personnalisé envoyé en moins de 2 heures ouvrées. Pas d'attente, pas de relance.",
    },
    {
      icon: Truck,
      title: "Livraison 48h",
      description: "Votre matériel livré sur chantier en 48h partout en France métropolitaine.",
    },
    {
      icon: Shield,
      title: "99% de disponibilité",
      description: "Parc de 200+ machines entretenues et contrôlées. Rarement en rupture.",
    },
    {
      icon: Users,
      title: "Avec ou sans opérateur",
      description: "Location sèche ou avec conducteur qualifié selon vos besoins.",
    },
    {
      icon: Wrench,
      title: "SAV 7j/7",
      description: "Assistance technique et dépannage 7 jours sur 7 pendant toute la durée de location.",
    },
    {
      icon: MapPin,
      title: "2 400 points de retrait",
      description: "Réseau national d'agences partenaires pour retrait ou livraison rapide.",
    },
  ];

  const testimonials = [
    {
      name: "Marc Dubois",
      role: "Chef de chantier",
      company: "Vinci Construction",
      content: "Matériel toujours impeccable et livré dans les temps. EAP est devenu notre partenaire privilégié pour tous nos chantiers en hauteur.",
      rating: 5,
    },
    {
      name: "Sophie Martin",
      role: "Responsable achats",
      company: "Eiffage Énergie",
      content: "La réactivité d'EAP nous a sauvé plusieurs fois. Un chariot en panne ? Remplacement en 24h. C'est ça le professionnalisme.",
      rating: 5,
    },
    {
      name: "Jean-Pierre Renard",
      role: "Directeur travaux",
      company: "Bouygues Bâtiment",
      content: "Excellente qualité de service. Les machines sont récentes, bien entretenues, et les prix sont compétitifs.",
      rating: 5,
    },
  ];

  const services = [
    {
      title: "Chariot Télescopique Rotatif",
      description: "De 16m à 35m de hauteur. Capacité jusqu'à 6 tonnes.",
      features: ["Rotation 360°", "Grande polyvalence", "Accès difficiles"],
      link: "/devis",
    },
    {
      title: "Chariot Télescopique Fixe",
      description: "Solution économique pour vos besoins de levage.",
      features: ["Économique", "Fiable", "Maniable"],
      link: "/devis",
    },
    {
      title: "Nacelle & Plateforme",
      description: "Travaux en hauteur sécurisés pour vos équipes.",
      features: ["Sécurité optimale", "Multi-usage", "Formation incluse"],
      link: "/devis",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="EAP Location | Location Chariot Télescopique & Nacelle BTP | France"
        description="Location de chariots télescopiques rotatifs et fixes, nacelles pour professionnels du BTP. Livraison 48h, devis en 2h, SAV 7j/7. Plus de 200 machines disponibles."
        keywords="location chariot télescopique, chariot rotatif, nacelle BTP, location matériel chantier, Manitou location"
        canonicalUrl="/"
      />

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">EAP Location</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/devis" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Nos machines
            </Link>
            <a href="#avantages" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Nos avantages
            </a>
            <a href="#temoignages" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Témoignages
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:0368385456" className="hidden lg:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">03 68 38 54 56</span>
            </a>
            <Button variant="cta" asChild>
              <Link to="/devis">Devis gratuit</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Chariot télescopique rotatif sur chantier" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Disponibilité immédiate</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight mb-6">
              Location de Matériel BTP
              <span className="block text-primary mt-2">Professionnel & Fiable</span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-xl">
              Chariots télescopiques, nacelles, plateformes. Plus de 200 machines disponibles, livrées en 48h partout en France.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="cta" size="xl" asChild>
                <Link to="/devis">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="phone" size="xl" asChild>
                <a href="tel:0368385456">
                  <Phone className="w-5 h-5" />
                  03 68 38 54 56
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-primary">200+</p>
                <p className="text-sm text-secondary-foreground/70">Machines</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">48h</p>
                <p className="text-sm text-secondary-foreground/70">Livraison</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">99%</p>
                <p className="text-sm text-secondary-foreground/70">Disponibilité</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">7j/7</p>
                <p className="text-sm text-secondary-foreground/70">SAV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-10 md:py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm mb-8">Ils nous font confiance</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
            {trustLogos.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-border shadow-sm flex items-center justify-center p-3 h-16 md:h-20"
              >
                <img 
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="w-auto h-full max-h-[40px] md:max-h-[50px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">Nos solutions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Matériel adapté à vos chantiers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Location courte ou longue durée, avec ou sans opérateur. Nous avons la solution pour tous vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
                <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Demander un devis
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">Pourquoi EAP Location</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Les avantages qui font la différence
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Obtenez votre devis personnalisé en moins de 2 heures. Sans engagement, sans surprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/devis">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="white" size="xl" asChild>
              <a href="tel:0368385456">
                <Phone className="w-5 h-5" />
                03 68 38 54 56
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <span className="font-display font-bold text-xl">EAP Location</span>
              </div>
              <p className="text-background/70 text-sm">
                Spécialiste de la location de matériel BTP depuis 2016. Chariots télescopiques, nacelles et plateformes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="tel:0368385456" className="hover:text-primary transition-colors">03 68 38 54 56</a>
                </li>
                <li>
                  <a href="mailto:contact@eap-location.fr" className="hover:text-primary transition-colors">contact@eap-location.fr</a>
                </li>
                <li>Lun-Ven 7h30-18h</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Chariot télescopique rotatif</li>
                <li>Chariot télescopique fixe</li>
                <li>Nacelle élévatrice</li>
                <li>Location avec opérateur</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informations</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <Link to="/devis" className="hover:text-primary transition-colors">Demander un devis</Link>
                </li>
                <li>CGV</li>
                <li>Mentions légales</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>© {new Date().getFullYear()} EAP Location. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 md:hidden z-50">
        <div className="flex gap-2">
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

      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default Homepage;
