import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* À propos */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">A Propos de nous</h4>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              EAP location est une société Française spécialisée dans la location de matériels BTP pour professionnels. Notre service s'adresse aux professionnels sur le territoire français. Nous sommes en partenariat avec 2400 agences, ce qui nous permet d'assurer un service de qualité où que vous soyez.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contactez-nous !</Link>
              </li>
              <li>
                <Link to="/terrassement" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terrassement</Link>
              </li>
              <li>
                <Link to="/travail-en-hauteur" className="text-secondary-foreground/80 hover:text-primary transition-colors">Travail en Hauteur</Link>
              </li>
              <li>
                <Link to="/manutention" className="text-secondary-foreground/80 hover:text-primary transition-colors">Manutention</Link>
              </li>
              <li>
                <Link to="/compactage" className="text-secondary-foreground/80 hover:text-primary transition-colors">Compactage</Link>
              </li>
              <li>
                <Link to="/base-vie" className="text-secondary-foreground/80 hover:text-primary transition-colors">Base Vie</Link>
              </li>
              <li>
                <Link to="/autres" className="text-secondary-foreground/80 hover:text-primary transition-colors">Autres</Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-secondary-foreground/80 hover:text-primary transition-colors">Mentions Légales</Link>
              </li>
            </ul>
          </div>

          {/* Informations de contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Informations de Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>15 avenue du Great EASTERN, 80330 LONGUEAU</span>
              </li>
              <li>Zone d'intervention : France métropole + EUROPE</li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:0368385456" className="hover:text-primary transition-colors font-semibold">03.68.38.54.56</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Lundi – Vendredi : 7h30 – 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@eap-location.fr" className="hover:text-primary transition-colors">Contact@eap-location.fr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} EAP Location. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
