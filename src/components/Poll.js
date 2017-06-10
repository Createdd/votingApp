import React from 'react';

const Poll = () =>
  (
    <div className="col s12 m6 card-panel hoverable teal">
      <div className="card blue-grey darken-4">
        <div className="card-content teal-text">
          <span className="card-title">What's your secret?</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className="card-action">
          <a href="#">See the poll</a>
        </div>
      </div>
  </div>);

export default Poll;
