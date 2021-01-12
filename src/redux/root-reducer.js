import { combineReducers } from "redux";
import movieReducer  from './movies/movie.reducers';

export default combineReducers({ movies: movieReducer });
