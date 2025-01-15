import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchShips } from '../../actions/ships';

import Spinner from '../Spinner/Spinner';
import ShipCard from './ShipCard';

import './Ship.scss';

const Ship = () => {
  const dispatch = useDispatch();
  const ships = useSelector((state) => state.ships.shipsList);
  const loadingShips = useSelector((state) => state.ships.loadingShips);

  useEffect(() => {
    if (!ships || ships.length === 0) {
      dispatch(fetchShips());
    }
  }, [dispatch, ships]);

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

export default Ship;
