import React from 'react';
import PropTypes from 'prop-types';

const NewPoll = (props) => {
  const answerList = props.state.answers.map((aw, ind) =>
    (<div className="input-field col s10" key={ind}>
      <i className="material-icons prefix">queue</i>
      <input
        id={`answer${ind}`}
        type="text"
        value={aw.answer}
        onChange={event => props.onChange(event, ind)}
        className="validate"
      />
      <label htmlFor={`answer${ind}`}>New Answer</label>
    </div>),
	);

  return (
    <div id="modal1" className="modal modal-fixed-footer teal darken-2 center-align">
      <div className="modal-content">
        <h2>New Poll</h2>
        <div className="row">
          <form className="col s12" onSubmit={props.addPoll}>
            <div className="row">
              <div className="input-field col s10">
                <i className="material-icons prefix">question_answer</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  onChange={e => props.onQuestion(e)}
                  value={props.state.question}
                />
                <label htmlFor="icon_prefix">Your Question</label>
              </div>
              {answerList}
              <div className="col s10">
                <a
                  onClick={props.addAnswer}
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
          onClick={props.addPoll}
          className="modal-action modal-close waves-effect waves-green btn blue-grey darken-4 orange-text"
        >
					Save
				</a>
      </div>
    </div>
  );
};

NewPoll.propTypes = {
  state: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
			PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
		),
  }).isRequired,
  addAnswer: PropTypes.func.isRequired,
  addPoll: PropTypes.func.isRequired,
  onQuestion: PropTypes.func.isRequired,
};

export default NewPoll;
