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

    if (infoDetailCinema.lstCumRap) {
      return infoDetailCinema.lstCumRap.map((item) => {
        return (
          <ul key={item.maHeThongRap}>
            <li>
              <a href="#">{item.tenCumRap}</a>
              <a href="#">{item.diaChi}</a>
            </li>
          </ul>
        );
      });
    }

    // return infoDetailCinema.map((item) => {
    //   return (
    //     <ul key={item.maHeThongRap}>
    //       <li>
    //         <a href="#">{item.tenHeThongRap}</a>
    //         <a href="#">{item.maHeThongRap}</a>
    //       </li>
    //     </ul>
    //   );
    // });
  };
  render() {
    console.log("hello vi122333");
    return (
      <div className="cinemaDetail">
        <div className="cinemaDetail__content">
          <div className="container">
            <div className="row">{this.renderDetailCinema()}</div>
            <div className="row">{this.renderInfoDetailCinema()}</div>
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
  };
};
export default connect(mapStateToProps, mapDispathToProps)(CinemaDetail);
