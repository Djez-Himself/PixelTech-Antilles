# Guide : Ajouter votre logo comme favicon

## Qu'est-ce qu'un favicon ?

Le **favicon** est la petite icône qui apparaît dans l'onglet du navigateur, à côté du titre de la page.

## Méthode recommandée pour Next.js 13+

Next.js détecte automatiquement les fichiers d'icônes placés dans `src/app/`.

### Option 1 : Utiliser votre logo existant (simple)

1. **Convertir votre logo en favicon**
   - Prenez votre logo `logo.png`
   - Redimensionnez-le en **32x32 pixels** ou **16x16 pixels** (format carré)
   - Enregistrez-le comme `icon.png` ou `icon.ico`

2. **Placer le fichier**
   - Placez `icon.png` dans `src/app/`
   - Next.js le détectera automatiquement

3. **C'est tout !** Le favicon apparaîtra automatiquement.

### Option 2 : Créer un favicon depuis votre logo

Si votre logo est rectangulaire, créez une version carrée :

1. **Ouvrez votre logo** dans un éditeur d'images
2. **Créez une version carrée** (ex: 32x32 ou 64x64 pixels)
   - Centrez votre logo
   - Ajoutez un fond si nécessaire
3. **Enregistrez comme** `icon.png` dans `src/app/`

### Option 3 : Utiliser plusieurs tailles (recommandé pour tous les appareils)

Next.js supporte plusieurs formats automatiquement :

- `icon.png` ou `icon.jpg` - Format moderne
- `icon.ico` - Format classique
- `apple-icon.png` - Pour iOS (180x180 pixels)
- `favicon.ico` - Format classique (dans `public/`)

## Fichiers à créer

Placez ces fichiers dans `src/app/` :

```
src/app/
  ├── icon.png          (32x32 ou 64x64 pixels)
  ├── apple-icon.png    (180x180 pixels, optionnel)
  └── ...
```

## Configuration dans layout.tsx (optionnel)

Vous pouvez aussi configurer explicitement dans `src/app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  // ... autres métadonnées
  icons: {
    icon: '/logos/logo.png', // ou '/icon.png'
    apple: '/apple-icon.png',
  },
}
```

## Outils pour créer un favicon

- **En ligne** : https://favicon.io/ (gratuit)
- **En ligne** : https://realfavicongenerator.net/ (gratuit, complet)
- **Logiciel** : GIMP, Photoshop, etc.

## Recommandation

**Méthode la plus simple** :
1. Prenez votre logo
2. Redimensionnez en 32x32 pixels (carré)
3. Enregistrez comme `icon.png`
4. Placez dans `src/app/`
5. C'est tout !

Next.js détectera automatiquement le fichier et l'utilisera comme favicon.

