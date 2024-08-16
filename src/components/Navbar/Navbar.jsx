import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img
          className="navbar-logo"
          src="../src/assets/SpaceO.png"
          alt="Logo du site"
        />
        <img
          className="burger"
          src="../src/assets/menuBurger.png"
          alt="Menu de navigation"
        />
      </nav>
    </header>
  );
};

export default Navbar;
