# Exercices Redux

## Reducer

Compléter le reducer dans `01-redux/index.js` de façon traiter les 2 cas suivants :

- sur l'action type `'UPDATE_NEW_TODO'` mettre à jour la clé `newTodo` du state avec l'action payload

- sur l'action type `'ADD_TODO'` ajouter au tableau `items` la valeur de l'action payload

Vérifier en exécutant `node 01-redux/index.js` que les résultats sont cohérents.

## Bonnes pratiques

Créer les 2 constantes `UPDATE_NEW_TODO` et `ADD_TODO`

Créer 2 actions creators dans `02-bonnes-pratiques/actions.js` :

- `updateNewTodo` qui crééra l'action type `'UPDATE_NEW_TODO'`
- `addTodo` qui crééra l'action type `'ADD_TODO'`

Dans `02-bonnes-pratiques/index.ts` transformer les `dispatch` pour qu'il utiliser les actions creators.

Créer 3 selectors dans `02-bonnes-pratiques/selectors.ts` :

- `itemsSelector` qui récupère la clé items du state
- `newTodoSelector` qui récupère la clé newTodo du state
- `todosCompletedSelector` qui récupère uniquement les todos dont la clé `completed` vaut `true`

Dans `02-bonnes-pratiques/index.ts` transformer dans le `.subscribe` le `console.log` par :

```
console.log('todos', todosCompletedSelector(store.getState()));
```
