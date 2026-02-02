import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";

const MentionsLegales = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Mentions Légales | EAP Location"
        description="Mentions légales du site EAP Location, société de location de matériel BTP."
        canonicalUrl="/mentions-legales"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Mentions Légales
            </h1>
            
            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-4">Éditeur du site</h2>
                <p className="text-muted-foreground">
                  EAP Location<br />
                  15 avenue du Great EASTERN<br />
                  80330 LONGUEAU<br />
                  France
                </p>
                <p className="text-muted-foreground mt-2">
                  Téléphone : 03.68.38.54.56<br />
                  Email : contact@eap-location.fr
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-4">Hébergement</h2>
                <p className="text-muted-foreground">
                  [Informations hébergeur à compléter]
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-4">Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                  L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété exclusive 
                  d'EAP Location ou de ses partenaires. Toute reproduction, même partielle, est interdite 
                  sans autorisation préalable.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-4">Protection des données</h2>
                <p className="text-muted-foreground">
                  Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit 
                  d'accès, de rectification et de suppression des données vous concernant. Pour exercer 
                  ce droit, contactez-nous à l'adresse contact@eap-location.fr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MentionsLegales;
