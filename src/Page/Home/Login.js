import React, { Component } from "react";
import * as action from "./../../redux/Action";
import { connect } from "react-redux";
import Background from "./../../asset/Login/bg_Login.jpg";
import Logo from "./../../asset/Login/logoTix.png";
import "../../scss/Login.scss";
import { NavLink } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }
  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmi = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
    console.log(this.props);
    // console.log(this.state);
  };
  render() {
    return (
      <div className="container-fluid bg_login ">
        <img className="img_BG" src={Background} />
        <div className="loginbox">
          <img className="logo" src={Logo} />
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <form onSubmit={this.handleSubmi}>
                <div className="text_box">
                  <label className="lb_login">Login Here</label>
                  <p>Username</p>
                  <input
                    type="text"
                    className="form-control input_user"
                    placeholder="Enter Username"
                    name="taiKhoan"
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className="text_box">
                  <p>Password</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Password"
                    name="matKhau"
                    onChange={this.handleOnchange}
                  />
                </div>
                <a href="#">Lost your passwork?</a>
                <br />
                <a href="#">Don't have an account?</a>
                <a className="btn_setup btn_login">
                  <button type="submit" className="btn ">
                    Login
                  </button>
                </a>
                <a className="btn_setup btn_register">
                  <NavLink to="/register">
                    <button className="btn btn_regis" type="text">
                      Register
                    </button>
                  </NavLink>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, history) => {
      dispatch(action.actLoginAPI(user, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
