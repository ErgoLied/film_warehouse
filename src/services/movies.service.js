import {instance} from "./config";

const getMovies = async (url) => await instance(url);
const getMovieById = async (url,id) => await instance(url+id);

export {getMovies,getMovieById}