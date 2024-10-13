import React, { useEffect } from 'react';

import propTypes from 'prop-types';

import './FlashMessage.scss';

const FlashMessage = ({ text, setSettingsIsOpen }) => {
  useEffect(() => {
    const closeFlashMessage = setTimeout(() => {
      setSettingsIsOpen(false);
    }, 2500);

    return () => clearTimeout(closeFlashMessage);
  }, [setSettingsIsOpen]);

  return (
    <div className="flash-message-content">
      <p className="flash-message-text">{text}</p>
    </div>
  );
};

FlashMessage.propTypes = {
  text: propTypes.string.isRequired,
  setSettingsIsOpen: propTypes.func.isRequired,
};

export default FlashMessage;
