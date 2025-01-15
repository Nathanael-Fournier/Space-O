import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/index';

import planetsMiddleware from '../middlewares/planetsMiddleware';
import shipsMiddleware from '../middlewares/shipsMiddleware';
import pilotsMiddleware from '../middlewares/pilotsMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(planetsMiddleware, shipsMiddleware, pilotsMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
