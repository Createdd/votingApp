import React from 'react';

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="row grey darken-2">
        <div className="col s4">
          <h3>Social Media Logins</h3>
        </div>
        <div className="col s8">
          <form className="input-field col s10">
            <div className="input-field">
              <input id="name" type="text" class="validate" />
              <label for="name">Name</label>
            </div>
            <div className="input-field">
              <input id="email" type="text" class="validate" />
              <label for="email">E-Mail</label>
            </div>
            <div className="input-field ">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
            <div className="input-field">
              <input id="confirmPassword" type="password" class="validate" />
              <label for="confirmPassword">Confirm Password</label>
            </div>
            <button
              className="btn waves-effect waves-green blue-grey darken-3"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">flight_takeoff</i>
            </button>
            <div className="section valign-wrapper">
            <a href="#" className="valign waves-effect waves-light teal-text">Already signed up? Log in!</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
