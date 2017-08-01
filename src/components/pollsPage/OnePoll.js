import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Poll = (props) => {
  const renderComp = () =>
		props.polls[props.index].answers.map(ans =>
  (<div key={shortid.generate()} className="collection-item blue-grey darken-4">
    {ans.answer}
    <span className="new badge" data-badge-caption="Votes">
      {ans.votes}
    </span>
  </div>),
		);

  return (
    <div className="card-content teal-text">
      <span className="card-title">
        {props.polls[props.index].question}
      </span>
      <form className="collection">
        {renderComp()}
      </form>
    </div>
  );
};

Poll.propTypes = {
  polls: PropTypes.arrayOf(
		PropTypes.shape({
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
				PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
			),
}),
	).isRequired,
  index: PropTypes.number.isRequired,
};

export default Poll;
