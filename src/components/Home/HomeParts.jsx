/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

const HomeParts = ({ name, image, title, text, button }) => {
  return (
    <div className="home-parts-content">
      <img className={name} src={image} alt="Illustration du service proposé" />
      <div className="text-without-picture">
        <h2 className="secondary-title">{title}</h2>
        <p className="secondary-text">{text}</p>
        <a href="#" className="home-button">
          {button}
        </a>
      </div>
    </div>
  );
};

HomeParts.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default HomeParts;
