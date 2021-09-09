import {FETCH_GENRES, FETCH_MOVIES} from "./index";

const fetchMovies = (value) => {
    return {type: FETCH_MOVIES, payload: value}
}
const fetchGenres = (value) => {
    return {type: FETCH_GENRES, payload: value}
}

export {fetchMovies, fetchGenres}