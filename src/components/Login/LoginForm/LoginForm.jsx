import propTypes from 'prop-types';

import './LoginForm.scss';

const LoginForm = ({ setLoginFormIsOpen, setCreateFormIsOpen }) => {
  const handleCreateClick = () => {
    setLoginFormIsOpen(false);
    setCreateFormIsOpen(true);
  };

  return (
    <div className="loginform-content">
      <button type="button" className="loginform-connect-button">
        Se connecter
      </button>
      <button
        type="button"
        className="loginform-create-button"
        onClick={handleCreateClick}
      >
        Créer un compte
      </button>
      <form className="loginform-form-content">
        <label className="loginform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          className="loginform-form-input"
          type="text"
          placeholder="astronaute@spacial.fr"
          id="mail"
        />
        <label className="loginform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="loginform-form-input"
          type="password"
          placeholder="Secret Spatial"
          id="password"
        />
        <button className="loginform-form-submit-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setLoginFormIsOpen: propTypes.func.isRequired,
  setCreateFormIsOpen: propTypes.func.isRequired,
};

export default LoginForm;
