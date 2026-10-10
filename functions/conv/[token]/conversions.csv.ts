/**
 * Relais du fichier de conversions hors ligne pour Google Ads.
 *
 * Depuis le 10/10/2026, c'est le script Google Ads « Pilot — cibles vers Google
 * (chaque nuit) » qui lit ce fichier chaque nuit et l'envoie à Google : l'API
 * UploadClickConversions est fermée aux nouvelles intégrations, et les imports
 * programmés du Gestionnaire de données sont réservés aux administrateurs.
 *
 * Mais les robots Google n'atteignent pas Supabase : Cloudflare filtre les
 * robots sur supabase.co. D'où ce relais, servi depuis eap-location.fr — le
 * domaine de l'annonceur, que Google accepte.
 *
 * URL publique : https://www.eap-location.fr/conv/<token>/conversions.csv
 * Le jeton est celui de la clef `ads_csv_token` d'app_config. Il ne donne accès
 * qu'à ce fichier (identifiants de clic et horodatages) et au compte rendu du
 * script, à rien d'autre.
 *
 *   GET / HEAD → le fichier. L'agent d'origine part dans l'en-tête X-Lecteur :
 *                la sonde sait ainsi que c'est bien Google qui a lu.
 *   POST       → le compte rendu du script ({ evenement, lignes, detail }),
 *                écrit dans la sonde (ads_conv_sonde).
 */

const SUPABASE_CSV =
  "https://lnytoqspbcphamtvpvnw.supabase.co/functions/v1/ads-conversions-csv";

interface Contexte {
  params: { token: string };
  request: Request;
}

const jetonValide = (t: string) => /^[a-f0-9]{32,64}$/.test(t);

/**
 * GET **et HEAD**. Le robot d'import de Google sonde l'URL en HEAD avant de
 * télécharger ; une Pages Function qui n'exporte que onRequestGet laisse le
 * HEAD tomber sur le statique → 404 → « Fichier introuvable ». C'est ce qui a
 * fait échouer les dix premières importations planifiées (08-17/08/2026),
 * alors que le GET répondait parfaitement. Pour un HEAD on fait le même
 * travail et on renvoie les en-têtes sans le corps.
 */
const lire = async ({ params, request }: Contexte): Promise<Response> => {
  const token = params.token;
  // Garde-fou de forme : le vrai contrôle est fait par Supabase, mais inutile
  // de lui relayer n'importe quoi.
  if (!jetonValide(token)) return new Response("forbidden\n", { status: 403 });

  const amont = await fetch(`${SUPABASE_CSV}/${token}/conversions.csv`, {
    headers: {
      Accept: "text/csv",
      "X-Lecteur": (request.headers.get("user-agent") ?? "").slice(0, 200),
    },
  });

  if (!amont.ok) {
    // On ne relaie pas le corps de l'erreur : il n'apporte rien à Google et
    // pourrait exposer des détails d'infrastructure.
    return new Response("indisponible\n", { status: amont.status === 403 ? 403 : 502 });
  }

  const corps = await amont.text();
  const entetes = {
    "Content-Type": "text/csv; charset=utf-8",
    "Content-Disposition": 'attachment; filename="conversions.csv"',
    "Content-Length": String(new TextEncoder().encode(corps).byteLength),
    // Le fichier change à chaque nouvelle demande : jamais de cache.
    "Cache-Control": "no-store",
    // Ce fichier n'a rien à faire dans un index de moteur de recherche.
    "X-Robots-Tag": "noindex, nofollow",
  };
  return new Response(request.method === "HEAD" ? null : corps, { headers: entetes });
};

/** Compte rendu du script Google Ads, transmis tel quel à la sonde. */
const rendreCompte = async ({ params, request }: Contexte): Promise<Response> => {
  const token = params.token;
  if (!jetonValide(token)) return new Response("forbidden\n", { status: 403 });
  const corps = (await request.text()).slice(0, 4000);
  const amont = await fetch(`${SUPABASE_CSV}/${token}/conversions.csv`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: corps,
  });
  return new Response(amont.ok ? "ok\n" : "indisponible\n", { status: amont.ok ? 200 : 502 });
};

export const onRequestGet = lire;
export const onRequestHead = lire;
export const onRequestPost = rendreCompte;
