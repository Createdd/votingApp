import React from 'react';

export default class Lost extends React.Component {
  render() {
    return (
      <div className="container-fluid grey darken-2">
        <h1 className="teal-text container">
          404! Now dat site does not exist my friend!
        </h1>
        <h4 className="teal-text container">
          But click through these nice pictures of mountains! :)
        </h4>
        <div className="carousel">
          <a className="carousel-item" href="#one!">
            <img
              src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=994&amp;q=80&amp;cs=tinysrgb&amp;crop="
            />
          </a>
          <a className="carousel-item" href="#two!">
            <img
              src="https://images.unsplash.com/photo-1431686969995-531930eb462f?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=994&amp;q=80&amp;cs=tinysrgb&amp;crop="
            />
          </a>
          <a className="carousel-item" href="#three!">
            <img
              src="https://images.unsplash.com/photo-1429516387459-9891b7b96c78?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop="
            />
          </a>
          <a className="carousel-item" href="#four!">
            <img
              src="https://images.unsplash.com/photo-1414170695976-59c0463bd11d?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=913&amp;q=80&amp;cs=tinysrgb&amp;crop="
            />
          </a>
          <a className="carousel-item" href="#five!">
            <img
              src="https://images.unsplash.com/photo-1452535902410-1f31b87be3b5?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=748&amp;q=80&amp;cs=tinysrgb&amp;crop="
            />
          </a>
        </div>
      </div>
    );
  }
}
