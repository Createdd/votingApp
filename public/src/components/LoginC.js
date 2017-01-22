import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div className="row grey darken-2">
        <h1 className="center-align teal-text">Login</h1>
        <div className="col s4">
          <h3>Social Media Logins</h3>
        </div>
        <div className="col s8">
          <form className="input-field col s10">
            <div className="input-field">
              <input id="email" type="text" className="validate" />
              <label htmlFor="email">E-Mail</label>
            </div>
            <div className="input-field ">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="btn waves-effect waves-green blue-grey darken-3"
              type="submit"
              name="action"
            >
              Log In
              <i className="material-icons right">flight_land</i>
            </button>
            <div className="section valign-wrapper">
              <a href="#" className="valign waves-effect waves-light teal-text">
                No Account? Create One!
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
