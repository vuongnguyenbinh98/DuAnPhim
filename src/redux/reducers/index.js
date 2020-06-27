import { combineReducers } from "redux";
import FilmReducer from "./FilmReducer";
import CinemaReducer from "./CinemaReducer";
import roomTicketReducer from "./RoomTicketReducer";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
  FilmReducer,
  CinemaReducer,
  roomTicketReducer,
  UserReducer,
});

export default rootReducer;
