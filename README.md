# Advalis — Site web

Site vitrine du cabinet **Advalis Conseil** : présentation des expertises, secteurs, articles, FAQ et formulaire de contact. Une page dédiée **Kairos** (`/activation`) présente l’offre « Activation projet » avec les formats collectif et individuel.

## Stack technique

| Outil | Rôle |
|--------|------|
| [Next.js 14](https://nextjs.org/) (App Router) | Framework React, SSR / routes |
| [TypeScript](https://www.typescriptlang.org/) | Typage |
| [Tailwind CSS](https://tailwindcss.com/) | Styles |
| [Radix UI](https://www.radix-ui.com/) (`@radix-ui/react-slot`) | Primitives pour les composants UI |
| [Lucide React](https://lucide.dev/) | Icônes |
| [Resend](https://resend.com/) | Envoi des emails du formulaire de contact |
| [Stripe](https://stripe.com/) | Présent en dépendance (usage selon évolution du projet) |

## Prérequis

- **Node.js** 18+ (recommandé : LTS)
- **npm** (ou `pnpm` / `yarn` en adaptant les commandes)

## Installation

```bash
npm install
```

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement ([http://localhost:3000](http://localhost:3000)) |
| `npm run build` | Build de production |
| `npm run start` | Lance le build (après `build`) |
| `npm run lint` | ESLint (Next.js) |

## Variables d’environnement

Créer un fichier `.env.local` à la racine (non versionné) pour le **formulaire de contact** :

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `RESEND_API_KEY` | Oui en production | Clé API Resend pour l’envoi des messages |
| `RESEND_TO_EMAIL` | Optionnel | Adresse de réception (sinon valeur par défaut dans le code) |

Sans `RESEND_API_KEY` en développement, l’API peut loguer l’erreur sans bloquer le reste du site ; en **production**, l’envoi exige la clé.

## Structure du dépôt (aperçu)

```
app/                 # Pages et layouts (App Router)
  activation/        # Landing Kairos — /activation
  articles/          # Liste et articles
  contact/           # Formulaire de contact
  api/contact/       # Route POST d’envoi d’email (Resend)
components/          # Composants réutilisables (header, footer, UI…)
config/              # Données et réglages (expertises, articles, sessions…)
public/              # Fichiers statiques (images, favicon…)
styles/              # CSS global (ex. variables de thème)
```

## Page Kairos et sessions (`/activation`)

Le contenu éditorial principal est dans `app/activation/page.tsx`.

Les **liens Calendly** (appel découverte, etc.) sont dans **`config/activation-sessions.ts`**. La prise de rendez-vous se fait via le bouton **Planifier un échange** sur la page. Une liste « prochaines sessions » pourra être réintroduite plus tard (statique ou API Calendly).

Une redirection **permanente** `/activation-projet` → `/activation` est configurée dans `next.config.mjs`.

## Thème et design

Les couleurs et le rayon sont pilotés par les variables CSS dans `styles/globals.css` (tokens `accentSoft`, `accentWarm`, etc.) et `tailwind.config.ts`.

## Déploiement

Build classique Next.js : `npm run build` puis hébergement compatible Node (Vercel, autre). Vérifier que les variables d’environnement de production sont bien renseignées pour le contact.

## Crédits

Développement réalisé par la société **JoeLabs**. Tous droits réservés.

Le contenu éditorial, les textes, visuels et l’identité **Advalis** restent la propriété du client.
