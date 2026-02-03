import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages principales
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

// Page produit existante (template Impact) - conservée pour référence
import TemplateImpact from "./pages/TemplateImpact";

// Pages produits spécifiques - Manutention
import ChariotRotatif from "./pages/products/ChariotRotatif";
import ChariotIndustrielDiesel from "./pages/products/ChariotIndustrielDiesel";
import ChariotIndustrielGaz from "./pages/products/ChariotIndustrielGaz";
import ChariotIndustrielElectrique from "./pages/products/ChariotIndustrielElectrique";
import ChariotSemiIndustriel from "./pages/products/ChariotSemiIndustriel";
import ChariotToutTerrain from "./pages/products/ChariotToutTerrain";
import ChariotTelescopique from "./pages/products/ChariotTelescopique";
import ChariotGrosTonnage from "./pages/products/ChariotGrosTonnage";
import GrueMobile from "./pages/products/GrueMobile";
import MiniGrueChenilles from "./pages/products/MiniGrueChenilles";
import MiniGrueAraignee from "./pages/products/MiniGrueAraignee";
import GerbeurTranspalette from "./pages/products/GerbeurTranspalette";

// Pages catégories
import Terrassement from "./pages/categories/Terrassement";
import TravailEnHauteur from "./pages/categories/TravailEnHauteur";
import Manutention from "./pages/categories/Manutention";
import Compactage from "./pages/categories/Compactage";
import BaseVie from "./pages/categories/BaseVie";
import Autres from "./pages/categories/Autres";

// Page produit générique
import ProductPage from "./pages/products/ProductPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Pages principales */}
            <Route path="/" element={<Homepage />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            
            {/* Template Impact - Page de référence */}
            <Route path="/devis" element={<TemplateImpact />} />
            
            {/* Pages catégories */}
            <Route path="/terrassement" element={<Terrassement />} />
            <Route path="/travail-en-hauteur" element={<TravailEnHauteur />} />
            <Route path="/manutention" element={<Manutention />} />
            <Route path="/compactage" element={<Compactage />} />
            <Route path="/base-vie" element={<BaseVie />} />
            <Route path="/autres" element={<Autres />} />
            
            {/* Pages produits dynamiques */}
            <Route path="/terrassement/:slug" element={<ProductPage />} />
            <Route path="/travail-en-hauteur/:slug" element={<ProductPage />} />
            
            {/* Pages produits complètes - Manutention */}
            <Route path="/manutention/chariot-rotatif" element={<ChariotRotatif />} />
            <Route path="/manutention/chariot-industriel-diesel" element={<ChariotIndustrielDiesel />} />
            <Route path="/manutention/chariot-industriel-gaz" element={<ChariotIndustrielGaz />} />
            <Route path="/manutention/chariot-industriel-electrique" element={<ChariotIndustrielElectrique />} />
            <Route path="/manutention/chariot-semi-industriel" element={<ChariotSemiIndustriel />} />
            <Route path="/manutention/chariot-tout-terrain" element={<ChariotToutTerrain />} />
            <Route path="/manutention/chariot-telescopique" element={<ChariotTelescopique />} />
            <Route path="/manutention/chariot-gros-tonnage" element={<ChariotGrosTonnage />} />
            <Route path="/manutention/grue-mobile" element={<GrueMobile />} />
            <Route path="/manutention/mini-grue-chenilles" element={<MiniGrueChenilles />} />
            <Route path="/manutention/mini-grue-araignee" element={<MiniGrueAraignee />} />
            <Route path="/manutention/gerbeur-transpalette" element={<GerbeurTranspalette />} />
            <Route path="/manutention/:slug" element={<ProductPage />} />
            
            <Route path="/compactage/:slug" element={<ProductPage />} />
            <Route path="/base-vie/:slug" element={<ProductPage />} />
            <Route path="/autres/:slug" element={<ProductPage />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
