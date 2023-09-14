import '../components/MovieCard.css'

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path; //esto es segun la documentación

  return (
    <li className='movie-card'>
      <img className="movie-image" width={170} height={250} src={imageUrl} alt={movie.title}/>
      <div>{movie.title}</div>
    </li>
  );
}
