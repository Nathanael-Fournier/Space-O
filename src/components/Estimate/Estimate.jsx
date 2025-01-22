// Importation des hooks nécessaires
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Validation des props avec PropTypes
import propTypes from 'prop-types';

// Importation d'Axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Importation de la constante contenant l'URL de base de l'API
import { API_BASE_URL } from '../../utils/config';

// Actions Redux pour récupérer les données des planètes et des vaisseaux
import { fetchPlanets } from '../../actions/planets';
import { fetchShips } from '../../actions/ships';

// Composant FormSubmit pour afficher le retour après la soumission du formulaire
import FormSubmit from './FormSubmit/FormSubmit';

// Importation des styles SCSS
import './Estimate.scss';

// Composant principal `Estimate` qui gère la création de devis
const Estimate = ({ isLogged, userEmail }) => {
  // Hook Redux pour envoyer des actions au store
  const dispatch = useDispatch();

  // États locaux pour gérer les champs du formulaire
  const [travelersInput, setTravelersInput] = useState(''); // Nombre de voyageurs
  const [dateInput, setDateInput] = useState(''); // Date de départ
  const [planetInput, setPlanetInput] = useState(''); // ID de la planète choisie
  const [shipInput, setShipInput] = useState(''); // ID du vaisseau choisi
  const [formIsSubmit, setFormIsSubmit] = useState(false); // État de soumission du formulaire

  // Accès aux données des planètes et des vaisseaux depuis le store Redux
  const planets = useSelector((state) => state.planets.planetsList);
  const ships = useSelector((state) => state.ships.shipsList);

  // Fonction pour envoyer les données du formulaire à l'API et créer un devis
  const createTrip = () => {
    axios.post(`${API_BASE_URL}/api/v1/trip`, {
      traveler_number: travelersInput,
      departure_date: dateInput,
      planet_id: planetInput,
      ship_id: shipInput,
      email: userEmail,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const submitForm = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    createTrip(); // Appelle la fonction pour créer un devis
    // Réinitialise les champs du formulaire
    setTravelersInput('');
    setDateInput('');
    setPlanetInput('');
    setShipInput('');
    setFormIsSubmit(true); // Passe l'état du formulaire à "soumis"
  };

  // Récupération des données des planètes si elles ne sont pas déjà chargées
  useEffect(() => {
    if (!planets || planets.length === 0) {
      dispatch(fetchPlanets());
    }
  }, [dispatch, planets]);

  // Récupération des données des vaisseaux si elles ne sont pas déjà chargées
  useEffect(() => {
    if (!ships || ships.length === 0) {
      dispatch(fetchShips());
    }
  }, [dispatch, ships]);

  // Récupère l'URL actuelle pour détecter les changements de page
  const location = useLocation();

  // Réinitialise l'état `formIsSubmit` à false lorsqu'on change de page
  useEffect(() => {
    setFormIsSubmit(false);
  }, [location]);

  // Si l'utilisateur n'est pas connecté, affiche un message d'invitation à se connecter
  if (!isLogged) {
    return (
      <div className="not-logged-content">
        <h1 className="not-logged-title">
          Veuillez vous connecter ou créer un compte pour obtenir un devis
        </h1>
      </div>
    );
  }

  // Si le formulaire a été soumis, affiche le composant `FormSubmit`
  if (formIsSubmit) {
    return <FormSubmit setFormIsSubmit={setFormIsSubmit} />;
  }

  // Rendu principal du composant pour afficher le formulaire
  return (
    <div className="estimate-content">
      <h1 className="estimate-title">Paré au décollage ?</h1>
      <form className="estimate-form" onSubmit={submitForm}>
        {/* Champ pour le nombre de voyageurs */}
        <label className="estimate-label" htmlFor="travelers">
          Nombre de voyageurs
        </label>
        <input
          required
          className="estimate-input"
          id="travelers"
          type="number"
          placeholder="ex : 1, 2, 5.."
          value={travelersInput}
          onChange={(event) => {
            setTravelersInput(parseInt(event.target.value, 10));
          }}
        />
        {/* Champ pour la date de départ */}
        <label className="estimate-label" htmlFor="date">
          Date de départ
        </label>
        <input
          required
          className="estimate-input"
          id="date"
          type="date"
          value={dateInput}
          onChange={(event) => {
            setDateInput(event.target.value);
          }}
        />
        {/* Sélecteur pour la destination */}
        <label className="estimate-label" htmlFor="destination">
          Destination
        </label>
        <select
          required
          className="estimate-input"
          id="destination"
          value={planetInput}
          onChange={(event) => {
            setPlanetInput(event.target.value);
          }}
        >
          <option value="">Veuillez choisir une destination</option>
          {planets.map((currentPlanet) => (
            <option key={currentPlanet.id} value={currentPlanet.id}>
              {currentPlanet.name}
            </option>
          ))}
        </select>
        {/* Sélecteur pour le vaisseau */}
        <label className="estimate-label" htmlFor="ships">
          Vaisseau
        </label>
        <select
          required
          className="estimate-input"
          id="ships"
          value={shipInput}
          onChange={(event) => {
            setShipInput(event.target.value);
          }}
        >
          <option value="">Veuillez choisir un vaisseau</option>
          {ships.map((currentShip) => (
            <option key={currentShip.id} value={currentShip.id}>
              {currentShip.name}
            </option>
          ))}
        </select>
        {/* Bouton de soumission du formulaire */}
        <button className="estimate-button" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

// Validation des props pour garantir leur type
Estimate.propTypes = {
  isLogged: propTypes.bool.isRequired, // `isLogged` doit être un booléen
  userEmail: propTypes.string.isRequired, // `userEmail` doit être une chaîne de caractères
};

// Exportation du composant
export default Estimate;
