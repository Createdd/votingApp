import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Poll = (props) => {
  const renderComp = () => props.polls[props.index].answers.map(ans =>
    <a key={shortid.generate()} className="collection-item blue-grey darken-4"><span className="new badge" data-badge-caption="Votes">{ans.votes}</span>{ans.answer}</a>,
		);
  return (
    <div className="card-content teal-text">
      <span className="card-title">{props.polls[props.index].question}</span>
      <div className="collection">
        {renderComp()}
      </div>
    </div>
  );
};

Poll.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Poll;
