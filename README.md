# PixelTech Antilles - Site Web Professionnel

Site web professionnel de **PixelTech Antilles**, expert en administration réseau et système en Guadeloupe.

## Présentation

Site vitrine moderne et performant développé avec **Next.js 14** et **TypeScript**, présentant les services d'administration réseau, d'infogérance et de support technique pour PME et particuliers en Guadeloupe.

Ce projet démontre une expertise en développement web moderne, architecture modulaire, optimisation SEO, et intégration d'outils professionnels.

## Stack Technique

### Frontend
- **Next.js 14.2.33** - Framework React avec App Router (Server Components, Static Generation)
- **TypeScript 5.3.3** - Typage statique pour la robustesse et la maintenabilité
- **React 18.2.0** - Bibliothèque UI moderne avec hooks et contextes
- **Tailwind CSS 3.4.0** - Framework CSS utilitaire pour un design responsive
- **PostCSS & Autoprefixer** - Optimisation CSS et compatibilité navigateurs

### Déploiement & Infrastructure
- **GitHub Pages** - Hébergement statique haute disponibilité
- **GitHub Actions** - CI/CD automatisé avec déploiement continu
- **Next.js Static Export** - Génération de site statique optimisé
- **Domaine personnalisé** - pixeltech-antilles.com avec SSL/HTTPS

### Analytics & SEO
- **Google Analytics 4** - Suivi des visiteurs et analyse comportementale
- **Google Search Console** - Optimisation SEO et monitoring d'indexation
- **Schema.org** - Données structurées (LocalBusiness, Person) pour les moteurs de recherche
- **Sitemap.xml** - Plan du site automatisé pour les crawlers
- **Robots.txt** - Configuration optimale des crawlers

### Sécurité & Performance
- **Honeypot** - Protection anti-spam sur le formulaire de contact
- **Web3Forms** - Intégration sécurisée pour l'envoi d'emails
- **Content Security Policy** - Protection contre les attaques XSS
- **Image Optimization** - Optimisation automatique des assets
- **Code Splitting** - Chargement optimisé des composants

## Architecture du Projet

```
PixelTech-Antilles/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Page de construction (beta)
│   │   ├── home/              # Page d'accueil principale
│   │   ├── services/          # Présentation des services
│   │   ├── tarifs/            # Tarification transparente
│   │   ├── a-propos/          # À propos et compétences
│   │   ├── contact/           # Formulaire de contact
│   │   ├── layout.tsx         # Layout racine avec métadonnées
│   │   └── globals.css        # Styles globaux Tailwind
│   ├── components/            # Composants réutilisables modulaires
│   │   ├── GoogleAnalytics.tsx    # Intégration Google Analytics
│   │   ├── StructuredData.tsx     # Schema.org pour SEO
│   │   ├── Header.tsx             # Navigation responsive
│   │   ├── Footer.tsx             # Footer avec liens
│   │   ├── PageHero.tsx           # Hero section réutilisable
│   │   ├── SectionHeader.tsx      # En-têtes de section
│   │   ├── FeatureList.tsx        # Listes de fonctionnalités
│   │   ├── ServiceCard.tsx        # Cartes de services
│   │   └── Providers.tsx          # Contextes React
│   └── contexts/              # Contextes React pour l'état global
│       └── ThemeContext.tsx   # Gestion des thèmes
├── public/                    # Assets statiques
│   ├── logos/                 # Logos et images
│   ├── robots.txt             # Configuration crawlers
│   ├── sitemap.xml            # Plan du site
│   ├── CNAME                  # Domaine personnalisé
│   └── favicon/               # Icônes multi-plateformes
├── .github/
│   └── workflows/
│       └── deploy.yml         # Pipeline CI/CD GitHub Actions
├── next.config.js             # Configuration Next.js
├── tailwind.config.js         # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
└── package.json              # Dépendances et scripts
```

## Architecture & Bonnes Pratiques

