import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './homePage/Home';
import Footer from './common/Footer';
import Header from './common/Header';
import Lost from './Lost';
import Polls from './pollsPage/Polls';
import SinglePollCon from './singlePollPage/SinglePollCon';

class App extends React.Component {
  render() {
    const { polls } = this.props;

    return (
      <Router>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Header polls={polls} />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/polls" component={Polls} />
              <Route path="/polls/:id" component={SinglePollCon} />
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
  loggedIn: state.user.loggedIn,
});

App.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(App);
