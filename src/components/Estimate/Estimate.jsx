import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import propTypes from 'prop-types';

import axios from 'axios';

import { API_BASE_URL } from '../../utils/config';

import { fetchPlanets } from '../../actions/planets';
import { fetchShips } from '../../actions/ships';

import FormSubmit from './FormSubmit/FormSubmit';

import './Estimate.scss';

const Estimate = ({ isLogged, userEmail }) => {
  // Utilisation du dispatch
  const dispatch = useDispatch();
  // Le state des inputs / selects
  const [travelersInput, setTravelersInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [planetInput, setPlanetInput] = useState('');
  const [shipInput, setShipInput] = useState('');
  // Le state du formulaire soumis ou non
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  // Récupération des planètes
  const planets = useSelector((state) => state.planets.planetsList);
  const ships = useSelector((state) => state.ships.shipsList);

  // Créer le devis en BDD
  const createTrip = () => {
    axios.post(`${API_BASE_URL}/api/v1/trip`, {
      traveler_number: travelersInput,
      departure_date: dateInput,
      planet_id: planetInput,
      ship_id: shipInput,
      email: userEmail,
    });
  };

  // Réinitialise le state des input / select et redirige vers FormSubmit
  const submitForm = (event) => {
    event.preventDefault();
    createTrip();
    setTravelersInput('');
    setDateInput('');
    setPlanetInput('');
    setShipInput('');
    setFormIsSubmit(true);
  };

  useEffect(() => {
    if (!planets || planets.length === 0) {
      dispatch(fetchPlanets());
    }
  }, [dispatch, planets]);

  useEffect(() => {
    if (!ships || ships.length === 0) {
      dispatch(fetchShips());
    }
  }, [dispatch, ships]);

  // Récupère l'url
  const location = useLocation();

  // Réinitialise formIsSubmit à false quand l'url change
  useEffect(() => {
    setFormIsSubmit(false);
  }, [location]);

  // Si non connecté -> renvoi un visuel pour l'utilisateur
  if (!isLogged) {
    return (
      <div className="not-logged-content">
        <h1 className="not-logged-title">
          Veuillez vous connecter ou créer un compte pour obtenir un devis
        </h1>
      </div>
    );
  }

  // Si le form est soumis -> renvoi vers FormSubmit
  if (formIsSubmit) {
    return <FormSubmit setFormIsSubmit={setFormIsSubmit} />;
  }

  return (
    <div className="estimate-content">
      <h1 className="estimate-title">Paré au décollage ?</h1>
      <form className="estimate-form" onSubmit={submitForm}>
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
        <button className="estimate-button" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
};

Estimate.propTypes = {
  isLogged: propTypes.bool.isRequired,
  userEmail: propTypes.string.isRequired,
};

export default Estimate;
