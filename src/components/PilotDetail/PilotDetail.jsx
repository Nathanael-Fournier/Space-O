/* eslint-disable react/no-unescaped-entities */
// Permet de récupèrer les paramètres de l'URL
import { useParams } from 'react-router-dom';
// useDispatch permet de déclencher des actions Redux, useSelector permet d'extraire des données du store Redux
import { useDispatch, useSelector } from 'react-redux';
// useEffect est utilisé pour effectuer des effets secondaires lors du montage du composant
import { useEffect } from 'react';

// Import de l'action Redux pour récupérer les détails du pilote
import { fetchPilotDetail } from '../../actions/pilots';

// Import du composant Spinner qui affiche un indicateur de chargement
import Spinner from '../Spinner/Spinner';

// Import du fichier de style SCSS pour ce composant
import './PilotDetail.scss';

// Définition du composant PilotDetail
const PilotDetail = () => {
  const dispatch = useDispatch(); // Dispatch pour envoyer des actions Redux
  const pilotDetail = useSelector((state) => state.pilots.pilotDetail); // Sélectionne les détails du pilote depuis le store Redux
  const loadingPilotDetail = useSelector(
    (state) => state.pilots.loadingPilotDetail // Sélectionne l'état de chargement des détails du pilote
  );
  const { slug } = useParams(); // Récupère le slug (identifiant unique du pilote) depuis l'URL

  useEffect(() => {
    dispatch(fetchPilotDetail(slug)); // Envoi de l'action pour récupérer les détails du pilote en utilisant le slug
  }, [dispatch, slug]); // Re-exécute l'effet si `dispatch` ou `slug` change

  // Si les détails du pilote sont en cours de chargement, on affiche un Spinner
  if (loadingPilotDetail === true) {
    return <Spinner />;
  }

  return (
    <div className="pilot-detail-content">
      <div className="pilot-detail-title-picture-div">
        <img
          className="pilot-detail-picture"
          src={pilotDetail.picture}
          alt="Illustration du pilote sélectionné"
        />
        <h1 className="pilot-detail-main-title">
          {pilotDetail.firstname} {pilotDetail.lastname}
        </h1>
      </div>
      <h2 className="pilot-detail-secondary-title">Présentation du pilote :</h2>
      <p className="pilot-detail-description">{pilotDetail.description}</p>
      <div className="pilot-detail-bottom-div">
        <p className="pilot-detail-characteristic">
          Age :
          <span className="pilot-detail-information">
            {pilotDetail.age} ans
          </span>
        </p>
        <p className="pilot-detail-characteristic">
          Ancienneté :
          <span className="pilot-detail-information">
            {pilotDetail.experience} année(s) d'expérience
          </span>
        </p>
      </div>
    </div>
  );
};

// Export du composant
export default PilotDetail;
