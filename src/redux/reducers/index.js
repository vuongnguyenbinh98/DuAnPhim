import { combineReducers } from "redux";
import FilmReducer from "./FilmReducer";
import CinemaReducer from "./CinemaReducer";

const rootReducer = combineReducers({
  FilmReducer,
  CinemaReducer,
});

export default rootReducer;
