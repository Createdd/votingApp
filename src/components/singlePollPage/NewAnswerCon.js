import React from 'react';
import shortid from 'shortid';
import loadAgain from '../../app';

import NewAnswer from './NewAnswer';

export default class NewAnswerCon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [{ answer: '', votes: 10 }],
		};
		loadAgain();
	}

	reset() {
		this.setState({
			answers: [{ answer: '', votes: 10 }],
		});
	}

	onChange = (e, index) => {
		const newValue = e.target.value;
		this.setState(oldState => ({
			answers: oldState.answers.map((answ, ansInd) => {
				if (ansInd !== index) {
					return { answer: answ.answer, votes: 10 };
				} else {
					return { answer: newValue, votes: 10 };
				}
			}),
		}));
	};

	addAnswer = () => {
		this.setState(oldState => ({
			answers: [...oldState.answers, { answer: '', votes: 10 }],
		}));
	};

	addPoll = e => {

		if (e) e.preventDefault();
			this.props.addEditPoll(this.props.polls.findIndex(elem => elem._id === this.props.url),this.state.answers);
		// this.refs.newPollForm.reset();
		// setTimeout(() => {
		// 	this.reset();
		// }, 10);
	};

	render() {
		return (
			<NewAnswer
				poll={this.props.poll}
				addPoll={this.addPoll}
				addAnswer={this.addAnswer}
				onChange={this.onChange}
				state={this.state}
			/>
		);
	}
}
