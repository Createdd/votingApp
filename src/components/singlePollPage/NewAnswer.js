import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const NewAnswer = (props) => {
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

  const renderPre = () =>
		props.poll.answers.map((ans, answerInd) =>
  (<div className="input-field col s10" key={shortid.generate()}>
    <i className="material-icons prefix">done</i>
    <input disabled id={`label${answerInd}and${props.index}`} />
    <label htmlFor={`label${answerInd}and${props.index}`}>
      {ans.answer}
    </label>
  </div>),
		);

  return (
    <div id="modal1" className="modal modal-fixed-footer teal darken-2 center-align">
      <div className="modal-content">
        <h2>Add a new answer</h2>
        <div className="row">
          <form className="col s12" onSubmit={props.addPoll}>
            <div className="row">
              <div className="input-field col s10">
                <i className="material-icons prefix">question_answer</i>
                <input disabled id="icon_prefix" />
                <label htmlFor="icon_prefix">
                  {props.poll.question}
                </label>
              </div>
              {renderPre()}
              {answerList}

              <div className="col s10">
                <a
                  onClick={() => props.addAnswer()}
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
          onClick={() => props.addPoll()}
          className="modal-action modal-close waves-effect waves-green btn blue-grey darken-4 orange-text"
        >
					Save
				</a>
      </div>
    </div>
  );
};

NewAnswer.propTypes = {
  state: PropTypes.shape({
    answers: PropTypes.arrayOf(
			PropTypes.shape({
  answer: PropTypes.string,
  votes: PropTypes.number,
}).isRequired,
		),
  }).isRequired,
  poll: PropTypes.shape({
    question: PropTypes.string,
    answers: PropTypes.arrayOf(
			PropTypes.shape({
  answer: PropTypes.string,
  votes: PropTypes.number,
}),
		),
  }).isRequired,
  addPoll: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
};

export default NewAnswer;
