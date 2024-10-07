/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import Spinner from '../Spinner/Spinner';

import './ShipDetail.scss';

const ShipDetail = ({ ships, loadingShips }) => {
  const { slug } = useParams();
  const shipToDisplay = ships.find((currentShip) => currentShip.slug === slug);

  if (loadingShips === true) {
    return <Spinner />;
  }

  return (
    <div className="ship-detail-content">
      <div className="ship-detail-title-picture-div">
        <div className="ship-detail-img-div">
          <img
            className="ship-detail-picture"
            src={shipToDisplay.picture}
            alt="Illustration du vaisseau sélectionné"
          />
        </div>
        <h1 className="ship-detail-main-title">{shipToDisplay.name}</h1>
      </div>
      <h2 className="ship-detail-secondary-title">
        Présentation du vaisseau :
      </h2>
      <p className="ship-detail-description">{shipToDisplay.description}</p>
      <h3 className="ship-detail-secondary-title ship-detail-technical">
        Fiche technique :
      </h3>
      <div className="ship-detail-bottom-div">
        <p className="ship-detail-characteristic">
          Pilote :
          <Link
            to={`/pilotes/${shipToDisplay.pilot.slug}`}
            className="ship-detail-pilot-link"
          >
            {shipToDisplay.pilot.firstname} {shipToDisplay.pilot.lastname}
          </Link>
        </p>
        <p className="ship-detail-characteristic">
          Constructeur :
          <span className="ship-detail-information">
            {shipToDisplay.brand.name}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Lieu de construction :
          <span className="ship-detail-information">
            {shipToDisplay.brand.country}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Date de fabrication :
          <span className="ship-detail-information">
            {shipToDisplay.year_of_manufacture.slice(0, 10)}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Catégorie :
          <span className="ship-detail-information">
            {shipToDisplay.category.name} de{' '}
            {shipToDisplay.category.classification}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Vitesse :
          <span className="ship-detail-information">
            {shipToDisplay.speed} km/h
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Capsules d'urgence :
          <span className="ship-detail-information">
            {shipToDisplay.emergency_capsule} capsule(s)
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Places assises :
          <span className="ship-detail-information">
            {shipToDisplay.seating_capacity} place(s)
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Longueur :
          <span className="ship-detail-information">
            {shipToDisplay.size} mètres
          </span>
        </p>
      </div>
    </div>
  );
};

ShipDetail.propTypes = {
  loadingShips: PropTypes.bool.isRequired,
  ships: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      seating_capacity: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      emergency_capsule: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      year_of_manufacture: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      brand: PropTypes.shape({
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }),
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        classification: PropTypes.string.isRequired,
      }),
      pilot: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default ShipDetail;
