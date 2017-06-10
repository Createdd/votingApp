import React from 'react';

import Poll from './Poll';
import Chart from './Chart';

const SinglePoll = () =>
  (<div className="container">
    <div className="row">

      <div className="col s12 m4">
        <div className="card blue-grey darken-4 hoverable">
          <Poll />

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
      </div>

      <div className="col s12 m8">
        <Chart />
      </div>

    </div>

  </div>);

export default SinglePoll;
