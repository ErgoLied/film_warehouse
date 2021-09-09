import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovieById} from "../../services/movies.service";
import {fetchMovieById} from "../../redux/actions/actions";

export default function MoviesListCard(props) {
    const {id} = useParams('id');

    const state = useSelector(state => {
        const {moviesReducer} = state;
        return moviesReducer;
    });
    const {movie} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        getMovieById(`/movie/`, id).then(({data}) => {
            console.log(data);
            dispatch(fetchMovieById(data.results));
        });
    }, [dispatch, id])


    return (
        <div>

            {movie.map(value => <div key={value.id}>{value.title}</div>)}

        </div>
    );
}