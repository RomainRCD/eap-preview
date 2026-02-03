import { useState, useEffect, useRef, ReactNode } from "react";
import { Phone, Clock, Zap, CheckCircle, ArrowRight, Shield, TrendingUp, Star, Check, FileText, Loader2, BadgeCheck, Building2, MapPin, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import SEOHead from "@/components/SEOHead";

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
    const response = await fetch(
      `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(cleanSiret)}`,
      { method: "GET", headers: { "Accept": "application/json" } }
    );
    
    if (!response.ok) return null;
    const data = await response.json();
    
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
    console.error("SIRENE fetch error:", error);
    return null;
  }
};

const getTodayDate = (): string => new Date().toISOString().split('T')[0];

interface ProductOption {
  label: string;
  value: string;
}

interface ProductTemplateProps {
  // SEO
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  // Hero
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  // Products
  products: ProductOption[];
  productSelectorTitle: string;
  productSelectorSubtitle: string;
  productNamePrefix: string;
  // Category for back link
  category: string;
  categoryLabel: string;
}

const trustLogos = [
  { name: "ASSA ABLOY", logo: logoAssaAbloy },
  { name: "EDF", logo: logoEdf },
  { name: "Nordex", logo: logoNordex },
  { name: "Triangle Horizon", logo: logoTriangleHorizon },
  { name: "Eiffage", logo: logoEiffage },
  { name: "Vinci", logo: logoVinci },
];

