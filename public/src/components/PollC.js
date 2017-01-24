import React from 'react';
import PollChoice from './PollChoiceC.js';

export default class Poll extends React.Component {
  renderPollChoices() {
    if (typeof this.props.choices === 'undefined') {
      return null;
    }
    return this.props.choices.map((choice) => {
      return <li key={choice}><PollChoice choice={choice} /></li>;
    });
  }
  render() {
    return (
      <div className="row grey darken-2">
        <h1 className="center-align teal-text">Create A Poll</h1>
        <div className="col s8 offset-s2">
          <form className="col s10">
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
              type="submit"
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
}
