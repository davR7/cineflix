import './style.css';
import { Link } from 'react-router-dom';
import { MovieProps } from '../../types/Movie';
import { GenresProps } from '../../types/Genres';
import { movieImg } from '../../baseUrl';
import noImage from '../../assets/img/no_image.jpg';

type CardProps = {
  movie: MovieProps;
  allGenres: GenresProps | null;
};

const Card: React.FC<CardProps> = ({ movie, allGenres }) => {
  const totGenres =
    allGenres &&
    allGenres.genres.filter(genre => movie.genre_ids.indexOf(genre.id) > -1);

  const img = movie.poster_path ? movieImg + movie.poster_path : noImage;

  return (
    <div className="movie-card">
      <Link
        className="movie-card__link"
        to={`/movie/${movie.id}`}
        key={movie.id}
      >
        <img className="movie-card__img" src={img} alt={movie.title} />
        <p className="movie-card__title">Título: {movie.title}</p>
        <div className="genres">
          <p className="genres__title">Gênero:</p>
          <ul className="genres__list">
            {totGenres !== null &&
              totGenres.map(genre => (
                <li className="genres__item" key={genre.id}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default Card;
