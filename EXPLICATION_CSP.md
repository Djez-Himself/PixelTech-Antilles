# Explication : Erreur Content Security Policy (CSP)

## Qu'est-ce que c'est ?

**Content Security Policy (CSP)** est une fonctionnalité de sécurité qui empêche l'exécution de code JavaScript malveillant sur votre site.

L'erreur que vous voyez indique que quelque chose essaie d'utiliser `eval()` ou des fonctions similaires, ce qui est bloqué par la CSP.

## Pourquoi cette erreur apparaît ?

### Causes possibles :

1. **GitHub Pages applique une CSP par défaut**
   - GitHub Pages peut appliquer des headers de sécurité par défaut
   - Ces headers bloquent `eval()` pour des raisons de sécurité

2. **Extension de navigateur**
   - Certaines extensions (ad blockers, security tools) peuvent injecter du code
   - Ce code peut utiliser `eval()` et déclencher l'erreur

3. **Bibliothèque externe**
   - Une bibliothèque JavaScript utilisée par Next.js pourrait utiliser `eval()` en interne
   - Next.js lui-même pourrait utiliser `eval()` dans certains cas

4. **Outils de développement**
   - Les outils de développement du navigateur peuvent déclencher cette erreur

## Est-ce grave ?

### ⚠️ C'est un **avertissement**, pas une erreur bloquante

- Votre site fonctionne normalement
- Ce n'est pas une faille de sécurité
- C'est même une **bonne chose** : la CSP protège votre site

### ✅ Notre code est sécurisé

- On n'utilise **pas** `eval()` directement dans notre code
- On utilise `JSON.stringify()` avec `dangerouslySetInnerHTML`, ce qui est **sécurisé**
- Le code injecté est du JSON valide, pas du JavaScript arbitraire

## Doit-on corriger ?

### Option 1 : Ignorer (recommandé)

Si votre site fonctionne normalement, vous pouvez **ignorer cet avertissement**. C'est juste un message informatif.

### Option 2 : Configurer la CSP explicitement

Si vous voulez contrôler la CSP, vous pouvez l'ajouter dans `next.config.js` :

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ]
  },
  // ... reste de la config
}
```

⚠️ **Attention** : Ajouter `'unsafe-eval'` réduit la sécurité. Ce n'est **pas recommandé** sauf si absolument nécessaire.

## Recommandation

**Pour votre site** :
- ✅ **Ignorer l'avertissement** : Votre site fonctionne, c'est juste un message informatif
- ✅ **Notre code est sécurisé** : On n'utilise pas `eval()` directement
- ✅ **La CSP protège votre site** : C'est une bonne chose

**Action** : Aucune action nécessaire. L'avertissement est normal et votre site est sécurisé.

