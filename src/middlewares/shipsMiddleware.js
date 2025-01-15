import axios from 'axios';

import {
  FETCH_SHIPS,
  FETCH_SHIP_DETAIL,
  saveShips,
  saveShipDetail,
} from '../actions/ships';
import { API_BASE_URL } from '../utils/config';

const shipsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHIPS:
      axios.get(`${API_BASE_URL}/api/v1/ship`).then((response) => {
        store.dispatch(saveShips(response.data));
      });
      break;

    case FETCH_SHIP_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/ship/${action.slug}`)
        .then((response) => {
          store.dispatch(saveShipDetail(response.data));
        });
      break;

    default:
  }

  next(action);
};

export default shipsMiddleware;
