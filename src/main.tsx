import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureAttribution } from "./lib/tracking";

captureAttribution();

const container = document.getElementById("root")!;

// Les pages listées dans le sitemap sont prérendues au build (scripts/prerender.mjs) :
// le conteneur contient déjà le HTML, on hydrate. Sinon (404, route non prérendue),
// on monte normalement.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
