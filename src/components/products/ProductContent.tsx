import { Check, Truck, Clock, PackageCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Corps rédactionnel d'une fiche produit.
 *
 * Le texte vit dans `products.json`, champ `description`, sous forme de lignes.
 * Trois formes sont reconnues, et c'est tout — l'idée est que l'outil Site de
 * Pilot puisse écrire ce texte sans connaître de langage de mise en forme :
 *   « **Un intertitre :** »  → sous-titre
 *   « - un point »           → puce (les puces qui se suivent forment une liste)
 *   tout le reste            → paragraphe
 * `**gras**` fonctionne aussi à l'intérieur d'un paragraphe ou d'une puce.
 *
 * Jusqu'ici ce texte n'était affiché nulle part : seule sa première phrase
 * alimentait la balise description. Dix-neuf fiches avaient donc un contenu
 * rédigé et invisible, et Google notait l'expérience de page « inférieure à la
 * moyenne » sur la totalité des mots-clés du compte.
 */

type Bloc =
  | { type: "titre"; texte: string }
  | { type: "para"; texte: string }
  | { type: "liste"; items: string[] };

export function decouper(lignes: string[]): Bloc[] {
  const out: Bloc[] = [];
  for (const brute of lignes) {
    const l = (brute ?? "").trim();
    if (!l) continue;
    if (/^\*\*.+\*\*\s*:?\s*$/.test(l)) {
      out.push({ type: "titre", texte: l.replace(/\*\*/g, "").replace(/\s*:\s*$/, "").trim() });
    } else if (/^[-–•]\s+/.test(l)) {
      const item = l.replace(/^[-–•]\s+/, "").trim();
      const dernier = out[out.length - 1];
      if (dernier && dernier.type === "liste") dernier.items.push(item);
      else out.push({ type: "liste", items: [item] });
    } else {
      out.push({ type: "para", texte: l });
    }
  }
  return out;
}

/** Ponctuation française : espace fine insécable avant ? ! ; : et dans les guillemets.
 *  Sans elle, un « ? » se retrouve seul en début de ligne sur mobile. */
export const typo = (t: string) =>
  t.replace(/ ([?!;:»])/g, " $1").replace(/« /g, "« ");

/** Rend les `**gras**` d'une ligne sans passer par du HTML brut. */
const enrichir = (texte: string) =>
  typo(texte).split(/(\*\*[^*]+\*\*)/g).map((bout, i) =>
    bout.startsWith("**") && bout.endsWith("**")
      ? <strong key={i} className="font-semibold text-foreground">{bout.slice(2, -2)}</strong>
      : <span key={i}>{bout}</span>
  );

interface Props {
  lignes: string[];
  titre: string;
  spec?: string;
  nbVariantes: number;
}

const ProductContent = ({ lignes, titre, spec, nbVariantes }: Props) => {
  const blocs = decouper(lignes);
  if (!blocs.length) return null;

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 lg:gap-14 max-w-6xl mx-auto">

          <div>
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 block">
              Bien choisir
            </span>
            <h2 className="section-title mb-5 md:mb-7">{typo(titre)}</h2>

            <div className="space-y-5 md:space-y-6">
              {blocs.map((b, i) => {
                if (b.type === "titre") {
                  return (
                    <h3 key={i} className="font-display font-bold text-lg md:text-xl text-foreground pt-2">
                      {typo(b.texte)}
                    </h3>
                  );
                }
                if (b.type === "liste") {
                  return (
                    <ul key={i} className="space-y-2.5">
                      {b.items.map((it, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                          <Check className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{enrichir(it)}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {enrichir(b.texte)}
                  </p>
                );
              })}
            </div>
          </div>

          <aside className="lg:sticky lg:top-6 self-start">
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-7">
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-4 md:mb-5">L'essentiel</h3>
              <ul className="space-y-3.5 text-sm">
                {spec && (
                  <li className="flex gap-3">
                    <PackageCheck className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                    <span className="text-muted-foreground">
                      Gamme <strong className="font-semibold text-foreground">{spec}</strong>
                      {nbVariantes > 1 && <> — {nbVariantes} configurations</>}
                    </span>
                  </li>
                )}
                <li className="flex gap-3">
                  <Truck className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                  <span className="text-muted-foreground">
                    Livraison <strong className="font-semibold text-foreground">partout en France</strong>, via 2 400 agences partenaires
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" strokeWidth={1.75} />
                  <span className="text-muted-foreground">
                    Devis gratuit en <strong className="font-semibold text-foreground">moins de 2 h</strong>, du lundi au vendredi
                  </span>
                </li>
              </ul>
              <Button variant="cta" size="lg" className="w-full mt-5 md:mt-6" asChild>
                <a href="#devis">
                  Obtenir mon devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default ProductContent;
