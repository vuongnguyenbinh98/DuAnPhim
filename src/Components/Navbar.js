import React, { Component } from "react";
import "../scss/Navbar.scss";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="col-md-12 col-sm-12">
          <div className="row">
            <div className="col-md-1 col-sm-2  nav_left">
              <img className="img1" alt src="./img/icon.png" alt="" />
            </div>
            <div className="col-md-8 col-sm-7 nav_mid">
              <ul>
                <NavLink to="/">Lịch chiếu</NavLink>
                <li>Cụm rạp</li>
                <li>Ứng dụng</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-3 nav_right imgLogin">
              <img
                className="btnLogin"
                src="./img/instagram-3814049_960_720.png"
                alt=""
              />
              <p className="btn white" style={{ display: "inline-block" }}>
                Đăng Nhập
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
