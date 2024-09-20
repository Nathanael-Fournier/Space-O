/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/SpaceO.png';
import planete from '../../assets/svg/planete.svg';
import vaisseau from '../../assets/svg/vaisseau.svg';
import devis from '../../assets/svg/devis.svg';
import login from '../../assets/svg/login.svg';

import './Navbar.scss';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-first-part">
          <img className="navbar-logo" src={logo} alt="Logo du site" />
        </div>
        <div className="navbar-second-part">
          <NavbarLink image={planete} title="Planètes" />
          <NavbarLink image={vaisseau} title="Vaisseaux" />
          <NavbarLink image={devis} title="Devis" />
          <NavbarLink image={login} title="Login" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
