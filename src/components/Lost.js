import React from 'react';

import loadAgain from '../app';

export default class Lost extends React.Component {
  componentDidMount() {
    loadAgain();
  }

  render() {
    return (
      <div className="container-fluid grey darken-2">
        <h1 className="teal-text container">404! Now dat site does not exist my friend!</h1>
        <h4 className="teal-text container">
					But click through these nice pictures of mountains! :)
				</h4>

        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img
              src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop="
              alt="carouselPicture"
            />
          </a>
          <a className="carousel-item" href="#two!">
            <img
              src="https://images.unsplash.com/photo-1431686969995-531930eb462f?dpr=1&auto=format&fit=crop&w=1500&h=994&q=80&cs=tinysrgb&crop="
              alt="carouselPicture"
            />
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src="https://images.unsplash.com/photo-1429516387459-9891b7b96c78?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
              alt="carouselPicture"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              src="https://images.unsplash.com/photo-1414170695976-59c0463bd11d?dpr=1&auto=format&fit=crop&w=1500&h=913&q=80&cs=tinysrgb&crop="
              alt="carouselPicture"
            />
          </a>
          <a className="carousel-item" href="#five!">
            <img
              src="https://images.unsplash.com/photo-1452535902410-1f31b87be3b5?dpr=1&auto=format&fit=crop&w=1500&h=748&q=80&cs=tinysrgb&crop="
              alt="carouselPicture"
            />
          </a>
        </div>
      </div>
    );
  }
}
