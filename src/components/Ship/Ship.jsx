import { useEffect, useState } from 'react';

import axios from 'axios';

import ShipCard from './ShipCard';

import './Ship.scss';

const Ship = () => {
  const [ships, setShips] = useState([]);

  const loadShips = () => {
    axios.get('http://localhost:8000/api/v1/ship').then((response) => {
      setShips(response.data);
    });
  };

  useEffect(() => {
    loadShips();
  }, []);

  return (
    <>
      <h1 className="main-title">
        Une gamme de vaisseaux prestigieux à votre service
      </h1>
      <div className="ship-content">
        {ships.map((currentShip) => (
          <ShipCard key={currentShip.id} {...currentShip} />
        ))}
      </div>
    </>
  );
};

export default Ship;
