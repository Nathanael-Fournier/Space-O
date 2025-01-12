import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers/index';

import planetsMiddleware from '../middlewares/planetsMiddleware';

const enhancers = composeWithDevTools(applyMiddleware(planetsMiddleware));

const store = createStore(reducer, enhancers);

export default store;
