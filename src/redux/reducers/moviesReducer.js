import {FETCH_MOVIE_BY_ID, FETCH_MOVIES, FETCH_PAGES} from "../actions";

export const moviesReducer = (state = {movies: [], movie: [], total_pages: null}, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {...state, movies: [...action.payload]};
            case FETCH_MOVIE_BY_ID:
            return {...state, movie: [...action.payload]};
        case FETCH_PAGES:
            return {...state, total_pages: action.payload};
        default:
            return state;
    }
}