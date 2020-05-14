import * as ActionType from "../Constants/ActionType";
let initialState = {
  cinema: [],
};
const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_CINEMA:
      state.cinema = action.data;
      return { ...state };
    default:
      return state;
  }
};
export default CinemaReducer;
