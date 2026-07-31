import { useParams, useLocation, Link } from "react-router-dom";
import ProductTemplate from "@/components/products/ProductTemplate";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PRODUCTS, productImage } from "@/data/products";
import heroChantier from "@/assets/hero-chantier.png";

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

  // Produit inconnu : page minimale de repli
  if (!info || !slug) {
    const fallbackName = slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") ?? "Produit";
    return (
      <PageLayout>
        <SEOHead
          title={`Location ${fallbackName} | EAP Location`}
          description={`Location de ${fallbackName.toLowerCase()} pour professionnels du BTP.`}
          keywords={`location ${fallbackName.toLowerCase()}, BTP`}
          canonicalUrl={`/${category}/${slug}`}
        />
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-6">{fallbackName}</h1>
            <p className="text-muted-foreground mb-8">Ce produit n'est pas encore référencé.</p>
            <Button asChild>
              <Link to={`/${category}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à {categoryName}
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  const firstSentence = info.description?.[0]?.split(". ")[0];
  const heroSubtitle = `${info.spec ? info.spec + ". " : ""}Location courte ou longue durée. Livraison partout en France.`;
  // Surcharges rédactionnelles des fiches historiques (ex-pages dédiées) — sinon textes générés.
  const o = info.page ?? {};

  return (
    <ProductTemplate
      title={o.title ?? `Location ${info.name} | EAP Location`}
      description={o.description ?? (firstSentence || `Location de ${info.name.toLowerCase()} pour professionnels du BTP`).slice(0, 155) + ". Devis en 2h, livraison partout en France."}
      keywords={o.keywords ?? `location ${info.name.toLowerCase()}, ${categoryName.toLowerCase()}, location matériel BTP`}
      canonicalUrl={`/${category}/${slug}`}
      heroTitle={o.heroTitle ?? `Location ${info.name}`}
      heroHighlight={o.heroHighlight ?? info.spec ?? categoryName}
      heroSubtitle={o.heroSubtitle ?? heroSubtitle}
      heroImage={image || heroChantier}
      heroImageAlt={o.imageAlt ?? info.name}
      products={info.variants ?? []}
      options={info.options ?? []}
      productSelectorTitle={o.selectorTitle ?? "Quelle configuration pour votre chantier ?"}
      productSelectorSubtitle={o.selectorSubtitle ?? "Sélectionnez et obtenez un devis immédiat"}
      productNamePrefix={o.namePrefix ?? info.name}
      category={category}
      categoryLabel={categoryName}
    />
  );
};

export default ProductPage;
