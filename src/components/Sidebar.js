import React from 'react';

import Login from './Login';
import Signup from './Signup';
import SocialMedia from './SocialMedia';

import loadAgain from '../app';

export default class Sidebar extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav blue-grey darken-4 center">
          <li><div className="userView"></div></li>
          <div className="row" />
          <li><Login /></li>
          <div className="row" />
          <div className="row" />
          <div className="row" />
          <li><Signup /></li>
          <div className="row" />
          <li><SocialMedia /></li>
          <div className="row" />
          <li>
            <button
              className="btn waves-effect waves-green blue-grey darken-3"
              type="submit"
              name="action"
            >
							Log Out<i className="material-icons right">done</i>
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
