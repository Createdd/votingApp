import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

let d, e, f;

export default class Poll extends React.Component {
	locateVote = (a, b, c) => {
		d = a;
		e = b;
		f = c;
	};

	passVote = event => {
		if (event) event.preventDefault();
		this.props.updateVotes(d, e, f);
		d = 0;
		e = 0;
		f = 0;
	};

	render() {
		const props = this.props;
		const renderComp = () =>
			props.polls[props.index].answers.map((ans, answerInd) =>
				<p key={shortid.generate()}>
					<input
						name="group1"
						type="radio"
						id={`label${answerInd}and${props.index}`}
						className="collection-item blue-grey darken-4"
						onClick={() => this.locateVote(props.index, answerInd, 1)}
					/>
					<label htmlFor={`label${answerInd}and${props.index}`}>
						{ans.answer}
					</label>
					<span className="new badge" data-badge-caption="Votes">
						{ans.votes}
					</span>
				</p>,
			);
		return (
			<div className="card-content teal-text">
				<span className="card-title">
					{props.polls[props.index].question}
				</span>
				<form className="collection">
					{renderComp()}
					<button className="btn" onClick={this.passVote}>
						Vote
					</button>
				</form>
			</div>
		);
	}
}

Poll.propTypes = {
	polls: PropTypes.arrayOf(PropTypes.object).isRequired,
	index: PropTypes.number.isRequired,
};
