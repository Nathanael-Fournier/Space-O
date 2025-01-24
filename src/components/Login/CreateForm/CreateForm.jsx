// Import du hook useState pour gérer l'état local
import { useState } from 'react';

// Import pour valider les types de props
import propTypes from 'prop-types';
// Import d'Axios pour effectuer des requêtes HTTP
import axios from 'axios';

// Import de la base URL de l'API
import { API_BASE_URL } from '../../../utils/config';

// Import des styles spécifiques au formulaire
import './CreateForm.scss';

// Composant CreateForm : Formulaire de création de compte
const CreateForm = ({
  setLoginFormIsOpen,
  setCreateFormIsOpen,
  setFlashMessageIsOpen,
}) => {
  // États pour stocker les valeurs des champs du formulaire
  const [createLastnameValue, setCreateLastnameValue] = useState(''); // Nom
  const [createFirstnameValue, setCreateFirstnameValue] = useState(''); // Prénom
  const [createPhoneNumberValue, setCreatePhoneNumberValue] = useState(''); // Numéro de téléphone
  const [createEmailValue, setCreateEmailValue] = useState(''); // Adresse email
  const [createPasswordValue, setCreatePasswordValue] = useState(''); // Mot de passe

  // Fonction pour envoyer les données du formulaire à l'API
  const createUser = () => {
    axios
      .post(`${API_BASE_URL}/api/v1/user`, {
        email: createEmailValue,
        password: createPasswordValue,
        firstname: createFirstnameValue,
        lastname: createLastnameValue,
        phone_number: createPhoneNumberValue,
      })
      .then(() => {
        setCreateFormIsOpen(false); // Ferme le formulaire de création
        setFlashMessageIsOpen(true); // Affiche un message flash pour indiquer le succès
      });
  };

  // Fonction déclenchée à la soumission du formulaire
  const submitCreateForm = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    // Vérifie que tous les champs sont remplis avant d'appeler createUser
    if (
      createLastnameValue &&
      createFirstnameValue &&
      createPhoneNumberValue &&
      createEmailValue &&
      createPasswordValue !== ''
    ) {
      createUser();
    }
  };

  // Fonction pour ouvrir le formulaire de connexion et fermer celui de création
  const handleConnectClick = () => {
    setLoginFormIsOpen(true);
    setCreateFormIsOpen(false);
  };

  return (
    <div className="createform-content">
      {/* Bouton pour basculer vers le formulaire de connexion */}
      <button
        type="button"
        className="createform-connect-button"
        onClick={handleConnectClick}
      >
        Se connecter
      </button>

      {/* Bouton pour indiquer qu'on est déjà dans le formulaire de création */}
      <button type="button" className="createform-create-button">
        Créer un compte
      </button>

      {/* Formulaire de création de compte */}
      <form className="createform-form-content" onSubmit={submitCreateForm}>
        {/* Champ pour le nom */}
        <label className="createform-form-label" htmlFor="lastname">
          Nom
        </label>
        <input
          required
          pattern="^[a-zA-Z0-9_]{3,30}$" // Vérifie un format alphanumérique entre 3 et 30 caractères
          className="createform-form-input"
          type="text"
          placeholder="ex: Pesquet"
          id="lastname"
          value={createLastnameValue}
          onChange={(event) => {
            setCreateLastnameValue(event.target.value); // Met à jour l'état
          }}
        />

        {/* Champ pour le prénom */}
        <label className="createform-form-label" htmlFor="firstname">
          Prénom
        </label>
        <input
          required
          pattern="^[a-zA-Z0-9_]{3,30}$"
          className="createform-form-input"
          type="text"
          placeholder="ex: Thomas"
          id="firstname"
          value={createFirstnameValue}
          onChange={(event) => {
            setCreateFirstnameValue(event.target.value);
          }}
        />

        {/* Champ pour le numéro de téléphone */}
        <label className="createform-form-label" htmlFor="phone-number">
          Numéro de téléphone
        </label>
        <input
          required
          className="createform-form-input"
          type="tel"
          placeholder="ex: 01 23 45 67 89"
          id="phone-number"
          value={createPhoneNumberValue}
          onChange={(event) => {
            setCreatePhoneNumberValue(event.target.value);
          }}
        />

        {/* Champ pour l'adresse email */}
        <label className="createform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          required
          pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$" // Vérifie le format email
          className="createform-form-input"
          type="email"
          placeholder="ex: astronaute@spacial.fr"
          id="mail"
          value={createEmailValue}
          onChange={(event) => {
            setCreateEmailValue(event.target.value);
          }}
        />

        {/* Champ pour le mot de passe */}
        <label className="createform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          required
          className="createform-form-input"
          type="password"
          placeholder="ex: Secret Spatial"
          id="password"
          value={createPasswordValue}
          onChange={(event) => {
            setCreatePasswordValue(event.target.value);
          }}
        />

        {/* Bouton pour soumettre le formulaire */}
        <button className="createform-form-submit-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

// Validation des types des props
CreateForm.propTypes = {
  setLoginFormIsOpen: propTypes.func.isRequired,
  setCreateFormIsOpen: propTypes.func.isRequired,
  setFlashMessageIsOpen: propTypes.func.isRequired,
};

// Export du composant
export default CreateForm;
