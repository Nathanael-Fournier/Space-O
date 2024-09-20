import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const NavbarLink = ({ link, image, title }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? 'navbar-link navbar-link--selected' : 'navbar-link'
      }
    >
      <img className="navbar-link-icon" src={image} alt="Icone de navigation" />
      {title}
    </NavLink>
  );
};

NavbarLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarLink;
