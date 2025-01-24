// Import de Link pour créer un lien vers une autre page
import { Link } from 'react-router-dom';

// Import de propTypes pour valider les types des props
import propTypes from 'prop-types';

// Import des styles spécifiques au composant
import './UserLogged.scss';

// Composant UserLogged : affiche des actions disponibles pour un utilisateur connecté
const UserLogged = ({
  setIsLogged, // Fonction pour modifier l'état de connexion de l'utilisateur
  setSettingsIsOpen, // Fonction pour gérer l'état d'ouverture des paramètres
  setUserJWT, // Fonction pour réinitialiser le token JWT de l'utilisateur
  setUserEmail, // Fonction pour réinitialiser l'email de l'utilisateur
}) => {
  // Fonction déclenchée lors de la déconnexion
  const handleLogout = () => {
    setIsLogged(false); // L'utilisateur n'est plus connecté
    setSettingsIsOpen(false); // Les paramètres sont fermés
    setUserJWT(''); // Le token JWT est effacé
    setUserEmail(''); // L'email de l'utilisateur est effacé
  };

  return (
    <div className="user-logged-content">
      {/* Lien vers la page "Mes devis" */}
      <Link to="/mes-devis" className="user-logged-estimate-button">
        Mes devis
      </Link>

      {/* Bouton pour se déconnecter */}
      <button
        className="user-logged-logout-button"
        type="button"
        onClick={handleLogout}
      >
        Me déconnecter
      </button>
    </div>
  );
};

// Validation des props transmises au composant
UserLogged.propTypes = {
  setIsLogged: propTypes.func.isRequired, // Fonction requise pour gérer l'état de connexion
  setSettingsIsOpen: propTypes.func.isRequired, // Fonction requise pour gérer l'ouverture des paramètres
  setUserJWT: propTypes.func.isRequired, // Fonction requise pour réinitialiser le token JWT
  setUserEmail: propTypes.func.isRequired, // Fonction requise pour réinitialiser l'email
};

// Export du composant
export default UserLogged;
