import React, { Component } from "react";
import "./../../scss/Dashboard.scss";

export default class Dashboard extends Component {
  render() {
    return (
      <>
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
                <div className="col-lg-3 sidebar fixed-top">
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
                      Helen Smith
                    </a>
                  </div>
                  <ul className="navbar-nav flex-column mt-4">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-home text-light fa-lg mr-3">
                          <span className="ml-3">Dashboard</span>
                        </i>
                      </a>
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
                      <a
                        href="#"
                        className="nav-link text-white p-3 mb-2 sidebar-link "
                      >
                        <i className="fa fa-chart-line text-light fa-lg mr-3">
                          <span className="ml-3">Analytics</span>
                        </i>
                      </a>
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
                <div className="col-lg-9"></div>
                {/* End Top Nav */}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
