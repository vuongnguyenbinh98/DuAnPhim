import React, { Component } from "react";
import * as action from "./../../redux/Action";
import { connect } from "react-redux";

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
      <div className="container">
        <h3>Đăng nhập</h3>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={this.handleSubmi}>
              <div className="form-group">
                <label>Tên Đăng nhập</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Đăng nhập
              </button>
            </form>
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
