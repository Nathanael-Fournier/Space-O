import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import './Planet.scss';

const PlanetCard = ({ picture, name, description, slug }) => {
  return (
    <div className="planet-card">
      <Link to={`/planetes/${slug}`}>
        <img
          className="planet-picture"
          src={picture}
          alt="Illustration d'une planète"
        />
      </Link>
      <h2 className="planet-name">{name}</h2>
      <p className="planet-description">{description.slice(0, 100)} ...</p>
      <Link to={`/planetes/${slug}`} className="planet-button">
        En savoir plus ...
      </Link>
    </div>
  );
};

PlanetCard.propTypes = {
  picture: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  slug: propTypes.string.isRequired,
};

export default PlanetCard;
