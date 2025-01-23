/* eslint-disable react/no-unescaped-entities */
// Permet de récupèrer les paramètres de l'URL
import { useParams } from 'react-router-dom';
// useDispatch permet de déclencher des actions Redux, useSelector permet d'extraire des données du store Redux
import { useDispatch, useSelector } from 'react-redux';
// useEffect est utilisé pour effectuer des effets secondaires lors du montage du composant
import { useEffect } from 'react';

// Import de l'action Redux pour récupérer les détails de la planète
import { fetchPlanetDetail } from '../../actions/planets';

// Import du composant Spinner qui affiche un indicateur de chargement
import Spinner from '../Spinner/Spinner';

// Import du fichier de style SCSS pour ce composant
import './PlanetDetail.scss';

// Définition du composant PlanetDetail
const PlanetDetail = () => {
  const dispatch = useDispatch(); // Dispatch pour envoyer des actions Redux
  const planetDetail = useSelector((state) => state.planets.planetDetail); // Sélectionne les détails de la planète depuis le store Redux
  const loadingPlanetDetail = useSelector(
    (state) => state.planets.loadingPlanetDetail // Sélectionne l'état de chargement des détails de la planète
  );
  const { slug } = useParams(); // Récupère le slug (identifiant unique de la planète) depuis l'URL

  useEffect(() => {
    dispatch(fetchPlanetDetail(slug)); // Envoi de l'action pour récupérer les détails de la planète en utilisant le slug
  }, [dispatch, slug]); // Re-exécute l'effet si `dispatch` ou `slug` change

  // Si les détails de la planète sont en cours de chargement, on affiche un Spinner
  if (loadingPlanetDetail === true) {
    return <Spinner />;
  }

  return (
    <div className="planet-detail-content">
      <div className="planet-detail-title-picture-div">
        <img
          className="planet-detail-picture"
          src={planetDetail.picture}
          alt="Illustration de la planète sélectionnée"
        />
        <h1 className="planet-detail-main-title">{planetDetail.name}</h1>
      </div>
      <h2 className="planet-detail-secondary-title">
        Présentation de la planète :
      </h2>
      <p className="planet-detail-description">{planetDetail.description}</p>
      <h3 className="planet-detail-secondary-title planet-detail-technical">
        Informations complémentaires :
      </h3>
      <div className="planet-detail-bottom-div">
        <p className="planet-detail-characteristic">
          Envergure :
          <span className="planet-detail-information">
            {planetDetail.size} KM de diamètre
          </span>
        </p>
        {planetDetail.name !== 'Soleil' && (
          <p className="planet-detail-characteristic">
            Distance du soleil :
            <span className="planet-detail-information">
              {planetDetail.sun_distance} millions de KM
            </span>
          </p>
        )}
        <p className="planet-detail-characteristic">
          Température moyenne :
          <span className="planet-detail-information">
            {planetDetail.temperature} °C
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Composition atmosphérique :
          <span className="planet-detail-information">
            {planetDetail.composition}
          </span>
        </p>
        <p className="planet-detail-characteristic">
          Souveraineté :
          <span className="planet-detail-information">
            {planetDetail.faction.name}
          </span>
        </p>
      </div>
    </div>
  );
};

// Export du composant
export default PlanetDetail;
