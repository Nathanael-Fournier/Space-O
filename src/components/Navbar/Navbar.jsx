// Importation de Link depuis pour la navigation entre les pages
import { Link } from 'react-router-dom';

// Importation de prop-types pour valider les types des props
import propTypes from 'prop-types';

// Importation des assets (logo et icônes)
import logo from '../../assets/SpaceO.png';
import planete from '../../assets/svg/planete.svg';
import vaisseau from '../../assets/svg/vaisseau.svg';
import devis from '../../assets/svg/devis.svg';
import login from '../../assets/svg/login.svg';

// Importation des styles spécifiques à la Navbar
import './Navbar.scss';

// Importation du composant NavbarLink pour générer des liens de navigation
import NavbarLink from './NavbarLink';

// Composant Navbar
const Navbar = ({ isLogged, settingsIsOpen, setSettingsIsOpen }) => {
  // Fonction pour gérer l'ouverture/fermeture du menu des paramètres
  const handleLoginClick = () => {
    setSettingsIsOpen(!settingsIsOpen); // Inverse l'état de settingsIsOpen
  };

  return (
    <header>
      <nav className="navbar">
        {/* Première partie de la navbar : lien vers la page d'accueil avec le logo */}
        <Link to="/" className="navbar-first-part">
          <img className="navbar-logo" src={logo} alt="Logo du site" />
        </Link>

        {/* Deuxième partie de la navbar : liens de navigation et bouton login/logout */}
        <div className="navbar-second-part">
          {/* Lien vers la page des planètes */}
          <NavbarLink link="/planetes" image={planete} title="Planètes" />
          {/* Lien vers la page des vaisseaux */}
          <NavbarLink link="/vaisseaux" image={vaisseau} title="Vaisseaux" />
          {/* Lien vers la page des devis */}
          <NavbarLink link="/devis" image={devis} title="Devis" />

          {/* Bouton login/logout, affiché dynamiquement selon l'état isLogged */}
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

// Définition des types attendus pour les props du composant Navbar
Navbar.propTypes = {
  isLogged: propTypes.bool.isRequired,
  settingsIsOpen: propTypes.bool.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
};

// Export du composant
export default Navbar;
