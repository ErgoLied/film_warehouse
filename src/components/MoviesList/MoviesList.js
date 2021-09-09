import {useEffect} from "react";
import {getMovies} from "../../services/movies.service";
import MovieInfo from "../MovieInfo/MovieInfo";
import {getGenres} from "../../services/genres.service";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres, fetchMovies} from "../../redux/actions";
import {fetchPages} from "../../redux/actions/actions";
import Paging from "../Paging/Paging";
import {Link, Route, Switch} from "react-router-dom";
import MoviesListCard from "../MoviesListCard/MoviesListCard";


export default function MoviesList() {


    const state = useSelector(state => {
        const {moviesReducer} = state;
        return moviesReducer;
    });
    const {movies} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getMovies(`/discover/movie`).then(({data}) => {
            console.log(data);
            dispatch(fetchPages(data.total_pages));
            dispatch(fetchMovies(data.results));
        });
        getGenres().then(({data}) => {
            console.log(data.genres);
            dispatch(fetchGenres(data.genres));
        })
    }, [dispatch])

    return (
        <div>
            <div className={'wrapper movie-list'}>
                {movies.map(value => <MovieInfo key={value.id} movie={value}/>)}
            </div>
            <Route exact path="/movie/:id" render={(props) => {
                return <MoviesListCard {...props}/>
            }}/>
            <Paging/>
        </div>
    );
}