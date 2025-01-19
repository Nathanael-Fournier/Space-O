// Importation de la bibliothèque Axios pour les requêtes HTTP
import axios from 'axios';

import {
  FETCH_PLANETS, // Action pour récupérer la liste des planètes.
  FETCH_PLANET_DETAIL, // Action pour récupérer les détails d'une planète.
  savePlanets, // Action pour sauvegarder la liste des planètes dans le state.
  savePlanetDetail, // Action pour sauvegarder les détails d'une planète dans le state.
} from '../actions/planets';

// Importation de la base URL de l'API.
import { API_BASE_URL } from '../utils/config';

/**
 * Middleware pour gérer les actions liées aux planètes.
 *
 * @param {Function} store - Le store Redux.
 * @returns {Function} Fonction pour gérer les actions.
 */
const planetsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // Si l'action est FETCH_PLANETS, on effectue une requête API pour récupérer la liste des planètes.
    case FETCH_PLANETS:
      axios
        .get(`${API_BASE_URL}/api/v1/planet`) // Envoi d'une requête GET à l'API.
        .then((response) => {
          // Une fois les données récupérées, elles sont sauvegardées dans le state avec savePlanets.
          store.dispatch(savePlanets(response.data));
        });
      break;
    // Si l'action est FETCH_PLANET_DETAIL, on effectue une requête API pour récupérer les details d'une planète.
    case FETCH_PLANET_DETAIL:
      axios
        .get(`${API_BASE_URL}/api/v1/planet/${action.slug}`) // Envoi d'une requête GET avec le slug de la planète.
        .then((response) => {
          // Sauvegarde des détails dans le state avec savePlanetDetail.
          store.dispatch(savePlanetDetail(response.data));
        });
      break;
    // Si l'action ne correspond à aucun des cas gérés, elle est ignorée par ce middleware.
    default:
  }
  // Passe l'action au middleware ou reducer suivant.
  next(action);
};
// Exportation du middleware.
export default planetsMiddleware;
