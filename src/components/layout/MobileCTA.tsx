import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MobileCTA = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 z-50">
      <div className="flex gap-3">
        <Button variant="phone" className="flex-1" asChild>
          <a href="tel:0368385456">
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </Button>
        <Button variant="cta" className="flex-1" asChild>
          <Link to="/catalogue">
            Devis Express
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;
