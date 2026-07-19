// =====================================================================
// tracking.ts — attribution marketing premier hit de session.
// Au chargement de l'app, capture gclid + utm_* + landing_page + referrer
// depuis l'URL et les stocke en sessionStorage (first touch : on n'écrase
// jamais une attribution déjà posée pendant la session — le visiteur qui
// navigue ensuite garde sa source d'origine).
// Ces champs sont joints aux POST /site-lead pour relier chaque lead à
// sa source (Google Ads via gclid, SEO, direct…) dans le dashboard Pilot.
// =====================================================================

const KEY = "eap_attribution";

export type Attribution = {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
};

export function captureAttribution(): void {
  try {
    if (sessionStorage.getItem(KEY)) return; // first touch only
    const p = new URLSearchParams(window.location.search);
    const pick = (k: string) => (p.get(k) || "").slice(0, 500) || undefined;
    const attr: Attribution = {
      gclid: pick("gclid"),
      utm_source: pick("utm_source"),
      utm_medium: pick("utm_medium"),
      utm_campaign: pick("utm_campaign"),
      utm_term: pick("utm_term"),
      utm_content: pick("utm_content"),
      landing_page: window.location.pathname || undefined,
      referrer: (document.referrer || "").slice(0, 500) || undefined,
    };
    // gclid sans utm → c'est du Google Ads : on normalise pour le reporting
    if (attr.gclid && !attr.utm_source) {
      attr.utm_source = "google";
      attr.utm_medium = "cpc";
    }
    sessionStorage.setItem(KEY, JSON.stringify(attr));
  } catch (_e) {
    /* navigation privée / storage bloqué : silencieux */
  }
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}") as Attribution;
  } catch (_e) {
    return {};
  }
}
