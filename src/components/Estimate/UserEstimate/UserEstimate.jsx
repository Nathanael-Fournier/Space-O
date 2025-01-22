/* eslint-disable react/no-unescaped-entities */
// Importation des hooks React nécessaires
import { useEffect, useState } from 'react';

// Importation de PropTypes pour valider les types des props
import propTypes from 'prop-types';

// Importation d'Axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Importation de la constante contenant l'URL de base de l'API
import { API_BASE_URL } from '../../../utils/config';

// Importation du composant `EachEstimate` pour afficher chaque devis
import EachEstimate from './EachEstimate';

// Importation des styles spécifiques à ce composant
import './UserEstimate.scss';

// Définition du composant `UserEstimate`
const UserEstimate = ({ userJWT, isLogged }) => {
  // État local pour stocker la liste des voyages/devis
  const [trips, setTrips] = useState([]);

  // Chargement des devis lorsque le composant est monté ou que le token JWT change
  useEffect(() => {
    const loadTrips = () => {
      axios
        .get(`${API_BASE_URL}/api/v1/trip`, {
          headers: { Authorization: `Bearer ${userJWT}` }, // Ajout du token JWT dans les en-têtes de la requête
        })
        .then((response) => {
          setTrips(response.data); // Mise à jour de l'état avec les données reçues
        });
    };

    loadTrips(); // Appel de la fonction pour charger les devis
  }, [userJWT]); // Déclenchement de l'effet uniquement si `userJWT` change

  return isLogged ? (
    <div className="user-estimate-content">
      {/* Si l'utilisateur n'a pas encore de devis */}
      {trips.length === 0 ? (
        <h1 className="user-estimate-title">Vous n'avez pas encore de devis</h1>
      ) : (
        <>
          {/* Titre principal lorsqu'il y a des devis */}
          <h1 className="user-estimate-title">Mes devis</h1>
          {/* Boucle sur les voyages pour afficher chaque devis avec le composant `EachEstimate` */}
          {trips.map((currentTrip) => (
            <EachEstimate key={currentTrip.id} {...currentTrip} />
          ))}
        </>
      )}
    </div>
  ) : (
    <div className="user-not-logged-content">
      {/* Message affiché si l'utilisateur n'est pas connecté */}
      <h1 className="user-not-logged-title">
        Veuillez vous connecter pour accéder à vos devis
      </h1>
    </div>
  );
};

UserEstimate.propTypes = {
  // Token JWT de l'utilisateur pour l'authentification
  userJWT: propTypes.string.isRequired,
  // État de connexion de l'utilisateur
  isLogged: propTypes.bool.isRequired,
};

// Exportation du composant pour utilisation dans d'autres parties de l'application
export default UserEstimate;
