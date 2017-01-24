import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPolls } from '../actions/index';
import Poll from '../components/poll';

class GetAllPolls extends Component {
  componentWillMount() {
    this.props.fetchAllPolls();
  }
  renderChoices(choices) {
    return Object.keys(choices).map(choice => {
      return <li key={choice}>{choice}</li>;
    });
  }
  renderPolls() {
    if (typeof this.props.polls !== 'undefined') {
      return this.props.map(poll => {
        return (
          <li key={poll._id}>
            <Poll
              choices={Object.keys(poll.choices)}
              question={poll.question}
            />
          </li>
        );
      });
    }
    return null;
  }
  render() {
    return (
      <div className="container-fluid">
        <ul>
          {this.renderPolls()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { polls: state.polls.all };
}
export default connect(mapStateToProps, { fetchAllPolls })(GetAllPolls);
