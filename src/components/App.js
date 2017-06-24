import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PollActionCreators from '../ducks/polls';

import loadAgain from '../app';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Lost from './Lost';
import Sidebar from './Sidebar';
import Polls from './Polls';
import SinglePoll from './SinglePoll';
import NewPoll from './NewPoll';
import Login from './Login';

class App extends React.Component {
  render() {
    const { dispatch, polls, loggedIn } = this.props;

    return (
      <Router>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/polls" component={Polls} />
              <Route path="/polls/:id" component={SinglePoll} />
              <Route path="/topics" component={Header} />
              <Route component={Lost} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
  loggedIn: state.loggedIn,
});

App.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
