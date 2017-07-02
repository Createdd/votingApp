import React from 'react';

const Signup = (props) => {
  const passToProps = (e) => {
    if (e) e.preventDefault();
    props.login(true);
  };
  return (
    <div className="row">
      <form className="input-field col s8 offset-s2">
        <div className="input-field">
          <input id="email" type="email" className="validate" />
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
          onClick={passToProps}
        >
					Sign up
					<i className="material-icons right">flight_takeoff</i>
        </button>
      </form>
    </div>
  );
};

export default Signup;
