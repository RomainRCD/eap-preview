import { Phone, Clock, CheckCircle, ArrowRight, Shield, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-chariot.jpg";
import { useState } from "react";

const TemplateFormulaire = () => {
  const [step, setStep] = useState(1);
  
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
    <div className="min-h-screen bg-muted w-full max-w-full overflow-x-hidden">
      {/* Header Minimal */}
      <header className="bg-card border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-sm sm:text-lg">E</span>
            </div>
            <span className="font-display font-bold text-base sm:text-xl text-foreground truncate">EAP Location</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Réponse sous 2h</span>
            </div>
            <Button variant="phone" size="sm" className="text-xs sm:text-sm px-2 sm:px-4" asChild>
              <a href="tel:0368385456">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline ml-1">03 68 38 54 56</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero with Form */}
      <section className="py-4 sm:py-8 md:py-16 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left - Content (hidden on mobile, form comes first) */}
            <div className="order-2 lg:order-1 min-w-0">
              <span className="badge-pro mb-3 sm:mb-4 inline-block text-xs sm:text-sm">Location Pro depuis 2016</span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-3 sm:mb-6">
                Location Chariot Télescopique <span className="text-primary">Rotatif</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-8">
                De 16 à 35 mètres de hauteur, avec ou sans opérateur. Obtenez votre devis gratuit en moins de 2 minutes.
              </p>

              {/* Quick Trust Points - Hidden on mobile */}
              <div className="hidden md:block space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-success" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">Réponse garantie sous 2h</p>
                    <p className="text-sm text-muted-foreground">7j/7 de 7h30 à 18h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">99% de disponibilité</p>
                    <p className="text-sm text-muted-foreground">Réseau de 2400 agences partenaires</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">Partout en France</p>
                    <p className="text-sm text-muted-foreground">Livraison et mise en service incluses</p>
                  </div>
                </div>
              </div>

              {/* Image on larger screens */}
              <div className="hidden lg:block">
                <img 
                  src={heroImage} 
                  alt="Chariot télescopique rotatif" 
                  className="rounded-2xl shadow-lg w-full max-w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Form (shows first on mobile) */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-24 min-w-0 w-full">
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-xl border border-border overflow-hidden w-full">
                {/* Form Header */}
                <div className="bg-secondary text-secondary-foreground p-3 sm:p-4 md:p-6">
                  <h2 className="font-display font-bold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Devis Gratuit Express</h2>
                  <p className="text-secondary-foreground/80 text-xs sm:text-sm md:text-base">Recevez votre devis sous 2h maximum</p>
                  
                  {/* Progress */}
                  <div className="flex gap-2 mt-3 sm:mt-4">
                    <div className={`h-1 sm:h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-secondary-foreground/20'}`}></div>
                    <div className={`h-1 sm:h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-secondary-foreground/20'}`}></div>
                    <div className={`h-1 sm:h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-secondary-foreground/20'}`}></div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-3 sm:p-4 md:p-6">
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4">1. Choisissez votre matériel</h3>
                      
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-6">
                        {products.map((product, index) => (
                          <button 
                            key={index}
                            className="border-2 border-border rounded-lg p-2 sm:p-3 md:p-4 text-center hover:border-primary hover:bg-primary/5 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            <p className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground">{product.height}</p>
                            <p className="text-xs text-muted-foreground">Cap. {product.capacity}</p>
                          </button>
                        ))}
                      </div>

                      <div className="mb-3 sm:mb-6">
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">Avec opérateur ?</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="border-2 border-border rounded-lg p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base hover:border-primary transition-colors">
                            Sans opérateur
                          </button>
                          <button className="border-2 border-border rounded-lg p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base hover:border-primary transition-colors">
                            Avec opérateur
                          </button>
                        </div>
                      </div>

                      <Button variant="cta" size="default" className="w-full text-sm sm:text-base" onClick={() => setStep(2)}>
                        Continuer
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4">2. Votre entreprise</h3>
                      
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Nom de l'entreprise</label>
                          <input type="text" className="input-field text-sm sm:text-base w-full" placeholder="Votre société" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">SIRET (optionnel)</label>
                          <input type="text" className="input-field text-sm sm:text-base w-full" placeholder="XXX XXX XXX XXXXX" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Code postal du chantier</label>
                          <input type="text" className="input-field text-sm sm:text-base w-full" placeholder="Ex: 75001" />
                        </div>
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        <Button variant="outline" size="default" className="text-sm" onClick={() => setStep(1)}>
                          Retour
                        </Button>
                        <Button variant="cta" size="default" className="flex-1 text-sm sm:text-base min-w-0" onClick={() => setStep(3)}>
                          Continuer
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4">3. Vos coordonnées</h3>
                      
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Prénom</label>
                            <input type="text" className="input-field text-sm sm:text-base w-full" placeholder="Jean" />
                          </div>
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Nom</label>
                            <input type="text" className="input-field text-sm sm:text-base w-full" placeholder="Dupont" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Téléphone</label>
                          <input type="tel" className="input-field text-sm sm:text-base w-full" placeholder="06 XX XX XX XX" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Email</label>
                          <input type="email" className="input-field text-sm sm:text-base w-full" placeholder="email@entreprise.fr" />
                        </div>
                      </div>

                      <div className="flex gap-2 sm:gap-3">
                        <Button variant="outline" size="default" className="text-sm" onClick={() => setStep(2)}>
                          Retour
                        </Button>
                        <Button variant="cta" size="default" className="flex-1 text-sm sm:text-base min-w-0">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                          <span className="truncate">Recevoir mon devis</span>
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Phone Alternative */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Besoin d'une réponse immédiate ?</p>
                    <a href="tel:0368385456" className="text-lg sm:text-xl font-display font-bold text-primary hover:underline">
                      03 68 38 54 56
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-success flex-shrink-0" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-success flex-shrink-0" />
                  <span>Sans engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image for mobile */}
      <section className="lg:hidden py-6 sm:py-8 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <img 
            src={heroImage} 
            alt="Chariot télescopique rotatif" 
            className="rounded-xl sm:rounded-2xl shadow-lg w-full max-w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-card border-t border-border py-4 sm:py-6 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>EAP Location - Spécialiste BTP depuis 2016 | contact@eap-location.fr</p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateFormulaire;
