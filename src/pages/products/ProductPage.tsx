import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { PRODUCTS, productImage } from "@/data/products";

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

  const pathParts = location.pathname.split("/").filter(Boolean);
  const category = pathParts[0];
  const categoryName = category ? categoryNames[category] || category : "Produit";

  const info = slug ? PRODUCTS[slug] : undefined;
  const image = slug ? productImage(slug) : undefined;
  const productName = info?.name || (slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") ?? "Produit");

  return (
    <PageLayout>
      <SEOHead
        title={`Location ${productName} | Travax`}
        description={info?.description?.[0]?.slice(0, 155) || `Location de ${productName.toLowerCase()} pour professionnels du BTP. Devis gratuit sous 2h, livraison partout en France.`}
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
            Location {productName}
          </h1>
          {info?.spec && <p className="text-white/70 mt-2">{info.spec}</p>}
        </div>
      </section>

      {/* Contenu produit */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            <div className="w-full bg-white rounded-2xl border border-border flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={productName} className="w-full h-80 object-contain p-4" />
              ) : (
                <div className="w-full h-80 flex items-center justify-center">
                  <span className="text-muted-foreground">Image à venir</span>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                {productName} en location
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {(info?.description ?? ["Description à venir."]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" asChild>
                  <Link to="/devis">
                    Demander un devis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:0368385456">
                    <Phone className="w-4 h-4 mr-2" />
                    03 68 38 54 56
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProductPage;
