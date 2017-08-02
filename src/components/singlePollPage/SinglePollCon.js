import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import { deletePoll, postVote, postAnswer } from '../../ducks/polls';
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
    const { polls, deletePoll, postVote, postAnswer } = this.props;

    return (
      <div className="grey darken-2" style={{ margin: '0px', padding: '0px', height: '100%' }}>
        <SinglePoll
          state={this.state}
          deletePoll={deletePoll}
          updateVotes={postVote}
          addEditPoll={postAnswer}
          url={this.props.match.params.id}
          polls={polls}
        />
        <div className="row grey darken-2" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
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
  deletePoll: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired,
  postAnswer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { deletePoll, postVote, postAnswer })(SinglePollCon);
