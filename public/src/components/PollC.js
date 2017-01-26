import React from 'react';
import PollChoice from './PollChoiceC.js';
import PollResult from '../containers/pollResult';
import { connect } from 'react-redux';
import { updateVotes } from '../actions/index';

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showResult: false, currentChoice: '' };
  }
  handleChecked(choice) {
    this.setState({ currentChoice: choice });
  }
  renderPollChoices() {
    if (typeof this.props.choices === 'undefined') {
      return null;
    }
    return this.props.choices.map(choice => {
      return (
        <li key={choice}>
          <PollChoice
            choice={choice}
            disabled={true}
            checkedOption={this.handleChecked.bind(this)}
            currentChoice={this.state.currentChoice}
          />
        </li>
      );
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let data = this.state.currentChoice;
    if (!data || !data.length > 0) {
      return false;
    }
    this.props.updateVotes(this.props.id, data).then(() => {
      this.setState({ showResult: true });
    });
  }
  renderPoll() {
    return (
      <div className="row grey darken-2">
        <h1 className="center-align teal-text">Create A Poll</h1>
        <div className="col s8 offset-s2">
          <form className="col s10" onSubmit={this.handleSubmit.bind(this)}>
            <span className="teal-text">Poll Title: </span>
            <div className="input-field inline">
              <input id="pollTitle" type="text" className="validate" />
              <label forHtml="pollTitle">Add title</label>
            </div>
            <ul>
              {this.renderPollChoices()}
            </ul>
            <button
              className="btn waves-effect waves-green blue-grey darken-3"
              name="action"
            >
              Create
              <i className="material-icons right">extension</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
  renderPollResult() {
    return <PollResult id={this.props.id} />;
  }
  render() {
    return (
      <div>
        <h3>{this.props.question}</h3>
        {this.state.showResult ? this.renderPollResult() : this.renderPoll()}
      </div>
    );
  }
}
export default connect(null, { updateVotes })(Poll);
