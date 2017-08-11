import React from 'react';
import shortid from 'shortid';
import loadAgain from '../../app';

import NewAnswer from './NewAnswer';

export default class NewAnswerCon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [{ answer: '', votes: 1 }],
		};
		loadAgain();
	}

	reset() {
		this.setState({
			answers: [{ answer: '', votes: 1 }],
		});
	}

	onChange = (e, index) => {
		const newValue = e.target.value;
		this.setState(oldState => ({
			answers: oldState.answers.map((answ, ansInd) => {
				if (ansInd !== index) {
					return { answer: answ.answer, votes: 1 };
				} else {
					return { answer: newValue, votes: 1 };
				}
			}),
		}));
	};

	addAnswer = () => {
		this.setState(oldState => ({
			answers: [...oldState.answers, { answer: '', votes: 1 }],
		}));
	};

	addPoll = e => {
		if (e) e.preventDefault();
		this.props.addEditPoll(
			this.props.url,
			this.props.polls.findIndex(elem => elem._id === this.props.url),
			this.state.answers,
		);
		this.reset();
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
