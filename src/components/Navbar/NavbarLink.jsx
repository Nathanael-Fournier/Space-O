/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

const NavbarLink = ({ image, title }) => {
  return (
    <a href="#" className="navbar-link">
      <img
        className="navbar-link-image"
        src={image}
        alt="Icone de navigation"
      />
      {title}
    </a>
  );
};

NavbarLink.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarLink;
