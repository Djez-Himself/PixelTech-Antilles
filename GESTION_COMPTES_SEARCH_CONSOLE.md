# Guide : Gérer les comptes multiples dans Google Search Console

## 🔍 Étape 1 : Identifier les deux comptes

1. Va sur [Google Search Console](https://search.google.com/search-console)
2. En haut à droite, clique sur ton avatar
3. Tu verras tous les comptes Google connectés
4. Note quel compte est le **compte personnel** et lequel est le **compte professionnel**

## 🗑️ Étape 2 : Retirer le compte personnel

### Option A : Retirer les permissions du compte personnel (recommandé)

1. Dans Google Search Console, sélectionne la propriété `pixeltech-antilles.com`
2. Va dans **Paramètres** (icône roue dentée en bas à gauche)
3. Clique sur **Utilisateurs et autorisations**
4. Tu verras la liste de tous les utilisateurs ayant accès
5. Trouve ton compte personnel dans la liste
6. Clique sur les **3 points** à droite du compte personnel
7. Sélectionne **Supprimer l'accès**
8. Confirme la suppression

### Option B : Supprimer complètement la propriété du compte personnel

Si tu as créé une **propriété séparée** avec ton compte personnel :

1. Connecte-toi avec ton **compte personnel**
2. Va sur [Google Search Console](https://search.google.com/search-console)
3. Sélectionne la propriété `pixeltech-antilles.com` (si elle existe)
4. Va dans **Paramètres** → **Paramètres de la propriété**
5. Fais défiler jusqu'en bas
6. Clique sur **Supprimer la propriété**
7. Confirme la suppression

⚠️ **Attention** : Cette option supprime TOUTES les données de cette propriété. Assure-toi que le compte professionnel a bien accès avant de supprimer.

## ✅ Étape 3 : Vérifier que le compte professionnel a bien accès

1. Connecte-toi avec ton **compte professionnel**
2. Va sur [Google Search Console](https://search.google.com/search-console)
3. Vérifie que tu vois bien la propriété `pixeltech-antilles.com`
4. Vérifie que tu as les permissions nécessaires :
   - **Propriétaire** : Accès complet (recommandé)
   - **Utilisateur complet** : Peut tout faire sauf gérer les utilisateurs
   - **Utilisateur restreint** : Accès limité

## 🔄 Étape 4 : Si tu veux transférer les données

Si tu as des données importantes dans le compte personnel que tu veux garder :

1. **Exporter les données** depuis le compte personnel :
   - Va dans **Performance** → Exporte les données
   - Va dans **Couverture** → Note les erreurs importantes
   - Va dans **Sitemaps** → Note les sitemaps soumis

2. **Réimporter dans le compte professionnel** :
   - Les données historiques ne peuvent pas être transférées directement
   - Mais tu peux re-soumettre le sitemap et les pages importantes
   - Les nouvelles données seront trackées dans le compte professionnel

## 📋 Résumé des actions

1. ✅ Identifier les deux comptes
2. ✅ Retirer les permissions du compte personnel (Option A)
3. ✅ OU supprimer la propriété du compte personnel (Option B)
4. ✅ Vérifier que le compte professionnel a bien accès
5. ✅ Vérifier que Google Analytics est bien lié au compte professionnel

## 🚨 Important

- **Ne supprime JAMAIS** la propriété si c'est la seule qui existe
- **Assure-toi** que le compte professionnel a les permissions **Propriétaire** avant de retirer l'autre
- Les **données historiques** ne peuvent pas être transférées entre comptes
- Le **sitemap** et les **données structurées** restent sur le site, donc pas de perte de référencement

## 💡 Astuce

Pour éviter ce problème à l'avenir :
- Utilise **un seul compte Google** pour gérer le site
- Si tu dois donner accès à quelqu'un, utilise **Utilisateurs et autorisations** plutôt que de créer une nouvelle propriété
