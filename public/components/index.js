import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import * as materialize from 'materialize-css';

$(document).ready(function(){
      $('.parallax').parallax();
});

class Main extends React.Component {
  render () {
    return (
      <div>

        <div className="parallax-container">
           <div className="parallax">
            <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="></img>
          </div>
        </div>

        <div className="section grey darken-2">
          <div className="row">
            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">check_circle</i><br></br>
                  <span className="card-title">Vote And See Results</span>
                  <p>Everyone can vote, add another option and see the results</p>
                </div>
                <div className="card-action">
                  <a href="#">Check It Out</a>
                </div>
              </div>
            </div>

            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">open_in_new</i><br></br>
                  <span className="card-title">Create And Share Polls</span>
                  <p>Create, edit, delete and share your Poll as authenticated user</p>
                </div>
                <div className="card-action">
                  <a href="#">Log In Now</a>
                </div>
              </div>
            </div>

            <div className="col s12 m4 card-panel hoverable teal">
              <div className="card blue-grey darken-4 center-align">
                <div className="card-content teal-text">
                  <i className="large material-icons">assessment</i><br></br>
                  <span className="card-title">Databases And Charts</span>
                  <p>Experience your results with updated charts and Databases</p>
                </div>
                <div className="card-action">
                  <a href="#">Check It Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img src="https://images.unsplash.com/photo-1470074506451-60892faba445?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="></img>
          </div>
        </div>

      </div>
    );
  }
}


ReactDOM.render(
  <Header />, document.getElementById('header')
);
ReactDOM.render(
    <Footer />, document.getElementById('footer')
);
ReactDOM.render(
    <Main />, document.getElementById('main')
);
