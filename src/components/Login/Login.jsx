import propTypes from 'prop-types';

import LoginForm from './LoginForm';

import './Login.scss';

const Login = ({ loginFormIsOpen }) => {
  return loginFormIsOpen && <LoginForm />;
};

Login.propTypes = {
  loginFormIsOpen: propTypes.bool.isRequired,
};

export default Login;
