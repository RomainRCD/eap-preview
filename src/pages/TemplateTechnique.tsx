import { Phone, Clock, CheckCircle, Ruler, Weight, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chariot.jpg";

const TemplateTechnique = () => {
  const products = [
    { height: "16m", capacity: "4T", portee: "13.5m", poids: "12T", name: "MRT 1635" },
    { height: "18m", capacity: "4T", portee: "15m", poids: "14T", name: "MRT 1840" },
    { height: "21m", capacity: "5T", portee: "18m", poids: "16T", name: "MRT 2150" },
    { height: "25m", capacity: "5T", portee: "21m", poids: "20T", name: "MRT 2550" },
    { height: "30m", capacity: "6T", portee: "25m", poids: "24T", name: "MRT 3050" },
    { height: "32m", capacity: "6T", portee: "27m", poids: "26T", name: "MRT 3260" },
    { height: "35m", capacity: "6T", portee: "30m", poids: "28T", name: "MRT 3570" },
  ];

  const accessories = [
    { name: "Godet Terre", desc: "Capacité 0.5 à 1.5m³" },
    { name: "Potence", desc: "Port. max 2T" },
    { name: "Treuil 5T", desc: "Câble 60m" },
    { name: "Radio Télécommande", desc: "Portée 100m" },
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
            <div>
              <span className="font-display font-bold text-xl text-foreground">EAP Location</span>
              <p className="text-xs text-muted-foreground">Spécialiste BTP depuis 2016</p>
            </div>
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

      {/* Hero - Technical Focus */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-pro mb-4 inline-block">Données Techniques Complètes</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Location Chariot Télescopique Rotatif
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Gamme complète de 16m à 35m. Consultez les caractéristiques techniques pour choisir le modèle adapté à votre chantier.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Avec ou sans opérateur</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="font-medium">Livraison France entière</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="cta" size="lg" asChild>
                  <a href="#catalogue">
                    Voir le catalogue
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#devis">Demander un devis</a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Chariot télescopique rotatif" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Catalog */}
      <section id="catalogue" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Catalogue Technique</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comparez les caractéristiques de nos chariots télescopiques rotatifs
            </p>
          </div>

          {/* Technical Grid */}
          <div className="grid gap-6">
            {/* Header Row */}
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold">
              <div>Modèle</div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Hauteur
              </div>
              <div className="flex items-center gap-2">
                <Weight className="w-4 h-4" />
                Capacité
              </div>
              <div>Portée max</div>
              <div>Poids</div>
              <div></div>
            </div>

            {/* Product Rows */}
            {products.map((product, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-6 gap-4 items-center px-6 py-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">{product.height}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground md:hidden">Rotatif avec fourche</p>
                  </div>
                </div>
                
                <div className="flex md:block items-center justify-between">
                  <span className="md:hidden text-sm text-muted-foreground">Hauteur:</span>
                  <span className="font-semibold text-foreground">{product.height}</span>
                </div>
                
                <div className="flex md:block items-center justify-between">
                  <span className="md:hidden text-sm text-muted-foreground">Capacité:</span>
                  <span className="font-semibold text-foreground">{product.capacity}</span>
                </div>
                
                <div className="flex md:block items-center justify-between">
                  <span className="md:hidden text-sm text-muted-foreground">Portée:</span>
                  <span className="text-foreground">{product.portee}</span>
                </div>
                
                <div className="flex md:block items-center justify-between">
                  <span className="md:hidden text-sm text-muted-foreground">Poids:</span>
                  <span className="text-muted-foreground">{product.poids}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="cta" size="sm" asChild>
                    <a href="#devis">Devis</a>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Accessoires Disponibles</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((acc, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{acc.name}</h3>
                <p className="text-muted-foreground text-sm">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="devis" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-title">Demande de Devis Technique</h2>
              <p className="text-muted-foreground">
                Précisez vos besoins, nous vous enverrons une offre détaillée sous 2h
              </p>
            </div>
            
            <form className="bg-card border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Modèle souhaité</label>
                  <select className="input-field">
                    <option>Sélectionner un chariot</option>
                    {products.map((p, i) => (
                      <option key={i}>{p.name} - {p.height} / {p.capacity}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Avec opérateur ?</label>
                  <select className="input-field">
                    <option>Sans opérateur</option>
                    <option>Avec opérateur</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Accessoires</label>
                  <select className="input-field">
                    <option>Fourche uniquement</option>
                    <option>Godet Terre</option>
                    <option>Potence</option>
                    <option>Treuil 5T</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Entreprise / SIRET</label>
                  <input type="text" className="input-field" placeholder="Votre entreprise" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact</label>
                  <input type="text" className="input-field" placeholder="Nom et Prénom" />
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
                  <label className="block text-sm font-medium text-foreground mb-2">Code postal chantier</label>
                  <input type="text" className="input-field" placeholder="75001" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Durée estimée</label>
                  <select className="input-field">
                    <option>1 jour</option>
                    <option>1 semaine</option>
                    <option>1 mois</option>
                    <option>+ 1 mois</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Précisions techniques (optionnel)</label>
                  <textarea className="input-field min-h-[100px]" placeholder="Contraintes d'accès, charge spécifique, etc."></textarea>
                </div>
              </div>

              <Button variant="cta" size="xl" className="w-full mt-8">
                Envoyer ma demande technique
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            EAP Location - Expert BTP depuis 2016 | contact@eap-location.fr | 03 68 38 54 56
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TemplateTechnique;
