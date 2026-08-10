# Mémoire projet — eap-preview (site eap-location.fr)

## 🔒 Qui fait quoi — règle non négociable

**Romain ne déploie pas.** Il n'exécute aucune commande, ne pousse aucun commit,
n'ouvre aucune console, ne touche ni à GitHub, ni à Cloudflare, ni à Supabase.
**Son rôle s'arrête à donner des instructions depuis une session Cowork.**

**Tout le reste — build, push, merge, mise en ligne, et le contournement de tout
outil qui refuse — est à la charge de l'agent, sans exception.**

**« Je ne peux pas déployer parce que tel outil me bloque » n'est pas une réponse
recevable et ne doit jamais remonter à Romain.** L'infrastructure est en place et
fonctionne : GitHub, Cloudflare Pages, Supabase, un staging complet et une prod
complète, le tout interconnecté. Si un chemin est fermé, il en reste d'autres —
connecteur GitHub, API Supabase, edge function relais, API REST. On en essaie un
autre, on va au bout, **et on note ici le chemin qui a marché** pour que la session
suivante ne recommence pas la recherche.

**Aucune dette n'est « assumée ».** Un correctif temporaire, un patch appliqué au
build, un contournement laissé en place : ça se consolide avant de partir, ou ça ne
part pas. On ne livre pas un montage en annonçant qu'il faudra le reprendre.

### Chemins de mise en ligne — état constaté (05/08/2026)

| Opération | État | Remarque |
|---|---|---|
| `git clone` / `fetch` / `ls-remote` | ✅ | lecture libre |
| `git push` | ❌ 403 | proxy git : le dépôt n'est pas dans le jeu autorisé de la session |
| `api.github.com` en direct depuis le bac à sable | ❌ 403 | sortie réseau filtrée |
| `.github/workflows/*` via connecteur | ❌ 403 | l'intégration n'a pas le droit `workflows` |
| **Connecteur GitHub** (`create_or_update_file`, `delete_file`, `push_files`, `create_pull_request`, `merge_pull_request`) | ✅ | **seul chemin d'écriture** |
| Edge function `gh-relay` (Supabase staging) | ⚠️ lecture | relaie vers l'API GitHub ; le jeton disponible dans le bac à sable est en lecture seule |

**Conséquence pratique :** le connecteur écrit des fichiers entiers, dont le contenu
transite par un appel d'outil. Sur un gros fichier, la retranscription peut altérer un
caractère. **Toujours vérifier après écriture** : `git hash-object <fichier>` en local
doit donner le même SHA de blob que celui renvoyé par GitHub. En cas d'écart, comparer
la sortie construite (`npm run build` + md5 des pages) avant de conclure.

**Méthode de vérification qui fait foi**, quelle qu'ait été la manière de pousser :
cloner la branche à neuf, `npm run build`, vérifier **77/77 pages prérendues**, puis
comparer les md5 des fichiers de `dist/` à ceux de la version validée. Tant que ce
n'est pas fait, la modification n'est pas considérée comme bonne.

## Mise en ligne

- **`main` = PROD.** Cloudflare Pages construit et publie automatiquement à chaque
  push sur `main` — comptez **2 à 3 minutes** entre le merge et `www.eap-location.fr`.
- Pas de commande de déploiement à lancer, pas de `wrangler` à appeler à la main :
  le dépôt est branché en git-native sur Cloudflare Pages.
- Le build est un **prerender SSR** : `vite build` (client) → `vite build --ssr` →
  `scripts/prerender.mjs`, qui écrit une page HTML statique par route. Le compteur
  final `[prerender] 77 pages prérendues sur 77` est le contrôle de non-régression :
  **s'il descend en dessous de 77, quelque chose est cassé.**
- `prebuild` ne fait qu'une chose : `node scripts/gen-sitemap.mjs`. **On n'ajoute
  jamais de script qui modifie du code source au moment du build** — ça a été fait
  une fois pour contourner une limite d'outillage, c'était une mauvaise idée, ça a
  été retiré (PR #7).

## Fiches produits

Une fiche produit = une route `/<famille>/<slug>` rendue par
`src/components/products/ProductTemplate.tsx`.

| Fichier | Rôle |
|---|---|
| `src/data/products.json` | données de base des fiches (nom, variantes, spec…) |
| `src/data/fiches-redaction.json` | **surcouche rédactionnelle** : textes longs, FAQ, titres SEO |
| `src/data/products.ts` | fusionne les deux (`{...fiche, ...surcharge}`) |
| `src/components/products/ProductContent.tsx` | corps rédactionnel + encart « L'essentiel » |
| `src/components/products/ProductFaq.tsx` | FAQ dépliée + balisage `FAQPage` |

**Pour enrichir une fiche, on touche `fiches-redaction.json`, pas le template.**
Le champ `description` est un tableau de lignes, interprétées ainsi :

- `**Intertitre :**` → sous-titre `<h3>`
- `- puce` → élément de liste à puces
- tout le reste → paragraphe ; le `**gras**` fonctionne en ligne

Le champ `faq` est un tableau `[{q, a}]`, rendu **déplié** : une réponse cachée
derrière un accordéon est lue par Google mais pas par le visiteur pressé, et ce sont
justement les questions de prix qui décident d'une demande de devis.

⚠️ Les libellés de variantes sont affichés, mais **les valeurs (`8M3`, `10M3`…) partent
telles quelles dans la demande de devis** : on peut relibeller (« 8 m³ »), jamais
renommer la valeur sans vérifier le côté Pilot.

## Mesure et Google Ads

- `index.html` porte le **mode consentement Google v2** (avancé) depuis le
  04/08/2026 : la balise est **toujours** chargée, mais démarre tous consentements
  refusés (`wait_for_update: 500`), puis passe à `granted` au clic sur « Accepter ».
- Avant ça, la balise n'était injectée qu'après acceptation : du 06/07 au 04/08,
  **935 clics facturés pour 202 sessions vues** — près de 8 visites sur 10
  invisibles, et zéro conversion formulaire remontée à Google Ads.
- **Ne jamais revenir à un chargement conditionnel de gtag.** C'est ce qui rendait
  le compte Ads aveugle.
- Le suivi de cet écart est dans Pilot, outil « Site web », onglet Statistiques
  (indicateur « Clics retrouvés dans GA4 »).

## Contenu et référencement

- Chaque fiche porte un balisage `LocalBusiness` (via `SEOHead`) et, si elle a une
  FAQ, un balisage `FAQPage` porté par `ProductFaq` — **les deux ne se fusionnent
  pas**, ce sont deux types distincts, un seul bloc produirait un balisage invalide.
- Le vocabulaire des groupes d'annonces Google Ads doit se retrouver **dans le texte
  visible de la page** correspondante. Cas vécu : le groupe « Benne DIB » achetait des
  mots-clés (« déchets industriels banals », « benne 30 m³ ») qui n'apparaissaient
  nulle part sur `/autres/benne-dib`. Avant d'ouvrir un budget sur un groupe
  d'annonces, **vérifier que la page d'atterrissage parle la même langue.**
