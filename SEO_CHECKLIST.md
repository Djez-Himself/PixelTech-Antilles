# Checklist SEO & Visibilité - PixelTech Antilles

## ✅ Configuration actuelle

### Google Analytics 4
- **ID de mesure** : `G-Z4NM6X1HLH`
- **Configuration** : ✅ Activée avec tracking des pages, scroll depth, événements
- **Événements trackés** :
  - ✅ Clics sur les CTA (boutons "Devis", "Services", "Tarifs")
  - ✅ Soumissions de formulaire (devis/contact)
  - ✅ Scroll depth (25%, 50%, 75%, 100%)
  - ✅ Clics sur liens internes/externes

### Google Search Console
- **Domaine** : pixeltech-antilles.com
- **Vérification** : ✅ Google Site Verification configurée
- **Sitemap** : ✅ Soumis (`https://pixeltech-antilles.com/sitemap.xml`)
- **Robots.txt** : ✅ Configuré correctement

### Données structurées (Schema.org)
- ✅ LocalBusiness schema
- ✅ Person schema (Benoit Paterne)
- ✅ Service catalog
- ✅ Coordonnées géographiques

### Métadonnées SEO
- ✅ Title optimisé sur toutes les pages
- ✅ Meta descriptions uniques (150-160 caractères)
- ✅ OpenGraph pour réseaux sociaux
- ✅ Twitter Cards
- ✅ Canonical URLs

## 📋 Actions à effectuer dans Google Analytics

### 1. Vérifier que les données arrivent
1. Aller sur [Google Analytics](https://analytics.google.com)
2. Sélectionner la propriété `G-Z4NM6X1HLH`
3. Vérifier dans **Rapports** → **Temps réel** que les visites apparaissent
4. Attendre 24-48h pour voir les données complètes

### 2. Configurer les événements de conversion
1. **Admin** → **Événements**
2. Marquer comme conversion :
   - `form_submit` avec label "Demande de devis"
   - `form_submit` avec label "Contact général"
   - `click` avec category "CTA"

### 3. Créer des audiences
1. **Admin** → **Audiences**
2. Créer des audiences pour :
   - Visiteurs ayant soumis un formulaire
   - Visiteurs ayant scrollé à 75%+
   - Visiteurs ayant cliqué sur un CTA

## 📋 Actions à effectuer dans Google Search Console

### 1. Vérifier l'indexation
1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Vérifier **Couverture** → **Pages valides** :
   - `/` (page d'accueil)
   - `/services`
   - `/tarifs`
   - `/contact`
   - `/a-propos`

### 2. Soumettre le sitemap (si pas déjà fait)
1. **Sitemaps** → **Ajouter un nouveau sitemap**
2. Entrer : `https://pixeltech-antilles.com/sitemap.xml`
3. Cliquer sur **Envoyer**

### 3. Vérifier les problèmes
1. **Couverture** → Vérifier les erreurs d'indexation
2. **Améliorations** → Vérifier les suggestions SEO
3. **Performance** → Analyser les requêtes de recherche

### 4. Demander une indexation manuelle (si nécessaire)
1. Pour chaque page importante :
   - Ouvrir l'URL dans l'inspecteur d'URL
   - Cliquer sur **Demander une indexation**

## 📋 Améliorations SEO supplémentaires

### 1. Contenu
- ✅ Textes optimisés avec mots-clés locaux (Guadeloupe, Bouillante)
- ✅ Structure H1, H2, H3 correcte
- ✅ Liens internes entre pages

### 2. Performance
- ✅ Images optimisées avec `next/image`
- ✅ Code minifié et optimisé
- ⚠️ Vérifier le score Lighthouse (objectif : >90)

### 3. Mobile
- ✅ Design responsive
- ✅ Test mobile-friendly : [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 4. Liens externes
- ⚠️ Obtenir des backlinks de qualité (annuaires locaux Guadeloupe, partenaires)
- ⚠️ Créer un profil Google Business (si applicable)

## 🔍 Vérifications régulières

### Hebdomadaire
- [ ] Vérifier les statistiques Google Analytics
- [ ] Vérifier les erreurs dans Search Console
- [ ] Analyser les requêtes de recherche

### Mensuel
- [ ] Analyser les conversions (formulaires soumis)
- [ ] Vérifier le positionnement sur les mots-clés cibles
- [ ] Analyser le trafic organique

## 📊 Métriques à suivre

### Google Analytics
- **Utilisateurs** : Nombre de visiteurs uniques
- **Sessions** : Nombre de visites
- **Taux de rebond** : Objectif < 60%
- **Durée moyenne de session** : Objectif > 2 minutes
- **Taux de conversion** : Formulaires soumis / Visiteurs

### Google Search Console
- **Impressions** : Nombre de fois que le site apparaît dans les résultats
- **Clics** : Nombre de clics depuis Google
- **CTR** : Taux de clic (objectif > 2%)
- **Position moyenne** : Position dans les résultats de recherche

## 🚀 Actions immédiates

1. **Vérifier Google Analytics** : Aller sur analytics.google.com et vérifier que les données arrivent
2. **Vérifier Search Console** : Vérifier l'indexation des pages
3. **Tester le site** : Utiliser [PageSpeed Insights](https://pagespeed.web.dev/) pour vérifier les performances
4. **Vérifier mobile** : Utiliser [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📞 Support

Si les données Google Analytics ne s'affichent pas après 48h :
1. Vérifier que le code GA est bien présent dans le HTML (inspecter le code source)
2. Utiliser [Google Tag Assistant](https://tagassistant.google.com/) pour déboguer
3. Vérifier qu'il n'y a pas de bloqueur de publicité actif
