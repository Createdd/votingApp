import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Poll from './Poll';
import Chart from './Chart';
import NewAnswerCon from './NewAnswerCon';

const SinglePoll = (props) => {
  const renderDeleteBtn = () => {
    if (props.user.loggedIn) {
      return (
        <Link
          to="/polls"
          className="waves-effect btn red lighten-2"
          onClick={() =>
						props.deletePoll(props.polls.findIndex(elem => elem._id === props.url), props.url)}
        >
          <i className="material-icons right">report_problem</i>
					DELETE Poll
				</Link>
      );
    }
  };
	// return false;

  const editPollBtn = () => {
    if (props.user.loggedIn) {
      return (
        <a className="waves-effect btn teal lighten-2" href="#modal1">
					ADD New Answer
				</a>
      );
    }
  };
	// return false;

  const condRender = () => {
    if (props.state.fetched) {
      return (
        <div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-4 hoverable">
                <Poll
                  poll={props.state.poll}
                  updateVotes={props.updateVotes}
                  url={props.url}
                  polls={props.polls}
                />
                <div className="card-action" />
              </div>
            </div>

            <div className="col s12 m6">
              <Chart poll={props.state.poll} />
            </div>
          </div>

          <div className="row">
            <div className="col s12 m8">
              <a href="https://twitter.com/share" className="btn blue accent-1">
                <i className="waves-effect material-icons right">trending_up</i>
								Tweet Poll
							</a>
              {editPollBtn()}
              {renderDeleteBtn()}
              <NewAnswerCon
                poll={props.state.poll}
                addEditPoll={props.addEditPoll}
                polls={props.polls}
                url={props.url}
              />
            </div>
            <div className="col s12 m4">
              <Link to="/polls" className="waves-effect btn green lighten-2 right-align">
								Back to all Polls
							</Link>
            </div>
          </div>
        </div>
      );
    }
    return <div>loading</div>;
  };

  return (
    <div className="grey darken-2" style={{ margin: '0px', padding: '0px', height: '100%' }}>
      {condRender()}
      <div className="row grey darken-2" />
    </div>
  );
};

SinglePoll.propTypes = {
  polls: PropTypes.arrayOf(
		PropTypes.shape({
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
				PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
			),
}),
	).isRequired,
  url: PropTypes.string.isRequired,
  state: PropTypes.shape({
    poll: PropTypes.shape({
      question: PropTypes.string,
      answers: PropTypes.arrayOf(
				PropTypes.shape({
  answer: PropTypes.string,
  votes: PropTypes.number,
}),
			),
    }).isRequired,
    fetched: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    current: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  deletePoll: PropTypes.func.isRequired,
  updateVotes: PropTypes.func.isRequired,
  addEditPoll: PropTypes.func.isRequired,
};

export default SinglePoll;
