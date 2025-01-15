import { SAVE_PLANETS, SAVE_PLANET_DETAIL } from '../actions/planets';

const initialState = {
  planetsList: [],
  loadingPlanets: true,
  planetDetail: [],
  loadingPlanetDetail: true,
};

const planetsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLANETS:
      return {
        ...state,
        planetsList: action.planetsAction,
        loadingPlanets: false,
      };
    case SAVE_PLANET_DETAIL:
      return {
        ...state,
        planetDetail: action.planetDetailAction,
        loadingPlanetDetail: false,
      };

    default:
      return state;
  }
};

export default planetsReducer;
