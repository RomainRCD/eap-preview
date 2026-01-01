import { Phone, Clock, Zap, CheckCircle, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-chariot.jpg";

const TemplateImpact = () => {
  const products = [
    { height: "16m", capacity: "4T" },
    { height: "18m", capacity: "4T" },
    { height: "21m", capacity: "5T" },
    { height: "25m", capacity: "5T" },
    { height: "30m", capacity: "6T" },
    { height: "32m", capacity: "6T" },
    { height: "35m", capacity: "6T" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky CTA Bar */}
      <div className="bg-primary text-primary-foreground py-2 md:py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span className="font-semibold text-sm md:text-base">🔥 Disponibilité immédiate 99%</span>
          <Button variant="white" size="sm" asChild>
            <a href="tel:0368385456">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">03 68 38 54 56</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">EAP Location</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Lun-Ven 7h30-18h</span>
            </div>
            <Button variant="cta" asChild>
              <a href="#devis">Devis Express</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Impact */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Chariot télescopique rotatif" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              <span className="text-primary font-semibold text-sm md:text-base">Réponse garantie en 2h max</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-4 md:mb-6">
              Chariot Rotatif
              <span className="block text-primary">Jusqu'à 35m</span>
            </h1>
            
            <p className="text-base md:text-xl text-secondary-foreground/80 mb-6 md:mb-8">
              Location courte ou longue durée, avec ou sans opérateur. Partout en France.
            </p>

            {/* Big Stats - responsive */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-10">
              <div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-primary">99%</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">Disponibilité</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">2400</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">Agences</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">2h</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">Réponse max</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button variant="cta" size="lg" asChild className="w-full sm:w-auto">
                <a href="#devis">
                  Obtenir mon devis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="phone" size="lg" asChild className="w-full sm:w-auto">
                <a href="tel:0368385456">
                  <Phone className="w-5 h-5" />
                  03 68 38 54 56
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Height Selection - Quick Visual */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-3 md:mb-4">Quelle hauteur pour votre chantier ?</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-base">Sélectionnez et obtenez un devis immédiat</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4">
            {products.map((product, index) => (
              <button 
                key={index}
                className="group relative bg-card border-2 border-border rounded-lg md:rounded-xl px-3 py-3 md:px-8 md:py-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1"
              >
                <p className="text-xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{product.height}</p>
                <p className="text-xs md:text-sm text-muted-foreground">Cap. {product.capacity}</p>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-success rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-success-foreground" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Impact */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Shield className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">Un seul interlocuteur</h3>
              <p className="text-muted-foreground text-sm md:text-base">De la demande de devis à la fin de votre chantier, un expert dédié vous accompagne.</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-success rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Zap className="w-5 h-5 md:w-7 md:h-7 text-success-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">Réponse en 2h max</h3>
              <p className="text-muted-foreground text-sm md:text-base">Urgence ou planification, nous nous engageons à répondre en moins de 2 heures.</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">99% de disponibilité</h3>
              <p className="text-muted-foreground text-sm md:text-base">Notre réseau de 2400 agences nous permet de garantir la disponibilité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Impactful */}
      <section id="devis" className="py-10 md:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-secondary-foreground">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Obtenez votre devis<br />
                <span className="text-primary">en 2 minutes</span>
              </h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" />
                  <span className="text-sm md:text-lg">Réponse garantie sous 2h</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" />
                  <span className="text-sm md:text-lg">Devis 100% gratuit et sans engagement</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" />
                  <span className="text-sm md:text-lg">Livraison partout en France</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" />
                  <span className="text-sm md:text-lg">Avec ou sans opérateur</span>
                </li>
              </ul>
              
              <div className="mt-6 md:mt-10 p-4 md:p-6 bg-secondary-foreground/10 rounded-xl hidden sm:block">
                <p className="text-secondary-foreground/80 mb-2 text-sm md:text-base">Besoin d'une réponse immédiate ?</p>
                <a href="tel:0368385456" className="text-2xl md:text-3xl font-display font-bold text-primary hover:underline">
                  03 68 38 54 56
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-2xl">
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 md:mb-6">Devis Express</h3>
              
              <form className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Hauteur souhaitée</label>
                  <select className="input-field">
                    <option>Choisir une hauteur</option>
                    {products.map((p, i) => (
                      <option key={i}>Chariot {p.height} - Cap. {p.capacity}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Entreprise</label>
                    <input type="text" className="input-field" placeholder="Votre société" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                    <input type="tel" className="input-field" placeholder="06 XX XX XX XX" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="email@entreprise.fr" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Code postal du chantier</label>
                  <input type="text" className="input-field" placeholder="Ex: 75001" />
                </div>

                <Button variant="cta" size="lg" className="w-full">
                  Recevoir mon devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            EAP Location - Spécialiste BTP depuis 2016 | contact@eap-location.fr | 03 68 38 54 56
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateImpact;
