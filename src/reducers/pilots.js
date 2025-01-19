// Importation de l'action `SAVE_PILOT_DETAIL` qui est utilisée pour mettre à jour les détails d'un pilote.
import { SAVE_PILOT_DETAIL } from '../actions/pilots';

const initialState = {
  pilotDetail: [], // Tableau vide pour stocker les détails du pilote.
  loadingPilotDetail: true, // Indicateur pour savoir si les détails sont en train de charger.
};

// Le reducer qui gère l'état des détails du pilote
const pilotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Si l'action est `SAVE_PILOT_DETAIL`
    case SAVE_PILOT_DETAIL:
      return {
        ...state, // Garde l'état actuel
        pilotDetail: action.pilotDetailAction, // Met à jour les détails du pilote avec les données de l'action
        loadingPilotDetail: false, // Marque le chargement comme terminé
      };

    // Si l'action ne correspond à rien
    default:
      return state;
  }
};

// Export du reducer.
export default pilotsReducer;
