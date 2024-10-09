import { useState } from 'react';

import propTypes from 'prop-types';

import LoginForm from './LoginForm/LoginForm';
import CreateForm from './CreateForm/CreateForm';
import UserLogged from './UserLogged/UserLogged';

import './Login.scss';

const Login = ({ isLogged, setIsLogged, setSettingsIsOpen, setUserJWT }) => {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(true);
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false);

  return (
    <>
      {loginFormIsOpen && !isLogged && (
        <LoginForm
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
          setUserJWT={setUserJWT}
        />
      )}
      {createFormIsOpen && !isLogged && (
        <CreateForm
          setSettingsIsOpen={setSettingsIsOpen}
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
        />
      )}
      {isLogged && (
        <UserLogged
          setIsLogged={setIsLogged}
          setSettingsIsOpen={setSettingsIsOpen}
          setUserJWT={setUserJWT}
        />
      )}
    </>
  );
};

Login.propTypes = {
  isLogged: propTypes.bool.isRequired,
  setIsLogged: propTypes.func.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
  setUserJWT: propTypes.func.isRequired,
};

export default Login;
