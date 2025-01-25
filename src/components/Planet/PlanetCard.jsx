// Import de Link pour créer des liens entre les différentes pages de l'application.
import { Link } from 'react-router-dom';

// Import de prop-types pour valider les types des props passées au composant.
import propTypes from 'prop-types';

// Import du fichier de styles spécifiques au composant PlanetCard.
import './Planet.scss';

// Définition du composant PlanetCard qui affiche les informations de chaque planète.
const PlanetCard = ({ picture, name, description, slug }) => {
  return (
    <div className="planet-card">
      {/* Utilisation du composant Link pour rediriger vers une page spécifique de la planète via son slug */}
      <Link to={`/planetes/${slug}`}>
        <img
          className={`planet-picture ${name}`} // L'image de la planète reçoit une classe dynamique basée sur le nom de la planète.
          src={picture} // La source de l'image de la planète est passée en prop 'picture'.
          alt="Illustration d'une planète" // Texte alternatif pour l'image.
        />
      </Link>
      {/* Affiche le nom de la planète */}
      <h2 className="planet-name">{name}</h2>
      {/* Affiche les 100 premiers caractères de la description, suivis de "..." */}
      <p className="planet-description">{description.slice(0, 100)} ...</p>
      {/* Un autre lien vers la page de la planète avec le même slug */}
      <Link to={`/planetes/${slug}`} className="planet-button">
        En savoir plus ...
      </Link>
    </div>
  );
};

// Validation des props du composant avec propTypes.
PlanetCard.propTypes = {
  picture: propTypes.string.isRequired, // L'image est une chaîne de caractères qui représente l'URL de l'image de la
  name: propTypes.string.isRequired, // Le nom est une chaîne de caractères qui représente le nom de la planète.
  description: propTypes.string.isRequired, // La description est une chaîne de caractères qui décrit la planète.
  slug: propTypes.string.isRequired, // Le slug est une chaîne de caractères unique pour chaque planète.
};

// Export du composant.
export default PlanetCard;
