// Importation de PropTypes pour valider les types des props
import propTypes from 'prop-types';

// Importation des styles spécifiques à ce composant
import './UserEstimate.scss';

// Définition du composant EachEstimate
const EachEstimate = ({
  id,
  departure_date,
  status,
  traveler_number,
  planet,
  ship,
}) => {
  return (
    <div className="each-estimate-content">
      {/* Titre principal du devis avec son numéro */}
      <h2 className="each-estimate-title">
        Devis<span className="each-estimate-title-information">N° {id}</span>
      </h2>
      {/* Informations sur la destination (planète) */}
      <p className="each-estimate-characteristic">
        Destination :{' '}
        <span className="each-estimate-information">{planet.name}</span>
      </p>
      {/* Informations sur le vaisseau sélectionné */}
      <p className="each-estimate-characteristic">
        Vaisseau :{' '}
        <span className="each-estimate-information">{ship.name}</span>
      </p>
      {/* Date de départ, formatée pour ne garder que les 10 premiers caractères */}
      <p className="each-estimate-characteristic">
        Date de départ :
        <span className="each-estimate-information">
          {departure_date.slice(0, 10)}
        </span>
      </p>
      {/* Nombre de voyageurs pour ce devis */}
      <p className="each-estimate-characteristic">
        Pour
        <span className="each-estimate-information">{traveler_number} </span>
        voyageur(s)
      </p>
      {/* Statut du devis (par exemple, "en attente", "validé", etc.) */}
      <p className="each-estimate-status">{status}</p>
    </div>
  );
};

// Validation des types des props avec PropTypes
EachEstimate.propTypes = {
  // Identifiant unique du devis
  id: propTypes.number.isRequired,
  // Date de départ au format string (ex. : "2036-11-30")
  departure_date: propTypes.string.isRequired,
  // Statut du devis (ex. : "Validé", "En attente", etc.)
  status: propTypes.string.isRequired,
  // Nombre de voyageurs pour le devis
  traveler_number: propTypes.number.isRequired,
  // Objet représentant la planète avec son nom
  planet: propTypes.shape({
    name: propTypes.string.isRequired, // Nom de la planète
  }).isRequired,
  // Objet représentant le vaisseau avec son nom
  ship: propTypes.shape({
    name: propTypes.string.isRequired, // Nom du vaisseau
  }).isRequired,
};

// Exportation du composant
export default EachEstimate;
