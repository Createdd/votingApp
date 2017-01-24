import React from 'react';

const pollChoice = (props) => {
  return (
    <div className="row grey darken-2">
      <div className="col s8 offset-s2">
        <form action="#">
          <input
            id="choice"
            type="radio"
            name="choice"
            aria-label={'Label for: ' + props.choice}
            className="with-gap"
            checked
          />
          <label forHtml="choice">
            <i className="small material-icons prefix teal-text">
              playlist_add
            </i>
          </label>
          <input
            type="text"
            className="validate"
            value={props.choice}
            aria-label={'Label for: ' + props.choice}
            disabled="disabled"
          />
        </form>
      </div>
    </div>
  );
};
export default pollChoice;
