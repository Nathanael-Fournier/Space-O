import propTypes from 'prop-types';

import PlanetCard from './PlanetCard';

import './Planet.scss';

const Planet = ({ planets }) => {
  return (
    <>
      <h1 className="planet-main-title">
        Explorez des mondes fascinants au-delà des étoiles
      </h1>
      <div className="planet-content">
        {planets.map((currentPlanet) => (
          <PlanetCard key={currentPlanet.id} {...currentPlanet} />
        ))}
      </div>
    </>
  );
};

Planet.propTypes = {
  planets: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Planet;
