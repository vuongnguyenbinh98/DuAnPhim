import React, { Component } from "react";
import * as action from "./../../redux/Action";
import { connect } from "react-redux";
import Background from "./../../asset/Login/bg_Login.jpg";
import "../../scss/Login.scss";

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
        <img src={Background} />
        <div className="box_login">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <form onSubmit={this.handleSubmi}>
                <div className="text_box">
                  <label className="lb_login">Login</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="taiKhoan"
                    onChange={this.handleOnchange}
                  />
                </div>
                <div className="text_box">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="matKhau"
                    onChange={this.handleOnchange}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Login
                </button>
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
