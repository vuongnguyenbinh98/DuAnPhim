import React, {Component} from "react";
import * as action from "./../../redux/Action";
import {connect} from "react-redux";

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
            <div className="container">
                <h3>DetailMovie</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid" src={film.hinhAnh} atl=""/>
                    </div>
                    <div className="col-sm-6">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>Ten Phim</td>
                                <td>{film.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mo ta</td>
                                <td>{film.moTa}</td>
                            </tr>
                            </tbody>
                        </table>
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
