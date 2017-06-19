import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Lost from './Lost';
import Sidebar from './Sidebar';
import Polls from './Polls';
import SinglePoll from './SinglePoll';

class App extends React.Component {
  render() {
    const { dispatch, questions } = this.props;
		// const addQuestion = bindActionCreators(QuestionActionCreators.addQuestion, dispatch);

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
            <button className="btn" onClick={this.props.addPoll}>Add Polls</button>
            {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sidebar" component={Sidebar} />
              <Route exact path="/polls" component={Polls} />
              <Route exact path="/singlePoll" component={SinglePoll} />
              <Route path="/topics" component={Header} />
              <Route component={Lost} />
            </Switch>*/}
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});

export default connect(mapStateToProps)(App);
