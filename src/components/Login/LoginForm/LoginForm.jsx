import { useState } from 'react';

import propTypes from 'prop-types';
import axios from 'axios';

import './LoginForm.scss';

const LoginForm = ({
  setIsLogged,
  // setSettingsIsOpen,
  setLoginFormIsOpen,
  setCreateFormIsOpen,
  // userJWT,
  setUserJWT,
  // userData,
  // setUserData,
}) => {
  const [loginEmailValue, setLoginEmailValue] = useState('');
  const [loginPasswordValue, setLoginPasswordValue] = useState('');

  const saveUserToken = () => {
    axios
      .post('http://localhost:8000/api/login_check', {
        username: loginEmailValue,
        password: loginPasswordValue,
      })
      .then((response) => {
        setUserJWT(response.data.token);
      })
      .finally(() => {
        setIsLogged(true);
        // Fermer les form pour afficher celui connecté
      });
  };

  // const saveUserData = () => {
  //   axios
  //     .get('http://localhost:8000/api/v1/login', {
  //       headers: { Authorization: `Bearer ${userJWT}` },
  //     })
  //     .then((response) => {
  //       setUserData(response.data);
  //     });
  // };

  const submitLoginForm = (event) => {
    event.preventDefault();
    saveUserToken();
    // setSettingsIsOpen(false);
    // saveUserData();
  };

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
      <form className="loginform-form-content" onSubmit={submitLoginForm}>
        <label className="loginform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          className="loginform-form-input"
          type="text"
          placeholder="astronaute@spacial.fr"
          id="mail"
          value={loginEmailValue}
          onChange={(event) => {
            setLoginEmailValue(event.target.value);
          }}
        />
        <label className="loginform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="loginform-form-input"
          type="password"
          placeholder="Secret Spatial"
          id="password"
          value={loginPasswordValue}
          onChange={(event) => {
            setLoginPasswordValue(event.target.value);
          }}
        />
        <button className="loginform-form-submit-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setIsLogged: propTypes.func.isRequired,
  // setSettingsIsOpen: propTypes.func.isRequired,
  setLoginFormIsOpen: propTypes.func.isRequired,
  setCreateFormIsOpen: propTypes.func.isRequired,
  // userJWT: propTypes.string.isRequired,
  setUserJWT: propTypes.func.isRequired,
  // userData: propTypes.shape({
  //   firstname: propTypes.string,
  //   lastname: propTypes.string,
  // }).isRequired,
  // setUserData: propTypes.func.isRequired,
};

export default LoginForm;
