// Import des hooks 'useDispatch' et 'useSelector' pour accéder au store Redux et dispatcher des actions.
import { useDispatch, useSelector } from 'react-redux';
// Import du hook 'useEffect' pour effectuer une action après le rendu du composant.
import { useEffect } from 'react';

// Import de l'action fetchShips pour récupérer la liste des vaisseaux depuis l'API.
import { fetchShips } from '../../actions/ships';

// Import du composant Spinner pour afficher un indicateur de chargement pendant la récupération des données.
import Spinner from '../Spinner/Spinner';

// Import du composant ShipCard pour afficher les détails de chaque vaisseau.
import ShipCard from './ShipCard';

// Import des styles spécifiques au composant Ship.
import './Ship.scss';

// Définition du composant Ship.
const Ship = () => {
  // Utilisation de useDispatch pour pouvoir dispatcher des actions Redux.
  const dispatch = useDispatch();

  // Récupération des données des vaisseaux dans le store.
  const ships = useSelector((state) => state.ships.shipsList);
  // Récupération de l'état de chargement des données des vaisseaux.
  const loadingShips = useSelector((state) => state.ships.loadingShips);

  // Utilisation de useEffect pour déclencher le fetch des vaisseaux.
  useEffect(() => {
    // Si la liste des vaisseaux est vide, on déclenche l'action fetchShips.
    if (!ships || ships.length === 0) {
      dispatch(fetchShips());
    }
  }, [dispatch, ships]); // Dépendances du hook useEffect : dispatch et ships.

  return loadingShips ? (
    // Si les données des vaisseaux sont en cours de chargement, on affiche le Spinner.
    <Spinner />
  ) : (
    <>
      {/* Affiche le titre principal du composant */}
      <h1 className="ship-main-title">
        Une gamme de vaisseaux prestigieux à votre service
      </h1>
      {/* Conteneur pour la liste des vaisseaux */}
      <div className="ship-content">
        {/* Boucle sur la liste des vaisseaux et rend un composant ShipCard pour chaque vaisseau */}
        {ships.map((currentShip) => (
          <ShipCard key={currentShip.id} {...currentShip} /> // On passe les propriétés du vaisseau.
        ))}
      </div>
    </>
  );
};

// Export du composant.
export default Ship;
