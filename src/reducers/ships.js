import { SAVE_SHIPS, SAVE_SHIP_DETAIL } from '../actions/ships';

const initialState = {
  shipsList: [],
  loadingShips: true,
  shipDetail: [],
  loadingShipDetail: true,
};

const shipsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SHIPS:
      return {
        ...state,
        shipsList: action.shipsAction,
        loadingShips: false,
      };
    case SAVE_SHIP_DETAIL:
      return {
        ...state,
        shipDetail: action.shipDetailAction,
        loadingShipDetail: false,
      };

    default:
      return state;
  }
};

export default shipsReducer;
