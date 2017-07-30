import React from 'react';
import PropTypes from 'prop-types';

export default class NewPoll extends React.Component {
  render() {
    const answerList = this.props.state.answers.map((aw, ind) =>
      (<div className="input-field col s10" key={ind}>
        <i className="material-icons prefix">queue</i>
        <input
          id={`answer${ind}`}
          type="text"
          value={aw.answer}
          onChange={event => this.props.onChange(event, ind)}
          className="validate"
          ref={`answer${ind}`}
        />
        <label htmlFor={`answer${ind}`}>New Answer</label>
      </div>),
		);

    return (
      <div id="modal1" className="modal modal-fixed-footer teal darken-2 center-align">
        <div className="modal-content">
          <h2>New Poll</h2>
          <div className="row">
            <form className="col s12" ref="newPollForm" onSubmit={this.props.addPoll}>
              <div className="row">
                <div className="input-field col s10">
                  <i className="material-icons prefix">question_answer</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    ref="questionInp"
                    onChange={e => this.props.onQuestion(e)}
                    value={this.props.state.question}
                  />
                  <label htmlFor="icon_prefix">Your Question</label>
                </div>
                {answerList}
                <div className="col s10">
                  <a
                    onClick={this.props.addAnswer}
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
            onClick={this.props.addPoll}
            className="modal-action modal-close waves-effect waves-green btn blue-grey darken-4 orange-text"
          >
						Save
					</a>
        </div>
      </div>
    );
  }
}

NewPoll.propTypes = {
  state: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
			PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
		),
    indexInDb: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
  addPoll: PropTypes.func.isRequired,
  onQuestion: PropTypes.func.isRequired,
};
