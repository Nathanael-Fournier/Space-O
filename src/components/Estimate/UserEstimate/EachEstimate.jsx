import propTypes from 'prop-types';

import './UserEstimate.scss';

const EachEstimate = ({
  id,
  departure_date,
  status,
  traveler_number,
  planet,
  ship,
}) => {
  return (
    <div className="each-estimate-content">
      <h2 className="each-estimate-title">
        Devis<span className="each-estimate-title-information">N° {id}</span>
      </h2>
      <p className="each-estimate-characteristic">
        Destination :{' '}
        <span className="each-estimate-information">{planet.name}</span>
      </p>
      <p className="each-estimate-characteristic">
        Vaisseau :{' '}
        <span className="each-estimate-information">{ship.name}</span>
      </p>
      <p className="each-estimate-characteristic">
        Date de départ :
        <span className="each-estimate-information">
          {departure_date.slice(0, 10)}
        </span>
      </p>
      <p className="each-estimate-characteristic">
        Pour
        <span className="each-estimate-information">{traveler_number} </span>
        voyageur(s)
      </p>
      <p className="each-estimate-status">{status}</p>
    </div>
  );
};

EachEstimate.propTypes = {
  id: propTypes.number.isRequired,
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
