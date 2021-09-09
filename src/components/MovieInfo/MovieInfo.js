import PosterPreview from "../PosterPreview/PosterPreview";
import GenreBadge from "../GenreBadge/GenreBadge";
import StarsRating from "../StarsRating/StarsRating";

export default function MovieInfo({movie}) {
    const {poster_path,title,genre_ids,vote_average} = movie;
  return (
    <div>
        <PosterPreview img={poster_path} alt={title}/>
        <h4>{title}</h4>
        <GenreBadge genre_ids={genre_ids}/>
        <StarsRating vote_average={vote_average}/>
    </div>
  );
}