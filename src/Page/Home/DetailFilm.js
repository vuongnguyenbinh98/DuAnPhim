import React, {Component} from "react";
import * as action from "./../../redux/Action";
import {connect} from "react-redux";
import "../../scss/DetailFilm.scss";
import {Link} from "react-router-dom";

class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {},
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getDetailMovie(id);
    }

    componentWillUnmount() {
        //chay sau cung, khi component bi pha huy
        console.log("WillUnmount");
        // this.props.resetDetailMovie();
        this.setState({
            film: {},
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            film: nextProps.film,
        });
    }

    renderLichChieu = () => {
        const {film} = this.state;
        console.log(film);
        if (film.lichChieu) {
            return film.lichChieu.map((item, index) => {
                return (
                    <tr key={item.maLichChieu}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>
                            <button className="btn btn-success">
                                <Link
                                    className={"btn-select-seat"}
                                    to={`/seat/${item.maLichChieu}`}
                                    target="_blank"
                                >
                                    Chọn ghế
                                </Link>
                            </button>
                        </td>
                    </tr>
                );
            });
        }
    };

    render() {
        console.log(this.props);
        const {film} = this.state;
        return (
            <div className="detail-wrapper">
                <div className="bg-fade"></div>
                <div className="container detail-container">
                    <h3>DetailMovie</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={film.hinhAnh} alt=""/>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Tên phim: </b>
                                    <span>{film.tenPhim}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Ngày khởi chiếu: </b>
                                    <span>{film.ngayKhoiChieu}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Đánh giá: </b>
                                    <span>{film.danhGia}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Mô tả: </b>
                                    <span>{film.moTa}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row renderRap">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Cum rap</th>
                                    <th>Ten rap</th>
                                    <th>Ngay chieu</th>
                                    <th>Gio chieu</th>
                                </tr>
                                </thead>
                                <tbody>{this.renderLichChieu()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        film: state.FilmReducer.detailFilm,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovie: (id) => {
            dispatch(action.actGetDetailMovieAPI(id));
        },
        resetDetailMovie: () => {
            dispatch(action.actGetDetailMovie({}));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);
