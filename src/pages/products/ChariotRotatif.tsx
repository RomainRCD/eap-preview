import { useState, useEffect, useRef } from "react";
import { Phone, Clock, Zap, CheckCircle, ArrowRight, Shield, TrendingUp, Star, Check, FileText, Loader2, BadgeCheck, Building2, MapPin, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";
import PageLayout from "@/components/layout/PageLayout";

import heroImage from "@/assets/hero-chariot.jpg";

// Logos entreprises BTP
import logoAssaAbloy from "@/assets/logos/assa-abloy.jpg";
import logoEdf from "@/assets/logos/edf.png";
import logoNordex from "@/assets/logos/nordex.jpg";
import logoTriangleHorizon from "@/assets/logos/triangle-horizon.jpg";
import logoEiffage from "@/assets/logos/eiffage.jpg";
import logoVinci from "@/assets/logos/vinci.jpg";

// Helper function to check if value looks like a SIRET (9 or 14 digits)
const isSiretFormat = (value: string): boolean => {
  const cleanValue = value.replace(/\s/g, "");
  return /^\d{9}$|^\d{14}$/.test(cleanValue);
};

// API SIRENE search function
const fetchCompanyBySiret = async (siret: string): Promise<{
  nom_complet: string;
  adresse: string;
  code_postal: string;
  ville: string;
} | null> => {
  const cleanSiret = siret.replace(/\s/g, "");
  
  try {
    console.log("🔍 Fetching SIRET:", cleanSiret);
    const response = await fetch(
      `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(cleanSiret)}`,
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
      }
    );
    
    if (!response.ok) {
      console.error("❌ API SIRENE error:", response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    console.log("✅ API SIRENE response:", data);
    
    if (data.results && data.results.length > 0) {
      const company = data.results[0];
      const siege = company.siege;
      
      return {
        nom_complet: company.nom_complet || "",
        adresse: siege?.adresse || "",
        code_postal: siege?.code_postal || "",
        ville: siege?.libelle_commune || "",
      };
    }
    
    return null;
  } catch (error) {
    console.error("❌ SIRENE fetch error:", error);
    return null;
  }
};

// Get today's date in YYYY-MM-DD format for date validation
const getTodayDate = (): string => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const ChariotRotatif = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Matériel & Entreprise
    materiel: "",
    dateDebut: "",
    dateFin: "",
    siret: "",
    entreprise: "",
    adresseEntreprise: "",
    cpEntreprise: "",
    villeEntreprise: "",
    // Step 2: Contact
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    // Step 3: Chantier
    adresseChantier: "",
    cpChantier: "",
    villeChantier: "",
    commentaire: "",
  });
  const [validFields, setValidFields] = useState<Record<string, boolean>>({});
  const [isSearchingSiret, setIsSearchingSiret] = useState(false);
  const [siretVerified, setSiretVerified] = useState(false);
  const [siretError, setSiretError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  
  // Debounce timer ref
  const siretSearchTimeout = useRef<NodeJS.Timeout | null>(null);

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
    { name: "ASSA ABLOY", logo: logoAssaAbloy },
    { name: "EDF", logo: logoEdf },
    { name: "Nordex", logo: logoNordex },
    { name: "Triangle Horizon", logo: logoTriangleHorizon },
    { name: "Eiffage", logo: logoEiffage },
    { name: "Vinci", logo: logoVinci },
  ];

  // Handle product selection and scroll to form
  const handleProductSelect = (product: typeof products[0]) => {
    const value = `Chariot Rotatif ${product.height} - Cap. ${product.capacity}`;
    setSelectedProduct(value);
    setFormData(prev => ({ ...prev, materiel: value }));
    setValidFields(prev => ({ ...prev, materiel: true }));
    
    // Smooth scroll to form
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle SIRET field change with debounced API call - only allow digits
  const handleSiretChange = (value: string) => {
    // Only allow digits and spaces
    const sanitizedValue = value.replace(/[^\d\s]/g, "");
    
    // Update siret field
    setFormData(prev => ({ ...prev, siret: sanitizedValue }));
    setSiretError("");
    
    // Clear any pending search
    if (siretSearchTimeout.current) {
      clearTimeout(siretSearchTimeout.current);
    }

    const cleanValue = sanitizedValue.replace(/\s/g, "");
    
    // Validate SIRET length
    if (cleanValue.length > 0 && cleanValue.length !== 9 && cleanValue.length !== 14) {
      if (cleanValue.length < 9) {
        setSiretError("Le SIRET doit contenir 9 ou 14 chiffres");
      } else if (cleanValue.length > 9 && cleanValue.length < 14) {
        setSiretError("Le SIRET doit contenir 9 ou 14 chiffres");
      }
    }
    
    // Reset verified state if not a valid SIRET format
    if (!cleanValue || !isSiretFormat(cleanValue)) {
      setSiretVerified(false);
      setIsSearchingSiret(false);
      return;
    }

    // Show loading immediately when format is valid
    setIsSearchingSiret(true);
    setSiretVerified(false);

    // Debounce the actual API call (500ms)
    siretSearchTimeout.current = setTimeout(async () => {
      console.log("🔎 Searching SIRET:", cleanValue);
      
      const companyData = await fetchCompanyBySiret(cleanValue);
      
      if (companyData) {
        console.log("✅ Company found:", companyData);
        
        // Update form with company data
        setFormData(prev => ({
          ...prev,
          entreprise: companyData.nom_complet,
          adresseEntreprise: companyData.adresse,
          cpEntreprise: companyData.code_postal,
          villeEntreprise: companyData.ville,
        }));
        
        // Mark fields as valid
        setValidFields(prev => ({
          ...prev,
          siret: true,
          entreprise: true,
          adresseEntreprise: !!companyData.adresse,
          cpEntreprise: !!companyData.code_postal,
          villeEntreprise: !!companyData.ville,
        }));
        
        setSiretVerified(true);
        setSiretError("");
      } else {
        console.log("⚠️ No company found for SIRET:", cleanValue);
        setSiretError("SIRET non trouvé - Saisissez manuellement");
        setValidFields(prev => ({ ...prev, siret: false }));
      }
      
      setIsSearchingSiret(false);
    }, 500);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (siretSearchTimeout.current) {
        clearTimeout(siretSearchTimeout.current);
      }
    };
  }, []);

  // Handle form field change with validation
  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field error
    setFieldErrors(prev => ({ ...prev, [field]: "" }));
    
    // Simple validation
    const isValid = value.trim().length > 0;
    
    if (field === "email") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setValidFields(prev => ({ ...prev, [field]: emailValid }));
      if (value.trim() && !emailValid) {
        setFieldErrors(prev => ({ ...prev, email: "Format email invalide (ex: nom@entreprise.fr)" }));
      }
    } else if (field === "telephone") {
      setValidFields(prev => ({ ...prev, [field]: /^[\d\s]{10,}$/.test(value.replace(/\s/g, "")) }));
    } else if (field === "cpChantier" || field === "cpEntreprise") {
      setValidFields(prev => ({ ...prev, [field]: /^\d{5}$/.test(value.replace(/\s/g, "")) }));
    } else if (field === "dateDebut") {
      const today = getTodayDate();
      const dateValid = value >= today;
      setValidFields(prev => ({ ...prev, [field]: dateValid && isValid }));
      if (value && !dateValid) {
        setFieldErrors(prev => ({ ...prev, dateDebut: "La date ne peut pas être dans le passé" }));
      }
      // Also validate dateFin if it exists and is before new dateDebut
      if (formData.dateFin && value > formData.dateFin) {
        setFieldErrors(prev => ({ ...prev, dateFin: "La date de fin doit être après la date de début" }));
        setValidFields(prev => ({ ...prev, dateFin: false }));
      } else if (formData.dateFin) {
        setFieldErrors(prev => ({ ...prev, dateFin: "" }));
        setValidFields(prev => ({ ...prev, dateFin: formData.dateFin >= value }));
      }
    } else if (field === "dateFin") {
      const today = getTodayDate();
      const dateValid = value >= today;
      const afterStart = !formData.dateDebut || value >= formData.dateDebut;
      setValidFields(prev => ({ ...prev, [field]: dateValid && afterStart && isValid }));
      if (value && !dateValid) {
        setFieldErrors(prev => ({ ...prev, dateFin: "La date ne peut pas être dans le passé" }));
      } else if (value && !afterStart) {
        setFieldErrors(prev => ({ ...prev, dateFin: "La date de fin doit être après la date de début" }));
      }
    } else {
      setValidFields(prev => ({ ...prev, [field]: isValid }));
    }
  };

  // Calculate progress
  const progressValue = ((formStep - 1) / 2) * 100;

  // Check if step is complete
  const isStep1Complete = formData.materiel && formData.entreprise;
  const isStep2Complete = formData.nom && formData.prenom && formData.email && formData.telephone;
  const isStep3Complete = formData.dateDebut && formData.dateFin && formData.cpChantier && formData.villeChantier;

  return (
    <PageLayout hideHeader>
      <SEOHead
        title="Location Chariot Télescopique Rotatif jusqu'à 35m | Dispo Immédiate | EAP Location"
        description="Location chariot télescopique rotatif 16m-35m. Disponibilité 99%, devis en 2h, livraison 48h partout en France. Avec ou sans opérateur."
        keywords="chariot télescopique 35m, location chariot rotatif, manitou location, nacelle grande hauteur, location matériel BTP"
        canonicalUrl="/manutention/chariot-rotatif"
      />
      
      {/* Sticky CTA Bar with Pulse Effect */}
      <div className="bg-primary text-primary-foreground py-2 md:py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <span className="font-semibold text-sm md:text-base flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Réponse garantie en 2h max
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/manutention">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Manutention
              </Link>
            </Button>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">EAP Location</span>
            </div>
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
          {/* Mention photo non contractuelle */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-10">
            <span className="text-[10px] md:text-xs text-white/70 bg-black/40 px-2 py-1 rounded">
              * Photo non contractuelle
            </span>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-4 md:mb-6">
              Chariot Rotatif
              <span className="block text-primary">Jusqu'à 35m</span>
            </h1>
            
            <p className="text-base md:text-xl text-secondary-foreground/80 mb-6 md:mb-8">
              Location courte ou longue durée, avec ou sans opérateur. Partout en France.
            </p>

            {/* Big Stats - responsive */}
            <div className="flex gap-8 md:gap-12 mb-6 md:mb-10">
              <div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-primary">99%</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">Disponibilité</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground">2 400</p>
                <p className="text-xs md:text-sm text-secondary-foreground/70">Réseau d'agences</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6 max-w-6xl mx-auto">
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
                }`}>
                  {product.height}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm">Cap. {product.capacity}</p>
                {selectedProduct.includes(product.height) && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Options disponibles */}
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-3">Options disponibles</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-foreground">
              <span>Godet Terre</span>
              <span className="text-muted-foreground">•</span>
              <span>Potence</span>
              <span className="text-muted-foreground">•</span>
              <span>Treuil 5T</span>
              <span className="text-muted-foreground">•</span>
              <span>Radio Télécommande</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="devis" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="section-title mb-3 md:mb-4">Votre devis en 3 étapes</h2>
              <p className="text-muted-foreground text-sm md:text-base">Recevez votre devis personnalisé en moins de 2 heures</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 md:mb-12">
              <Progress value={progressValue} className="h-2" />
              <div className="flex justify-between mt-3 md:mt-4 text-xs md:text-sm">
                <span className={formStep >= 1 ? "text-primary font-semibold" : "text-muted-foreground"}>1. Matériel & Entreprise</span>
                <span className={formStep >= 2 ? "text-primary font-semibold" : "text-muted-foreground"}>2. Contact</span>
                <span className={formStep >= 3 ? "text-primary font-semibold" : "text-muted-foreground"}>3. Chantier</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
              {formStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">Le matériel</h3>
                  </div>

                  {/* Matériel sélectionné */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Matériel sélectionné *</label>
                    <div className={`p-4 rounded-lg border ${formData.materiel ? "bg-primary/5 border-primary" : "bg-muted border-border"}`}>
                      {formData.materiel ? (
                        <div className="flex items-center gap-2">
                          <BadgeCheck className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{formData.materiel}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Sélectionnez une hauteur ci-dessus</span>
                      )}
                    </div>
                  </div>

                  {/* Entreprise Section */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground">Informations Entreprise</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">SIRET *</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="123 456 789 00012"
                            value={formData.siret}
                            onChange={(e) => handleSiretChange(e.target.value)}
                            className={`w-full min-w-0 box-border px-4 py-3 rounded-lg border ${siretError ? "border-destructive" : "border-border"} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                          />
                          {isSearchingSiret && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <Loader2 className="w-5 h-5 text-primary animate-spin" />
                            </div>
                          )}
                          {siretVerified && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <BadgeCheck className="w-5 h-5 text-green-500" />
                            </div>
                          )}
                        </div>
                        {siretError && <p className="text-destructive text-xs mt-1">{siretError}</p>}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">Nom de l'entreprise *</label>
                        <input
                          type="text"
                          placeholder="Entreprise SAS"
                          value={formData.entreprise}
                          onChange={(e) => handleFieldChange("entreprise", e.target.value)}
                          className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">Adresse</label>
                        <input
                          type="text"
                          placeholder="12 rue de l'Industrie"
                          value={formData.adresseEntreprise}
                          onChange={(e) => handleFieldChange("adresseEntreprise", e.target.value)}
                          className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Code postal</label>
                        <input
                          type="text"
                          placeholder="67000"
                          value={formData.cpEntreprise}
                          onChange={(e) => handleFieldChange("cpEntreprise", e.target.value)}
                          className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Ville</label>
                        <input
                          type="text"
                          placeholder="Strasbourg"
                          value={formData.villeEntreprise}
                          onChange={(e) => handleFieldChange("villeEntreprise", e.target.value)}
                          className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <Button 
                      variant="cta" 
                      size="lg"
                      disabled={!isStep1Complete}
                      onClick={() => setFormStep(2)}
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-center text-xs text-muted-foreground">* Service réservé aux professionnels</p>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">Contact</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                      <input
                        type="text"
                        placeholder="Dupont"
                        value={formData.nom}
                        onChange={(e) => handleFieldChange("nom", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                      <input
                        type="text"
                        placeholder="Jean"
                        value={formData.prenom}
                        onChange={(e) => handleFieldChange("prenom", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        placeholder="jean.dupont@entreprise.fr"
                        value={formData.email}
                        onChange={(e) => handleFieldChange("email", e.target.value)}
                        className={`w-full min-w-0 box-border px-4 py-3 rounded-lg border ${fieldErrors.email ? "border-destructive" : "border-border"} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      />
                      {fieldErrors.email && <p className="text-destructive text-xs mt-1">{fieldErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.telephone}
                        onChange={(e) => handleFieldChange("telephone", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setFormStep(1)}>
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Retour
                    </Button>
                    <Button 
                      variant="cta" 
                      size="lg"
                      disabled={!isStep2Complete}
                      onClick={() => setFormStep(3)}
                    >
                      Continuer
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">Date et Lieu du chantier</h3>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date de début *</label>
                      <input
                        type="date"
                        min={getTodayDate()}
                        value={formData.dateDebut}
                        onChange={(e) => handleFieldChange("dateDebut", e.target.value)}
                        className={`w-full min-w-0 box-border px-4 py-3 rounded-lg border ${fieldErrors.dateDebut ? "border-destructive" : "border-border"} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      />
                      {fieldErrors.dateDebut && <p className="text-destructive text-xs mt-1">{fieldErrors.dateDebut}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date de fin *</label>
                      <input
                        type="date"
                        min={formData.dateDebut || getTodayDate()}
                        value={formData.dateFin}
                        onChange={(e) => handleFieldChange("dateFin", e.target.value)}
                        className={`w-full min-w-0 box-border px-4 py-3 rounded-lg border ${fieldErrors.dateFin ? "border-destructive" : "border-border"} bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      />
                      {fieldErrors.dateFin && <p className="text-destructive text-xs mt-1">{fieldErrors.dateFin}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">Adresse du chantier</label>
                      <input
                        type="text"
                        placeholder="Adresse de livraison"
                        value={formData.adresseChantier}
                        onChange={(e) => handleFieldChange("adresseChantier", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Code postal *</label>
                      <input
                        type="text"
                        placeholder="75001"
                        value={formData.cpChantier}
                        onChange={(e) => handleFieldChange("cpChantier", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ville *</label>
                      <input
                        type="text"
                        placeholder="Paris"
                        value={formData.villeChantier}
                        onChange={(e) => handleFieldChange("villeChantier", e.target.value)}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-foreground mb-2">Commentaire</label>
                      <textarea
                        placeholder="Informations complémentaires..."
                        value={formData.commentaire}
                        onChange={(e) => handleFieldChange("commentaire", e.target.value)}
                        rows={3}
                        className="w-full min-w-0 box-border px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <Button variant="outline" onClick={() => setFormStep(2)}>
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Retour
                    </Button>
                    <Button 
                      variant="cta" 
                      size="lg"
                      disabled={!isStep3Complete}
                    >
                      <Zap className="w-5 h-5" />
                      Créez votre devis
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Reassurance */}
            <div className="mt-8 md:mt-12 grid sm:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Réponse en 2h max</p>
                  <p className="text-muted-foreground text-xs">nous vous engageons à vous rappeler en moins de deux heures</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Matériel assuré</p>
                  <p className="text-muted-foreground text-xs">Garantie tous risques incluse</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Prix compétitifs</p>
                  <p className="text-muted-foreground text-xs">Tarifs dégressifs longue durée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-secondary-foreground mb-4 md:mb-6">
            Besoin d'un conseil personnalisé ?
          </h2>
          <p className="text-secondary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Nos experts sont disponibles pour vous accompagner dans le choix du matériel adapté à votre chantier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#devis">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="phone" size="lg" asChild>
              <a href="tel:0368385456">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                03 68 38 54 56
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ChariotRotatif;