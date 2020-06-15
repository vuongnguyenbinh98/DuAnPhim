import * as ActionType from '../Constants/ActionType'

let initialState = {
    thongTinPhim: {},
    danhSachGhe: []
}

const roomTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_ROOM_TICKET:
            state = action.data
            return {...state}
        default:
            return {...state}
    }
}

export default roomTicketReducer