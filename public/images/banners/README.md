# Images de bannières

Ce dossier contient les images de bannières pour les différentes pages du site.

## Utilisation

Pour ajouter une image de bannière à une page, utilisez le composant `PageBanner` avec la prop `backgroundImage` :

```tsx
import { PageBanner } from "@/components/page-banner";

<PageBanner 
  title="Mon titre"
  subtitle="Mon sous-titre"
  backgroundImage="/images/banners/nom-de-votre-image.jpg"
/>
```

## Formats recommandés

- **Format** : JPG ou PNG
- **Résolution** : 1920x600px minimum
- **Taille** : Optimisé pour le web (< 500KB)
- **Ratio** : 16:5 ou similaire pour un bon rendu

## Images nécessaires

- `homepage-banner.jpg` - Page d'accueil
- `pricing-banner.jpg` - Page tarification
- `about-banner.jpg` - Page À Propos
- `faq-banner.jpg` - Page FAQ
- `account-banner.jpg` - Page compte
