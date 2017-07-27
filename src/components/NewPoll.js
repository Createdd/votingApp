import React from 'react';
import shortid from 'shortid';
import axios from 'axios';

export default class NewPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answers: [{ answer: '', votes: 10 }, { answer: '', votes: 10 }],
		};
	}
	reset() {
		this.setState({
			question: '',
			answers: [{ answer: '', votes: 10 }, { answer: '', votes: 10 }],
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
		this.props.update();
		axios
			.post('/api/polls/new', {
				question: this.refs.questionInp.value,
				answers: this.state.answers,
			})
			.catch(function(error) {
				console.error(error);
			});
		this.refs.newPollForm.reset();
		setTimeout(() => {
			this.reset();
		}, 10);
	};

	render() {
		const answerList = this.state.answers.map((aw, ind) => {
			return (
				<div className="input-field col s10" key={ind}>
					<i className="material-icons prefix">queue</i>
					<input
						id={`answer${ind}`}
						type="text"
						value={aw.answer}
						onChange={event => this.onChange(event, ind)}
						className="validate"
						ref={`answer${ind}`}
					/>
					<label htmlFor={`answer${ind}`}>New Answer</label>
				</div>
			);
		});

		return (
			<div id="modal1" className="modal modal-fixed-footer teal darken-2 center-align">
				<div className="modal-content">
					<h2>New Poll</h2>
					<div className="row">
						<form className="col s12" ref="newPollForm" onSubmit={this.addPoll}>
							<div className="row">
								<div className="input-field col s10">
									<i className="material-icons prefix">question_answer</i>
									<input id="icon_prefix" type="text" className="validate" ref="questionInp" />
									<label htmlFor="icon_prefix">Your Question</label>
								</div>
								{answerList}
								<div className="col s10">
									<a
										onClick={this.addAnswer}
										className="waves-effect waves-light btn orange-text left"
									>
										<i className="orange-text material-icons prefix">queue</i>Add answer
									</a>
								</div>
							</div>
							<input type="submit" hidden />
						</form>
					</div>
				</div>

				<div className="modal-footer blue-grey darken-4">
					<a
						onClick={this.addPoll}
						className="modal-action modal-close waves-effect waves-green btn blue-grey darken-4 orange-text"
					>
						Save
					</a>
				</div>
			</div>
		);
	}
}