### Modularité
- **Composants réutilisables** - Architecture DRY (Don't Repeat Yourself)
- **Séparation des responsabilités** - Composants, pages, contextes bien organisés
- **TypeScript strict** - Typage complet pour éviter les erreurs
- **Code modulaire** - Facilite la maintenance et l'évolution

### Performance
- **Static Site Generation (SSG)** - Pages pré-rendues pour des performances optimales
- **Code Splitting automatique** - Chargement optimisé par route
- **Image Optimization** - Optimisation automatique des images Next.js
- **Lazy Loading** - Chargement différé des composants non critiques

### SEO & Accessibilité
- **Métadonnées complètes** - Title, description, Open Graph, Twitter Cards sur chaque page
- **Schema.org** - Données structurées pour un meilleur référencement
- **Sémantique HTML** - Structure HTML5 sémantique
- **Accessibilité** - ARIA labels, navigation au clavier, contraste

### Sécurité
- **Protection anti-spam** - Honeypot sur le formulaire de contact
- **Validation côté client et serveur** - Double validation des données
- **HTTPS** - Certificat SSL via GitHub Pages (Let's Encrypt)
- **Content Security Policy** - Protection contre les injections

## Développement Local

### Prérequis
- Node.js 20.x ou supérieur
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Djez-Himself/PixelTech-Antilles.git
cd PixelTech-Antilles

# Installer les dépendances
npm install
```

### Scripts disponibles

```bash
# Développement local (http://localhost:3000)
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Export statique (pour GitHub Pages)
npm run export
```

## Pages du Site

- **/** - Page de construction (phase beta)
- **/home** - Page d'accueil avec présentation des services
- **/services** - Détail des services (infogérance, support technique)
- **/tarifs** - Tarification transparente et adaptée
- **/a-propos** - Présentation, compétences et valeurs
- **/contact** - Formulaire de contact avec protection anti-spam

## Configuration

### Variables d'environnement

Le projet utilise des variables d'environnement pour la configuration :

```env
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_web3forms
NODE_ENV=production
```

### Google Analytics

Google Analytics est configuré pour le suivi des visiteurs. Les données sont disponibles dans [Google Analytics](https://analytics.google.com).

### Domaine personnalisé

Le site utilise le domaine personnalisé `pixeltech-antilles.com` configuré via :
- Fichier `public/CNAME`
- Configuration DNS (Google Workspace)
- GitHub Pages settings avec HTTPS forcé

## Déploiement

### Processus CI/CD

Le site est déployé automatiquement via **GitHub Actions** à chaque push sur la branche `main` :

1. **Checkout** du code source
2. **Installation** des dépendances (`npm ci`)
3. **Build** du site statique (`npm run build`)
4. **Génération** du dossier `out/` avec le site statique
5. **Déploiement** automatique sur GitHub Pages
6. **Propagation** sur le domaine personnalisé

### URL de production

**Site en ligne** : [https://pixeltech-antilles.com](https://pixeltech-antilles.com)

## Design & UX

- **Thème sombre moderne** - Interface professionnelle et élégante
- **Responsive Design** - Mobile-first, adaptatif à tous les écrans
- **Micro-interactions** - Animations subtiles pour une meilleure UX
- **Hiérarchie visuelle** - Structure claire et lisible
- **Accessibilité** - Respect des standards WCAG

## SEO & Référencement

- **Métadonnées optimisées** - Title, description, keywords sur chaque page
- **Schema.org** - Données structurées LocalBusiness et Person
- **Sitemap.xml** - Plan du site soumis à Google Search Console
- **Robots.txt** - Configuration optimale des crawlers
- **Open Graph** - Partage optimisé sur les réseaux sociaux
- **Twitter Cards** - Prévisualisation optimisée pour Twitter

## Sécurité

- **Protection anti-spam** - Honeypot sur le formulaire de contact
- **Validation des données** - Côté client et serveur
- **HTTPS** - Chiffrement SSL/TLS via GitHub Pages
- **Content Security Policy** - Protection contre les attaques XSS
- **Sanitization** - Nettoyage des entrées utilisateur

## Monitoring & Analytics

- **Google Analytics 4** - Suivi des visiteurs en temps réel
- **Google Search Console** - Monitoring de l'indexation et des performances SEO
- **Métriques de performance** - Temps de chargement, Core Web Vitals

## Qualité du Code

- **TypeScript strict** - Typage complet pour éviter les erreurs
- **ESLint** - Linting pour maintenir la qualité du code
- **Architecture modulaire** - Code réutilisable et maintenable
- **Documentation** - Code commenté et structure claire
- **Best practices** - Respect des conventions Next.js et React

## Compétences Démontrées

Ce projet met en valeur :

- **Développement Frontend Moderne** - Next.js, React, TypeScript
- **Architecture & Design Patterns** - Composants modulaires, séparation des responsabilités
- **SEO & Performance** - Optimisation pour les moteurs de recherche et les performances
- **DevOps & CI/CD** - Automatisation du déploiement avec GitHub Actions
- **Sécurité Web** - Protection contre les attaques courantes
- **Accessibilité** - Respect des standards d'accessibilité web
- **Responsive Design** - Adaptation à tous les appareils

## Licence

© 2025 PixelTech Antilles. Tous droits réservés.

## Auteur

**Benoit** - Expert en Administration Réseau & Système  
PixelTech Antilles - Bouillante, Guadeloupe

---

*Ce projet démontre une expertise en développement web moderne, architecture modulaire, et bonnes pratiques de l'industrie.*
