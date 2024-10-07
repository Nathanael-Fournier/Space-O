import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import logo from '../../assets/SpaceO.png';
import planete from '../../assets/svg/planete.svg';
import vaisseau from '../../assets/svg/vaisseau.svg';
import devis from '../../assets/svg/devis.svg';
import login from '../../assets/svg/login.svg';

import './Navbar.scss';

import NavbarLink from './NavbarLink';

const Navbar = ({ isLogged, settingsIsOpen, setSettingsIsOpen }) => {
  const handleLoginClick = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-first-part">
          <img className="navbar-logo" src={logo} alt="Logo du site" />
        </Link>
        <div className="navbar-second-part">
          <NavbarLink link="/planetes" image={planete} title="Planètes" />
          <NavbarLink link="/vaisseaux" image={vaisseau} title="Vaisseaux" />
          <NavbarLink link="/devis" image={devis} title="Devis" />
          {isLogged && (
            <button
              type="button"
              className="navbar-link login-button"
              onClick={handleLoginClick}
            >
              <img
                className="navbar-link-icon"
                src={login}
                alt="Icone de navigation"
              />
              Logout
            </button>
          )}
          {!isLogged && (
            <button
              type="button"
              className="navbar-link login-button"
              onClick={handleLoginClick}
            >
              <img
                className="navbar-link-icon"
                src={login}
                alt="Icone de navigation"
              />
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  isLogged: propTypes.bool.isRequired,
  settingsIsOpen: propTypes.bool.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
};

export default Navbar;
