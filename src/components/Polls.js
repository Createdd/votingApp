import React from 'react';

import Poll from './Poll';
import NewPoll from './NewPoll';

const Polls = () =>
  (<div className="grey darken-2 center-align">
    <h1 className="blue-grey-text text-darken-4 " style={{ margin: '0px', padding: '0px' }}>
      <strong>Created Polls</strong>
    </h1>
    <div className="row" style={{ margin: '0px', padding: '0px' }}>
      <Poll />
      <Poll />
      <Poll />
      <Poll />
    </div>

    <div className="fixed-action-btn">
      <a className="modal-trigger btn-floating btn-large orange pulse" href="#modal1">
        <i className="large material-icons">add</i>
      </a>
    </div>
    <NewPoll />

  </div>);

export default Polls;
