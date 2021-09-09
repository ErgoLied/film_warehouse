import PosterPreview from "../PosterPreview/PosterPreview";
import GenreBadge from "../GenreBadge/GenreBadge";
import StarsRating from "../StarsRating/StarsRating";
import {Link} from "react-router-dom";

export default function MovieInfo({movie}) {
    const {poster_path, title, genre_ids, vote_average, id} = movie;
    return (
        <div>
            <PosterPreview img={poster_path} alt={title}/>
            <Link to={`/movie/${id}`}>
                <h4>{title}</h4>
            </Link>
            <GenreBadge genre_ids={genre_ids}/>
            <StarsRating vote_average={vote_average}/>


        </div>
    );
}