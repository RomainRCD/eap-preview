/**
 * Questions fréquentes d'une fiche produit.
 *
 * Le contenu vit dans `products.json`, champ `faq` : [{ q, a }].
 * Volontairement dépliées : une réponse cachée derrière un accordéon est lue
 * par Google mais pas par le visiteur pressé, et ce sont justement les
 * questions de prix et de choix de gamme qui décident d'une demande de devis.
 */

import { Helmet } from "react-helmet-async";
import { typo } from "@/components/products/ProductContent";

interface Props {
  items: { q: string; a: string }[];
}

const ProductFaq = ({ items }: Props) => {
  if (!items.length) return null;
  // Balisage FAQPage : c'est lui qui permet aux questions de remonter
  // directement dans les résultats Google, sur « prix location benne » et
  // consorts. Porté ici plutôt que dans SEOHead : un FAQPage est un type à
  // part, le fusionner avec la fiche LocalBusiness produirait un balisage
  // invalide.
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="py-10 md:py-16 bg-muted">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">
              Questions fréquentes
            </span>
            <h2 className="section-title">Ce qu'on nous demande le plus souvent</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {items.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-7">
                <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2 md:mb-3">
                  {typo(item.q)}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{typo(item.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFaq;
