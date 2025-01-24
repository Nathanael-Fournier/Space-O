// Importation du hook useState pour gérer les états locaux
import { useState } from 'react';

// Importation pour valider les types des props
import propTypes from 'prop-types';

import LoginForm from './LoginForm/LoginForm'; // Formulaire de connexion
import CreateForm from './CreateForm/CreateForm'; // Formulaire de création de compte
import UserLogged from './UserLogged/UserLogged'; // Composant affiché pour un utilisateur connecté
import FlashMessage from '../FlashMessage/FlashMessage'; // Message flash

// Importation des styles spécifiques au composant Login
import './Login.scss';

// Composant principal Login
const Login = ({
  isLogged, // Booléen indiquant si l'utilisateur est connecté
  setIsLogged, // Fonction pour mettre à jour l'état de connexion
  setSettingsIsOpen, // Fonction pour ouvrir/fermer les paramètres
  setUserJWT, // Fonction pour stocker le jeton JWT de l'utilisateur
  setUserEmail, // Fonction pour stocker l'email de l'utilisateur
}) => {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(true); // État pour afficher/masquer le formulaire de connexion
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false); // État pour afficher/masquer le formulaire de création
  const [flashMessageIsOpen, setFlashMessageIsOpen] = useState(false); // État pour afficher/masquer le message flash

  return (
    <>
      {/* Affichage du formulaire de connexion si l'utilisateur n'est pas connecté et si loginFormIsOpen est true */}
      {loginFormIsOpen && !isLogged && (
        <LoginForm
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
          setUserJWT={setUserJWT}
          setUserEmail={setUserEmail}
        />
      )}

      {/* Affichage du formulaire de création si l'utilisateur n'est pas connecté et si createFormIsOpen est true */}
      {createFormIsOpen && !isLogged && (
        <CreateForm
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
          setFlashMessageIsOpen={setFlashMessageIsOpen}
        />
      )}

      {/* Affichage du composant UserLogged si l'utilisateur est connecté */}
      {isLogged && (
        <UserLogged
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setUserJWT={setUserJWT}
          setUserEmail={setUserEmail}
        />
      )}

      {/* Affichage du message flash si aucun formulaire n'est ouvert et que le compte a été créé avec succès */}
      {flashMessageIsOpen &&
        !isLogged &&
        !loginFormIsOpen &&
        !createFormIsOpen && (
          <FlashMessage
            text="Compte crée avec succès"
            setSettingsIsOpen={setSettingsIsOpen}
          />
        )}
    </>
  );
};

// Validation des types des props pour s'assurer qu'elles sont bien fournies et conformes
Login.propTypes = {
  isLogged: propTypes.bool.isRequired, // Indique si l'utilisateur est connecté
  setIsLogged: propTypes.func.isRequired, // Fonction pour mettre à jour l'état de connexion
  setSettingsIsOpen: propTypes.func.isRequired, // Fonction pour gérer l'état des paramètres
  setUserJWT: propTypes.func.isRequired, // Fonction pour gérer le JWT
  setUserEmail: propTypes.func.isRequired, // Fonction pour gérer l'email
};

// Export du composant
export default Login;
