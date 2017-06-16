import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import Lost from './Lost';
import Sidebar from './Sidebar';
import Polls from './Polls';
import SinglePoll from './SinglePoll';
import ExamplePolls from '../data/ExamplePolls';
import ExampleUsers from '../data/ExampleUsers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { polls: ExamplePolls, users: ExampleUsers };
  }
  render() {
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
              <Route exact path="/sidebar" component={Sidebar} />
              <Route exact path="/polls" component={Polls} />
              <Route exact path="/singlePoll" component={SinglePoll} />
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
export default App;
