import * as ActionType from "../Constants/ActionType";
let initialState = {
  cinema: [],
  detailCinema: [],
};
const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_CINEMA:
      state.cinema = action.data;
      return { ...state };
    case ActionType.GET_LIST_DETAIL_CINEMA:
      state.detailCinema = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};
export default CinemaReducer;
