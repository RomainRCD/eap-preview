import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

// Map des catégories vers leurs noms affichables
const categoryNames: Record<string, string> = {
  terrassement: "Terrassement",
  "travail-en-hauteur": "Travail en Hauteur",
  manutention: "Manutention",
  compactage: "Compactage",
  "base-vie": "Base Vie",
  autres: "Autres",
};

const ProductPage = () => {
  const location = useLocation();
  const { slug } = useParams();
  
  // Extraire la catégorie depuis le pathname
  const pathParts = location.pathname.split("/").filter(Boolean);
  const category = pathParts[0];
  
  const categoryName = category ? categoryNames[category] || category : "Produit";
  const productName = slug?.split("-").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ") || "Produit";

  return (
    <PageLayout>
      <SEOHead
        title={`Location ${productName} | EAP Location`}
        description={`Location de ${productName.toLowerCase()} pour professionnels du BTP. Devis gratuit sous 2h, livraison partout en France.`}
        keywords={`location ${productName.toLowerCase()}, ${categoryName.toLowerCase()}, BTP`}
        canonicalUrl={`/${category}/${slug}`}
      />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link>
            <span>/</span>
            <Link to={`/${category}`} className="hover:text-primary transition-colors">{categoryName}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{productName}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="text-white/70 hover:text-white mb-4" asChild>
            <Link to={`/${category}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à {categoryName}
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
            {productName}
          </h1>
          <p className="text-white/70 mt-2">
            Page produit à compléter
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-full h-64 bg-muted rounded-2xl mb-8 flex items-center justify-center border-2 border-dashed border-border">
              <span className="text-muted-foreground">Image produit à ajouter</span>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Page en cours de construction
              </h2>
              <p className="text-muted-foreground mb-6">
                Cette page produit sera basée sur le template Impact avec les spécifications 
                techniques, le formulaire de devis et les informations détaillées du produit.
              </p>
              <Button variant="cta" asChild>
                <Link to="/devis">
                  Voir le template de référence
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductPage;
