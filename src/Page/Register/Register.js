import React, { Component } from "react";
import * as action from "./../../redux/Action";
import { connect } from "react-redux";
import "./../../scss/Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  // handleSubMit = (e) => {
  //   e.prevenDefault();
  //   console.log(this.state);
  //   this.props.resgisterUser(this.state);
  // };
  handleSubMit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.resgisterUser(this.state);
  };
  render() {
    return (
      <div className="bg_register">
        <h2 className="h2_name">Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubMit} className="container">
          <div className="form-group">
            <span className="span_tk">Tài khoản</span>
            <input
              type="text"
              className="form-control ip_tk"
              name="taiKhoan"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <span className="span_mk">Mật khẩu</span>
            <input
              type="text"
              className="form-control ip_mk"
              name="matKhau"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <span className="span_ht">Họ và tên</span>
            <input
              type="text"
              className="form-control ip_ht"
              name="hoTen"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <span className="span_email">Email</span>
            <input
              type="text"
              className="form-control ip_email"
              name="email"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-group">
            <span className="span_sdt">Số điện thoại</span>
            <input
              type="text"
              className="form-control ip_sdt"
              name="soDt"
              onChange={this.handleOnChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn ">
              Ký xác nhận
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resgisterUser: (user) => {
      dispatch(action.actResgisterUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
