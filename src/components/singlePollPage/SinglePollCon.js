import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { deletePoll, updateVotes, addEditPoll } from '../../ducks/polls';
import Poll from './Poll';
import Chart from './Chart';
import NewAnswer from './NewAnswer';
import SinglePoll from './SinglePoll';
import loadAgain from '../../app';

class SinglePollCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: {},
      fetched: false,
    };
    loadAgain();
  }

  componentDidMount() {
    axios
			.get(`/api/polls/${this.props.match.params.id}`)
			.then((res) => {
  this.setState({ poll: res.data, fetched: true });
})
			.catch((err) => {
  console.log(err);
});
  }

  render() {
    const { polls, deletePoll, updateVotes, addEditPoll } = this.props;

    return (
      <div className="grey darken-2" style={{ margin: '0px', padding: '0px', height: '100%' }}>
        <SinglePoll state={this.state} deletePoll={deletePoll} url={this.props.match.params.id}/>
        <div className="row grey darken-2" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});

SinglePoll.propTypes = {
  // polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  // deletePoll: PropTypes.func.isRequired,
  // updateVotes: PropTypes.func.isRequired,
  // addEditPoll: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deletePoll, updateVotes, addEditPoll })(SinglePollCon);
