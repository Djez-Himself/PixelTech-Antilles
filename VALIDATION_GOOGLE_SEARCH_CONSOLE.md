# Validation Google Search Console - Enregistrement DNS TXT

## Enregistrement à ajouter

Google vous demande d'ajouter un enregistrement TXT dans votre configuration DNS pour valider la propriété du domaine.

## Valeur à ajouter

**Type** : `TXT`
**Hébergeur** : `@` (ou laissez vide)
**Données** : `google-site-verification=hBRqBhF1qlKVcE7fdAxOrGzwZi3ppeRJeepgfF4y42w`
**TTL** : `1 h` (ou `4 h`)

## Étapes dans Google Workspace

1. Allez dans votre interface Google Workspace DNS
2. Section "Enregistrements personnalisés"
3. Cliquez sur "Ajouter un enregistrement"
4. Remplissez :
   - **Hébergeur** : `@` (ou laissez vide)
   - **Type** : `TXT`
   - **Priorité** : (laisser vide ou N/A)
   - **TTL** : `1 h` (ou `4 h`)
   - **Données** : `google-site-verification=hBRqBhF1qlKVcE7fdAxOrGzwZi3ppeRJeepgfF4y42w`
5. Cliquez sur "Enregistrer" ou "Sauvegarder"

## Important

- **Ne supprimez PAS** les autres enregistrements TXT existants (SPF, DKIM pour Google Workspace)
- Ajoutez simplement ce nouvel enregistrement TXT
- La propagation DNS peut prendre de quelques minutes à 24 heures

## Après l'ajout

1. Attendez quelques minutes (propagation DNS)
2. Retournez dans Google Search Console
3. Cliquez sur "Valider"
4. Si ça ne fonctionne pas immédiatement, attendez jusqu'à 24 heures

## Vérification

Vous pouvez vérifier que l'enregistrement est bien propagé avec :
```bash
nslookup -type=TXT pixeltech-antilles.com
```

Vous devriez voir l'enregistrement `google-site-verification=...` dans la réponse.

