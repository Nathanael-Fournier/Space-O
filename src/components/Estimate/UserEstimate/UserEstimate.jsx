import { useEffect, useState } from 'react';

import propTypes from 'prop-types';
import axios from 'axios';

import EachEstimate from './EachEstimate';

import './UserEstimate.scss';

const UserEstimate = ({ userJWT, isLogged }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const loadTrips = () => {
      axios
        .get('http://localhost:8000/api/v1/trip', {
          headers: { Authorization: `Bearer ${userJWT}` },
        })
        .then((response) => {
          setTrips(response.data);
        });
    };
    loadTrips();
  }, [userJWT]);

  return isLogged ? (
    <div className="user-estimate-content">
      <h1 className="user-estimate-title">Mes devis</h1>
      {trips.map((currentTrip) => (
        <EachEstimate key={currentTrip.id} {...currentTrip} />
      ))}
    </div>
  ) : (
    <div className="user-not-logged-content">
      <h1 className="user-not-logged-title">
        Veuillez vous connecter pour accéder à vos devis
      </h1>
    </div>
  );
};

UserEstimate.propTypes = {
  userJWT: propTypes.string.isRequired,
  isLogged: propTypes.bool.isRequired,
};

export default UserEstimate;
