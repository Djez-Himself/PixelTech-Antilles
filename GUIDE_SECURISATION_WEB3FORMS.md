# Guide : Sécurisation de la clé Web3Forms

## Objectif

Limiter l'utilisation de votre clé API Web3Forms au domaine `pixeltech-antilles.com` pour éviter qu'elle soit utilisée sur d'autres sites.

## Étapes de configuration

### 1. Accéder au dashboard Web3Forms

1. Allez sur : **https://web3forms.com**
2. Connectez-vous à votre compte (ou créez-en un si nécessaire)
3. Accédez à votre **Dashboard** ou **API Keys**

### 2. Localiser votre clé API

Dans le dashboard, vous devriez voir :
- Votre clé API actuelle : `18fd716d-2f87-4ff3-9392-ef5a7387dd0d`
- Les statistiques d'utilisation
- Les paramètres de la clé

### 3. Configurer les restrictions de domaine

Recherchez une section intitulée :
- **"Domain Restrictions"** ou **"Allowed Domains"**
- **"Domain Whitelist"** ou **"Restrict to Domain"**
- **"Security Settings"** ou **"Access Control"**

### 4. Ajouter le domaine autorisé

1. Cliquez sur **"Edit"** ou **"Settings"** pour votre clé API
2. Dans le champ **"Allowed Domains"** ou **"Domain Whitelist"**, ajoutez :
   ```
   pixeltech-antilles.com
   ```
3. Si plusieurs domaines sont possibles, vous pouvez aussi ajouter :
   ```
   www.pixeltech-antilles.com
   ```
   (optionnel, car www redirige vers le domaine principal)

### 5. Sauvegarder les modifications

1. Cliquez sur **"Save"** ou **"Update"**
2. Les restrictions seront appliquées immédiatement

## Vérification

### Test 1 : Vérifier que le formulaire fonctionne toujours

1. Allez sur : `https://pixeltech-antilles.com/contact`
2. Remplissez le formulaire de test
3. Envoyez-le
4. Vérifiez que vous recevez bien l'email

### Test 2 : Vérifier que la restriction fonctionne

Si quelqu'un essaie d'utiliser votre clé sur un autre domaine, Web3Forms devrait :
- Rejeter la requête
- Retourner une erreur de domaine non autorisé

## Alternative : Créer une nouvelle clé (recommandé)

Si vous ne trouvez pas les options de restriction, vous pouvez créer une nouvelle clé :

### Étapes

1. Dans le dashboard Web3Forms, créez une **nouvelle clé API**
2. Configurez-la avec les restrictions de domaine dès le début
3. Remplacez l'ancienne clé dans le code

### Mise à jour du code

Une fois la nouvelle clé créée, vous devrez :

1. **Option A : Variable d'environnement (recommandé pour production)**
   - Créer un fichier `.env.local` (non commité)
   - Ajouter : `NEXT_PUBLIC_WEB3FORMS_KEY=votre-nouvelle-cle`
   - Le code utilisera automatiquement cette variable

2. **Option B : Mise à jour directe (temporaire)**
   - Mettre à jour la ligne 29 de `src/app/contact/page.tsx`
   - ⚠️ **Attention** : La clé sera toujours visible dans le code compilé

## Note importante

Même avec les restrictions de domaine, la clé API reste visible dans le code JavaScript côté client. C'est normal pour un site statique.

Les restrictions de domaine empêchent simplement l'utilisation de la clé sur d'autres sites, mais n'empêchent pas quelqu'un de voir la clé dans le code source.

## Sécurité supplémentaire

Pour une sécurité maximale, vous pouvez aussi :

1. **Activer le rate limiting** dans Web3Forms
   - Limiter le nombre de soumissions par heure/jour
   - Protéger contre le spam

2. **Surveiller l'utilisation**
   - Vérifier régulièrement les statistiques dans le dashboard
   - Détecter toute utilisation suspecte

3. **Ajouter un honeypot au formulaire** (optionnel)
   - Champ caché pour détecter les bots
   - Protection supplémentaire contre le spam

## Résultat attendu

Après configuration :
- ✅ Le formulaire fonctionne sur `pixeltech-antilles.com`
- ✅ La clé ne peut pas être utilisée sur d'autres domaines
- ✅ Protection contre l'utilisation non autorisée de votre quota Web3Forms

