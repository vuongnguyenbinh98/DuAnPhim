import React, { Component } from "react";

export default class Film extends Component {
  render() {
    const { film } = this.props;
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src={film.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{film.tenPhim}</h4>
            <Link
              className="btn btn-success"
              to={`/detail-movie/${movie.maPhim}`}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
