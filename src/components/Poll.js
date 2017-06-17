import React from 'react';
import PropTypes from 'prop-types';

const Poll = () =>
  (<div className="card-content teal-text">
    <span className="card-title">What's your secret?</span>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>);

Poll.PropTypes = {
  name: PropTypes.number,
};

export default Poll;
