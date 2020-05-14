import React, { Component } from "react";

import { connect } from "react-redux";
import * as action from "../../redux/Action/index";

class Cinema extends Component {
  componentDidMount() {
    this.props.getListCinema();
  }
  renderHTML = () => {
    if (this.props.cinemaList) {
      return this.props.cinemaList.map((item, index) => {
        return (
          <tr>
            <td>
              <img src={item.logo} height="50px" />
            </td>
            <td>{item.maHeThongRap}</td>
          </tr>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>{/* <th>Danh sách rạp</th> */}</tr>
          </thead>
          <tbody>{this.renderHTML()}</tbody>
        </table>
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
