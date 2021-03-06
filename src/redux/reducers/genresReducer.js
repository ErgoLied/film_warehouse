import {FETCH_GENRES} from "../actions";


export const genresReducer = (state = {genres: []}, action) => {
    switch (action.type) {
        case FETCH_GENRES:
            return {...state, genres: [...action.payload]};
        default:
            return state;
    }
}