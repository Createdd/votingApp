import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { deletePoll, postVote, postAnswer } from '../../ducks/polls';
import { fetchUser } from '../../ducks/user';
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
    this.props.fetchUser();
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

  componentWillReceiveProps() {
    setTimeout(() => {
      axios
				.get(`/api/polls/${this.props.match.params.id}`)
				.then((res) => {
  this.setState({ poll: res.data, fetched: true });
})
				.catch((err) => {
  console.log(err);
});
    }, 100);
  }

  render() {
    const { polls, user, deletePoll, postVote, postAnswer } = this.props;

    return (
      <div className="grey darken-2" style={{ margin: '0px', padding: '0px', height: '79vh' }}>
        <SinglePoll
          state={this.state}
          deletePoll={deletePoll}
          updateVotes={postVote}
          addEditPoll={postAnswer}
          url={this.props.match.params.id}
          polls={polls}
          user={user}
        />
        <div className="row grey darken-2" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
  user: state.user,
});

SinglePollCon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
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
  user: PropTypes.shape({
    current: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  deletePoll: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired,
  postAnswer: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deletePoll, postVote, postAnswer, fetchUser })(
	SinglePollCon,
);
