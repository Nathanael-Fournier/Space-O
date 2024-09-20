/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-first-part">
          <img
            className="navbar-logo"
            src="../src/assets/SpaceO.png"
            alt="Logo du site"
          />
        </div>
        <div className="navbar-second-part">
          <NavbarLink image="../src/assets/svg/planete.svg" title="Planètes" />
          <NavbarLink
            image="../src/assets/svg/vaisseau.svg"
            title="Vaisseaux"
          />
          <NavbarLink image="../src/assets/svg/devis.svg" title="Devis" />
          <NavbarLink image="../src/assets/svg/login.svg" title="Login" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
