/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const HomeParts = ({ name, image, title, text, button }) => {
  return (
    <div className="home-content">
      <img className={name} src={image} alt="A dynamiser" />
      <h2 className="secondary-title">{title}</h2>
      <p className="secondary-text">{text}</p>
      <a href="#" className="home-button">
        {button}
      </a>
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
