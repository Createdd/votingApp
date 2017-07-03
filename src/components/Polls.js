import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { updateVotes, addPoll, fetchPolls } from '../ducks/polls';
import Poll from './Poll';
import NewPoll from './NewPoll';
import loadAgain from '../app';

class Polls extends React.Component {
  componentDidMount() {
    loadAgain();
    this.props.fetchPolls();
  }

  render() {
    const { polls, loggedIn } = this.props;

    const pollComp = polls.map((poll, index) =>
      (<div key={shortid.generate()}>
        <div className="col s12 m6 card-panel hoverable teal">
          <div className="card blue-grey darken-4">
            <Poll polls={polls} index={index} updateVotes={updateVotes} />
            <div className="card-action">
              <Link to={`/polls/${index}`}>See the poll</Link>
            </div>
          </div>
        </div>
      </div>),
		);

    const newPollBtn = () => {
      if (loggedIn) {
        return (
          <div className="fixed-action-btn">
            <a className="modal-trigger btn-floating btn-large orange pulse" href="#modal1">
              <i className="large material-icons">add</i>
            </a>
          </div>
        );
      }
      return false;
    };

    return (
      <div className="grey darken-2 center-align">
        <h1 className="blue-grey-text text-darken-4 " style={{ margin: '0px', padding: '0px' }}>
          <strong>Created Polls</strong>
        </h1>
        <div className="row" style={{ margin: '0px', padding: '0px' }}>
          {pollComp}
        </div>
        {newPollBtn()}
        <NewPoll addPoll={addPoll} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
  loggedIn: state.loggedIn,
});

Polls.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPolls: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { addPoll, updateVotes, fetchPolls })(Polls);
