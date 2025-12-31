import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const templates = [
    {
      id: "confiance",
      name: "Confiance",
      description: "Design épuré, réassurance, badges de crédibilité",
      path: "/template-confiance",
      preview: "bg-gradient-to-br from-slate-50 to-slate-100"
    },
    {
      id: "impact",
      name: "Impact",
      description: "Hero full-width, chiffres XXL, CTAs agressifs",
      path: "/template-impact",
      preview: "bg-gradient-to-br from-primary/20 to-primary/5"
    },
    {
      id: "technique",
      name: "Technique",
      description: "Tableau comparatif avec specs détaillées",
      path: "/template-technique",
      preview: "bg-gradient-to-br from-slate-100 to-slate-200"
    },
    {
      id: "formulaire",
      name: "Formulaire First",
      description: "Formulaire multi-étapes directement en hero",
      path: "/template-formulaire",
      preview: "bg-gradient-to-br from-primary/10 to-slate-50"
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            EAP Location - Redesign
          </h1>
          <p className="text-muted-foreground">
            4 propositions pour la page Chariot Rotatif
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <Link 
              key={template.id}
              to={template.path}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Miniature preview */}
              <div className={`h-32 ${template.preview} relative overflow-hidden`}>
                <div className="absolute inset-2 bg-white/80 rounded-md shadow-sm flex flex-col">
                  <div className="h-8 bg-slate-800 rounded-t-md flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 p-2 space-y-1">
                    <div className="h-6 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    <div className="flex gap-1 mt-2">
                      <div className="h-4 bg-primary/30 rounded w-16"></div>
                      <div className="h-4 bg-slate-300 rounded w-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Template {index + 1}</span>
                </div>
                <h2 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-lg mb-1">
                  {template.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {template.description}
                </p>
                <div className="flex items-center gap-1 text-sm text-primary font-medium">
                  <span>Voir</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
