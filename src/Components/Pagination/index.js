import React, { Component } from "react";

export default class Paganation extends Component {
  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a href="#" className="page-link py-2 px-3">
              <span>&laquo;</span>
            </a>{" "}
          </li>{" "}
          <li className="page-item active">
            <a href="#" className="page-link py-2 px-3">
              1
            </a>{" "}
          </li>{" "}
          <li className="page-item">
            <a href="#" className="page-link py-2 px-3">
              2
            </a>{" "}
          </li>{" "}
          <li className="page-item">
            <a href="#" className="page-link py-2 px-3">
              3
            </a>{" "}
          </li>{" "}
          <li className="page-item">
            <a href="#" className="page-link py-2 px-3">
              <span>&raquo;</span>
            </a>{" "}
          </li>{" "}
        </ul>
      </nav>
    );
  }
}
