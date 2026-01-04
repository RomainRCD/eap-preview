import { useState } from "react";
import { Phone, Clock, Check, Shield, Users, MapPin, Star, ChevronRight, Building2, Truck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SEOHead from "@/components/SEOHead";

import heroImage from "@/assets/hero-chariot.jpg";

// Logos entreprises BTP
import logoBouygues from "@/assets/logos/bouygues.svg";
import logoVinci from "@/assets/logos/vinci.svg";
import logoEiffage from "@/assets/logos/eiffage.svg";
import logoSpie from "@/assets/logos/spie-batignolles.svg";

const trustedCompanies = [
  { name: "Bouygues Construction", logo: logoBouygues },
  { name: "Vinci", logo: logoVinci },
  { name: "Eiffage", logo: logoEiffage },
  { name: "Spie Batignolles", logo: logoSpie },
];

// Avis clients
const testimonials = [
  {
    name: "Marc D.",
    company: "BTP Solutions",
    text: "Réponse en 1h30, livraison le lendemain. Parfait pour notre chantier urgent.",
    rating: 5
  },
  {
    name: "Sophie L.",
    company: "Constructions Alsace",
    text: "Matériel impeccable, équipe réactive. On recommande à 100%.",
    rating: 5
  }
];

const TemplateConfiance = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");
  const totalSteps = 4;

  const products = [
    { height: "16m", capacity: "4T", name: "Chariot Rotatif 16m" },
    { height: "18m", capacity: "4T", name: "Chariot Rotatif 18m" },
    { height: "21m", capacity: "5T", name: "Chariot Rotatif 21m" },
    { height: "25m", capacity: "5T", name: "Chariot Rotatif 25m" },
    { height: "30m", capacity: "6T", name: "Chariot Rotatif 30m" },
    { height: "32m", capacity: "6T", name: "Chariot Rotatif 32m" },
    { height: "35m", capacity: "6T", name: "Chariot Rotatif 35m" },
  ];

  const handleProductSelect = (productName: string) => {
    setSelectedProduct(productName);
    setCurrentStep(2);
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead
        title="Location Chariot Télescopique Rotatif | Devis 2h | EAP Location"
        description="Louez un chariot télescopique rotatif de 16m à 35m partout en France. 2400+ agences, 99% de disponibilité, réponse sous 2h. Devis gratuit immédiat."
        keywords="location chariot télescopique, chariot rotatif, location BTP, manitou, nacelle télescopique, location courte durée, location longue durée"
        canonicalUrl="/chariot-rotatif"
      />
      
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">EAP Location</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 strokeWidth-1.5" />
              <span className="text-sm">Lun-Ven 7h30-18h</span>
            </div>
            <Button variant="phone" size="lg" asChild className="hidden md:flex">
              <a href="tel:0368385456">
                <Phone className="w-4 h-4 strokeWidth-1.5" />
                03 68 38 54 56
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-hero text-secondary-foreground py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <span className="badge-pro mb-4 inline-block">Spécialiste BTP depuis 2016</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight">
                Location de Chariot Télescopique <span className="text-primary">Rotatif</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg">
                De 16 à 35 mètres de hauteur, avec ou sans opérateur. Disponibilité garantie dans 99% des cas.
              </p>
              
              {/* Trust Signals - Icônes plus fines */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="trust-badge">
                  <Check className="w-4 h-4 text-success strokeWidth-1.5" />
                  <span className="text-sm">Réponse sous 2h</span>
                </div>
                <div className="trust-badge">
                  <Users className="w-4 h-4 text-primary strokeWidth-1.5" />
                  <span className="text-sm">2400+ agences</span>
                </div>
                <div className="trust-badge">
                  <MapPin className="w-4 h-4 text-primary strokeWidth-1.5" />
                  <span className="text-sm">Partout en France</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href="#devis">Demander un devis gratuit</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="hidden md:flex">
                  <a href="tel:0368385456">
                    <Phone className="w-4 h-4 strokeWidth-1.5" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image avec AspectRatio pour éviter CLS */}
            <div className="relative animate-slide-in-right">
              <div className="rounded-2xl shadow-xl overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={heroImage} 
                    alt="Chariot télescopique rotatif Manitou sur chantier" 
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-success strokeWidth-1.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">99% disponible</p>
                    <p className="text-xs text-muted-foreground">Livraison 48h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="stat-number text-3xl md:text-4xl">2400+</p>
              <p className="text-muted-foreground text-sm mt-1">Agences partenaires</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="stat-number text-3xl md:text-4xl">99%</p>
              <p className="text-muted-foreground text-sm mt-1">Disponibilité</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="stat-number text-3xl md:text-4xl">2h</p>
              <p className="text-muted-foreground text-sm mt-1">Réponse max</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="stat-number text-3xl md:text-4xl">2016</p>
              <p className="text-muted-foreground text-sm mt-1">Depuis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Ils nous font confiance */}
      <section className="py-12 md:py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-foreground font-display font-semibold text-lg md:text-2xl mb-10 md:mb-14">
            Ils nous font confiance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-16 items-center justify-items-center max-w-5xl mx-auto">
            {trustedCompanies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 md:p-6 h-16 md:h-20 lg:h-28 w-full"
              >
                <img 
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="max-h-full max-w-[180px] lg:max-w-[220px] w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-10 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground text-sm">basé sur 127 avis</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-5 border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-3">"{testimonial.text}"</p>
                <p className="text-muted-foreground text-xs">
                  <span className="font-semibold text-foreground">{testimonial.name}</span> — {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title text-2xl md:text-3xl">Notre Gamme de Chariots Rotatifs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Du chariot compact au géant de 35 mètres, trouvez l'équipement adapté à votre chantier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <div 
                key={index}
                className="card-hover bg-card rounded-xl border border-border p-5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <span className="text-xl font-display font-bold text-primary">{product.height}</span>
                </div>
                <h3 className="font-display font-semibold text-base text-foreground mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">Capacité jusqu'à {product.capacity}</p>
                <div className="flex items-center gap-2 text-sm text-success">
                  <Check className="w-4 h-4 strokeWidth-1.5" />
                  <span>Disponible</span>
                </div>
              </div>
            ))}
          </div>

          {/* Accessories */}
          <div className="mt-10 bg-muted rounded-2xl p-6">
            <h3 className="font-display font-semibold text-lg mb-5 text-center">Accessoires Disponibles</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Godet Terre", "Potence", "Treuil 5T", "Radio Télécommande"].map((acc, i) => (
                <span key={i} className="px-4 py-2 bg-card rounded-full text-foreground text-sm border border-border">
                  {acc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <section id="devis" className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground mb-3">
                Demandez votre devis gratuit
              </h2>
              <p className="text-secondary-foreground/80 text-sm md:text-base">
                Réponse garantie en moins de 2 heures
              </p>
            </div>
            
            <form className="bg-card rounded-2xl p-5 sm:p-8 shadow-xl">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Étape {currentStep} sur {totalSteps}</span>
                  <span>{Math.round(progressValue)}%</span>
                </div>
                <Progress value={progressValue} className="h-2" />
                <div className="flex justify-between mt-3">
                  {[
                    { icon: Truck, label: "Matériel" },
                    { icon: Building2, label: "Entreprise" },
                    { icon: HardHat, label: "Contact" },
                    { icon: MapPin, label: "Chantier" }
                  ].map((step, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col items-center gap-1 ${index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground/50'}`}
                    >
                      <step.icon className="w-4 h-4 strokeWidth-1.5" />
                      <span className="text-xs hidden sm:block">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 1: Matériel */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Choisissez votre matériel
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {products.map((product, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleProductSelect(product.name)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedProduct === product.name 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="text-lg font-display font-bold text-primary">{product.height}</span>
                        <p className="text-sm text-foreground font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">Capacité {product.capacity}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Entreprise */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Informations Entreprise
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nom Entreprise *</label>
                      <input type="text" className="input-field" placeholder="Votre entreprise" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">SIRET</label>
                      <input type="text" className="input-field" placeholder="123 456 789 00000" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">Adresse *</label>
                      <input type="text" className="input-field" placeholder="Adresse complète" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Code Postal *</label>
                      <input type="text" className="input-field" placeholder="67000" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ville *</label>
                      <input type="text" className="input-field" placeholder="Strasbourg" required />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button type="button" variant="outline" onClick={handlePrevStep} className="flex-1">
                      Retour
                    </Button>
                    <Button type="button" variant="cta" onClick={handleNextStep} className="flex-1">
                      Continuer <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Vos coordonnées
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                      <input type="text" className="input-field" placeholder="Dupont" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                      <input type="text" className="input-field" placeholder="Jean" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                      <input type="email" className="input-field" placeholder="email@entreprise.fr" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                      <input type="tel" className="input-field" placeholder="06 XX XX XX XX" required />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button type="button" variant="outline" onClick={handlePrevStep} className="flex-1">
                      Retour
                    </Button>
                    <Button type="button" variant="cta" onClick={handleNextStep} className="flex-1">
                      Continuer <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Chantier + Submit */}
              {currentStep === 4 && (
                <div className="animate-fade-in">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                    Date et lieu du chantier
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date début *</label>
                      <input type="date" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date fin *</label>
                      <input type="date" className="input-field" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">CP chantier *</label>
                      <input type="text" className="input-field" placeholder="75001" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ville chantier *</label>
                      <input type="text" className="input-field" placeholder="Paris" required />
                    </div>
                  </div>
                  
                  {/* Urgence / Social Proof */}
                  <p className="text-center text-sm text-muted-foreground mt-6 mb-3">
                    <span className="text-primary font-semibold">✓</span> Rejoignez les 500+ pros qui nous ont sollicités ce mois-ci
                  </p>
                  
                  <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={handlePrevStep} className="flex-shrink-0">
                      Retour
                    </Button>
                    <Button type="submit" variant="cta" size="lg" className="flex-1">
                      Obtenir mon devis gratuit
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Ou appelez-nous au <a href="tel:0368385456" className="text-primary font-semibold">03 68 38 54 56</a>
                  </p>
                </div>
              )}

              {/* Selected product reminder */}
              {currentStep > 1 && selectedProduct && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Matériel sélectionné : <span className="text-foreground font-medium">{selectedProduct}</span>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">E</span>
            </div>
            <span className="font-display font-bold text-lg">EAP Location</span>
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            Spécialiste de la location de matériel BTP pour les professionnels depuis 2016
          </p>
          <p className="text-xs text-muted-foreground">
            contact@eap-location.fr | 03 68 38 54 56
          </p>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 md:hidden z-50 shadow-lg">
        <Button variant="phone" size="lg" asChild className="w-full">
          <a href="tel:0368385456" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Appeler maintenant — 03 68 38 54 56
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TemplateConfiance;
