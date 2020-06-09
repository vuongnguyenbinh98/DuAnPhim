import React, {Component} from "react";
import styles from "../../Components/App.module.css";
import "../../scss/Home.scss";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import {NavLink} from "react-router-dom";
import Cinema from "../../Components/Cinema";
import News from "../../Components/News";

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
        this.makeHttpRequestWithPage(8);
    }

    render() {
        // const { movie } = this.props;
        let users;
        // let renderPageNumbers;
        console.log(this.state.users);
        if (this.state.users !== null) {
            users = this.state.users.map((user) => (
                //test
                <div key={user.maPhim} className="col-lg-3 col-md-6 col-sm-12 dadyCard">
                    <div className="card" style={{width: "15rem"}}>
                        <img
                            src={user.hinhAnh}
                            className="card-img-top img-fluid"
                            style={{width: "100%"}}
                            alt="..."
                        />

                        <div className="card-body">
                            <h1 className="card-title">{user.tenPhim}</h1>
                            <div className="buy">
                                <NavLink to={`/detail-film/${user.maPhim}`}>Mua vé</NavLink>
                                {/* <div className="trailer">
                  <iframe
                    width="560"
                    height="315"
                    src={user.trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                //end test
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

            // renderPageNumbers = pageNumbers.map((number) => {
            //   let classes = this.state.currentPage === number ? styles.active : "";

            //   return (
            //     <span
            //       key={number.maPhim}
            //       className={classes}
            //       onClick={() => this.makeHttpRequestWithPage(number)}
            //     >
            //       {number}
            //     </span>
            //   );
            // });
        }

        return (
            <div>
                <Carousel/>
                <div className={styles.app}>
                    {/* <div className="contaier">
            <div className="row">{users}</div>
          </div> */}
                    {/* test */}
                    <section id="lichchieu" className="film">
                        <div className="film__content" id="lichFilm">
                            <ul className="nav nav-pills navMe">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        data-toggle="pill"
                                        href="#home"
                                    >
                                        Đang Chiếu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#menu1">
                                        Sắp Chiếu
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane container active" id="home">
                                    <div className="row">{users}</div>
                                </div>
                                <div className="tab-pane container fade" id="menu1">
                                    <div className="row">{users}</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* endtest */}
                    {/* <div className={styles.pagination}>
            <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
            {renderPageNumbers}
            <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
          </div> */}
                </div>
                <div className="container">
                    <Cinema/>
                </div>
                <div className="container" id="news">
                    <News/>
                </div>
                <div className="Footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}
