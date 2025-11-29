# Installation Google Analytics

## Pourquoi Google Analytics ?

Google Analytics permet de suivre :
- Nombre de visiteurs
- Pages les plus visitées
- Provenance des visiteurs (recherche Google, liens directs, etc.)
- Temps passé sur le site
- Appareils utilisés (mobile, desktop)
- Et bien plus...

## Étapes d'installation

### 1. Créer un compte Google Analytics

1. Allez sur : https://analytics.google.com
2. Créez un compte (ou connectez-vous)
3. Créez une propriété pour `pixeltech-antilles.com`
4. Sélectionnez "Web" comme type de propriété
5. Récupérez votre **ID de mesure** (format : `G-XXXXXXXXXX`)

### 2. Installer Google Analytics sur le site

Une fois que vous avez votre ID de mesure, je peux l'ajouter au site.

**Option A : Via script direct (simple)**
- Ajout d'un script Google Analytics dans le layout
- Fonctionne avec les sites statiques

**Option B : Via package npm (plus robuste)**
- Installation de `@next/third-parties` ou `react-ga4`
- Meilleure intégration avec Next.js

## Après installation

Vous pourrez voir dans Google Analytics :
- Nombre de visiteurs en temps réel
- Statistiques quotidiennes, hebdomadaires, mensuelles
- Pages les plus visitées
- Provenance du trafic
- Démographie et intérêts

## Alternative : Google Search Console

Google Search Console (déjà configuré) donne aussi des statistiques :
- Nombre de clics depuis Google
- Requêtes de recherche
- Position dans les résultats
- Mais pas le nombre total de visiteurs (seulement ceux venant de Google)

## Recommandation

**Google Analytics** est la solution standard pour suivre tous les visiteurs, quelle que soit leur provenance.

