import {instance} from "./config";

const getGenres = async () => await instance('/genre/movie/list');

export {getGenres}