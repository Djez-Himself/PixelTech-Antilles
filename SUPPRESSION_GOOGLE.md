# Guide : Supprimer la page "en construction" de Google

## 🔍 Étape 1 : Identifier la page problématique

1. Va sur [Google Search Console](https://search.google.com/search-console)
2. Sélectionne la propriété `pixeltech-antilles.com`
3. Va dans **Couverture** → **Pages valides**
4. Recherche les pages qui contiennent :
   - `/home`
   - `/construction`
   - `/en-construction`
   - Ou toute autre page avec "construction" dans l'URL

## 🗑️ Étape 2 : Demander la suppression de l'indexation

### Méthode 1 : Via l'inspecteur d'URL (recommandé)

1. Dans Google Search Console, va dans **Inspecter l'URL**
2. Entre l'URL complète de la page "en construction" (ex: `https://pixeltech-antilles.com/home`)
3. Clique sur **Demander une indexation** → **Supprimer l'URL**
4. Confirme la suppression

### Méthode 2 : Via le fichier de suppression

1. Crée un fichier `removal.txt` avec les URLs à supprimer :
   ```
   https://pixeltech-antilles.com/home
   https://pixeltech-antilles.com/construction
   https://pixeltech-antilles.com/en-construction
   ```

2. Dans Google Search Console :
   - Va dans **Suppressions** → **Nouvelle demande**
   - Sélectionne **Supprimer temporairement l'URL**
   - Colle les URLs à supprimer
   - Soumets la demande

## 🔄 Étape 3 : Ajouter une redirection (si la page existe encore)

Si la page `/home` ou `/construction` existe encore et est accessible :

1. Crée une redirection 301 vers la page d'accueil `/`
2. Cela indique à Google que le contenu a été déplacé définitivement

## 📋 Étape 4 : Vérifier le robots.txt

Assure-toi que le `robots.txt` exclut les pages obsolètes :

```
User-agent: *
Disallow: /home
Disallow: /construction
Disallow: /en-construction
Allow: /
```

## ⏱️ Délai de traitement

- **Suppression temporaire** : 24-48h
- **Mise à jour de l'index** : 1-2 semaines
- **Disparition complète des résultats** : 2-4 semaines

## ✅ Vérification

Après 1-2 semaines, vérifie que la page n'apparaît plus :

1. Recherche sur Google : `site:pixeltech-antilles.com construction`
2. Recherche sur Google : `site:pixeltech-antilles.com home`
3. Si la page apparaît encore, renouvelle la demande de suppression

## 🚨 Important

- Les suppressions sont **temporaires** (90 jours)
- Si la page réapparaît après 90 jours, il faut renouveler la demande
- Assure-toi que la page n'existe plus physiquement sur le site
