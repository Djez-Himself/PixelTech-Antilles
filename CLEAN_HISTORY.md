# Nettoyage de l'historique Git

## Objectif

Réduire l'historique Git à un seul commit initial pour masquer les détails du développement.

## Méthode

1. Créer un commit orphelin (sans parent)
2. Ajouter tous les fichiers actuels
3. Créer un commit initial unique
4. Remplacer la branche main par ce nouveau commit
5. Force push (écrasera l'historique distant)

## ⚠️ Attention

- **L'historique sera complètement réécrit**
- **Tous les commits précédents seront perdus**
- **Les autres collaborateurs devront réinitialiser leur dépôt local**
- **Les issues/PRs liées aux anciens commits ne seront plus accessibles**

## Alternative

Si vous voulez garder l'historique mais le simplifier :
- Garder seulement les commits majeurs
- Réécrire les messages de commit pour être plus génériques

