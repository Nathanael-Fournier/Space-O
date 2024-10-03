import propTypes from 'prop-types';

import './CreateForm.scss';

const CreateForm = ({ setLoginFormIsOpen, setCreateFormIsOpen }) => {
  const handleConnectClick = () => {
    setLoginFormIsOpen(true);
    setCreateFormIsOpen(false);
  };

  return (
    <div className="createform-content">
      <button
        type="button"
        className="createform-connect-button"
        onClick={handleConnectClick}
      >
        Se connecter
      </button>
      <button type="button" className="createform-create-button">
        Créer un compte
      </button>
      <form className="createform-form-content">
        <label className="createform-form-label" htmlFor="lastname">
          Nom
        </label>
        <input
          className="createform-form-input"
          type="text"
          placeholder="ex: Pesquet"
          id="lastname"
        />
        <label className="createform-form-label" htmlFor="firstname">
          Prénom
        </label>
        <input
          className="createform-form-input"
          type="text"
          placeholder="ex: Thomas"
          id="firstname"
        />
        <label className="createform-form-label" htmlFor="phone-number">
          Numéro de téléphone
        </label>
        <input
          className="createform-form-input"
          type="tel"
          placeholder="ex: 01 23 45 67 89"
          id="phone-number"
        />
        <label className="createform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          className="createform-form-input"
          type="text"
          placeholder="ex: astronaute@spacial.fr"
          id="mail"
        />
        <label className="createform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="createform-form-input"
          type="password"
          placeholder="ex: Secret Spatial"
          id="password"
        />
        <button className="createform-form-submit-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

CreateForm.propTypes = {
  setLoginFormIsOpen: propTypes.func.isRequired,
  setCreateFormIsOpen: propTypes.func.isRequired,
};

export default CreateForm;
