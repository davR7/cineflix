import './style.css';
import { movieImg } from '../../baseUrl'

const MovieCard = ({movie, allGenres}) => {
  const totGenres = allGenres && allGenres.genres
    .filter(genre => movie.genre_ids.indexOf(genre.id) > -1);
  movie.genre_names = totGenres;

  return (
    <div className="movie-card">
      <img src={movieImg + movie.poster_path} alt={movie.title} />
      <div className="genres">
        <h3 className="genres__title">Gêneros:</h3>
        <ul className="genres__list">
          {movie.genre_names !== null && 
            movie.genre_names.map(genre => (
              <li className="genres__item" key={genre.id}>{genre.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default MovieCard;