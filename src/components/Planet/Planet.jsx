import { useEffect, useState } from 'react';

import axios from 'axios';

import PlanetCard from './PlanetCard';

import './Planet.scss';

const Planet = () => {
  const [planets, setPlanets] = useState([]);

  const loadPlanets = () => {
    axios.get('http://localhost:8000/api/v1/planet').then((response) => {
      setPlanets(response.data);
    });
  };

  useEffect(() => {
    loadPlanets();
  }, []);

  return (
    <>
      <h1 className="planet-main-title">
        Explorez des mondes fascinants au-delà des étoiles
      </h1>
      <div className="planet-content">
        Je suis le composant Planet
        {planets.map((currentPlanet) => (
          <PlanetCard key={currentPlanet.id} {...currentPlanet} />
        ))}
      </div>
    </>
  );
};

export default Planet;
