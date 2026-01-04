import { useState, useEffect } from "react";
import { Phone, Clock, Zap, CheckCircle, ArrowRight, Shield, TrendingUp, Star, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";

import heroImage from "@/assets/hero-chariot.jpg";

// Logos entreprises BTP
import logoBouygues from "@/assets/logos/bouygues.svg";
import logoVinci from "@/assets/logos/vinci.svg";
import logoEiffage from "@/assets/logos/eiffage.svg";
import logoSpie from "@/assets/logos/spie-batignolles.svg";

const TemplateImpact = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Matériel & Dates
    materiel: "",
    dateDebut: "",
    dateFin: "",
    // Step 2: Entreprise & Lieu
    entreprise: "",
    adresseEntreprise: "",
    cpEntreprise: "",
    villeEntreprise: "",
    cpChantier: "",
    villeChantier: "",
    // Step 3: Contact
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});

  const products = [
    { height: "16m", capacity: "4T" },
    { height: "18m", capacity: "4T" },
    { height: "21m", capacity: "5T" },
    { height: "25m", capacity: "5T" },
    { height: "30m", capacity: "6T" },
    { height: "32m", capacity: "6T" },
    { height: "35m", capacity: "6T" },
  ];

  const trustLogos = [
    { name: "Bouygues Construction", logo: logoBouygues },
    { name: "Eiffage", logo: logoEiffage },
    { name: "Vinci", logo: logoVinci },
    { name: "Spie Batignolles", logo: logoSpie },
  ];

  // Handle product selection and scroll to form
  const handleProductSelect = (product: typeof products[0]) => {
    const value = `Chariot Rotatif ${product.height} - Cap. ${product.capacity}`;
    setSelectedProduct(value);
    setFormData(prev => ({ ...prev, materiel: value }));
    
    // Smooth scroll to form
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle form field change with validation
  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Simple validation
    const isValid = value.trim().length > 0;
    if (field === "email") {
      setValidFields(prev => ({ ...prev, [field]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }));
    } else if (field === "telephone") {
      setValidFields(prev => ({ ...prev, [field]: /^[\d\s]{10,}$/.test(value.replace(/\s/g, "")) }));
    } else {
      setValidFields(prev => ({ ...prev, [field]: isValid }));
    }
  };

  // Calculate progress
  const progressValue = ((formStep - 1) / 2) * 100;

  // Check if step is complete
  const isStep1Complete = formData.materiel && formData.dateDebut && formData.dateFin;
  const isStep2Complete = formData.entreprise && formData.cpChantier && formData.villeChantier;
  const isStep3Complete = formData.nom && formData.prenom && formData.email && formData.telephone;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Chariot Télescopique Rotatif jusqu'à 35m | Dispo Immédiate | EAP Location"
        description="Location chariot télescopique rotatif 16m-35m. Disponibilité 99%, devis en 2h, livraison 48h partout en France. Avec ou sans opérateur."
        keywords="chariot télescopique 35m, location chariot rotatif, manitou location, nacelle grande hauteur, location matériel BTP"
        canonicalUrl="/chariot-rotatif-impact"
      />
      
      {/* Sticky CTA Bar with Pulse Effect */}
      <div className="bg-primary text-primary-foreground py-2 md:py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span className="font-semibold text-sm md:text-base flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Disponibilité immédiate 99%
          </span>
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
          <div className="aspect-[16/9] md:aspect-auto md:h-full">
            <img 
              src={heroImage} 
              alt="Chariot télescopique rotatif" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
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
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                  03 68 38 54 56
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Logos - Design Premium */}
      <section className="py-10 md:py-14 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">Références clients</span>
            <h3 className="text-foreground font-display font-bold text-xl md:text-3xl">
              Ils nous font confiance
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {trustLogos.map((company, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2 md:p-3 h-20 md:h-28"
              >
                <img 
                  src={company.logo}
                  alt={`Logo ${company.name}`}
                  className="w-auto h-full max-h-[56px] md:max-h-[90px] object-contain"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 md:mt-8 text-xs md:text-sm">
            Et des centaines d'autres entreprises du BTP à travers la France
          </p>
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
                onClick={() => handleProductSelect(product)}
                className={`group relative bg-card border-2 rounded-lg md:rounded-xl px-3 py-3 md:px-8 md:py-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 ${
                  selectedProduct.includes(product.height) 
                    ? "border-primary shadow-lg" 
                    : "border-border"
                }`}
              >
                <p className={`text-xl md:text-3xl font-display font-bold transition-colors ${
                  selectedProduct.includes(product.height) ? "text-primary" : "text-foreground group-hover:text-primary"
                }`}>{product.height}</p>
                <p className="text-xs md:text-sm text-muted-foreground">Cap. {product.capacity}</p>
                <div className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-success rounded-full flex items-center justify-center transition-opacity ${
                  selectedProduct.includes(product.height) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-success-foreground" strokeWidth={1.5} />
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
                <Shield className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">Un seul interlocuteur</h3>
              <p className="text-muted-foreground text-sm md:text-base">De la demande de devis à la fin de votre chantier, un expert dédié vous accompagne.</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-success rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Zap className="w-5 h-5 md:w-7 md:h-7 text-success-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">Réponse en 2h max</h3>
              <p className="text-muted-foreground text-sm md:text-base">Urgence ou planification, nous nous engageons à répondre en moins de 2 heures.</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <TrendingUp className="w-5 h-5 md:w-7 md:h-7 text-accent-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl mb-2 md:mb-3">99% de disponibilité</h3>
              <p className="text-muted-foreground text-sm md:text-base">Notre réseau de 2400 agences nous permet de garantir la disponibilité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Multi-Step */}
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
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" strokeWidth={1.5} />
                  <span className="text-sm md:text-lg">Réponse garantie sous 2h</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" strokeWidth={1.5} />
                  <span className="text-sm md:text-lg">Devis 100% gratuit et sans engagement</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" strokeWidth={1.5} />
                  <span className="text-sm md:text-lg">Livraison partout en France</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-success shrink-0" strokeWidth={1.5} />
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
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span className={formStep >= 1 ? "text-primary font-medium" : ""}>1. Le projet</span>
                  <span className={formStep >= 2 ? "text-primary font-medium" : ""}>2. Le contexte</span>
                  <span className={formStep >= 3 ? "text-primary font-medium" : ""}>3. Le contact</span>
                </div>
                <Progress value={progressValue} className="h-2" />
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4 md:mb-6">Devis Express</h3>
              
              <form className="space-y-4 md:space-y-5">
                {/* Step 1: Matériel & Dates */}
                {formStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs font-semibold text-primary mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4" strokeWidth={1.5} />
                      ÉTAPE 1 : MATÉRIEL & DATES
                    </p>
                    <div className="relative">
                      <label className="block text-sm font-medium text-foreground mb-2">Choix du matériel *</label>
                      <select 
                        className="input-field pr-8"
                        value={formData.materiel}
                        onChange={(e) => handleFieldChange("materiel", e.target.value)}
                      >
                        <option value="">Choisir une hauteur</option>
                        {products.map((p, i) => (
                          <option key={i} value={`Chariot Rotatif ${p.height} - Cap. ${p.capacity}`}>
                            Chariot Rotatif {p.height} - Cap. {p.capacity}
                          </option>
                        ))}
                      </select>
                      {validFields.materiel && (
                        <Check className="absolute right-10 top-9 w-5 h-5 text-success animate-scale-in" />
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">Date début *</label>
                        <input 
                          type="date" 
                          className="input-field"
                          value={formData.dateDebut}
                          onChange={(e) => handleFieldChange("dateDebut", e.target.value)}
                        />
                        {validFields.dateDebut && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">Date fin *</label>
                        <input 
                          type="date" 
                          className="input-field"
                          value={formData.dateFin}
                          onChange={(e) => handleFieldChange("dateFin", e.target.value)}
                        />
                        {validFields.dateFin && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                    </div>
                    <Button 
                      type="button"
                      variant="cta" 
                      size="lg" 
                      className="w-full mt-4"
                      onClick={() => setFormStep(2)}
                      disabled={!isStep1Complete}
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Entreprise & Lieu */}
                {formStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs font-semibold text-primary mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4" strokeWidth={1.5} />
                      ÉTAPE 2 : ENTREPRISE & LIEU
                    </p>
                    <div className="relative">
                      <label className="block text-sm font-medium text-foreground mb-2">Nom Entreprise (ou SIRET) *</label>
                      <input 
                        type="text" 
                        className="input-field" 
                        placeholder="Votre société"
                        value={formData.entreprise}
                        onChange={(e) => handleFieldChange("entreprise", e.target.value)}
                      />
                      {validFields.entreprise && (
                        <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">CP chantier *</label>
                        <input 
                          type="text" 
                          className="input-field" 
                          placeholder="75001"
                          value={formData.cpChantier}
                          onChange={(e) => handleFieldChange("cpChantier", e.target.value)}
                        />
                        {validFields.cpChantier && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">Ville chantier *</label>
                        <input 
                          type="text" 
                          className="input-field" 
                          placeholder="Paris"
                          value={formData.villeChantier}
                          onChange={(e) => handleFieldChange("villeChantier", e.target.value)}
                        />
                        {validFields.villeChantier && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button 
                        type="button"
                        variant="outline" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setFormStep(1)}
                      >
                        Retour
                      </Button>
                      <Button 
                        type="button"
                        variant="cta" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setFormStep(3)}
                        disabled={!isStep2Complete}
                      >
                        Continuer
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact */}
                {formStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <p className="text-xs font-semibold text-primary mb-3 flex items-center gap-2">
                      <Phone className="w-4 h-4" strokeWidth={1.5} />
                      ÉTAPE 3 : VOS COORDONNÉES
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                        <input 
                          type="text" 
                          className="input-field" 
                          placeholder="Dupont"
                          value={formData.nom}
                          onChange={(e) => handleFieldChange("nom", e.target.value)}
                        />
                        {validFields.nom && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                        <input 
                          type="text" 
                          className="input-field" 
                          placeholder="Jean"
                          value={formData.prenom}
                          onChange={(e) => handleFieldChange("prenom", e.target.value)}
                        />
                        {validFields.prenom && (
                          <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                      <input 
                        type="email" 
                        className="input-field" 
                        placeholder="email@entreprise.fr"
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                      />
                      {validFields.email && (
                        <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                      )}
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                      <input 
                        type="tel" 
                        className="input-field" 
                        placeholder="06 XX XX XX XX"
                        value={formData.telephone}
                        onChange={(e) => handleFieldChange("telephone", e.target.value)}
                      />
                      {validFields.telephone && (
                        <Check className="absolute right-3 top-9 w-5 h-5 text-success animate-scale-in" />
                      )}
                    </div>

                    {/* Social Proof Badge */}
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span>4.9/5 basé sur 150+ interventions le mois dernier</span>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        type="button"
                        variant="outline" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setFormStep(2)}
                      >
                        Retour
                      </Button>
                      <Button 
                        type="submit"
                        variant="cta" 
                        size="lg" 
                        className="flex-1"
                        disabled={!isStep3Complete}
                      >
                        Envoyer ma demande
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 pb-24 md:pb-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            EAP Location - Spécialiste BTP depuis 2016 | contact@eap-location.fr | 03 68 38 54 56
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 flex gap-3 md:hidden z-50 shadow-lg">
        <Button variant="phone" size="lg" asChild className="flex-1">
          <a href="tel:0368385456">
            <Phone className="w-5 h-5" />
            Appeler
          </a>
        </Button>
        <Button variant="cta" size="lg" asChild className="flex-1">
          <a href="#devis">
            <FileText className="w-5 h-5" />
            Devis Rapide
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TemplateImpact;
