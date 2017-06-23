import React from 'react';

export default class NewPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answers: [],
		};
	}
	addPoll = e => {
		if (e) e.preventDefault();
		const { questionInp, answer1, answer2, newPollForm } = this.refs;
		const answers = [answer1.value, answer2.value];
		this.setState({ question: questionInp.value, answers }, () =>
			this.props.addPoll(this.state.question, this.state.answers),
		);
		newPollForm.reset();
	};
	render() {
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
								<div className="input-field col s10">
									<i className="material-icons prefix">queue</i>
									<input id="icon_telephone" type="text" className="validate" ref="answer1" />
									<label htmlFor="icon_telephone">Answer</label>
								</div>
								<div className="input-field col s10">
									<i className="material-icons prefix">queue</i>
									<input id="icon_telephone" type="text" className="validate" ref="answer2" />
									<label htmlFor="icon_telephone">Answer</label>
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
