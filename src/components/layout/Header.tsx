import { Phone, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoTravax from "@/assets/brand/travax-logo.svg";

const Header = () => {
  return (
    <>
      {/* Top Bar - Infos contact */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Lundi - Vendredi : 7h30 - 18h
            </span>
          </div>
          <a href="tel:0368385456" className="flex items-center gap-1.5 font-semibold hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            03.68.38.54.56
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Travax - Accueil">
            <img src={logoTravax} alt="Travax - Location de matériel BTP" className="h-12 w-auto object-contain" />
            <span className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-3">
              Location de matériel BTP
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-foreground font-medium text-sm hover:text-primary transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <Link to="/catalogue" className="text-muted-foreground font-medium text-sm hover:text-primary transition-colors flex items-center gap-1">
                Catalogue
                <ChevronRight className="w-4 h-4 rotate-90" />
              </Link>
            </div>
            <Link to="/contact" className="text-muted-foreground font-medium text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="cta" asChild>
              <Link to="/catalogue">
                Obtenir un devis
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
