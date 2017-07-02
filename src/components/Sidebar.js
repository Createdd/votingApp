import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Signup from './Signup';
import SocialMedia from './SocialMedia';
import loadAgain from '../app';
import { login, logout } from '../ducks/user';

class Sidebar extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    const { loggedIn, login, logout } = this.props;
    const renderComponent = () => {
      if (loggedIn) {
        return (
          <div>
            <li> You are logged in!</li>
            <li>
              <button
                className="btn waves-effect waves-green blue-grey darken-3"
                type="submit"
                name="action"
                onClick={logout}
              >
								Log Out<i className="material-icons right">done</i>
              </button>
            </li>
          </div>
        );
      }
      return (
        <div>
          <li>
            <Login login={login} />
          </li>
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <li>
            <Signup login={login} />
          </li>
          <div className="row" />
          <li>
            <SocialMedia login={login} />
          </li>
          <div className="row" />
        </div>
      );
    };

    return (
      <div>
        <ul id="slide-out" className="side-nav blue-grey darken-4 center">
          <li>
            <div className="userView" />
          </li>
          <div className="row" />
          {renderComponent()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps, { login, logout })(Sidebar);
