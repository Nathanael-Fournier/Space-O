// Importation des fonctions de Redux :
// - `createStore` pour créer le store centralisé de l'application.
// - `applyMiddleware` pour intégrer des middlewares.
import { createStore, applyMiddleware } from 'redux';
// Importation de `composeWithDevTools` pour intégrer les outils de développement Redux (Redux DevTools).
import { composeWithDevTools } from '@redux-devtools/extension';
// Importation du reducer principal qui combine tous les reducers de l'application.
import reducer from '../reducers/index';
// Importation des middlewares pour gérer les actions liées aux planètes, aux vaisseaux et aux pilotes.
import planetsMiddleware from '../middlewares/planetsMiddleware';
import shipsMiddleware from '../middlewares/shipsMiddleware';
import pilotsMiddleware from '../middlewares/pilotsMiddleware';

/**
 * Création des "enhancers", une configuration qui combine les middlewares et les outils de développement.
 * - `applyMiddleware` : Ajoute les middlewares pour intercepter et étendre les actions Redux.
 * - `composeWithDevTools` : Permet de surveiller et déboguer les actions et l'état dans Redux DevTools.
 */
const enhancers = composeWithDevTools(
  applyMiddleware(planetsMiddleware, shipsMiddleware, pilotsMiddleware)
);

/**
 * Création du store Redux.
 * - `reducer` : Le reducer principal qui gère l'état de l'application.
 * - `enhancers` : Les middlewares et outils de développement.
 */
const store = createStore(reducer, enhancers);

// Exportation du store pour l'utiliser dans l'application React via le Provider.
export default store;
