import { Rating } from '@material-ui/lab';

export default function StarsRating({vote_average}) {
  return (
    <div>
        <Rating
            name='rating'
            max={10}
            defaultValue={vote_average}
            precision={0.5}
            size='small'
        />
    </div>
  );
}