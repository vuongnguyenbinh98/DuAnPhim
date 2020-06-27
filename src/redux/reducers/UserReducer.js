import * as ActionType from "./../Constants/ActionType";
let initialState = {
  credentials: null,
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_LOGIN:
      state.credentials = action.data;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
