import propTypes from 'prop-types';

import './UserEstimate.scss';

const EachEstimate = ({
  departure_date,
  status,
  traveler_number,
  planet,
  ship,
}) => {
  return (
    <div className="each-estimate-content">
      <p>Date de départ : {departure_date.slice(0, 10)}</p>
      <p>{status}</p>
      <p>Pour {traveler_number} voyageur(s)</p>
      <p>Destination : {planet.name}</p>
      <p>Vaisseau : {ship.name}</p>
    </div>
  );
};

EachEstimate.propTypes = {
  departure_date: propTypes.string.isRequired,
  status: propTypes.string.isRequired,
  traveler_number: propTypes.number.isRequired,
  planet: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
  ship: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default EachEstimate;
