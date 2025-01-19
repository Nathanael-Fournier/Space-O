// Importation de la bibliothèque Axios pour les requêtes HTTP
import axios from 'axios';

// Importation de l'action qui récupére les détails d'un pilote et de l'action qui sauvegarde ces détails.
import { FETCH_PILOT_DETAIL, savePilotDetail } from '../actions/pilots';

// Importation de la base URL de l'API.
import { API_BASE_URL } from '../utils/config';

/**
 * Middleware pour gérer les actions liées aux pilotes.
 *
 * @param {Function} store - Le store Redux.
 * @returns {Function} Fonction pour gérer les actions.
 */
const pilotsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Si l'action est FETCH_PILOT_DETAIL, on effectue une requête API pour récupérer les détails d'un pilote.
    case FETCH_PILOT_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/pilot/${action.slug}`) // Envoi d'une requête GET avec le slug du pilote.
        .then((response) => {
          // Une fois les données récupérées, on les sauvegarde dans le state via savePilotDetail.
          store.dispatch(savePilotDetail(response.data));
        });
      break;
    // Si l'action ne correspond pas au cas géré plus haut, elle est ignorée par ce middleware.
    default:
  }
  // Passe l'action au middleware ou reducer suivant.
  next(action);
};
// Exportation du middleware.
export default pilotsMiddleware;
