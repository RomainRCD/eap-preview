/**
 * Conversions Google Ads — le seul point de passage du bundle React.
 *
 * Les étiquettes ne sont PAS écrites ici : elles vivent dans index.html
 * (window.__EAP_ADS), qui est le seul fichier chargé par toutes les pages du
 * site, React ou non. Une étiquette recopiée à deux endroits finirait par
 * diverger — on lit la table, on ne la duplique pas.
 */

type CleConversion = "devis" | "appel_fiche" | "appel_autre";

type FenetreMesuree = Window & {
  gtag?: (...a: unknown[]) => void;
  __eapConversionAds?: (cle: CleConversion) => void;
};

/** Conversion Google Ads seule. */
export function conversionAds(cle: CleConversion): void {
  (window as unknown as FenetreMesuree).__eapConversionAds?.(cle);
}

/**
 * Une demande de devis vient d'être enregistrée : on prévient GA4 (mesure
 * d'audience) ET Google Ads (signal d'enchères). Les deux partent d'ici pour
 * qu'aucun formulaire du site ne puisse en oublier un.
 *
 * @param method  d'où vient la demande — "devis_express" ou "contact_form".
 */
export function signalerDemande(method: string): void {
  (window as unknown as FenetreMesuree).gtag?.("event", "generate_lead", { method });
  conversionAds("devis");
}
