import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Poll = props =>
  (<div className="card-content teal-text">
    <span className="card-title">{props.polls[props.index].question}</span>
    <ul>
      {props.polls[props.index].answers.map(pol => <li key={shortid.generate()}>{pol}</li>)}
    </ul>
  </div>);

Poll.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Poll;
