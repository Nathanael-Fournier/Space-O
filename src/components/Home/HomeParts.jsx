/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';

import './Home.scss';
import { Link } from 'react-router-dom';

const HomeParts = ({ name, image, title, text, link, button }) => {
  return (
    <div className="home-parts-content">
      <img className={name} src={image} alt="Illustration du service proposé" />
      <div className="text-without-picture">
        <h2 className="secondary-title">{title}</h2>
        <p className="secondary-text">{text}</p>
        <Link to={link} className="home-button">
          {button}
        </Link>
      </div>
    </div>
  );
};

HomeParts.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default HomeParts;
