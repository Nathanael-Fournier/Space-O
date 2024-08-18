/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';

const HomeParts = ({ image, title, text }) => {
  return (
    <div className="home-content">
      <img
        className="secondary-picture"
        src={image}
        alt="Voyageurs qui vont vers une fusée"
      />
      <h2 className="secondary-title">{title}</h2>
      <p className="secondary-text">{text}</p>
    </div>
  );
};

HomeParts.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeParts;
