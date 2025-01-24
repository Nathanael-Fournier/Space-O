// Importation du hook useState pour gérer les états locaux
import { useState } from 'react';

// Importation pour valider les types des props
import propTypes from 'prop-types';
// Bibliothèque pour effectuer des requêtes HTTP
import axios from 'axios';

// URL de base pour l'API (configurée dans un fichier utilitaire)
import { API_BASE_URL } from '../../../utils/config';

// Importation des styles spécifiques au composant LoginForm
import './LoginForm.scss';

// Composant LoginForm : Formulaire de connexion
const LoginForm = ({
  setIsLogged, // Fonction pour mettre à jour l'état de connexion
  setSettingsIsOpen, // Fonction pour fermer le menu des paramètres après connexion
  setLoginFormIsOpen, // Fonction pour fermer le formulaire de connexion
  setCreateFormIsOpen, // Fonction pour ouvrir le formulaire de création de compte
  setUserJWT, // Fonction pour stocker le token JWT après connexion
  setUserEmail, // Fonction pour stocker l'email de l'utilisateur connecté
}) => {
  const [loginEmailValue, setLoginEmailValue] = useState(''); // Email de l'utilisateur
  const [loginPasswordValue, setLoginPasswordValue] = useState(''); // Mot de passe de l'utilisateur

  // Fonction pour envoyer les identifiants de connexion et enregistrer le token
  const saveUserToken = () => {
    axios
      .post(`${API_BASE_URL}/api/login_check`, {
        username: loginEmailValue, // L'API attend "username" pour l'email
        password: loginPasswordValue, // Mot de passe
      })
      .then((response) => {
        // Réponse réussie : enregistrement du token et de l'email, et mise à jour de l'état de connexion
        setUserJWT(response.data.token); // Stocke le JWT
        setUserEmail(loginEmailValue); // Stocke l'email de l'utilisateur
        setIsLogged(true); // Passe l'état isLogged à true (utilisateur connecté)
        setSettingsIsOpen(false); // Ferme les paramètres
      });
  };

  // Gestionnaire de soumission du formulaire
  const submitLoginForm = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page par défaut
    if (loginEmailValue && loginPasswordValue !== '') {
      // Si les champs email et mot de passe sont remplis
      saveUserToken(); // Appelle la fonction pour envoyer les identifiants
    }
  };

  // Gestionnaire pour basculer vers le formulaire de création de compte
  const handleCreateClick = () => {
    setLoginFormIsOpen(false); // Ferme le formulaire de connexion
    setCreateFormIsOpen(true); // Ouvre le formulaire de création de compte
  };

  return (
    <div className="loginform-content">
      {/* Bouton pour se connecter */}
      <button type="button" className="loginform-connect-button">
        Se connecter
      </button>

      {/* Bouton pour ouvrir le formulaire de création de compte */}
      <button
        type="button"
        className="loginform-create-button"
        onClick={handleCreateClick}
      >
        Créer un compte
      </button>

      {/* Formulaire de connexion */}
      <form className="loginform-form-content" onSubmit={submitLoginForm}>
        {/* Champ pour l'email */}
        <label className="loginform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          required
          className="loginform-form-input"
          type="email" // Type email pour valider automatiquement le format
          placeholder="astronaute@spacial.fr"
          id="mail"
          value={loginEmailValue} // L'état détermine la valeur de l'input
          onChange={(event) => setLoginEmailValue(event.target.value)} // Met à jour l'état
        />

        {/* Champ pour le mot de passe */}
        <label className="loginform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          required
          className="loginform-form-input"
          type="password" // Type password pour masquer les caractères
          placeholder="Secret Spatial"
          id="password"
          value={loginPasswordValue} // L'état détermine la valeur de l'input
          onChange={(event) => setLoginPasswordValue(event.target.value)} // Met à jour l'état
        />

        {/* Bouton pour soumettre le formulaire */}
        <button className="loginform-form-submit-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

// Validation des types des props pour s'assurer qu'elles sont bien fournies et conformes
LoginForm.propTypes = {
  setIsLogged: propTypes.func.isRequired, // Fonction pour mettre à jour l'état de connexion
  setSettingsIsOpen: propTypes.func.isRequired, // Fonction pour gérer l'état des paramètres
  setLoginFormIsOpen: propTypes.func.isRequired, // Fonction pour gérer l'affichage du formulaire de connexion
  setCreateFormIsOpen: propTypes.func.isRequired, // Fonction pour gérer l'affichage du formulaire de création
  setUserJWT: propTypes.func.isRequired, // Fonction pour gérer le JWT de l'utilisateur
  setUserEmail: propTypes.func.isRequired, // Fonction pour gérer l'email de l'utilisateur
};

// Export du composant
export default LoginForm;
