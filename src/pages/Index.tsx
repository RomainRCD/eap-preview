import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import previewConfiance from "@/assets/preview-confiance.png";
import previewImpact from "@/assets/preview-impact.png";
import previewTechnique from "@/assets/preview-technique.png";
import previewFormulaire from "@/assets/preview-formulaire.png";

const Index = () => {
  const templates = [
    {
      id: "confiance",
      name: "Confiance",
      description: "Design épuré, réassurance, badges de crédibilité",
      path: "/template-confiance",
      preview: previewConfiance
    },
    {
      id: "impact",
      name: "Impact",
      description: "Hero full-width, chiffres XXL, CTAs agressifs",
      path: "/template-impact",
      preview: previewImpact
    },
    {
      id: "technique",
      name: "Technique",
      description: "Tableau comparatif avec specs détaillées",
      path: "/template-technique",
      preview: previewTechnique
    },
    {
      id: "formulaire",
      name: "Formulaire First",
      description: "Formulaire multi-étapes directement en hero",
      path: "/template-formulaire",
      preview: previewFormulaire
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
              <div className="h-40 overflow-hidden bg-muted">
                <img 
                  src={template.preview} 
                  alt={`Aperçu ${template.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
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