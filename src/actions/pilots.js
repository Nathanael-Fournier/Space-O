// Action utilisée pour récupérer les détails d'un pilote.
export const FETCH_PILOT_DETAIL = 'FETCH_PILOT_DETAIL';
// Action utilisée pour enregistrer les détails d'un pilote dans le state.
export const SAVE_PILOT_DETAIL = 'SAVE_PILOT_DETAIL';

/**
 * Action utilisée pour récupérer les détails d'un pilote.
 * @param {string} slug - Identifiant unique (slug) du pilote à récupérer.
 */
export const fetchPilotDetail = (slug) => ({
  type: FETCH_PILOT_DETAIL,
  slug,
});

/**
 * Action utilisée pour enregistrer les détails d'un pilote dans le state.
 * @param {Object} param - Objet contenant les détails du pilote à sauvegarder.
 */
export const savePilotDetail = (param) => ({
  type: SAVE_PILOT_DETAIL,
  pilotDetailAction: param,
});
