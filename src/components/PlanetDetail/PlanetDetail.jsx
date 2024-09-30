/* eslint-disable react/no-unescaped-entities */
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Spinner from '../Spinner/Spinner';

import './PlanetDetail.scss';

const PlanetDetail = ({ planets, loadingPlanets }) => {
  const { slug } = useParams();
  const planetToDisplay = planets.find(
    (currentPlanet) => currentPlanet.slug === slug
  );

  if (loadingPlanets === true) {
    return <Spinner />;
  }

  return (
    <div className="planet-detail-content">
      <div className="planet-detail-title-picture-div">
        <img
          className="planet-detail-picture"
          src={planetToDisplay.picture}
          alt="Illustration de la planète sélectionnée"
        />
        <h1 className="planet-detail-main-title">{planetToDisplay.name}</h1>
      </div>
      <h2 className="planet-detail-secondary-title">
        Présentation de la planète :
      </h2>
      <p className="planet-detail-description">{planetToDisplay.description}</p>
      <h3 className="planet-detail-secondary-title planet-detail-technical">
        Informations complémentaires :
      </h3>
      <div className="planet-detail-bottom-div">
        <p className="planet-detail-characteristic">
          Envergure :
          <span className="planet-detail-information">
            {planetToDisplay.size} KM de diamètre
          </span>
        </p>
        {planetToDisplay.name !== 'Soleil' && (
          <p className="planet-detail-characteristic">
            Distance du soleil :
            <span className="planet-detail-information">
              {planetToDisplay.sun_distance} millions de KM
            </span>
          </p>
        )}
        <p className="planet-detail-characteristic">
          Température moyenne :
          <span className="planet-detail-information">
            {planetToDisplay.temperature} °C
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Composition atmosphérique :
          <span className="planet-detail-information">
            {planetToDisplay.composition}
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Souveraineté :
          <span className="planet-detail-information">
            {planetToDisplay.faction.name}
          </span>
        </p>
      </div>
    </div>
  );
};

PlanetDetail.propTypes = {
  loadingPlanets: PropTypes.bool.isRequired,
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sun_distance: PropTypes.number.isRequired,
      composition: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      temperature: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      faction: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default PlanetDetail;
