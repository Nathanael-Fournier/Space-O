// Import du SCSS lié au composant
import './Spinner.scss';

// Composant Spinner qui représente un spinner de chargement
const Spinner = () => {
  return (
    <div className="spinner-content">
      <div className="spinner" />
    </div>
  );
};

// Export du composant
export default Spinner;
