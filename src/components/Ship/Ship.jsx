import propTypes from 'prop-types';

import ShipCard from './ShipCard';

import './Ship.scss';

const Ship = ({ ships }) => {
  return (
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
};

export default Ship;
