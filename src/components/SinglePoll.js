import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Poll from './Poll';
import Chart from './Chart';

class SinglePoll extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="grey darken-2 center-align">
        <div className="row">
          <div className="col s12 m4">
            <div className="card blue-grey darken-4 hoverable">
              <Poll
                polls={props.polls}
                index={parseInt(props.match.params.id, 10)}
                url={props.match.params.id}
              />
              <div className="card-action">
                <a href="https://twitter.com/share" className="btn blue accent-1">
                  <i className="waves-effect material-icons right">trending_up</i>
									Tweet Poll
								</a>
                <a className="waves-effect btn red lighten-2">
                  <i className="material-icons right">report_problem</i>
									DELETE Poll
								</a>
              </div>
            </div>
            <Link to="/polls" className="waves-effect btn green lighten-2">Back to all Polls</Link>
          </div>

          <div className="col s12 m8">
            <Chart />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});

export default connect(mapStateToProps)(SinglePoll);
