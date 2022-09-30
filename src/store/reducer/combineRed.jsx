import { combineReducers } from "redux";
import favorites from "./favorites";
import moviesReducer from "./movieReducer";
export default combineReducers({
  fav: favorites,
  movies: moviesReducer,
});
