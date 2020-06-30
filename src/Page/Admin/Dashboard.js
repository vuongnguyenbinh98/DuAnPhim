import React, { Component } from "react";
import "./../../scss/Dashboard.scss";
import { NavLink, Link } from "react-router-dom";
import ThemNguoiDung from "./ThemNguoiDung";
import { connect } from "react-redux";
import * as action from "./../../redux/Action/index";

class Dashboard extends Component {
  handleLocalDangXuat = (e) => {
    // e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <>
        {/* begin navbar */}
        <nav className="navbar navbar-expand-md navbar-light">
          <button
            className="navbar-toggler ml-auto mb-2 bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid">
              <div className="row">
                {/* Sidebar */}
                <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                  <a
                    href="#"
                    className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border"
                  >
                    Tix
                  </a>
                  <div className="bottom-border pb-3">
                    <img
                      src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                      width="50"
                      className="rounded-circle mr-3"
                    />
                    <a href="#" className="text-white">
                      {this.props.credentials ? (
                        <>
                          Hi{" "}
                          <span className="text-danger">
                            {this.props.credentials.hoTen}
                          </span>
                        </>
                      ) : null}
                    </a>
                  </div>
                  <ul className="navbar-nav flex-column mt-4">
                    <li className="nav-item">
                      <NavLink
                        to="/admin/index"
                        className="nav-link text-white p-3 mb-2 sidebar-link current"
                      >
                        <i className="fa fa-home text-light fa-lg mr-3">
                          <span className="ml-3">Dashboard</span>
                        </i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-user text-light fa-lg mr-3">
                          <span className="ml-3">Profile</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-envelope text-light fa-lg mr-3">
                          <span className="ml-3">Inbox</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-shopping-cart text-light fa-lg mr-3">
                          <span className="ml-3">Sales</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/admin/them-nguoi-dung"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i class="fa fa-address-book text-light fa-lg mr-3">
                          <span className="ml-3">Add User</span>
                        </i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-chart-bar text-light fa-lg mr-3">
                          <span className="ml-3">Charts</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-table text-light fa-lg mr-3">
                          <span className="ml-3">Table</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-wrench text-light fa-lg mr-3">
                          <span className="ml-3">Setting</span>
                        </i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-file-alt text-light fa-lg mr-3">
                          <span className="ml-3">Documentation</span>
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Sidebar */}
                {/* Top Nav */}
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                  <div className="row align-item-center">
                    <div className="col-md-4">
                      <h4 className="text-light text-uppercase mb-0">
                        Dashboard
                      </h4>
                    </div>
                    <div className="col-md-5">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search..."
                          />
                          <button
                            type="button"
                            className="btn btn-default search-button"
                          >
                            <i className="fa fa-search text-danger"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <ul className="navbar-nav">
                        <li className="nav-item icon-parent">
                          <a href="#" className="nav-link icon-bullet">
                            <i className="fa fa-comments text-muted fa-lg"></i>
                          </a>
                        </li>
                        <li className="nav-item icon-parent">
                          <a href="#" className="nav-link icon-bullet">
                            <i className="fa fa-bell text-muted fa-lg"></i>
                          </a>
                        </li>
                        <li className="nav-item ml-md-auto">
                          {/* nut thoat */}
                          <NavLink
                            to="/"
                            className="nav-link"
                            // data-toggle="modal"
                            // data-target="#sign-out"
                          >
                            <i
                              onClick={this.handleLocalDangXuat.bind(this)}
                              className="fa fa-sign-out text-danger  fa-lg"
                            ></i>
                          </NavLink>
                          {/* end nut thoat */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Top Nav */}
              </div>
            </div>
          </div>
        </nav>
        {/* end of navbar */}
        {/* Modal */}
        {/* <div className="modal fade" id="sign-out">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Want to leave?</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">Press logout to leave</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Stay Here
                </button>{" "}
                <NavLink to="/">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    logout
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div> */}
        {/* end modal  */}
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
