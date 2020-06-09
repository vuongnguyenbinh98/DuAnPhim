import React, {Component} from 'react';
import './styled.scss'
import {connect} from "react-redux";
import {actGetDetailMovieAPI} from "../../redux/Action";

class Seat extends Component {
    // componentDidMount() {
    //     // console.log(this.props.match.params)
    // }

    render() {
        const {tenPhim, cumRap, tenRap,ngayChieuGioChieu} = this.props.match.params
        console.log(new Date(ngayChieuGioChieu))
        let ngayChieu = new Date(ngayChieuGioChieu).toLocaleDateString()
        let gioChieu = new Date(ngayChieuGioChieu).toLocaleTimeString()
        const {film} = this.props
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
                                        <b>Tên cụm rạp: </b><span>{cumRap}</span>
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
                            <li className="smallBox redBox">Reserved Seat</li>
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
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td></td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td className="seatGap"></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="A12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>B</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="B12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>C</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="C12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>D</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="D12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>E</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="E12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr className="seatVGap"></tr>

                                <tr>
                                    <td>F</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="F12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>G</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="G12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>H</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="H12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>I</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="I12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>J</td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J1"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J2"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J3"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J4"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J5"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td></td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J6"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J7"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J8"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J9"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J10"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J11"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                    <td>
                                        <input type="checkbox" className="seats" value="J12"/>
                                        <div className={'seat-status'}></div>

                                    </td>
                                </tr>
                            </table>


                            <button type="button" className="btn btn-success mt-4">Xác nhận đặt vé</button>
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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailMovieSeat: (id) => {
            dispatch(actGetDetailMovieAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);