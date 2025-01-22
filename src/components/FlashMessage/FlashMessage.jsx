// Importation du hook `useEffect`
import { useEffect } from 'react';

// Importation de PropTypes pour valider les types des props
import propTypes from 'prop-types';

// Importation des styles spécifiques au composant
import './FlashMessage.scss';

// Définition du composant `FlashMessage` pour afficher un message flash
const FlashMessage = ({ text, setSettingsIsOpen }) => {
  // Utilisation de `useEffect` pour gérer la fermeture automatique du message flash après 2,5 secondes
  useEffect(() => {
    // Création d'un timeout pour fermer le message après le délai spécifié
    const closeFlashMessage = setTimeout(() => {
      setSettingsIsOpen(false);
    }, 2500);

    // Nettoyage : si le composant est démonté avant la fin du délai, le timeout est annulé
    return () => clearTimeout(closeFlashMessage);
  }, [setSettingsIsOpen]); // L'effet dépend de `setSettingsIsOpen`

  return (
    // Conteneur principal du message flash
    <div className="flash-message-content">
      {/* Affichage du texte du message flash passé via la prop `text` */}
      <p className="flash-message-text">{text}</p>
    </div>
  );
};

// Validation des props du composant avec PropTypes
FlashMessage.propTypes = {
  // `text` : chaîne de caractères représentant le contenu du message flash
  text: propTypes.string.isRequired,
  // `setSettingsIsOpen` : fonction utilisée pour fermer le message flash
  setSettingsIsOpen: propTypes.func.isRequired,
};

// Exportation du composant
export default FlashMessage;
