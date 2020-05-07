import React, { Component } from "react";
import styles from "../../Components/App.module.css";
import "../../scss/Home.scss";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [],
      users: null,
      count: null,
      totalPage: null,
      totalCount: null,
    };
  }
  makeHttpRequestWithPage = async (pageNumber) => {
    let response = await fetch(
      `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=1&soPhanTuTrenTrang=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    this.setState({
      users: data.items,
      count: data.count,
      totalPages: data.totalPages,
      totalCount: data.totalCount,
    });
  };
  componentDidMount() {
    this.makeHttpRequestWithPage(10);
  }

  render() {
    // const { movie } = this.props;
    let users, renderPageNumbers;
    console.log(this.state.users);
    if (this.state.users !== null) {
      users = this.state.users.map((user) => (
        <div className="col-sm-3">
          <div className="card">
            <img className="card-img-top image" src={user.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title nameOfFilm">{user.tenPhim}</h4>
              <NavLink className="btn" to={`/detail-film/${user.maPhim}`}>
                Xem thêm
              </NavLink>
            </div>
          </div>
        </div>
      ));
    }

    const pageNumbers = [];
    if (this.state.totalCount !== null) {
      for (
        let i = 1;
        i <= Math.ceil(this.state.totalCount / this.state.totalPages);
        i++
      ) {
        pageNumbers.push(i);
      }

      renderPageNumbers = pageNumbers.map((number) => {
        let classes = this.state.currentPage === number ? styles.active : "";

        return (
          <span
            key={number}
            className={classes}
            onClick={() => this.makeHttpRequestWithPage(number)}
          >
            {number}
          </span>
        );
      });
    }

    return (
      <div>
        <Carousel />
        <div className={styles.app}>
          <div className="contaier ">
            <div className="row">{users}</div>
          </div>

          {/* <div className={styles.pagination}>
            <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
            {renderPageNumbers}
            <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
          </div> */}
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}
