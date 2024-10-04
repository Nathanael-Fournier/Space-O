import { useState } from 'react';

import propTypes from 'prop-types';

import LoginForm from './LoginForm/LoginForm';
import CreateForm from './CreateForm/CreateForm';

import './Login.scss';

const Login = ({ isLogged, setIsLogged, setSettingsIsOpen }) => {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(true);
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false);
  const [userJWT, setUserJWT] = useState('');
  const [userData, setUserData] = useState({});

  return (
    <>
      {loginFormIsOpen && !isLogged && (
        <LoginForm
          setIsLogged={setIsLogged}
          // A garder ?
          setSettingsIsOpen={setSettingsIsOpen}
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
          // A garder ?
          userJWT={userJWT}
          setUserJWT={setUserJWT}
          // A garder ?
          userData={userData}
          // A garder ?
          setUserData={setUserData}
        />
      )}
      {createFormIsOpen && !isLogged && (
        <CreateForm
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
        />
      )}
    </>
  );
};

Login.propTypes = {
  isLogged: propTypes.bool.isRequired,
  setIsLogged: propTypes.func.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
};

export default Login;
