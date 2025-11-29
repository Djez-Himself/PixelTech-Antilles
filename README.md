# PixelTech - Site Web Professionnel

Site web professionnel de **PixelTech**, expert en administration réseau et système en Guadeloupe.

## Présentation

Site vitrine moderne et responsive présentant les services d'administration réseau, d'infogérance et de support technique pour PME et particuliers en Guadeloupe.

## Stack Technique

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour la robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **React 18** - Bibliothèque UI

### Déploiement & Infrastructure
- **GitHub Pages** - Hébergement statique
- **GitHub Actions** - CI/CD automatisé
- **Next.js Static Export** - Génération de site statique

### Fonctionnalités
- **SEO optimisé** - Métadonnées, sitemap, robots.txt, Schema.org
- **Responsive Design** - Mobile-first, adaptatif
- **Thème sombre** - Interface moderne
- **Formulaire de contact** - Intégration Web3Forms
- **Multi-pages** - Architecture modulaire

## Structure du Projet

```
website/
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   ├── components/      # Composants réutilisables
│   └── contexts/        # Contextes React
├── public/              # Assets statiques
└── .github/workflows/   # CI/CD
```

## Développement Local

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

### Build production

```bash
npm run build
```

## Pages

- **/** - Page de construction (beta)
- **/home** - Page d'accueil principale
- **/services** - Présentation des services
- **/tarifs** - Tarification
- **/a-propos** - À propos
- **/contact** - Formulaire de contact

## Déploiement

Le site est déployé automatiquement sur **GitHub Pages** via GitHub Actions à chaque push sur la branche `main`.

**URL de production** : [https://pixeltech-antilles.com](https://pixeltech-antilles.com)

## Licence

© 2025 PixelTech. Tous droits réservés.
