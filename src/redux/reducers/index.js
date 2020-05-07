import { combineReducers } from "redux";
import FilmReducer from "./FilmReducer";

const rootReducer = combineReducers({
  FilmReducer,
});

export default rootReducer;
