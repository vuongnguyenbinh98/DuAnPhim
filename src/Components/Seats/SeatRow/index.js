import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

class SeatRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatList: [],
        }
    }

    handleOnclick = (e) => {
        if (e.target.style.backgroundColor === 'lightgrey') {
            e.target.style.backgroundColor = 'green'
        } else {
            e.target.style.backgroundColor = 'lightgrey'
        }

    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps)
    //     console.log(prevState)
    //     let seatRowGroup = _.chunk(prevProps.SeatList, 16)
    // }

    renderSeatRow = () => {
        let seatRowGroup = _.chunk(this.props.SeatList, 16)
        if (seatRowGroup) {
            return seatRowGroup.map((items, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {items.map((item) => {
                            this.state.seatList.push(item)
                            return (<td>
                                {/*<input onClick={this.handleOnclick}*/}
                                {/*       style={{*/}
                                {/*           cursor: `${item.daDat ? 'not-allowed' : 'pointer'}`*/}
                                {/*       }}*/}
                                {/*       name={item.tenGhe}*/}
                                {/*       type="checkbox"*/}
                                {/*       className="seats"*/}
                                {/*       value={item.maGhe}/>*/}
                                <div style={{
                                    backgroundColor: `${item.daDat ? 'red' : 'lightgrey'}`,
                                    cursor: `${item.daDat ? 'not-allowed' : 'pointer'}`
                                }}
                                     className={'seat-status'}
                                     onClick={this.handleOnclick}
                                     name={item.tenGhe}
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