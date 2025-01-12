import { SAVE_PLANETS } from '../actions/planets';

const initialState = {
  planetsList: [],
  loadingPlanets: true,
};

const planetsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLANETS:
      return {
        ...state,
        planetsList: action.planetsAction,
        loadingPlanets: false,
      };

    default:
      return state;
  }
};

export default planetsReducer;
