import React from 'react';

import Login from './Login';
import Signup from './Signup';
import SocialMedia from './SocialMedia';

const Signin = () =>
  (<div>
    <ul id="slide-out" className="side-nav fixed blue-grey darken-4 center-align">
      <li><Login /></li>
      <li><Signup /></li>
      <li><SocialMedia /></li>
      <li>
        <button
          className="btn waves-effect waves-green blue-grey darken-3"
          type="submit"
          name="action"
        >
					Log Out
					<i className="material-icons right">done</i>
        </button>
      </li>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse  show-on-large">
      <i className="material-icons">play_for_work</i>
    </a>
  </div>);

export default Signin;
