import React from 'react';

export default class Poll extends React.Component {
  render() {
    return (
      <div className="row grey darken-2">
        <h1 className="center-align teal-text">Create A Poll</h1>
        <div className="col s8 offset-s2">
          <form className="input-field col s10">
            <span className="teal-text">Poll Title: </span>
            <div className="input-field inline">
              <input id="pollTitle" type="text" className="validate"/>
              <label forHtml="pollTitle">Add title</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix teal-text">playlist_add</i>
              <input id="choice" type="text" className="validate"/>
              <label forHtml="choice">Choice</label>
            </div>
            <button className="btn waves-effect waves-green blue-grey darken-3" type="submit" name="action">Create
              <i className="material-icons right">extension</i>
            </button>
        </form>
        </div>
      </div>
    );
  }
}
