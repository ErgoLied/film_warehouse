import {FETCH_GENRES, FETCH_MOVIE_BY_ID, FETCH_MOVIES, FETCH_PAGES} from "./index";

const fetchMovies = (value) => {
    return {type: FETCH_MOVIES, payload: value}
}
const fetchMovieById = (value) => {
    return {type: FETCH_MOVIE_BY_ID, payload: value}
}
const fetchPages = (value) => {
    return {type: FETCH_PAGES, payload: value}
}
const fetchGenres = (value) => {
    return {type: FETCH_GENRES, payload: value}
}

export {fetchMovies, fetchMovieById, fetchPages, fetchGenres}