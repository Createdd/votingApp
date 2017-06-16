import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  (<header>
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <Link to="/" className="brand-logo teal-text">
          <i className="material-icons left">poll</i>Dynamic Web Voting App
				</Link>
        <Link to="/sidebar" data-activates="mobile-demo" className="button-collapse">
          <i className="large material-icons right teal-text">play_for_work</i>
        </Link>
        <ul className="right hide-on-med-and-down teal-text">
          <li><Link to="/sidebar" className="teal-text text-lighten-3">Signin/-up</Link></li>
          <li>
            <Link to="/sidebar" className="teal-text text-lighten-3">
              <i className="material-icons right teal-text text-lighten-3">done</i>Logged in as: XXX
						</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>);

export default Header;
