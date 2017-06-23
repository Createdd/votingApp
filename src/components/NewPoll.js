import React from 'react';
import shortid from 'shortid';

export default class NewPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answers: ['Answer1', 'Answer2'],
		};
	}

	componentWillUnmount() {
		this.setState = {
			question: '',
			answers: ['Answer1', 'Answer2'],
		};
	}

	addAnswer = () => {
		let answers = [];
		for (let i = 0; i < this.state.answers.length; i++) {
			let temp = `answer${i}`;
			answers = answers.concat(this.refs[temp].value);
		}
		answers = answers.concat('NewAnswer');
		this.setState({ answers });
	};

	addPoll = () => {
		let answers = [];
		for (let i = 0; i < this.state.answers.length; i++) {
			let temp = `answer${i}`;
			answers = answers.concat(this.refs[temp].value);
		}

		const { questionInp, newPollForm } = this.refs;
		this.setState({ question: questionInp.value, answers }, () =>
			this.props.addPoll(this.state.question, this.state.answers),
		);
		newPollForm.reset();
	};
	render() {
		const answerList = this.state.answers.map((element, ind) => {
			return (
				<div className="input-field col s10" key={shortid.generate()}>
					<i className="material-icons prefix">queue</i>
					<input id={`answer${ind}`} type="text" className="validate" ref={`answer${ind}`} />
					<label htmlFor={`answer${ind}`}>{element}</label>
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
										<i className="orange-text material-icons prefix">
											queue
										</i>Add answer
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
