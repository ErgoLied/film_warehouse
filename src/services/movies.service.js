import {instance} from "./config";

const getMovies = async () => await instance('/discover/movie');

export {getMovies}