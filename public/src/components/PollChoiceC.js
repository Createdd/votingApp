import React from 'react';

const PollChoice = (props) => {
  return (
    <div className="input-field">
      <input
        id="choice"
        type="radio"
        name="choice"
        aria-label={'Label for: ' + props.choice}
        className="with-gap"
        checked
      />
      <label forHtml="choice">
        <i className="small material-icons prefix teal-text">playlist_add</i>
      </label>
      <input
        type="text"
        className="validate"
        value={props.choice}
        aria-label={'Label for: ' + props.choice}
      />
    </div>
  );
};
export default PollChoice;
