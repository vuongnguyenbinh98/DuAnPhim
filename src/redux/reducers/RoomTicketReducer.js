import * as ActionType from '../Constants/ActionType'

let initialState = {
    thongTinPhim: {},
    danhSachGhe: [],
    isBookingSuccess: false
}

const roomTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_ROOM_TICKET:
            state = action.data
            return {...state}
        case ActionType.ACT_BOOKING_TICKET:
            if (action.data) {
                state.isBookingSuccess = true
            }

            return {...state}
        default:
            return {...state}
    }
}

export default roomTicketReducer