import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import loadAgain from '../../app';

export default class Header extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    const renderComponent = (props) => {
      if (props.user.loggedIn) {
        return (
          <a
            data-activates="slide-out"
            className="button-collapse show-on-large teal-text text-lighten-3"
          >
            <i className="material-icons right teal-text text-lighten-3">perm_identity</i>Identified
						as: Authenticated
          </a>
        );
      }
      return (
        <a
          data-activates="slide-out"
          className="button-collapse show-on-large teal-text text-lighten-3"
        >
          <i className="material-icons right teal-text text-lighten-3">perm_identity</i>Identified
					as: Visitor
				</a>
      );
    };
    return (
      <header>
        <nav>
          <Sidebar />
          <div className="nav-wrapper blue-grey darken-4">
            <a data-activates="slide-out" className="button-collapse teal-text text-lighten-3">
              <i className="material-icons right orange-text">play_for_work</i>
            </a>
            <Link to="/" className="brand-logo teal-text">
              <i className="material-icons left">poll</i>Dynamic Web Voting App
						</Link>
            <ul className="right hide-on-med-and-down teal-text">
              <li>
                {renderComponent(this.props)}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
