import { useState } from 'react';

import propTypes from 'prop-types';

import axios from 'axios';

import './Estimate.scss';

const Estimate = ({ planets, ships }) => {
  const [travelersInput, setTravelersInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [planetInput, setPlanetInput] = useState('');
  const [shipInput, setShipInput] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/v1/trip', {
      traveler_number: travelersInput,
      departure_date: dateInput,
      planet_id: planetInput,
      ship_id: shipInput,
      // A dynamiser quand la connexion sera dispo
      email: 'nathanael.fournier@oclock.school',
      status: 'En cours de validation',
    });
  };

  return (
    <div className="estimate-content">
      <h1 className="estimate-title">Paré au décollage ?</h1>
      <form className="estimate-form" onSubmit={submitForm}>
        <label className="estimate-label" htmlFor="travelers">
          Nombre de voyageurs
        </label>
        <input
          className="estimate-input"
          id="travelers"
          type="number"
          value={travelersInput}
          onChange={(event) => {
            setTravelersInput(parseInt(event.target.value, 10));
          }}
        />
        <label className="estimate-label" htmlFor="date">
          Date de départ
        </label>
        <input
          className="estimate-input"
          id="date"
          type="date"
          value={dateInput}
          onChange={(event) => {
            setDateInput(event.target.value);
          }}
        />
        <label className="estimate-label" htmlFor="destination">
          Destination{' '}
        </label>
        <select
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
          Vaisseau{' '}
        </label>
        <select
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
  planets: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
  ships: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Estimate;
