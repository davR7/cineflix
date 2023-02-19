import './style.css';
import { movieImg } from '../../baseUrl'
import noImage from '../../assets/img/no_image.png'

const MovieCard = ({movie, allGenres}) => {
  const totGenres = allGenres && allGenres.genres
    .filter(genre => movie.genre_ids.indexOf(genre.id) > -1);
  movie.genre_names = totGenres;
  
  const img = movie.poster_path ? movieImg + movie.poster_path : noImage;

  return (
    <div className="movie-card">
      <img className="movie-card__img" src={img} alt={movie.title} />
      <p className="movie-card__title">Título: {movie.title}</p>
      <div className="genres">
        <p className="genres__title">Gênero:</p>
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