import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Pages principales
import Homepage from "./pages/Homepage";
import Catalogue from "./pages/Catalogue";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

// Page produit existante (template Impact) - conservée pour référence
import TemplateImpact from "./pages/TemplateImpact";

// Pages produits spécifiques - Manutention (les autres sont pilotées par products.json)
import ChariotRotatif from "./pages/products/ChariotRotatif";

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

/**
 * Arbre de l'application SANS routeur ni HelmetProvider : ces deux-là sont
 * fournis par l'appelant, pour que le même arbre serve au navigateur
 * (BrowserRouter, dans App.tsx) et au prérendu Node (StaticRouter, dans
 * entry-server.tsx). Toute route ajoutée ici doit l'être aussi dans
 * scripts/gen-sitemap.mjs si elle a vocation à être indexée.
 */
const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
        <Route path="/manutention/:slug" element={<ProductPage />} />

        <Route path="/compactage/:slug" element={<ProductPage />} />
        <Route path="/base-vie/:slug" element={<ProductPage />} />
        <Route path="/autres/:slug" element={<ProductPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppShell;
