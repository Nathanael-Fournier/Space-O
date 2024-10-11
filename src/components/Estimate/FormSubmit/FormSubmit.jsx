import propTypes from 'prop-types';

import './FormSubmit.scss';
import { Link } from 'react-router-dom';

const FormSubmit = ({ setFormIsSubmit }) => {
  return (
    <div className="form-submit-content">
      <h1 className="form-submit-title">
        Votre demande a bien été receptionnée !
      </h1>
      <p className="form-submit-text">
        Nous vous contacterons sous peu pour valider votre devis.
        <br />
        <br />
        En attendant, vous pouvez consulter le statut de vos devis dans la
        section vos devis en cliquant sur le bouton ci dessous
      </p>
      <Link to="/mes-devis" className="form-submit-link">
        Mes devis
      </Link>
    </div>
  );
};

FormSubmit.propTypes = {
  setFormIsSubmit: propTypes.func.isRequired,
};

export default FormSubmit;
