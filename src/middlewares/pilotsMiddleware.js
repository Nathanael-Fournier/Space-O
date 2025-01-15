import axios from 'axios';

import { FETCH_PILOT_DETAIL, savePilotDetail } from '../actions/pilots';
import { API_BASE_URL } from '../utils/config';

const pilotsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PILOT_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/pilot/${action.slug}`)
        .then((response) => {
          store.dispatch(savePilotDetail(response.data));
        });
      break;

    default:
  }

  next(action);
};

export default pilotsMiddleware;
