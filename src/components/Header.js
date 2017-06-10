import React from 'react';

const Header = () =>
  (<header>
    <nav>
      <div className="nav-wrapper blue-grey darken-4">
        <a href="#!" className="brand-logo teal-text">
          <i className="material-icons left">poll</i>Dynamic Web Voting App
				</a>
        <a href="#!" data-activates="mobile-demo" className="button-collapse">
          <i className="large material-icons right teal-text">play_for_work</i>
        </a>
        <ul className="right hide-on-med-and-down teal-text">
          <li><a href="#" className="teal-text text-lighten-3">Signin/-up</a></li>
          <li>
            <a href="#" className="teal-text text-lighten-3">
              <i className="material-icons right teal-text text-lighten-3">done</i>Logged in as: XXX
						</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>);

export default Header;
