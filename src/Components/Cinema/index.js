import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../Cinema/styled.scss";

import { connect } from "react-redux";
import * as action from "../../redux/Action/index";

class Cinema extends Component {
  componentDidMount() {
    this.props.getListCinema();
  }

  renderHTML = () => {
    if (this.props.cinemaList) {
      return this.props.cinemaList.map((item, index) => {
        console.log(index);
        return (
          <li key={item.maHeThongRap} className="nav-item">
            <Link
              className="nav-link navCinema"
              // data-toggle="pill"
              to={`/detail-cinema/${item.maHeThongRap}`}
            >
              <img src={item.logo} height="70px" alt="" />
            </Link>
          </li>
        );
      });
    }
  };
  render() {
    return (
      <div className="cinema">
        <div className="cinema__content">
          {" "}
          <ul className="nav nav-pills navMe">{this.renderHTML()}</ul>
          {/* <div className="tab-content">
          <div className="tab-pane container active" id="home">
            <div className="row">A</div>
          </div>
          <div className="tab-pane container fade" id="#cinema1">
            <div className="row">B</div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {({
//   cinemaList: state.CinemaReducer.cinema,
// });}
const mapStateToProps = (state) => {
  return {
    cinemaList: state.CinemaReducer.cinema,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    getListCinema: () => {
      dispatch(action.actGetListCinemaAPI());
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Cinema);
