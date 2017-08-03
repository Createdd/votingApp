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
    const { polls, user } = this.props;

    return (
      <Router>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
          }}
        >
          <Header polls={polls} user={user} />
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
  user: state.user,
});

App.propTypes = {
  polls: PropTypes.arrayOf(
		PropTypes.shape({
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
				PropTypes.shape({
  answer: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
}),
			),
}),
	).isRequired,
  user: PropTypes.shape({
    current: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(App);
