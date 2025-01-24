/* eslint-disable jsx-a11y/anchor-is-valid */
// Désactivation temporaire de la règle ESLint pour permettre l'utilisation de liens sans `href` valide

// Importation de `Link` pour gérer la navigation avec React Router
import { Link } from 'react-router-dom';

// Importation pour valider les types des props
import PropTypes from 'prop-types';

// Importation des styles spécifiques au composant
import './Home.scss';

// Composant fonctionnel HomeParts qui représente une section réutilisable de la page d'accueil
const HomeParts = ({ name, image, title, text, link, button }) => {
  return (
    <div className="home-parts-content">
      {/* Image illustrant la section, avec une classe dynamique basée sur la prop `name` */}
      <img className={name} src={image} alt="Illustration du service proposé" />
      {/* Conteneur pour le texte et le bouton */}
      <div className="text-without-picture">
        {/* Titre de la section */}
        <h2 className="secondary-title">{title}</h2>
        {/* Texte descriptif */}
        <p className="secondary-text">{text}</p>
        {/* Bouton avec un lien dynamique pour naviguer vers une page spécifique */}
        <Link to={link} className="home-button">
          {button}
        </Link>
      </div>
    </div>
  );
};

// Validation des types des props pour garantir leur conformité
HomeParts.propTypes = {
  name: PropTypes.string.isRequired, // Classe CSS pour styliser l'image
  image: PropTypes.string.isRequired, // Chemin de l'image
  title: PropTypes.string.isRequired, // Titre de la section
  text: PropTypes.string.isRequired, // Texte descriptif
  link: PropTypes.string.isRequired, // Lien vers une page
  button: PropTypes.string.isRequired, // Texte du bouton
};

// Export du composant
export default HomeParts;
