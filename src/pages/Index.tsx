import { Link } from "react-router-dom";
import { ArrowRight, Layout, Zap, Ruler, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const templates = [
    {
      id: "confiance",
      name: "Template Confiance",
      description: "Design épuré axé sur la crédibilité et la réassurance. Mise en avant des témoignages de confiance et des chiffres clés.",
      icon: Layout,
      color: "bg-primary/10 text-primary",
      path: "/template-confiance"
    },
    {
      id: "impact",
      name: "Template Impact",
      description: "Design bold avec chiffres imposants et CTAs agressifs. Hero full-width avec image de fond et stats visuelles.",
      icon: Zap,
      color: "bg-success/10 text-success",
      path: "/template-impact"
    },
    {
      id: "technique",
      name: "Template Technique",
      description: "Focus sur les spécifications techniques. Tableau comparatif des modèles avec données détaillées (portée, poids, capacité).",
      icon: Ruler,
      color: "bg-accent/10 text-accent",
      path: "/template-technique"
    },
    {
      id: "formulaire",
      name: "Template Formulaire First",
      description: "Formulaire multi-étapes directement visible en hero. Optimisé mobile avec progression visuelle claire.",
      icon: FileText,
      color: "bg-secondary text-secondary-foreground",
      path: "/template-formulaire"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">EAP Location</h1>
              <p className="text-sm text-muted-foreground">Propositions de redesign</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <span className="badge-pro mb-4 inline-block">Projet de Modernisation</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            4 Templates pour moderniser<br />
            <span className="text-primary">la page Chariot Rotatif</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez 4 approches différentes pour optimiser les conversions de votre landing page SEA. 
            Chaque template est pensé pour le secteur BTP professionnel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="w-3 h-3 bg-success rounded-full"></span>
              <span className="text-sm text-foreground">Orienté Conversion</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span className="text-sm text-foreground">Design Pro BTP</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="w-3 h-3 bg-accent rounded-full"></span>
              <span className="text-sm text-foreground">Mobile First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <Link 
                key={template.id}
                to={template.path}
                className="group bg-card border border-border rounded-2xl p-8 card-hover block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${template.color}`}>
                    <template.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm text-muted-foreground">Template {index + 1}</span>
                </div>
                
                <h2 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {template.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {template.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>Voir le template</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Caractéristiques communes</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">CTA</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">CTAs Multiples</h3>
              <p className="text-sm text-muted-foreground">Téléphone et formulaire toujours accessibles</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-success font-bold">99%</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Réassurance</h3>
              <p className="text-sm text-muted-foreground">Chiffres clés et badges de confiance</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">📱</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Responsive</h3>
              <p className="text-sm text-muted-foreground">Optimisé mobile pour chefs de chantier</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center border border-border">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold">⚡</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">Chargement rapide, pas de frameworks lourds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Prêt à moderniser votre site ?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explorez chaque template en détail et choisissez celui qui correspond le mieux à vos objectifs de conversion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/template-confiance">
                Commencer par Template 1
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Propositions de redesign pour EAP Location - Décembre 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
