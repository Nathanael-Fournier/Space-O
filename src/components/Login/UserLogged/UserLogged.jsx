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
      <button className="user-logged-estimate-button" type="button">
        Vos devis
      </button>
      <button
        className="user-logged-logout-button"
        type="button"
        onClick={handleLogout}
      >
        Se déconnecter
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
