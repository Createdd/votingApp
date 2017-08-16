import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Login from './Login';
// import Signup from './Signup';
import SocialMedia from './SocialMedia';
import loadAgain from '../../app';
import { login, logoutUser } from '../../ducks/user';

class Sidebar extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    const { user, login, logoutUser } = this.props;

    const renderComponent = () => {
      if (user.loggedIn) {
        return (
          <div>
            <li>
              Authenticated
						</li>
            <li>
              <button
                className="btn waves-effect waves-green blue-grey darken-3"
                type="submit"
                name="action"
                onClick={logoutUser}
              >
								Log Out<i className="material-icons right">done</i>
              </button>
            </li>
          </div>
        );
      }
      return (
        <div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row"></div>
          <li>
            <SocialMedia login={login} />
          </li>
          <div className="row"></div>
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
  user: state.user,
});

Sidebar.propTypes = {
  user: PropTypes.shape({
    current: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
	// loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { login, logoutUser })(Sidebar);
