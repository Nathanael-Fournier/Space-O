/* eslint-disable react/no-unescaped-entities */
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchShipDetail } from '../../actions/ships';

import Spinner from '../Spinner/Spinner';

import './ShipDetail.scss';

const ShipDetail = () => {
  const dispatch = useDispatch();
  const shipDetail = useSelector((state) => state.ships.shipDetail);
  const loadingShipDetail = useSelector(
    (state) => state.ships.loadingShipDetail
  );
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchShipDetail(slug));
  }, [dispatch, slug]);

  if (loadingShipDetail === true) {
    return <Spinner />;
  }

  return (
    <div className="ship-detail-content">
      <div className="ship-detail-title-picture-div">
        <div className="ship-detail-img-div">
          <img
            className="ship-detail-picture"
            src={shipDetail.picture}
            alt="Illustration du vaisseau sélectionné"
          />
        </div>
        <h1 className="ship-detail-main-title">{shipDetail.name}</h1>
      </div>
      <h2 className="ship-detail-secondary-title">
        Présentation du vaisseau :
      </h2>
      <p className="ship-detail-description">{shipDetail.description}</p>
      <h3 className="ship-detail-secondary-title ship-detail-technical">
        Fiche technique :
      </h3>
      <div className="ship-detail-bottom-div">
        <p className="ship-detail-characteristic">
          Pilote :
          <Link
            to={`/pilotes/${shipDetail.pilot.slug}`}
            className="ship-detail-pilot-link"
          >
            {shipDetail.pilot.firstname} {shipDetail.pilot.lastname}
          </Link>
        </p>
        <p className="ship-detail-characteristic">
          Constructeur :
          <span className="ship-detail-information">
            {shipDetail.brand.name}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Lieu de construction :
          <span className="ship-detail-information">
            {shipDetail.brand.country}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Date de fabrication :
          <span className="ship-detail-information">
            {shipDetail.year_of_manufacture.slice(0, 10)}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Catégorie :
          <span className="ship-detail-information">
            {shipDetail.category.name} de {shipDetail.category.classification}
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Vitesse :
          <span className="ship-detail-information">
            {shipDetail.speed} km/h
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Capsules d'urgence :
          <span className="ship-detail-information">
            {shipDetail.emergency_capsule} capsule(s)
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Places assises :
          <span className="ship-detail-information">
            {shipDetail.seating_capacity} place(s)
          </span>
        </p>
        <p className="ship-detail-characteristic">
          Longueur :
          <span className="ship-detail-information">
            {shipDetail.size} mètres
          </span>
        </p>
      </div>
    </div>
  );
};

export default ShipDetail;
