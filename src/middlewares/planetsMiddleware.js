import axios from 'axios';

import { FETCH_PLANETS, savePlanets } from '../actions/planets';
import { API_BASE_URL } from '../utils/config';

const planetsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      axios.get(`${API_BASE_URL}/api/v1/planet`).then((response) => {
        store.dispatch(savePlanets(response.data));
      });
      break;
    default:
  }

  next(action);
};

export default planetsMiddleware;
