# EETROOV / ECOVERSION — site vitrine (SvelteKit)

Site marketing unifié pour **ECOVERSION Group**, **ECOVERSION ONG** et **EETROOV**.

## Architecture

- **`src/services/`** — contenu et logique métier (`SiteContentService`)
- **`+layout.ts` / `+page.ts`** — chargement des données côté route (prerender)
- **`src/lib/components/`** — UI

## Sites officiels (redirections)

| Pôle | URL |
|------|-----|
| Cabinet | https://www.ecoversiongroup.com/ |
| ONG | https://www.ecoversion.org/ |
| Formations | https://www.eetroov.org/ |

## Lancer

```bash
cd c:\Users\Adama\Documents\jeko\eetrov
pnpm dev
```

## Formulaire contact

Envoi via `POST /api/contact` (Nodemailer + Gmail).

1. Copiez `.env.example` → `.env`.
2. **Gmail** : activez la validation en 2 étapes, créez un [mot de passe d’application](https://myaccount.google.com/apppasswords).
3. Les variables SMTP sont déclarées dans **`src/env.ts`** (obligatoire en SvelteKit 3).
4. Renseignez dans `.env` :
   - `CONTACT_TO_EMAIL` — boîte qui reçoit les messages du site
   - `SMTP_USER` / `SMTP_FROM` — votre `@gmail.com`
   - `SMTP_PASS` — les 16 caractères (espaces optionnels, ils sont retirés automatiquement)
5. Redémarrez `pnpm dev` après chaque changement de `.env`.

Production : `@sveltejs/adapter-vercel` (déploiement Vercel + route API contact).

## Paiements en ligne (optionnel, invisible visiteur)

Variables `PUBLIC_JEKO_*` dans `.env` — voir `.env.example`. Non mentionné sur le site public.
