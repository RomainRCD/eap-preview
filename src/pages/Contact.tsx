import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const canSend = form.nom.trim() && form.message.trim() && (form.email.trim() || form.telephone.trim());
  const submit = async () => {
    if (!canSend || state === "sending") return;
    setState("sending");
    try {
      const r = await fetch("https://lnytoqspbcphamtvpvnw.supabase.co/functions/v1/site-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          materiel: "Contact — message libre",
          entreprise: form.nom,
          nom: form.nom,
          telephone: form.telephone,
          email: form.email,
          commentaire: form.message,
          page: "/contact",
        }),
      });
      const j = await r.json();
      if (!j.ok) throw new Error(String(j.error || "erreur"));
      setState("sent");
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", { method: "contact_form" });
    } catch (_e) {
      setState("error");
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Contact | EAP Location"
        description="Contactez EAP Location pour vos besoins en location de matériel BTP. Réponse garantie sous 2h."
        keywords="contact EAP Location, devis BTP, location matériel chantier"
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
              
              {state === "sent" ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">Merci. Nous vous recontactons sous 2h ouvrées (Lun-Ven 7h30-18h).</p>
                </div>
              ) : (
              <div className="space-y-4">
                {state === "error" && (
                  <p className="text-sm text-destructive bg-destructive/10 rounded-lg p-3">Une erreur est survenue. Réessayez ou appelez-nous au 03 68 38 54 56.</p>
                )}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom complet *</label>
                  <input type="text" className="input-field" placeholder="Votre nom" value={form.nom} onChange={(e) => setForm(f => ({ ...f, nom: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="votre@email.com" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                  <input type="tel" className="input-field" placeholder="06 00 00 00 00" value={form.telephone} onChange={(e) => setForm(f => ({ ...f, telephone: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea className="input-field min-h-[120px]" placeholder="Votre message..." value={form.message} onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}></textarea>
                </div>
                <p className="text-xs text-muted-foreground">* obligatoires — indiquez au moins un email ou un téléphone</p>
                <Button variant="cta" className="w-full" disabled={!canSend || state === "sending"} onClick={submit}>
                  {state === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
