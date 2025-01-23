/* eslint-disable react/no-unescaped-entities */
// Link permet de créer des liens de navigation entre les pages, useParams récupère les paramètres de l'URL
import { Link, useParams } from 'react-router-dom';
// useDispatch permet de déclencher des actions Redux, useSelector permet d'extraire des données du store Redux
import { useDispatch, useSelector } from 'react-redux';
// useEffect est utilisé pour effectuer des effets secondaires lors du montage du composant
import { useEffect } from 'react';

// Import de l'action Redux pour récupérer les détails du vaisseau
import { fetchShipDetail } from '../../actions/ships';

// Import du composant Spinner qui affiche un indicateur de chargement
import Spinner from '../Spinner/Spinner';

// Import du fichier de style SCSS pour ce composant
import './ShipDetail.scss';

// Définition du composant ShipDetail
const ShipDetail = () => {
  const dispatch = useDispatch(); // Dispatch pour envoyer des actions Redux
  const shipDetail = useSelector((state) => state.ships.shipDetail); // Sélectionne les détails du vaisseau depuis le store Redux
  const loadingShipDetail = useSelector(
    (state) => state.ships.loadingShipDetail // Sélectionne l'état de chargement des détails du vaisseau
  );
  const { slug } = useParams(); // Récupère le slug (identifiant unique du vaisseau) depuis l'URL

  useEffect(() => {
    dispatch(fetchShipDetail(slug)); // Envoi de l'action pour récupérer les détails du vaisseau en utilisant le slug
  }, [dispatch, slug]); // Re-exécute l'effet si `dispatch` ou `slug` change

  // Si les détails du vaisseau sont en cours de chargement, on affiche un Spinner
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

// Export du composant
export default ShipDetail;
