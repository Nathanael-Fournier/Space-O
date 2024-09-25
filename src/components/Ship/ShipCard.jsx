import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import './Ship.scss';

const ShipCard = ({ picture, name, description, slug }) => {
  return (
    <div className="ship-card">
      <img
        className="ship-picture"
        src={picture}
        alt="Illustration d'un vaisseau"
      />
      <h2 className="ship-name">{name}</h2>
      <p className="ship-description">{description.slice(0, 100)} ...</p>
      <Link to={`/vaisseaux/${slug}`} className="ship-button">
        En savoir plus ...
      </Link>
    </div>
  );
};

ShipCard.propTypes = {
  picture: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  slug: propTypes.string.isRequired,
};

export default ShipCard;
