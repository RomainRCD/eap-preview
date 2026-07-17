# eap-location.fr — site vitrine EAP Location

Site public de location de matériel BTP (React + Vite + Tailwind + shadcn/ui).

## Déploiement — AUCUN déploiement manuel

Le repo est connecté nativement à **Cloudflare Pages** (projet `eap-location`). Ne jamais déployer via Wrangler.

| Branche | Effet |
|---------|-------|
| `staging` | Build + preview automatique → https://staging.eap-location.pages.dev |
| `main` | Build + mise en production automatique → https://eap-location.fr |

Workflow : modifier sur `staging` → valider la preview → merge dans `main`.

- Build : `npm run build` (npm uniquement — ne pas réintroduire de lockfile bun), output `dist/`
- Redirections 301 anciennes URLs WordPress + fallback SPA : `public/_redirects`
- Données produits : `src/data/products.ts` (source unique nom/spec/description par slug)
- Images produits : `src/assets/products/<slug>.webp`
