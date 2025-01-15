import { combineReducers } from 'redux';

import planetsReducer from './planets';
import shipsReducer from './ships';

// le reducer principal, qui regroupe les autres, combineReducers prend en
// argument un objet qui indique un nom pour chaque reducer
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  planets: planetsReducer,
  ships: shipsReducer,
});

export default rootReducer;
