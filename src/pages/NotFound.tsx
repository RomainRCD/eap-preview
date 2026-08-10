import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { label: "Terrassement", to: "/terrassement" },
  { label: "Travail en Hauteur", to: "/travail-en-hauteur" },
  { label: "Manutention", to: "/manutention" },
  { label: "Compactage", to: "/compactage" },
  { label: "Base Vie", to: "/base-vie" },
  { label: "Autres", to: "/autres" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 : route inexistante ->", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      {/* noindex : l'hébergement renvoie un code 200 sur toute URL inconnue (repli SPA).
          Sans cette balise, Google indexerait des pages vides en « soft 404 ». */}
      <SEOHead
        title="Page introuvable | EAP Location"
        description="Cette page n'existe pas ou a été déplacée. Retrouvez tout notre matériel BTP par catégorie."
        noindex
      />
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-primary font-display font-bold text-5xl md:text-6xl mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Cette page n'existe pas ou a été déplacée
          </h1>
          <p className="text-muted-foreground mb-10">
            Le site a été refondu : certaines anciennes adresses ne sont plus valables.
            Retrouvez le matériel que vous cherchez par catégorie, ou appelez-nous, on vous répond sous 2h.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="px-4 py-2 rounded-lg border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group" asChild>
              <Link to="/catalogue">
                Voir tout le catalogue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="phone" size="xl" asChild>
              <a href="tel:+33368385456">
                <Phone className="w-5 h-5" />
                +33 3 68 38 54 56
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
