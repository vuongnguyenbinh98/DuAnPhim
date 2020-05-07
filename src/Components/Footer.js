import React, { Component } from "react";
import "../scss/Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="container col-sm-12 Footer">
        <div className="row">
          <div className="col-sm-3 content">
            <p className="title">TIX</p>
            <a href="" className="title2">
              FAQ
            </a>
            <br></br>
            <a href="" className="title2">
              Brand Guidelines
            </a>
          </div>
          <div className="col-sm-3 content content2 ">
            <ul>
              <li className="title2">Thỏa thuận</li>
              <li className="title2">Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="col-sm-3 content">
            <p className="title">Đối tác</p>
            <div className="doi_tac">
              <a>
                <img src="" />
              </a>
            </div>
          </div>
          <div className="col-sm-3 content">
            <p className="title">Social</p>
          </div>
        </div>
      </div>
    );
  }
}
