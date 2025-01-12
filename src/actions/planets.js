export const FETCH_PLANETS = 'FETCH_PLANETS';
export const SAVE_PLANETS = 'SAVE_PLANETS';

export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const savePlanets = (param) => ({
  type: SAVE_PLANETS,
  planetsAction: param,
});
