/**
 * Relais du fichier de conversions hors ligne pour Google Ads.
 *
 * Google Ads sait télécharger seul un fichier de conversions depuis une URL
 * HTTPS, et c'est le seul chemin d'import automatique qui nous reste :
 * l'API UploadClickConversions est fermée aux nouvelles intégrations, et la
 * Data Manager API qui la remplace exige une portée OAuth que le compte n'a pas.
 *
 * Mais le téléchargeur de Google n'atteint pas Supabase : Cloudflare filtre les
 * robots sur supabase.co et Google répond « fichier introuvable » alors que
 * l'URL fonctionne parfaitement depuis un navigateur. D'où ce relais, servi
 * depuis eap-location.fr — le domaine de l'annonceur, que Google accepte.
 *
 * URL publique : https://www.eap-location.fr/conv/<token>/conversions.csv
 * Le jeton est celui de la clef `ads_csv_token` d'app_config. Il ne donne accès
 * qu'à ce fichier (identifiants de clic et horodatages), à rien d'autre.
 */

const SUPABASE_CSV =
  "https://lnytoqspbcphamtvpvnw.supabase.co/functions/v1/ads-conversions-csv";

interface Contexte {
  params: { token: string };
  request: Request;
}

/**
 * GET **et HEAD**. Le robot d'import de Google sonde l'URL en HEAD avant de
 * télécharger ; une Pages Function qui n'exporte que onRequestGet laisse le
 * HEAD tomber sur le statique → 404 → « Fichier introuvable ». C'est ce qui a
 * fait échouer les dix premières importations planifiées (08-17/08/2026),
 * alors que le GET répondait parfaitement. Pour un HEAD on fait le même
 * travail et on renvoie les en-têtes sans le corps.
 */
const handler = async ({ params, request }: Contexte): Promise<Response> => {
  const token = params.token;
  // Garde-fou de forme : le vrai contrôle est fait par Supabase, mais inutile
  // de lui relayer n'importe quoi.
  if (!/^[a-f0-9]{32,64}$/.test(token)) {
    return new Response("forbidden\n", { status: 403 });
  }

  const amont = await fetch(`${SUPABASE_CSV}/${token}/conversions.csv`, {
    headers: { Accept: "text/csv" },
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

export const onRequestGet = handler;
export const onRequestHead = handler;
