import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/index';

import planetsMiddleware from '../middlewares/planetsMiddleware';
import shipsMiddleware from '../middlewares/shipsMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(planetsMiddleware, shipsMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;
