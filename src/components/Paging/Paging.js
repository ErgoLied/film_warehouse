import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@material-ui/lab";
import {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import queryString from "query-string";
import {getMovies} from "../../services/movies.service";
import {fetchMovies} from "../../redux/actions/actions";

export default function Paging() {
    const location = useLocation();
    const history = useHistory();


    const state = useSelector(state => {
        const {moviesReducer} = state;
        return moviesReducer;
    });
    const {total_pages} = state;

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        setPage(value);
        const query = queryString.parse(location.search);
        query.page = value;

        history.push('/movies?' + queryString.stringify(query));
        getMovies(`/discover/movie?page=${value}`).then(({data}) => {
            dispatch(fetchMovies(data.results));
        });
    };

    return (
        <div className={'pagination'}>
            <Pagination
                count={total_pages}
                shape="rounded"
                page={page}
                onChange={handleChange}
            />
        </div>
    );
}