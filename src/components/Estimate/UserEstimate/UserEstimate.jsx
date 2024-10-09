import { useEffect, useState } from 'react';

import propTypes from 'prop-types';

import axios from 'axios';

import './UserEstimate.scss';
import EachEstimate from './EachEstimate';

const UserEstimate = ({ userJWT }) => {
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

  return (
    <div className="user-estimate-content">
      {trips.map((currentTrip) => (
        <EachEstimate key={currentTrip.id} {...currentTrip} />
      ))}
    </div>
  );
};

UserEstimate.propTypes = {
  userJWT: propTypes.string.isRequired,
};

export default UserEstimate;
