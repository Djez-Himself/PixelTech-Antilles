# Configuration du domaine personnalisé pixeltech-antilles.com

## Étapes de configuration

### 1. Configuration DNS dans Google Workspace / Google Domains

Vous devez configurer les enregistrements DNS suivants pour pointer vers GitHub Pages :

#### Option A : Configuration avec sous-domaines (recommandé)
```
Type: A
Nom: @
Valeur: 185.199.108.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.109.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.110.153
TTL: 3600

Type: A
Nom: @
Valeur: 185.199.111.153
TTL: 3600
```

#### Option B : Configuration avec CNAME (alternative)
```
Type: CNAME
Nom: www
Valeur: djez-himself.github.io
TTL: 3600
```

### 2. Configuration dans GitHub

1. Allez sur votre repository : `https://github.com/Djez-Himself/PixelTech-Antilles`
2. Cliquez sur **Settings** > **Pages**
3. Dans la section **Custom domain**, entrez : `pixeltech-antilles.com`
4. Cochez **Enforce HTTPS** (recommandé)
5. GitHub va vérifier automatiquement la configuration DNS

### 3. Vérification

- Le fichier `CNAME` est déjà créé dans `public/CNAME`
- Il sera automatiquement copié lors du déploiement
- GitHub Pages créera aussi automatiquement le fichier CNAME dans les paramètres

### 4. Temps de propagation DNS

- La propagation DNS peut prendre de quelques minutes à 48 heures
- Vous pouvez vérifier avec : `nslookup pixeltech-antilles.com` ou `dig pixeltech-antilles.com`

### 5. HTTPS/SSL

- GitHub Pages fournit automatiquement un certificat SSL gratuit via Let's Encrypt
- Activez **Enforce HTTPS** dans les paramètres GitHub Pages une fois le DNS configuré

## Notes importantes

- Le `basePath` a été retiré de `next.config.js` car avec un domaine personnalisé, il n'est plus nécessaire
- Tous les chemins ont été mis à jour pour utiliser `/` au lieu de `/PixelTech-Antilles/`
- Les métadonnées SEO utilisent déjà `https://pixeltech-antilles.com`

## Vérification après configuration

Une fois le DNS configuré et propagé :
1. Le site sera accessible sur `https://pixeltech-antilles.com`
2. L'ancien URL `https://djez-himself.github.io/PixelTech-Antilles/` redirigera automatiquement
3. Le certificat SSL sera automatiquement généré par GitHub

