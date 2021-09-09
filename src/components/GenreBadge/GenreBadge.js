import {useSelector} from "react-redux";

export default function GenreBadge({genre_ids}) {
    const state = useSelector(state => {
        const {genresReducer} = state;
        return genresReducer;
    });
    const {genres} = state;

    const genreOfMovie = genre_ids.map(value => genres.find(item => item.id === value));


    return (
    <div className={'wrapper genre_badge'}>
        {genreOfMovie.map(value => <span key={value.id}>{value.name}</span>)}
    </div>
  );
}