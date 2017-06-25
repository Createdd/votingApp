import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';

import * as PollActionCreators from '../ducks/polls';
import Poll from './Poll';
import NewPoll from './NewPoll';
import loadAgain from '../app';

class Polls extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    const { dispatch, polls } = this.props;
    const addPoll = bindActionCreators(PollActionCreators.addPoll, dispatch);
    const pollComp = polls.map((poll, index) =>
      (<div key={shortid.generate()}>
        <div className="col s12 m6 card-panel hoverable teal">
          <div className="card blue-grey darken-4">
            <Poll polls={polls} index={index} />
            <div className="card-action">
              <Link to={`/polls/${index}`}>See the poll</Link>
            </div>
          </div>
        </div>
      </div>),
		);

    return (
      <div className="grey darken-2 center-align">
        <h1 className="blue-grey-text text-darken-4 " style={{ margin: '0px', padding: '0px' }}>
          <strong>Created Polls</strong>
        </h1>
        <div className="row" style={{ margin: '0px', padding: '0px' }}>
          {pollComp}
        </div>
        <div className="fixed-action-btn">
          <a className="modal-trigger btn-floating btn-large orange pulse" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
        </div>
        <NewPoll addPoll={addPoll} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});

Polls.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Polls);
