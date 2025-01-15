import { SAVE_PILOT_DETAIL } from '../actions/pilots';

const initialState = {
  pilotDetail: [],
  loadingPilotDetail: true,
};

const pilotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PILOT_DETAIL:
      return {
        ...state,
        pilotDetail: action.pilotDetailAction,
        loadingPilotDetail: false,
      };

    default:
      return state;
  }
};

export default pilotsReducer;
