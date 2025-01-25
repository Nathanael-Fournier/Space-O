// Import du composant Link pour la navigation entre les pages.
import { Link } from 'react-router-dom';

// Import de prop-types pour valider les types des props passées au composant.
import propTypes from 'prop-types';

// Import du fichier de styles spécifiques au composant.
import './Ship.scss';

// Définition du composant ShipCard.
const ShipCard = ({ picture, name, description, slug }) => {
  return (
    // Conteneur principal du composant ShipCard.
    <div className="ship-card">
      {/* Lien cliquable pour rediriger vers la page de détail du vaisseau grâce au slug. */}
      <Link to={`/vaisseaux/${slug}`}>
        <img
          // Classe CSS pour styliser l'image du vaisseau.
          className="ship-picture"
          // Source de l'image du vaisseau, passée en prop.
          src={picture}
          // Texte alternatif pour décrire l'image du vaisseau.
          alt="Illustration d'un vaisseau"
        />
      </Link>

      {/* Affiche le nom du vaisseau. */}
      <h2 className="ship-name">{name}</h2>

      {/* Affiche une version raccourcie de la description (100 premiers caractères), suivie de "..." */}
      <p className="ship-description">{description.slice(0, 100)} ...</p>

      {/* Lien supplémentaire pour rediriger vers la page de détail du vaisseau. */}
      <Link to={`/vaisseaux/${slug}`} className="ship-button">
        En savoir plus ...
      </Link>
    </div>
  );
};

// Validation des props du composant avec propTypes.
ShipCard.propTypes = {
  picture: propTypes.string.isRequired, // Represente l'image du vaisseau.
  name: propTypes.string.isRequired, // Represente le nom du vaisseau.
  description: propTypes.string.isRequired, // Represente la description du vaisseau.
  slug: propTypes.string.isRequired, // Represente le slug (url) du vaisseau.
};

// Export du composant.
export default ShipCard;
