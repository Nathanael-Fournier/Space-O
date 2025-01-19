// Action utilisée pour récupérer la liste des vaisseaux.
export const FETCH_SHIPS = 'FETCH_SHIPS';
// Action utilisée pour enregistrer la liste des vaisseaux dans le state.
export const SAVE_SHIPS = 'SAVE_SHIPS';
// Action utilisée pour récupérer les détails d'un vaisseau.
export const FETCH_SHIP_DETAIL = 'FETCH_SHIP_DETAIL';
// Action utilisée pour enregistrer les détails d'un vaisseau dans le state.
export const SAVE_SHIP_DETAIL = 'SAVE_SHIP_DETAIL';

/**
 * Action utilisée pour récupérer la liste des vaisseaux.
 */
export const fetchShips = () => ({
  type: FETCH_SHIPS,
});

/**
 * Action utilisée pour enregistrer la liste des vaisseaux dans le state.
 * @param {Array} param - Tableau contenant les données des vaisseaux.
 */
export const saveShips = (param) => ({
  type: SAVE_SHIPS,
  shipsAction: param,
});

/**
 * Action utilisée pour récupérer les détails d'un vaisseau.
 * @param {string} slug - Identifiant unique (slug) du vaisseau à récupérer.
 */
export const fetchShipDetail = (slug) => ({
  type: FETCH_SHIP_DETAIL,
  slug,
});

/**
 * Action utilisée pour enregistrer les détails d'un vaisseau dans le state.
 * @param {Object} param - Objet contenant les informations du vaisseau.
 */
export const saveShipDetail = (param) => ({
  type: SAVE_SHIP_DETAIL,
  shipDetailAction: param,
});
