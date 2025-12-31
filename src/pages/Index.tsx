import { Link } from "react-router-dom";
import { ArrowRight, Layout, Zap, Ruler, FileText } from "lucide-react";

const Index = () => {
  const templates = [
    {
      id: "confiance",
      name: "Confiance",
      description: "Design épuré, réassurance, badges de crédibilité",
      icon: Layout,
      color: "bg-primary/10 text-primary",
      path: "/template-confiance"
    },
    {
      id: "impact",
      name: "Impact",
      description: "Hero full-width, chiffres XXL, CTAs agressifs",
      icon: Zap,
      color: "bg-success/10 text-success",
      path: "/template-impact"
    },
    {
      id: "technique",
      name: "Technique",
      description: "Tableau comparatif avec specs détaillées",
      icon: Ruler,
      color: "bg-accent/10 text-accent",
      path: "/template-technique"
    },
    {
      id: "formulaire",
      name: "Formulaire First",
      description: "Formulaire multi-étapes directement en hero",
      icon: FileText,
      color: "bg-secondary text-secondary-foreground",
      path: "/template-formulaire"
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            EAP Location - Redesign
          </h1>
          <p className="text-muted-foreground">
            4 propositions pour la page Chariot Rotatif
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {templates.map((template, index) => (
            <Link 
              key={template.id}
              to={template.path}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${template.color}`}>
                  <template.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Template {index + 1}</span>
                  <h2 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {template.name}
                  </h2>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {template.description}
              </p>
              
              <div className="flex items-center gap-1 text-sm text-primary font-medium">
                <span>Voir</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Décembre 2024
        </p>
      </div>
    </div>
  );
};

export default Index;
