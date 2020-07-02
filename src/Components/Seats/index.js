import React, {Component} from 'react';
import './styled.scss'
import {connect} from "react-redux";
import {actGetDetailMovieAPI, getRoomTicketAPI, actBookingTicket} from "../../redux/Action";
import SeatRow from "./SeatRow";
import {withRouter} from 'react-router-dom'
class Seats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderedTicket: {},
            getRoomTicket: () => {
                const {maLichChieu} = this.props.match.params;
                this.props.getRoomTicket(maLichChieu)
            },
            accessToken: '',
        }
    }

    componentDidMount() {
        this.state.getRoomTicket()
    }


    setOrderedTicket = (state) => {
        this.setState({
            orderedTicket: state
        }, () => {
        })
    }
    handleOnclick = () => {
        let {orderedTicket, accessToken} = this.state
        if (orderedTicket && accessToken) {
            this.props.actSubmitBooking(this.state.orderedTicket, this.props.user.accessToken)
        } else {
            this.props.history.push('/dang-nhap')
        }
    }


    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isBookingSuccess) {
            this.state.getRoomTicket()
        }
        // if (nextProps.user.accessToken !== '') {
        //     this.setState({
        //         accessToken: nextProps.user.accessToken
        //     })
        // } else {
        //     this.setState({
        //         accessToken: ''
        //     })
        // }
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
                                <thead style={{background: 'none'}}>
                                {/*<p id="notification"></p>*/}
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
                                </thead>
                                <tbody>
                                {this.state.isBookingSuccess !== '' ? <SeatRow orderedTicket={(state) => {
                                    this.setOrderedTicket(state)
                                }}/> : null}
                                </tbody>
                            </table>
                            <button onClick={this.handleOnclick} type="button" className="btn btn-success my-3">Xác nhận
                                đặt vé
                            </button>
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
        user: state.UserReducer.credentials,
        isBookingSuccess: state.roomTicketReducer.isBookingSuccess
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovieSeat: (id) => {
            dispatch(actGetDetailMovieAPI(id))
        },
        getRoomTicket: (roomTicketCode) => {
            dispatch(getRoomTicketAPI(roomTicketCode))
        },
        actBookingTicket: (bookingInfo, accessToken) => {
            dispatch(actBookingTicket(bookingInfo, accessToken))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Seats));