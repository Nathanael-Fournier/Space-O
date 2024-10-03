import { useState } from 'react';

import propTypes from 'prop-types';

import LoginForm from './LoginForm/LoginForm';
import CreateForm from './CreateForm/CreateForm';

import './Login.scss';

const Login = ({ isLogged, setIsLogged }) => {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(true);
  const [createFormIsOpen, setCreateFormIsOpen] = useState(false);

  return (
    <>
      {loginFormIsOpen && (
        <LoginForm
          setLoginFormIsOpen={setLoginFormIsOpen}
          setCreateFormIsOpen={setCreateFormIsOpen}
        />
      )}
      {createFormIsOpen && (
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
};

export default Login;
