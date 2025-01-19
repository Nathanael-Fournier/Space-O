// Importation des actions `SAVE_PLANETS` et `SAVE_PLANET_DETAIL` qui permettent de mettre à jour la liste des planètes et les détails d'une planète.
import { SAVE_PLANETS, SAVE_PLANET_DETAIL } from '../actions/planets';

const initialState = {
  planetsList: [], // Tableau vide pour stocker la liste des planètes.
  loadingPlanets: true, // Indicateur pour savoir si la liste des planètes est en train de charger.
  planetDetail: [], // Tableau vide pour stocker les détails d'une planète.
  loadingPlanetDetail: true, // Indicateur pour savoir si les détails de la planète sont en train de charger.
};

// Le reducer qui gère l'état des planètes
const planetsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Si l'action est `SAVE_PLANETS`
    case SAVE_PLANETS:
      return {
        ...state, // Garde l'état actuel
        planetsList: action.planetsAction, // Met à jour la liste des planètes avec les données de l'action
        loadingPlanets: false, // Marque le chargement des planètes comme terminé
      };

    // Si l'action est `SAVE_PLANET_DETAIL`
    case SAVE_PLANET_DETAIL:
      return {
        ...state, // Garde l'état actuel
        planetDetail: action.planetDetailAction, // Met à jour les détails de la planète avec les données de l'action
        loadingPlanetDetail: false, // Marque le chargement des détails de la planète comme terminé
      };

    // Si l'action ne correspond à rien
    default:
      return state;
  }
};

// Export du reducer.
export default planetsReducer;
