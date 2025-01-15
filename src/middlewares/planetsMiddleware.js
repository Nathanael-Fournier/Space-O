import axios from 'axios';

import {
  FETCH_PLANETS,
  FETCH_PLANET_DETAIL,
  savePlanets,
  savePlanetDetail,
} from '../actions/planets';
import { API_BASE_URL } from '../utils/config';

const planetsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      axios.get(`${API_BASE_URL}/api/v1/planet`).then((response) => {
        store.dispatch(savePlanets(response.data));
      });
      break;

    case FETCH_PLANET_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/planet/${action.slug}`)
        .then((response) => {
          store.dispatch(savePlanetDetail(response.data));
        });
      break;

    default:
  }

  next(action);
};

export default planetsMiddleware;
