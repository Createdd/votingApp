import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

let answerId;
let vote;

const Poll = (props) => {
  const locateVote = (a, b) => {
    answerId = a;
    vote = b;
  };

  const passVote = (event) => {
    if (event) event.preventDefault();
    props.updateVotes(props.url, answerId, props.polls.findIndex(i => i._id === props.url), vote);
    answerId = 0;
    vote = 0;
  };

  const renderComp = () =>
		props.poll.answers.map((ans, answerInd) =>
  (<p key={shortid.generate()}>
    <input
      name="group1"
      type="radio"
      id={`label${answerInd}and${props.index}`}
      className="collection-item blue-grey darken-4"
      onClick={() => locateVote(answerInd, 1)}
    />
    <label htmlFor={`label${answerInd}and${props.index}`}>
      {ans.answer}
    </label>
    <span className="new badge" data-badge-caption="Votes">
      {ans.votes}
    </span>
  </p>),
		);
  return (
    <div className="card-content teal-text">
      <span className="card-title">
        {props.poll.question}
      </span>
      <form className="collection">
        {renderComp()}
        <button className="btn" onClick={passVote}>
					Vote
				</button>
      </form>
    </div>
  );
};

Poll.propTypes = {
  poll: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
			PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
		),
  }).isRequired,
};

export default Poll;
