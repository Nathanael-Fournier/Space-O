/* eslint-disable react/no-unescaped-entities */
// Importation du composant Link pour gérer la navigation entre les pages
import { Link } from 'react-router-dom';

// Importation des styles spécifiques à ce composant
import './FormSubmit.scss';

// Définition du composant FormSubmit
const FormSubmit = () => {
  return (
    <div className="form-submit-content">
      {/* Titre principal affichant un message de confirmation */}
      <h1 className="form-submit-title">
        Votre demande a bien été réceptionnée !
      </h1>
      {/* Paragraphe expliquant que l'utilisateur sera contacté pour valider son devis */}
      <p className="form-submit-text">
        Nous vous contacterons sous peu pour valider votre devis.
        <br />
        <br />
        En attendant, vous pouvez consulter le statut de vos devis dans la
        section "vos devis" en cliquant sur le bouton ci-dessous
      </p>
      {/* Lien redirigeant l'utilisateur vers la page de consultation des devis */}
      <Link to="/mes-devis" className="form-submit-link">
        Mes devis
      </Link>
    </div>
  );
};

// Exportation du composant
export default FormSubmit;
