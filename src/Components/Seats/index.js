import React, {Component} from 'react';
import './styled.scss'
import {connect} from "react-redux";
import {actGetDetailMovieAPI, getRoomTicketAPI} from "../../redux/Action";
import SeatRow from "./SeatRow";

class Seats extends Component {
    componentDidMount() {
        const {maLichChieu} = this.props.match.params;
        this.props.getRoomTicket(maLichChieu)
    }


    render() {
        let {tenPhim, tenCumRap, diaChi, tenRap, ngayChieu, gioChieu} = this.props.filmDetail
        return (
            <div className='wrapper'>
                <h1>Movie Seat Selection</h1>
                <div className="container">
                    <div className="mseat-reg row flex-column">
                        <div className='detail-holder'>
                            <div className={'seat-film-detail'}>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <b>Tên phim: </b><span>{tenPhim}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <b>Tên cụm rạp: </b><span>{tenCumRap}</span>
                                            </div>
                                            <div className='col-6'>
                                                <b>Địa chi: </b><span>{diaChi}</span>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="list-group-item">
                                        <b>Tên rạp: </b><span>{tenRap}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <div className='row'>
                                            <div className='col-6'>
                                                <b>Ngày chiếu: </b><span>{ngayChieu}</span>
                                            </div>
                                            <div className='col-6'>
                                                <b>Giờ chiếu: </b><span>{gioChieu}</span>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="seat_mbt">
                            <li className="smallBox greenBox">Selected Seat</li>
                            <li className="smallBox redBox">Booked Seat</li>
                            <li className="smallBox emptyBox">Empty Seat</li>
                        </ul>
                        <div className="seatStructure text-center" style={{overflowX: "auto"}}>
                            <div className="screen">
                                <h2 className="wthree">Screen this way</h2>
                            </div>
                            <table id="seatsBlock" className='w-100'>
                                <p id="notification"></p>
                                <tr className='column-number'>
                                    <td></td>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>C</td>
                                    <td>D</td>
                                    <td>E</td>
                                    <td>F</td>
                                    <td>G</td>
                                    <td>H</td>
                                    <td>I</td>
                                    <td>J</td>
                                    <td>K</td>
                                    <td>L</td>
                                    <td>M</td>
                                    <td>N</td>
                                    <td>O</td>
                                    <td>P</td>
                                </tr>
                                <SeatRow/>
                            </table>
                            <button type="button" className="btn btn-success my-3">Xác nhận đặt vé</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filmDetail: state.roomTicketReducer.thongTinPhim,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovieSeat: (id) => {
            dispatch(actGetDetailMovieAPI(id))
        },
        getRoomTicket: (roomTicketCode) => {
            dispatch(getRoomTicketAPI(roomTicketCode))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seats);