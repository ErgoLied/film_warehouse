import {FETCH_MOVIES} from "../actions";

export const moviesReducer = (state = {movies: []}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {...state, movies: [...action.payload]};
        default:
            return state;
    }
}