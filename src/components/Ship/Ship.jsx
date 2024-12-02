import { useEffect } from 'react';

import propTypes from 'prop-types';
import axios from 'axios';

import { API_BASE_URL } from '../../utils/config';

import Spinner from '../Spinner/Spinner';
import ShipCard from './ShipCard';

import './Ship.scss';

const Ship = ({ ships, setShips, loadingShips, setLoadingShips }) => {
  useEffect(() => {
    const loadShips = () => {
      const savedShips = sessionStorage.getItem('ships');
      if (savedShips) {
        setShips(JSON.parse(savedShips));
        setLoadingShips(false);
      } else {
        axios
          .get(`${API_BASE_URL}/api/v1/ship`)
          .then((response) => {
            setShips(response.data);
            sessionStorage.setItem('ships', JSON.stringify(response.data));
          })
          .finally(() => {
            setLoadingShips(false);
          });
      }
    };

    loadShips();
  }, [setShips, setLoadingShips]);

  return loadingShips ? (
    <Spinner />
  ) : (
    <>
      <h1 className="ship-main-title">
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

Ship.propTypes = {
  ships: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ).isRequired,
  setShips: propTypes.func.isRequired,
  loadingShips: propTypes.bool.isRequired,
  setLoadingShips: propTypes.func.isRequired,
};

export default Ship;
