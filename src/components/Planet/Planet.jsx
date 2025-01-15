import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchPlanets } from '../../actions/planets';

import Spinner from '../Spinner/Spinner';
import PlanetCard from './PlanetCard';

import './Planet.scss';

const Planet = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planets.planetsList);
  const loadingPlanets = useSelector((state) => state.planets.loadingPlanets);

  useEffect(() => {
    if (!planets || planets.length === 0) {
      dispatch(fetchPlanets());
    }
  }, [dispatch, planets]);

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

export default Planet;
