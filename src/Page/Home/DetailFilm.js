import React, {Component} from "react";
import * as action from "./../../redux/Action";
import {connect} from "react-redux";
import '../../scss/DetailFilm.scss'

class DetailFilm extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        const id = this.props.match.params.id;
        this.props.getDetailMovie(id);
    }

    //   componentWillUnmount() {
    //     //chay sau cung, khi component bi pha huy
    //     console.log("WillUnmount");
    //     this.props.resetDetailMovie();
    //   }

    render() {
        const {film} = this.props;
        return (
            <div className='detail-wrapper'>
                <div className='bg-fade'></div>
                <div className="container detail-container">
                    <h3>DetailMovie</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={film.hinhAnh} atl=""/>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Tên phim: </b><span>{film.tenPhim}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Ngày khởi chiếu: </b><span>{film.ngayKhoiChieu}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Đánh giá: </b><span>{film.danhGia}</span>
                                </li>
                                <li className="list-group-item">
                                    <b>Mô tả: </b><span>{film.moTa}</span>
                                </li>
                            </ul>
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
        // resetDetailMovie: () => {
        //   dispatch(action.actGetDetailMovie({}));
        // },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);
