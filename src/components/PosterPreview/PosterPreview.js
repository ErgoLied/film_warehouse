export default function PosterPreview({img, alt}) {
  return (
        <img src={'https://image.tmdb.org/t/p/original'+img} alt={alt}/>
  );
}