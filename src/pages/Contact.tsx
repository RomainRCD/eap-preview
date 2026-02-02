import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <PageLayout>
      <SEOHead
        title="Contact | EAP Location"
        description="Contactez EAP Location pour vos besoins en location de matériel BTP. Réponse garantie sous 2h."
        keywords="contact EAP location, devis BTP, location matériel chantier"
        canonicalUrl="/contact"
      />

      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Adresse</h3>
                    <p className="text-muted-foreground">
                      15 avenue du Great EASTERN<br />
                      80330 LONGUEAU
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Téléphone</h3>
                    <a href="tel:0368385456" className="text-primary font-semibold hover:underline">
                      03.68.38.54.56
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:contact@eap-location.fr" className="text-primary hover:underline">
                      contact@eap-location.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horaires</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi : 7h30 - 18h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-2xl">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Zone d'intervention :</strong><br />
                  France métropolitaine + Europe
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                  <input type="text" className="input-field" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <input type="tel" className="input-field" placeholder="06 00 00 00 00" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea className="input-field min-h-[120px]" placeholder="Votre message..."></textarea>
                </div>
                <Button variant="cta" className="w-full">
                  Envoyer le message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
