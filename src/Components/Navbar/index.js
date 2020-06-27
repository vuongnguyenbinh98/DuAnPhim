import React, { Component } from "react";

import "./styled.scss";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./../../redux/Action/index";

class Navbar extends Component {
  clickNav = () => {
    // const hambuger = document.querySelector(".hambuger");
    const navLinks = document.querySelector(".content__menu");
    const links = document.querySelectorAll(".nav-links li");
    const login = document.querySelector(".content__right__login");
    // const line = document.querySelector(".line");

    navLinks.classList.toggle("open");
    login.classList.toggle("open");
    //   line.classList.toggle("open");

    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  };
  handleLocalDangXuat = (e) => {
    e.preventDefault();
    this.props.logout();
    // localStorage.clear();
    // this.props.history.push("/home");
    // localStorage.removeItem("credentialsa");
    // window.location.href = "/";
    // window.location.href = "localhost:3000";
  };
  render() {
    return (
      <header>
        <div className="hambuger" onClick={this.clickNav}>
          <div className="line" />
        </div>
        <div className="content">
          <div className="content__logo">
            <NavLink to="/">
              <img src="/img/logo/web-logo.png" alt="" />
            </NavLink>
          </div>
          <div className="content__menu">
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/home" className="active" href="#lichFilm">
                    Lịch chiếu
                  </Link>
                </li>
                <li>
                  <NavLink className="menu" to="#">
                    Cụm rạp
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu" to="#news">
                    Tin tức
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu" to="#">
                    Ứng dụng
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content__right">
            <div className="content__right__login">
              {this.props.credentials ? (
                // <li className="nav-item">
                <>
                  <span className="nav-link name">
                    <span className="text-dark">Hi</span>{" "}
                    {this.props.credentials.hoTen}
                  </span>
                  <span
                    // onClick={(e) => this.handleLocalDangXuat(e)}
                    onClick={this.handleLocalDangXuat.bind(this)}
                    // onClick={this.handleLocalDangXuat.bind(this)}
                    className="dangxuat"
                  >
                    <a>Đăng xuất</a>
                  </span>
                </>
              ) : (
                // </li>
                <>
                  {" "}
                  <NavLink to="/dang-nhap" href="abc">
                    Đăng nhập
                  </NavLink>
                  <NavLink to="/dang-nhap">
                    <img src="/img/logo/avatar.png" alt="" />
                  </NavLink>{" "}
                </>
              )}
            </div>
            <div className="content__right__dropdown">
              <img src="/img/logo/location-header.png" alt="" />
              <div className="content__right__dropdown__select">
                <select
                  id="input"
                  className="form-control dropDown"
                  required="required"
                >
                  <option className="selectDrop" value>
                    Hồ Chí Minh
                  </option>
                  <option className="selectDrop" value>
                    Hà Nội
                  </option>
                  <option className="selectDrop" value>
                    Hà Nội
                  </option>
                  <option className="selectDrop" value>
                    Hà Nội
                  </option>
                  <option className="selectDrop" value>
                    Hà Nội
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credentials: state.UserReducer.credentials,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(action.logout());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
