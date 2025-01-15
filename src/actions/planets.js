export const FETCH_PLANETS = 'FETCH_PLANETS';
export const SAVE_PLANETS = 'SAVE_PLANETS';
export const FETCH_PLANET_DETAIL = 'FETCH_PLANET_DETAIL';
export const SAVE_PLANET_DETAIL = 'SAVE_PLANET_DETAIL';

export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

export const savePlanets = (param) => ({
  type: SAVE_PLANETS,
  planetsAction: param,
});

export const fetchPlanetDetail = (slug) => ({
  type: FETCH_PLANET_DETAIL,
  slug,
});

export const savePlanetDetail = (param) => ({
  type: SAVE_PLANET_DETAIL,
  planetDetailAction: param,
});
