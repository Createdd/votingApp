import React from 'react';
import shortid from 'shortid';
import axios from 'axios';

import NewPoll from './NewPoll';

export default class NewPollCon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answers: [{ answer: '', votes: 0 }, { answer: '', votes: 0 }]
		};
		this.addAnswer = this.addAnswer.bind(this);
		this.addPoll = this.addPoll.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onQuestion = this.onQuestion.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			question: '',
			answers: [{ answer: '', votes: 0 }, { answer: '', votes: 0 }]
		});
	}

	reset() {
		this.setState({
			question: '',
			answers: [{ answer: '', votes: 0 }, { answer: '', votes: 0 }]
		});
	}

	onQuestion = e => {
		const newValue = e.target.value;
		this.setState({
			question: newValue,
		});
	};

	onChange = (e, index) => {
		const newValue = e.target.value;
		this.setState(oldState => ({
			answers: oldState.answers.map((answ, ansInd) => {
				if (ansInd !== index) {
					return { answer: answ.answer, votes: 0 };
				} else {
					return { answer: newValue, votes: 0 };
				}
			}),
		}));
	};

	addAnswer = () => {
		this.setState(oldState => ({
			answers: [...oldState.answers, { answer: '', votes: 0 }],
		}));
	};

	addPoll = e => {
		if (e) e.preventDefault();
		this.props.addPoll(this.state.question, this.state.answers);
		this.reset();
	};

	render() {
		return (
			<NewPoll
				addPoll={this.addPoll}
				addAnswer={this.addAnswer}
				onChange={this.onChange}
				state={this.state}
				onQuestion={this.onQuestion}
			/>
		);
	}
}
