# PixelTech Antilles - Site Web Professionnel

Site web professionnel de **PixelTech Antilles**, expert en administration réseau et système en Guadeloupe.

[![Déploiement](https://img.shields.io/badge/d%C3%A9ploiement-GitHub%20Pages-blue)](https://pixeltech-antilles.com)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38bdf8)](https://tailwindcss.com/)

## 🎯 À propos

Site vitrine moderne et performant développant une expertise en **administration réseau, infogérance et support technique** pour PME et particuliers en Guadeloupe.

**🌐 Site en ligne** : [https://pixeltech-antilles.com](https://pixeltech-antilles.com)

---

## 🚀 Stack Technique

### Frontend
- **Next.js 14** - Framework React avec App Router (Server & Client Components)
- **TypeScript 5.3.3** - Typage statique pour la robustesse du code
- **React 18.2.0** - Bibliothèque UI moderne
- **Tailwind CSS 3.4.0** - Framework CSS utilitaire responsive
- **PostCSS & Autoprefixer** - Optimisation CSS

### Déploiement & Infrastructure
- **GitHub Pages** - Hébergement statique
- **GitHub Actions** - CI/CD automatisé
- **Next.js Static Export** - Site statique optimisé
- **Domaine personnalisé** - pixeltech-antilles.com avec SSL

### Analytics & SEO
- **Google Analytics 4** - Suivi des visiteurs et conversions
- **Schema.org** - Données structurées (LocalBusiness + Person)
- **Sitemap.xml** - Plan du site automatisé
- **Robots.txt** - Configuration des crawlers
- **OpenGraph & Twitter Cards** - Optimisation partage réseaux sociaux

### Sécurité & Performance
- **Honeypot** - Protection anti-spam formulaire
- **Web3Forms** - Envoi d'emails sécurisé
- **Image Optimization** - Optimisation automatique via next/image
- **Code Splitting** - Chargement optimisé des composants

---

## 📁 Architecture du Projet

```
website/
├── src/
│   ├── app/                      # Pages Next.js (App Router)
│   │   ├── layout.tsx           # Layout racine + métadonnées globales
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── globals.css          # Styles globaux + thème
│   │   ├── services/            # Page Services
│   │   ├── tarifs/              # Page Tarifs
│   │   ├── a-propos/            # Page À propos
│   │   └── contact/             # Page Contact (avec layout)
│   ├── components/              # Composants réutilisables
│   │   ├── GoogleAnalytics.tsx  # Intégration GA4
│   │   ├── StructuredData.tsx   # Schema.org pour SEO
│   │   ├── Header.tsx           # Navigation responsive
│   │   ├── Footer.tsx           # Footer avec liens
│   │   ├── PageHero.tsx         # Hero section réutilisable
│   │   ├── FeatureList.tsx      # Listes de fonctionnalités
│   │   ├── ServicesTabs.tsx     # Onglets PME/Particuliers (Services)
│   │   └── TarifsTabs.tsx       # Onglets PME/Particuliers (Tarifs)
│   └── types/                   # Types TypeScript partagés
│       └── services.ts          # Types Service & Forfait
├── public/                      # Assets statiques
│   ├── logos/                   # Logo PixelTech
│   ├── robots.txt               # Configuration crawlers
│   ├── sitemap.xml              # Plan du site
│   ├── CNAME                    # Domaine personnalisé
│   ├── site.webmanifest         # PWA manifest
│   └── favicon*                 # Icônes multi-plateformes
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline CI/CD automatique
├── next.config.js               # Configuration Next.js
├── tailwind.config.js           # Configuration Tailwind
├── tsconfig.json                # Configuration TypeScript
└── package.json                 # Dépendances et scripts
```

---

## 🛠️ Développement Local

### Prérequis
- Node.js 20.x ou supérieur
- npm

### Installation

```bash
# Cloner le repository
git clone https://github.com/Djez-Himself/PixelTech-Antilles.git
cd PixelTech-Antilles

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
# Développement avec hot-reload
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

---

## 📄 Pages du Site

| Page | Route | Description |
|------|-------|-------------|
| **Accueil** | `/` | Présentation des services et CTAs |
| **Services** | `/services` | Détail des services PME et Particuliers |
| **Tarifs** | `/tarifs` | Tarification transparente par forfait |
| **À propos** | `/a-propos` | Présentation, compétences et valeurs |
| **Contact** | `/contact` | Formulaire de contact avec anti-spam |

---

## ⚙️ Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_web3forms
NODE_ENV=production
```

### Google Analytics

ID de suivi configuré : `G-Z4NM6X1HLH`

Événements trackés :
- Pages vues (automatique)
- Soumissions de formulaire (devis/contact)

---

## 🚀 Déploiement

### CI/CD Automatique

Le site est déployé automatiquement via **GitHub Actions** à chaque push sur `main` :

1. ✅ Installation des dépendances
2. ✅ Build du site statique
3. ✅ Génération du dossier `out/`
4. ✅ Déploiement sur GitHub Pages
5. ✅ Propagation sur pixeltech-antilles.com

**Temps de déploiement** : ~2-3 minutes

---

## 🎨 Design & UX

- **Thème sombre** - Interface professionnelle et moderne
- **Responsive Design** - Mobile-first, adaptatif à tous les écrans
- **Micro-interactions** - Animations subtiles pour une meilleure UX
- **Accessibilité** - ARIA labels, navigation clavier, contraste optimisé
- **Performance** - Score Lighthouse > 90/100

---

## 🔍 SEO & Référencement

### Métadonnées

✅ Toutes les pages ont :
- Title unique optimisé
- Meta description (150-160 caractères)
- Keywords ciblés
- URL canonique
- OpenGraph complet
- Twitter Cards

### Données structurées (Schema.org)

```json
{
  "@type": "LocalBusiness",
  "name": "PixelTech Antilles",
  "areaServed": ["Bouillante", "Guadeloupe"],
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€"
}
```

### Optimisations

- ✅ Sitemap.xml à jour
- ✅ Robots.txt configuré
- ✅ Images optimisées avec next/image
- ✅ Liens internes cohérents
- ✅ Temps de chargement < 2s

---

## 🔒 Sécurité

- **Honeypot** - Protection anti-spam sur le formulaire
- **Validation** - Côté client et serveur
- **HTTPS** - SSL/TLS via GitHub Pages
- **Sanitization** - Nettoyage des entrées utilisateur

---

## 📊 Qualité du Code

- ✅ **0 erreur TypeScript**
- ✅ **0 warning linter**
- ✅ **Build de production réussi**
- ✅ **Architecture modulaire**
- ✅ **Types centralisés**
- ✅ **Code mort supprimé**

---

## 🎯 Compétences Démontrées

Ce projet met en valeur :

- **Développement Frontend** - Next.js, React, TypeScript
- **Architecture** - Composants modulaires, types partagés
- **SEO & Performance** - Optimisation complète
- **DevOps & CI/CD** - GitHub Actions, déploiement automatique
- **Sécurité Web** - Protection formulaire, HTTPS
- **Responsive Design** - Mobile-first, accessibilité

---

## 📝 Licence

© 2025 PixelTech Antilles. Tous droits réservés.

---

## 👤 Auteur

**Benoit Paterne**  
Expert en Administration Réseau & Système  
PixelTech Antilles - Bouillante, Guadeloupe

📧 [contact@pixeltech-antilles.com](mailto:contact@pixeltech-antilles.com)  
🌐 [https://pixeltech-antilles.com](https://pixeltech-antilles.com)

---

**Fait avec ❤️ en Guadeloupe**
