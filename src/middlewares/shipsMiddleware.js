// Importation de la bibliothèque Axios pour les requêtes HTTP
import axios from 'axios';

import {
  FETCH_SHIPS, // Action pour récupérer la liste des vaisseaux.
  FETCH_SHIP_DETAIL, // Action pour récupérer les détails d'un vaisseau.
  saveShips, // Action pour sauvegarder la liste des vaisseaux dans le state.
  saveShipDetail, // Action pour sauvegarder les détails d'un vaisseau dans le state.
} from '../actions/ships';

// Importation de la base URL de l'API.
import { API_BASE_URL } from '../utils/config';

/**
 * Middleware pour gérer les actions liées aux vaisseaux.
 *
 * @param {Function} store - Le store Redux.
 * @returns {Function} Fonction pour gérer les actions.
 */
const shipsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Si l'action est FETCH_SHIPS, on effectue une requête API pour récupérer la liste des vaisseaux.
    case FETCH_SHIPS:
      axios
        .get(`${API_BASE_URL}/api/v1/ship`) // Envoi d'une requête GET à l'API.
        .then((response) => {
          // Une fois les données récupérées, elles sont sauvegardées dans le state avec saveShips.
          store.dispatch(saveShips(response.data));
        });
      break;
    // Si l'action est FETCH_SHIP_DETAIL, on effectue une requête API pour récupérer les details d'un vaisseau.
    case FETCH_SHIP_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/ship/${action.slug}`) // Envoi d'une requête GET avec le slug du vaisseau.
        .then((response) => {
          // Sauvegarde des détails dans le state avec saveShipDetail.
          store.dispatch(saveShipDetail(response.data));
        });
      break;
    // Si l'action ne correspond à aucun des cas gérés, elle est ignorée par ce middleware.
    default:
  }
  // Passe l'action au middleware ou reducer suivant.
  next(action);
};
// Exportation du middleware.
export default shipsMiddleware;
