import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

class SeatRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhSachVe: [],
        }
    }

    handleOnclick = (e) => {
        if (e.target.style.backgroundColor === 'lightgrey') {
            e.target.style.backgroundColor = 'green'
        } else {
            e.target.style.backgroundColor = 'lightgrey'
        }
    }


    renderSeatRow = () => {
        let seatRowGroup = _.chunk(this.props.SeatList, 16)
        if (seatRowGroup) {
            return seatRowGroup.map((items, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {items.map((item) => {
                            return (<td>
                                <div style={{
                                    backgroundColor: `${item.daDat ? 'red' : 'lightgrey'}`,
                                    pointerEvents: `${item.daDat ? 'none' : 'auto'}`
                                }}
                                     className={'seat-status'}
                                     onClick={
                                         this.handleOnclick
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
            SeatList: state.roomTicketReducer.danhSachGhe
        }
    }
export default connect(mapStateToProps,

    null
)(
    SeatRow
)
;