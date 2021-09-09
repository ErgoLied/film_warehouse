import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";

const reducer = combineReducers({moviesReducer, genresReducer});

export {reducer}