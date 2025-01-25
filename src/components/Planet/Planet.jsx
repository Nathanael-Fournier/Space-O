// Import de useDispatch pour dispatcher des actions et useSelector pour lire l'état du store
import { useDispatch, useSelector } from 'react-redux';
// Import du hook useEffect pour exécuter du code après le rendu du composant.
import { useEffect } from 'react';

// Import de l'action fetchPlanets qui récupère la liste des planètes depuis l'API.
import { fetchPlanets } from '../../actions/planets';

// Import d'un composant Spinner pour afficher un chargement pendant que les données sont récupérées.
import Spinner from '../Spinner/Spinner';
// Import du composant PlanetCard pour afficher les informations de chaque planète.
import PlanetCard from './PlanetCard';

// Import du fichier de styles spécifiques au composant Planet.
import './Planet.scss';

// Définition du composant Planet qui affiche la liste des planètes.
const Planet = () => {
  // Le hook useDispatch est utilisé pour obtenir la fonction dispatch, qui permet d'envoyer des actions.
  const dispatch = useDispatch();

  const planets = useSelector((state) => state.planets.planetsList); // On récupère la liste des planètes depuis le store.
  const loadingPlanets = useSelector((state) => state.planets.loadingPlanets); // On récupère l'état de chargement des planètes.

  useEffect(() => {
    // Si la liste des planètes est vide ou inexistante.
    if (!planets || planets.length === 0) {
      // On dispatch l'action fetchPlanets pour charger la liste des planètes.
      dispatch(fetchPlanets());
    }
  }, [dispatch, planets]); // L'effet sera exécuté lorsque l'une de ces variables change.

  // Si l'état de chargement des planètes est true, on affiche le Spinner, sinon on affiche la liste des planètes.
  return loadingPlanets ? (
    <Spinner /> // Affiche le Spinner si les planètes sont en cours de chargement.
  ) : (
    <>
      <h1 className="planet-main-title">
        Explorez des mondes fascinants au-delà des étoiles
      </h1>
      <div className="planet-content">
        {/* On map chaque planète de la liste planets et on passe ses props au composant PlanetCard. */}
        {planets.map((currentPlanet) => (
          <PlanetCard key={currentPlanet.id} {...currentPlanet} />
        ))}
      </div>
    </>
  );
};

// Export du composant
export default Planet;
