let initialState = {
  detailFilm: {},
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL_MOVIE":
      state.detailFilm = action.data;
      return { ...state };
    default:
      return { ...state };
  }
};

export default filmReducer;
