import {FETCH_MOVIES, FETCH_PAGES} from "../actions";

export const moviesReducer = (state = {movies: [], total_pages: null}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {...state, movies: [...action.payload]};
        case FETCH_PAGES:
            return {...state, total_pages: action.payload};
        default:
            return state;
    }
}