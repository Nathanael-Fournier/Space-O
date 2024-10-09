import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import './UserLogged.scss';

const UserLogged = ({ setIsLogged, setSettingsIsOpen, setUserJWT }) => {
  const handleLogout = () => {
    setIsLogged(false);
    setSettingsIsOpen(false);
    setUserJWT('');
  };

  return (
    <div className="user-logged-content">
      {/* <p className="user-logged-message">Bonjour Mr ?</p> */}
      <Link to="/mes-devis" className="user-logged-estimate-button">
        Mes devis
      </Link>
      <button
        className="user-logged-logout-button"
        type="button"
        onClick={handleLogout}
      >
        Me déconnecter
      </button>
    </div>
  );
};

UserLogged.propTypes = {
  setIsLogged: propTypes.func.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
  setUserJWT: propTypes.func.isRequired,
};

export default UserLogged;
