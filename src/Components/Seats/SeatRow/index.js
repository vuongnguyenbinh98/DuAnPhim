import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

class SeatRow extends Component {
    renderSeatRow = () => {
        let seatRowGroup = _.chunk(this.props.SeatList, 16)
        if (seatRowGroup) {
            return seatRowGroup.map((items, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {items.map((item) => {
                            console.log(item)
                            return (<td>
                                <input type="checkbox" className="seats" value="A1"/>
                                <div className={'seat-status'}></div>
                            </td>)
                        })}
                    </tr>
                )
            })
        }

    }

    render() {
        // console.log(_.chunk(this.props.SeatList, 16))
        return (
            <React.Fragment>
                {this.renderSeatRow()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SeatList: state.roomTicketReducer.danhSachGhe
    }
}
export default connect(mapStateToProps, null)(SeatRow);