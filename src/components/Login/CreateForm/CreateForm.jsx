import { useState } from 'react';

import propTypes from 'prop-types';
import axios from 'axios';

import { API_BASE_URL } from '../../../utils/config';

import './CreateForm.scss';

const CreateForm = ({
  setLoginFormIsOpen,
  setCreateFormIsOpen,
  setFlashMessageIsOpen,
}) => {
  const [createLastnameValue, setCreateLastnameValue] = useState('');
  const [createFirstnameValue, setCreateFirstnameValue] = useState('');
  const [createPhoneNumberValue, setCreatePhoneNumberValue] = useState('');
  const [createEmailValue, setCreateEmailValue] = useState('');
  const [createPasswordValue, setCreatePasswordValue] = useState('');

  const createUser = () => {
    axios
      .post(`${API_BASE_URL}/api/v1/user`, {
        email: createEmailValue,
        roles: ['ROLE_USER'],
        password: createPasswordValue,
        firstname: createFirstnameValue,
        lastname: createLastnameValue,
        phone_number: createPhoneNumberValue,
      })
      .then(() => {
        setCreateFormIsOpen(false);
        setFlashMessageIsOpen(true);
      });
  };

  const submitCreateForm = (event) => {
    event.preventDefault();
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
      <form className="createform-form-content" onSubmit={submitCreateForm}>
        <label className="createform-form-label" htmlFor="lastname">
          Nom
        </label>
        <input
          required
          pattern="^[a-zA-Z0-9_]{3,30}$"
          className="createform-form-input"
          type="text"
          placeholder="ex: Pesquet"
          id="lastname"
          value={createLastnameValue}
          onChange={(event) => {
            setCreateLastnameValue(event.target.value);
          }}
        />
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
        <label className="createform-form-label" htmlFor="phone-number">
          Numéro de téléphone
        </label>
        <input
          required
          // pattern="^\+?[0-9]\d{9,20}$"
          className="createform-form-input"
          type="tel"
          placeholder="ex: 01 23 45 67 89"
          id="phone-number"
          value={createPhoneNumberValue}
          onChange={(event) => {
            setCreatePhoneNumberValue(event.target.value);
          }}
        />
        <label className="createform-form-label" htmlFor="mail">
          Adresse Email
        </label>
        <input
          required
          pattern="^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$"
          className="createform-form-input"
          type="email"
          placeholder="ex: astronaute@spacial.fr"
          id="mail"
          value={createEmailValue}
          onChange={(event) => {
            setCreateEmailValue(event.target.value);
          }}
        />
        <label className="createform-form-label" htmlFor="password">
          Mot de passe
        </label>
        <input
          required
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
          // title="1 chiffre, 1 lettre et 8 caractères minimums"
          className="createform-form-input"
          type="password"
          placeholder="ex: Secret Spatial"
          id="password"
          value={createPasswordValue}
          onChange={(event) => {
            setCreatePasswordValue(event.target.value);
          }}
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
  setFlashMessageIsOpen: propTypes.func.isRequired,
};

export default CreateForm;
