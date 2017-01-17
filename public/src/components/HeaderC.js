import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content blue-grey darken-3">
          <li><a href="#!">Polls</a></li>
          <li><a href="#!">User</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <a href="#!" className="brand-logo teal-text">
              <i className="large material-icons left">
                poll
              </i>Dynamic Web Voting App
            </a>
            <a
              href="#!"
              data-activates="mobile-demo"
              className="button-collapse"
            >
              <i className="material-icons right teal-text">expand_more</i>
            </a>
            <ul className="right hide-on-med-and-down teal-text">
              <li><a href="#" className="teal-text">SignIn</a></li>
              <li><a href="#" className="teal-text">Signup</a></li>
              <li>
                <a
                  className="dropdown-button teal-text"
                  href="#!"
                  data-activates="dropdown1"
                >
                   I am looking for<i className="material-icons right">
                    zoom_in
                  </i>
                </a>
              </li>
            </ul>
            <ul className="side-nav blue-grey darken-3" id="mobile-demo">
              <li><a href="#" className="teal-text">SignIn</a></li>
              <li><a href="#" className="teal-text">Signup</a></li>
              <li>
                <a href="#" className="teal-text">I am looking for Polls</a>
              </li>
              <li>
                <a href="#" className="teal-text">I am looking for Users</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