const ProductTemplate = ({
  title,
  description,
  keywords,
  canonicalUrl,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  products,
  productSelectorTitle,
  productSelectorSubtitle,
  productNamePrefix,
  category,
  categoryLabel,
}: ProductTemplateProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    materiel: "",
    dateDebut: "",
    dateFin: "",
    siret: "",
    entreprise: "",
    adresseEntreprise: "",
    cpEntreprise: "",
    villeEntreprise: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
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
  const siretSearchTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleProductSelect = (product: ProductOption) => {
    const value = `${productNamePrefix} ${product.value}`;
    setSelectedProduct(value);
    setFormData(prev => ({ ...prev, materiel: value }));
    setValidFields(prev => ({ ...prev, materiel: true }));
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSiretChange = (value: string) => {
    const sanitizedValue = value.replace(/[^\d\s]/g, "");
    setFormData(prev => ({ ...prev, siret: sanitizedValue }));
    setSiretError("");
    
    if (siretSearchTimeout.current) clearTimeout(siretSearchTimeout.current);
    const cleanValue = sanitizedValue.replace(/\s/g, "");
    
    if (cleanValue.length > 0 && cleanValue.length !== 9 && cleanValue.length !== 14) {
      setSiretError("Le SIRET doit contenir 9 ou 14 chiffres");
    }
    
    if (!cleanValue || !isSiretFormat(cleanValue)) {
      setSiretVerified(false);
      setIsSearchingSiret(false);
      return;
    }

    setIsSearchingSiret(true);
    setSiretVerified(false);

    siretSearchTimeout.current = setTimeout(async () => {
      const companyData = await fetchCompanyBySiret(cleanValue);
      if (companyData) {
        setFormData(prev => ({
          ...prev,
          entreprise: companyData.nom_complet,
          adresseEntreprise: companyData.adresse,
          cpEntreprise: companyData.code_postal,
          villeEntreprise: companyData.ville,
        }));
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
        setSiretError("SIRET non trouvé - Saisissez manuellement");
        setValidFields(prev => ({ ...prev, siret: false }));
      }
      setIsSearchingSiret(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (siretSearchTimeout.current) clearTimeout(siretSearchTimeout.current);
    };
  }, []);

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setFieldErrors(prev => ({ ...prev, [field]: "" }));
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

  const progressValue = ((formStep - 1) / 2) * 100;
  const isStep1Complete = formData.materiel && formData.entreprise;
  const isStep2Complete = formData.nom && formData.prenom && formData.email && formData.telephone;
  const isStep3Complete = formData.dateDebut && formData.dateFin && formData.cpChantier && formData.villeChantier;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
      />
      
      {/* Sticky CTA Bar */}
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
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground -ml-2">
              <Link to={`/${category}`}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">{categoryLabel}</span>
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground hidden sm:inline">EAP Location</span>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={heroImageAlt} 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-10">
            <span className="text-[10px] md:text-xs text-white/70 bg-black/40 px-2 py-1 rounded">
              * Photo non contractuelle
            </span>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-secondary-foreground leading-tight mb-4 md:mb-6">
              {heroTitle}
              <span className="block text-primary">{heroHighlight}</span>
            </h1>
            
            <p className="text-base md:text-xl text-secondary-foreground/80 mb-6 md:mb-8">
              {heroSubtitle}
            </p>

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

      {/* Trust Bar */}
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

      {/* Product Selection */}
      <section className="py-10 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-3 md:mb-4">{productSelectorTitle}</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-sm md:text-base">{productSelectorSubtitle}</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4">
            {products.map((product, index) => (
              <button 
                key={index}
                onClick={() => handleProductSelect(product)}
                className={`group relative bg-card border-2 rounded-lg md:rounded-xl px-3 py-3 md:px-8 md:py-6 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 ${
                  selectedProduct.includes(product.value) 
                    ? "border-primary shadow-lg" 
                    : "border-border"
                }`}
              >
                <p className={`text-lg md:text-2xl font-display font-bold transition-colors whitespace-nowrap ${
                  selectedProduct.includes(product.value) ? "text-primary" : "text-foreground group-hover:text-primary"
                }`}>{product.label}</p>
                <div className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-success rounded-full flex items-center justify-center transition-opacity ${
                  selectedProduct.includes(product.value) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-success-foreground" strokeWidth={1.5} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 md:mb-3">Réponse en 2h max</h3>
              <p className="text-muted-foreground text-sm md:text-base">Nous nous engageons à vous rappeler en moins de deux heures</p>
            </div>

            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-success/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-success" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 md:mb-3">Matériel contrôlé</h3>
              <p className="text-muted-foreground text-sm md:text-base">Chaque machine vérifiée avant livraison selon les normes</p>
            </div>

            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 card-hover sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 md:mb-3">Livraison France entière</h3>
              <p className="text-muted-foreground text-sm md:text-base">Transport et mise en place sur votre chantier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="devis" className="py-10 md:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-foreground mb-3 md:mb-4">
                Votre devis en 3 étapes
              </h2>
              <p className="text-secondary-foreground/70 text-sm md:text-base">Recevez une offre personnalisée en quelques minutes</p>
            </div>

            {/* Progress */}
            <div className="mb-8 md:mb-10">
              <div className="flex justify-between mb-3 md:mb-4 text-xs md:text-sm">
                <span className={`font-medium ${formStep >= 1 ? "text-primary" : "text-secondary-foreground/50"}`}>1. Matériel & Entreprise</span>
                <span className={`font-medium ${formStep >= 2 ? "text-primary" : "text-secondary-foreground/50"}`}>2. Contact</span>
                <span className={`font-medium ${formStep >= 3 ? "text-primary" : "text-secondary-foreground/50"}`}>3. Chantier</span>
              </div>
              <Progress value={progressValue} className="h-2" />
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-2xl">
              {formStep === 1 && (
                <div className="space-y-5 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Le matériel
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Équipement sélectionné</label>
                    <div className="relative">
                      <select
                        value={formData.materiel}
                        onChange={(e) => handleFieldChange("materiel", e.target.value)}
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground appearance-none min-w-0 box-border"
                      >
                        <option value="">Sélectionnez un équipement</option>
                        {products.map((product, index) => (
                          <option key={index} value={`${productNamePrefix} ${product.value}`}>
                            {productNamePrefix} {product.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground flex items-center gap-2 pt-4 border-t border-border">
                    <Building2 className="w-5 h-5 text-primary" />
                    Informations Entreprise
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">SIRET *</label>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formData.siret}
                        onChange={(e) => handleSiretChange(e.target.value)}
                        placeholder="123 456 789 00012"
                        className={`w-full px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border ${
                          siretError ? "border-destructive" : siretVerified ? "border-success" : "border-border focus:border-primary"
                        }`}
                      />
                      {isSearchingSiret && (
                        <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-spin" />
                      )}
                      {siretVerified && (
                        <BadgeCheck className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                      )}
                    </div>
                    {siretError && <p className="text-destructive text-xs mt-1">{siretError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom de l'entreprise *</label>
                    <input
                      type="text"
                      value={formData.entreprise}
                      onChange={(e) => handleFieldChange("entreprise", e.target.value)}
                      placeholder="Raison sociale"
                      className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Adresse</label>
                    <input
                      type="text"
                      value={formData.adresseEntreprise}
                      onChange={(e) => handleFieldChange("adresseEntreprise", e.target.value)}
                      placeholder="Adresse du siège"
                      className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Code postal</label>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formData.cpEntreprise}
                        onChange={(e) => handleFieldChange("cpEntreprise", e.target.value)}
                        placeholder="67000"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ville</label>
                      <input
                        type="text"
                        value={formData.villeEntreprise}
                        onChange={(e) => handleFieldChange("villeEntreprise", e.target.value)}
                        placeholder="Strasbourg"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                  </div>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={!isStep1Complete}
                    onClick={() => setFormStep(2)}
                  >
                    Continuer
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">* Service réservé aux professionnels</p>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-5 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Contact
                  </h3>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                      <input
                        type="text"
                        autoComplete="family-name"
                        name="family-name"
                        value={formData.nom}
                        onChange={(e) => handleFieldChange("nom", e.target.value)}
                        placeholder="Dupont"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                      <input
                        type="text"
                        autoComplete="given-name"
                        name="given-name"
                        value={formData.prenom}
                        onChange={(e) => handleFieldChange("prenom", e.target.value)}
                        placeholder="Jean"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      autoComplete="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange("email", e.target.value)}
                      placeholder="contact@entreprise.fr"
                      className={`w-full px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border ${
                        fieldErrors.email ? "border-destructive" : "border-border focus:border-primary"
                      }`}
                    />
                    {fieldErrors.email && <p className="text-destructive text-xs mt-1">{fieldErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      name="tel"
                      value={formData.telephone}
                      onChange={(e) => handleFieldChange("telephone", e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                    />
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setFormStep(1)}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Retour
                    </Button>
                    <Button
                      variant="cta"
                      size="lg"
                      className="flex-1"
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
                <div className="space-y-5 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Date et Lieu du chantier
                  </h3>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date de début *</label>
                      <input
                        type="date"
                        value={formData.dateDebut}
                        onChange={(e) => handleFieldChange("dateDebut", e.target.value)}
                        min={getTodayDate()}
                        className={`w-full px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border ${
                          fieldErrors.dateDebut ? "border-destructive" : "border-border focus:border-primary"
                        }`}
                      />
                      {fieldErrors.dateDebut && <p className="text-destructive text-xs mt-1">{fieldErrors.dateDebut}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Date de fin *</label>
                      <input
                        type="date"
                        value={formData.dateFin}
                        onChange={(e) => handleFieldChange("dateFin", e.target.value)}
                        min={formData.dateDebut || getTodayDate()}
                        className={`w-full px-4 py-3 md:py-4 border-2 rounded-xl focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border ${
                          fieldErrors.dateFin ? "border-destructive" : "border-border focus:border-primary"
                        }`}
                      />
                      {fieldErrors.dateFin && <p className="text-destructive text-xs mt-1">{fieldErrors.dateFin}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Adresse du chantier</label>
                    <input
                      type="text"
                      value={formData.adresseChantier}
                      onChange={(e) => handleFieldChange("adresseChantier", e.target.value)}
                      placeholder="Adresse de livraison"
                      className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Code postal *</label>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={formData.cpChantier}
                        onChange={(e) => handleFieldChange("cpChantier", e.target.value)}
                        placeholder="67000"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ville *</label>
                      <input
                        type="text"
                        value={formData.villeChantier}
                        onChange={(e) => handleFieldChange("villeChantier", e.target.value)}
                        placeholder="Strasbourg"
                        className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground min-w-0 box-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Commentaire (optionnel)</label>
                    <textarea
                      value={formData.commentaire}
                      onChange={(e) => handleFieldChange("commentaire", e.target.value)}
                      placeholder="Précisions sur votre besoin..."
                      rows={3}
                      className="w-full px-4 py-3 md:py-4 border-2 border-border rounded-xl focus:border-primary focus:ring-0 transition-colors bg-background text-foreground resize-none min-w-0 box-border"
                    />
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setFormStep(2)}
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Retour
                    </Button>
                    <Button
                      variant="cta"
                      size="lg"
                      className="flex-1"
                      disabled={!isStep3Complete}
                    >
                      <FileText className="w-5 h-5" />
                      Créer mon devis
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 md:hidden z-40">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href="tel:0368385456">
              <Phone className="w-4 h-4" />
              Appeler
            </a>
          </Button>
          <Button variant="cta" size="sm" className="flex-1" asChild>
            <a href="#devis">Devis Express</a>
          </Button>
        </div>
      </div>

      {/* Footer spacing for mobile sticky */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default ProductTemplate;
