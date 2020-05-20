import React, { Component } from "react";
import * as action from "../../../redux/Action/index";
import { connect } from "react-redux";

import "../Cinema-Detail/styled.scss";

class CinemaDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.maHeThongRap;
    this.props.getDetailCinema(id);
    this.props.getInfoDetailCinema(id);
    // console.log(id);
  }
  componentWillUnmount() {
    this.props.resetDetailCinema();
  }
  renderDetailCinema = () => {
    console.log("hello vi");
    const { detailCinema } = this.props;
    // if (detailCinema.maCumRap) {
    return detailCinema.map((item, index) => {
      return (
        <div className="col-md-4" key={item.maCumRap}>
          {" "}
          <div className="card m-3 cardMe" style={{ width: "18rem" }}>
            <div className="card-body cardBodyMe">
              <h5 className="card-title">{item.tenCumRap}</h5>
              <p className="card-text">{item.diaChi}</p>
              <a href="#" className="btn btn-primary">
                Mua vé
              </a>
            </div>
          </div>
        </div>
      );
    });
    // }
  };
  renderInfoDetailCinema = () => {
    const { infoDetailCinema } = this.props;
    return infoDetailCinema.map((item) => {
      return (
        <div className="col-md-4">
          <div className="card " style={{ width: "18rem" }}>
            {item.lstCumRap.map((lstCR) => {
              return (
                <div className="card-body">
                  <h5 className="card-title">{lstCR.tenCumRap}</h5>
                  {lstCR.danhSachPhim.map((dsp) => {
                    return (
                      <div className="card-text">
                        <p className="card-text">{dsp.tenPhim}</p>
                        <img
                          className="card-img"
                          src={dsp.hinhAnh}
                          width="50px"
                        />
                        <a href="#" className="btn btn-primary">
                          Mua vé
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="cinemaDetail">
        <div className="cinemaDetail__content">
          <div className="container">
            <div className="row rowDetailCinema">
              {this.renderDetailCinema()}
            </div>
            {/* <div className="row rowInfoCinema">
              {this.renderInfoDetailCinema()}
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="row rowInfoCinema">
            {this.renderInfoDetailCinema()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailCinema: state.CinemaReducer.detailCinema,
    infoDetailCinema: state.CinemaReducer.infoDetailCinema,
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    getDetailCinema: (id) => {
      dispatch(action.actGetDetailCinemaAPI(id));
    },
    getInfoDetailCinema: (id) => {
      dispatch(action.actGetInfoDetailCinemaAPI(id));
    },
    resetDetailCinema: () => {
      dispatch(action.actGetDetailCinema([]));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(CinemaDetail);
