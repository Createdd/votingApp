import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Poll from './Poll';
import NewPoll from './NewPoll';
import loadAgain from '../app';

export default class Polls extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    return (
      <div className="grey darken-2 center-align">
        <h1 className="blue-grey-text text-darken-4 " style={{ margin: '0px', padding: '0px' }}>
          <strong>Created Polls</strong>
        </h1>
        <div className="row" style={{ margin: '0px', padding: '0px' }}>

          <div className="col s12 m6 card-panel hoverable teal">
            <div className="card blue-grey darken-4">
              <Poll />
              <div className="card-action">
                <Link to="/singlepoll">See the poll</Link>
              </div>
            </div>
          </div>

          <div className="col s12 m6 card-panel hoverable teal">
            <div className="card blue-grey darken-4">
              <Poll />
              <div className="card-action">
                <Link to="/singlepoll">See the poll</Link>
              </div>
            </div>
          </div>

          <div className="col s12 m6 card-panel hoverable teal">
            <div className="card blue-grey darken-4">
              <Poll />
              <div className="card-action">
                <Link to="/singlepoll">See the poll</Link>
              </div>
            </div>
          </div>

        </div>

        <div className="fixed-action-btn">
          <a className="modal-trigger btn-floating btn-large orange pulse" href="#modal1">
            <i className="large material-icons">add</i>
          </a>
        </div>
        <NewPoll />

      </div>
    );
  }
}

Poll.PropTypes = {
  name: PropTypes.number,
};
