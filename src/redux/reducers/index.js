import { combineReducers } from "redux";
import FilmReducer from "./FilmReducer";
import CinemaReducer from "./CinemaReducer";
import roomTicketReducer from "./RoomTicketReducer";
const rootReducer = combineReducers({
  FilmReducer,
  CinemaReducer,
  roomTicketReducer,
});

export default rootReducer;
