import React from 'react';
import { Link } from 'react-router-dom';

import loadAgain from '../../app';

export default class Home extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    return (
      <div>
        <div className="parallax-container" style={{ height: '250px' }}>
          <div className="parallax">
            <img className="responsive-img" src="./img/parallax1.jpg" alt="img" />
          </div>
        </div>

        <div className="section grey darken-2">
          <div className="row">
            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">check_circle</i><br />
                  <span className="card-title">Vote And See Results</span>
                  <p>Everyone can vote, add another option and see the results</p>
                </div>
                <div className="card-action">
                  <Link to="/polls">Check It Out</Link>
                </div>
              </div>
            </div>

            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">open_in_new</i><br />
                  <span className="card-title">Create And Share Polls</span>
                  <p>Create, edit, delete and share your Poll as authenticated user</p>
                </div>
                <div className="card-action">
                  <a
                    href="#"
                    data-activates="slide-out"
                    className="button-collapse show-on-large"
                  >
										Log In Now
									</a>
                </div>
              </div>
            </div>

            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">assessment</i><br />
                  <span className="card-title">Databases And Charts</span>
                  <p>Experience your results with updated charts and Databases</p>
                </div>
                <div className="card-action">
                  <Link to="/polls">Check It Out</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="parallax-container" style={{ height: '150px' }}>

          <div className="parallax">
            <img className="responsive-img" src="./img/parallax2.jpg" alt="img" />
          </div>
        </div>

      </div>
    );
  }
}
