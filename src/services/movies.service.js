import {instance} from "./config";

const getMovies = async (url) => await instance(url);

export {getMovies}