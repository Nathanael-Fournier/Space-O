// Importation des actions `SAVE_SHIPS` et `SAVE_SHIP_DETAIL` qui permettent de mettre à jour la liste des vaisseaux et les détails d'un vaisseau.
import { SAVE_SHIPS, SAVE_SHIP_DETAIL } from '../actions/ships';

const initialState = {
  shipsList: [], // Tableau vide pour stocker la liste des vaisseaux.
  loadingShips: true, // Indicateur pour savoir si la liste des vaisseaux est en train de charger.
  shipDetail: [], // Tableau vide pour stocker les détails d'un vaisseau.
  loadingShipDetail: true, // Indicateur pour savoir si les détails du vaisseau sont en train de charger.
};

// Le reducer qui gère l'état des vaisseaux
const shipsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Si l'action est `SAVE_SHIPS`
    case SAVE_SHIPS:
      return {
        ...state, // Garde l'état actuel
        shipsList: action.shipsAction, // Met à jour la liste des vaisseaux avec les données de l'action
        loadingShips: false, // Marque le chargement des vaisseaux comme terminé
      };

    // Si l'action est `SAVE_SHIP_DETAIL`
    case SAVE_SHIP_DETAIL:
      return {
        ...state, // Garde l'état actuel
        shipDetail: action.shipDetailAction, // Met à jour les détails du vaisseau avec les données de l'action
        loadingShipDetail: false, // Marque le chargement des détails du vaisseau comme terminé
      };

    // Si l'action ne correspond à rien
    default:
      return state;
  }
};

// Export du reducer.
export default shipsReducer;
