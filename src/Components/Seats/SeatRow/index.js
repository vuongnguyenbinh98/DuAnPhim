import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

class SeatRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maLichChieu: 0,
            danhSachVe: [],
            taiKhoanNguoiDung: '',
        }
    }
    handleOnclick = (e, item) => {
        if (e.target.style.backgroundColor === 'lightgrey') {
            e.target.style.backgroundColor = 'green'
            let seat = {
                maGhe: item.maGhe,
                giaVe: item.giaVe
            }
            this.setState({
                danhSachVe: this.state.danhSachVe.concat(seat),
                taiKhoanNguoiDung: this.props.user.taiKhoan,
            }, () => {
                this.props.orderedTicket(this.state)
            })
        } else {
            e.target.style.backgroundColor = 'lightgrey'
        }
        //Set maLichChieu
        let {maLichChieu} = this.props.filmDetail
        console.log(maLichChieu)
        if (maLichChieu) {
            this.setState({
                maLichChieu
            })
        }
    }
    renderSeatRow = () => {
        let seatRowGroup = _.chunk(this.props.SeatList, 16)
        if (seatRowGroup) {
            return seatRowGroup.map((items, index) => {
                return (
                    <tr style={{background: 'none'}} key={index}>
                        <td>{index + 1}</td>
                        {items.map((item, index) => {
                            return (<td key={index}>
                                <div style={{
                                    backgroundColor: `${item.daDat ? 'red' : 'lightgrey'}`,
                                    pointerEvents: `${item.daDat ? 'none' : 'auto'}`
                                }}
                                     className={'seat-status'}
                                     onClick={(e) => {
                                         this.handleOnclick(e, (e ? item : null))
                                     }
                                     }
                                     name='maGhe'
                                     value={item.maGhe}
                                >
                                </div>
                            </td>)
                        })}
                    </tr>
                )
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.renderSeatRow()}
            </React.Fragment>
        );
    }
}
const
    mapStateToProps = (state) => {
        return {
            SeatList: state.roomTicketReducer.danhSachGhe,
            filmDetail: state.roomTicketReducer.thongTinPhim,
            user: state.UserReducer.credentials,
            isBookingSuccess: state.roomTicketReducer.isBookingSuccess
        }
    }
export default connect(mapStateToProps,

    null
)(
    SeatRow
)
;