import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import Poll from './Poll';
import Chart from './Chart';

class SinglePoll extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="grey darken-2">
        <div className="row valign-wrapper">
          <div className="col s12 m6">
            <div className="card blue-grey darken-4 hoverable">
              <Poll
                polls={props.polls}
                index={parseInt(props.match.params.id, 10)}
                url={props.match.params.id}
              />
              <div className="card-action" />
            </div>

          </div>

          <div className="col s12 m6">
            <Chart
              polls={props.polls}
              index={parseInt(props.match.params.id, 10)}
              url={props.match.params.id}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s8">
            <a href="https://twitter.com/share" className="btn blue accent-1">
              <i className="waves-effect material-icons right">trending_up</i>
							Tweet Poll
						</a>
            <a className="waves-effect btn red lighten-2">
              <i className="material-icons right">report_problem</i>
							DELETE Poll
						</a>
          </div>
          <div className="col s4">
            <Link to="/polls" className="waves-effect btn green lighten-2 right-align">
							Back to all Polls
						</Link>
          </div>

        </div>
        <div className="row grey darken-2" />
        <div className="row grey darken-2" />
        <div className="row grey darken-2" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});

export default connect(mapStateToProps)(SinglePoll);
