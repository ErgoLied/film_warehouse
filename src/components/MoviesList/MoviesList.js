import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";
import MovieInfo from "../MovieInfo/MovieInfo";
import {getGenres} from "../../services/genres.service";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres, fetchMovies} from "../../redux/actions";


export default function MoviesList() {
    const state = useSelector(state => {
        const {moviesReducer} = state;
        return moviesReducer;
    });
    const {movies} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getMovies().then(({data}) => {
            console.log(data);
            dispatch(fetchMovies(data.results))
        });
        getGenres().then(({data}) => {
            console.log(data.genres);
            dispatch(fetchGenres(data.genres))
        })
    }, [dispatch])

  return (
    <div className={'wrapper movie-list'}>
        {movies.map(value => <MovieInfo key={value.id} movie={value}/>)}
    </div>
  );
}