import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";

/**
 * Rend une route en HTML statique, hors navigateur.
 * Utilisé par scripts/prerender.mjs au moment du build : le HTML produit est
 * ce que voient les robots d'indexation avant toute exécution de JavaScript.
 */
export function render(url: string): { html: string; head: string } {
  const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );

  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script]
        .map((part) => (part ? part.toString().trim() : ""))
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
