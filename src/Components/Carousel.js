import React, { Component } from "react";
import "../scss/Carousel.scss";

export default class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide w3-card-4"
        data-ride="carousel"
      >
        <div className="carousel-inner abc">
          <div className="carousel-item active img-fluid">
            <img src="./imgCarousel/maxresdefault.jpg" className="" alt="" />
          </div>
          <div className="carousel-item">
            <img
              src="./imgCarousel/batman.jpg"
              className="d-block w-100 img-fluid"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="./imgCarousel/Mad-Max.png"
              className="d-block w-100 img-fluid"
              alt=""
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
