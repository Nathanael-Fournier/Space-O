// Action utilisée pour récupérer la liste des planètes.
export const FETCH_PLANETS = 'FETCH_PLANETS';
// Action utilisée pour enregistrer la liste des planètes dans le state.
export const SAVE_PLANETS = 'SAVE_PLANETS';
// Action utilisée pour récupérer les détails d'une planète.
export const FETCH_PLANET_DETAIL = 'FETCH_PLANET_DETAIL';
// Action utilisée pour enregistrer les détails d'une planète dans le state.
export const SAVE_PLANET_DETAIL = 'SAVE_PLANET_DETAIL';

/**
 * Action utilisée pour récupérer la liste des planètes.
 */
export const fetchPlanets = () => ({
  type: FETCH_PLANETS,
});

/**
 * Action utilisée pour enregistrer la liste des planètes dans le state.
 * @param {Array} param - Tableau contenant les données des planètes.
 */
export const savePlanets = (param) => ({
  type: SAVE_PLANETS,
  planetsAction: param,
});

/**
 * Action utilisée pour récupérer les détails d'une planète.
 * @param {string} slug - Identifiant unique (slug) de la planète à récupérer.
 */
export const fetchPlanetDetail = (slug) => ({
  type: FETCH_PLANET_DETAIL,
  slug,
});

/**
 * Action utilisée pour enregistrer les détails d'une planète dans le state.
 * @param {Object} param - Objet contenant les informations de la planète.
 */
export const savePlanetDetail = (param) => ({
  type: SAVE_PLANET_DETAIL,
  planetDetailAction: param,
});
