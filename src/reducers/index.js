// Importation de `combineReducers` depuis Redux qui permet de combiner plusieurs reducers en un seul.
import { combineReducers } from 'redux';
// Importation des reducers qui gèrent l'état des planètes, des vaisseaux et des pilotes.
import planetsReducer from './planets';
import shipsReducer from './ships';
import pilotsReducer from './pilots';

/**
 * `rootReducer` : Le reducer principal de l'application qui combine les différents reducers.
 * `combineReducers` prend un objet comme argument où chaque clé représente un "tiroir" du store Redux.
 * Chaque clé correspond à un morceau de l'état global, et chaque reducer gère un de ces morceaux.
 */
const rootReducer = combineReducers({
  // 'nom du tiroir': 'reducer qui s'en occupe'
  planets: planetsReducer,
  ships: shipsReducer,
  pilots: pilotsReducer,
});

// Export du reducer combiné pour être utilisé dans la création du store.
export default rootReducer;
