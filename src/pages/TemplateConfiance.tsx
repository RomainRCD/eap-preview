import { Phone, Clock, CheckCircle, Shield, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chariot.jpg";

const TemplateConfiance = () => {
  const products = [
    { height: "16m", capacity: "4T", name: "Chariot Rotatif 16m" },
    { height: "18m", capacity: "4T", name: "Chariot Rotatif 18m" },
    { height: "21m", capacity: "5T", name: "Chariot Rotatif 21m" },
    { height: "25m", capacity: "5T", name: "Chariot Rotatif 25m" },
    { height: "30m", capacity: "6T", name: "Chariot Rotatif 30m" },
    { height: "32m", capacity: "6T", name: "Chariot Rotatif 32m" },
    { height: "35m", capacity: "6T", name: "Chariot Rotatif 35m" },
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <Clock className="w-4 h-4" />
              <span className="text-sm">Lun-Ven 7h30-18h</span>
            </div>
            <Button variant="phone" size="lg" asChild>
              <a href="tel:0368385456">
                <Phone className="w-5 h-5" />
                03 68 38 54 56
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-hero text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="badge-pro mb-4 inline-block">Spécialiste BTP depuis 2016</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Location de Chariot Télescopique <span className="text-primary">Rotatif</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                De 16 à 35 mètres de hauteur, avec ou sans opérateur. Disponibilité garantie dans 99% des cas.
              </p>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="trust-badge">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Réponse sous 2h</span>
                </div>
                <div className="trust-badge">
                  <Users className="w-5 h-5 text-primary" />
                  <span>2400+ agences partenaires</span>
                </div>
                <div className="trust-badge">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Partout en France</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <a href="#devis">Demander un devis gratuit</a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="tel:0368385456">
                    <Phone className="w-5 h-5" />
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <img 
                src={heroImage} 
                alt="Chariot télescopique rotatif Manitou sur chantier" 
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">99% de disponibilité</p>
                    <p className="text-sm text-muted-foreground">Livraison sous 48h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="stat-number">2400+</p>
              <p className="text-muted-foreground mt-2">Agences partenaires</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="stat-number">99%</p>
              <p className="text-muted-foreground mt-2">Disponibilité garantie</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="stat-number">2h</p>
              <p className="text-muted-foreground mt-2">Réponse maximum</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="stat-number">2016</p>
              <p className="text-muted-foreground mt-2">Depuis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre Gamme de Chariots Rotatifs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Du chariot compact au géant de 35 mètres, trouvez l'équipement adapté à votre chantier.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index}
                className="card-hover bg-card rounded-xl border border-border p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-primary">{product.height}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">Capacité jusqu'à {product.capacity}</p>
                <div className="flex items-center gap-2 text-sm text-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>Disponible</span>
                </div>
              </div>
            ))}
          </div>

          {/* Accessories */}
          <div className="mt-12 bg-muted rounded-2xl p-8">
            <h3 className="font-display font-semibold text-xl mb-6 text-center">Accessoires Disponibles</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Godet Terre", "Potence", "Treuil 5T", "Radio Télécommande"].map((acc, i) => (
                <span key={i} className="px-4 py-2 bg-card rounded-full text-foreground border border-border">
                  {acc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Form Section */}
      <section id="devis" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-6">
              Demandez votre devis gratuit
            </h2>
            <p className="text-secondary-foreground/80 mb-8">
              Réponse garantie en moins de 2 heures. Un interlocuteur unique pour votre projet.
            </p>
            
            <form className="bg-card rounded-2xl p-8 shadow-xl text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Entreprise / SIRET</label>
                  <input type="text" className="input-field" placeholder="Nom de votre entreprise" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Type de matériel</label>
                  <select className="input-field">
                    <option>Choisir un chariot</option>
                    {products.map((p, i) => (
                      <option key={i}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom du contact</label>
                  <input type="text" className="input-field" placeholder="Prénom et Nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <input type="tel" className="input-field" placeholder="06 XX XX XX XX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="email@entreprise.fr" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Code postal du chantier</label>
                  <input type="text" className="input-field" placeholder="75001" />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">Dates souhaitées</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="date" className="input-field" />
                  <input type="date" className="input-field" />
                </div>
              </div>

              <Button variant="cta" size="xl" className="w-full mt-8">
                Obtenir mon devis gratuit
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Ou appelez-nous directement au <a href="tel:0368385456" className="text-primary font-semibold">03 68 38 54 56</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">E</span>
            </div>
            <span className="font-display font-bold text-lg">EAP Location</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Spécialiste de la location de matériel BTP pour les professionnels depuis 2016
          </p>
          <p className="text-sm text-muted-foreground">
            contact@eap-location.fr | 03 68 38 54 56
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateConfiance;
