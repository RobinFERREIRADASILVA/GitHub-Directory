import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ message }) => (
  <div className="message">
    <p className="message-content">{message} </p>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
