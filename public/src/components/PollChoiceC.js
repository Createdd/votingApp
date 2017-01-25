import React, { Component } from 'react';

export default class PollChoice extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  componentWillMount() {
    if (this.props.choice) {
      this.setState({ text: this.props.choice });
    }
  }
  handleChoiceUpdate(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div className="input-field">
        <input
          id="choice"
          type="radio"
          name="choice"
          aria-label={'Choose for: ' + this.props.choice}
          value={this.props.choice}
          className="with-gap"
          checked
        />
        <label forHtml="choice">
          <i className="small material-icons prefix teal-text">playlist_add</i>
        </label>
        <input
          type="text"
          className="validate"
          value={this.props.choice}
          aria-label={'Label for: ' + this.props.choice}
          disabled={this.props.disabled ? 'disabled' : ''}
          placeholder='Create your own choice'
          onChange={this.handleChoiceUpdate.bind(this)}
        />
      </div>
    );
  }
}
