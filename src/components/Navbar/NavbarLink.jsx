// Importation de NavLink pour gérer les liens avec styles dynamiques
import { NavLink } from 'react-router-dom';

// Importation de PropTypes pour valider les types des props
import PropTypes from 'prop-types';

// Composant NavbarLink qui représente un lien individuel de la Navbar
const NavbarLink = ({ link, image, title }) => {
  return (
    <NavLink
      to={link}
      // Ajout dynamique de classes selon que le lien est actif ou non
      className={({ isActive }) =>
        isActive ? 'navbar-link navbar-link--selected' : 'navbar-link'
      }
    >
      <img className="navbar-link-icon" src={image} alt="Icone de navigation" />
      {title}
    </NavLink>
  );
};

// Validation des props attendues pour le composant NavbarLink
NavbarLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

// Export du composant
export default NavbarLink;
