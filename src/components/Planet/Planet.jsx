import { useEffect } from 'react';

import propTypes from 'prop-types';
import axios from 'axios';

import { API_BASE_URL } from '../../utils/config';

import Spinner from '../Spinner/Spinner';
import PlanetCard from './PlanetCard';

import './Planet.scss';

const Planet = ({ planets, setPlanets, loadingPlanets, setLoadingPlanets }) => {
  useEffect(() => {
    const loadPlanets = () => {
      axios
        .get(`${API_BASE_URL}/api/v1/planet`)
        .then((response) => {
          setPlanets(response.data);
        })
        .finally(() => {
          setLoadingPlanets(false);
        });
    };

    loadPlanets();
  }, [setPlanets, setLoadingPlanets]);

  return loadingPlanets ? (
    <Spinner />
  ) : (
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
  setPlanets: propTypes.func.isRequired,
  loadingPlanets: propTypes.bool.isRequired,
  setLoadingPlanets: propTypes.func.isRequired,
};

export default Planet;
