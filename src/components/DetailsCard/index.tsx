import './style.css';
import Loading from '../Loading';
import { movieImg } from '../../baseUrl';
import noImage from '../../assets/img/no_image.jpg';
import { formatDate, noExistTerm } from '../../utils';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { MovieDetailsProps } from '../../types/MovieDetails';

type DetailsCardProps = {
  movieDetails: MovieDetailsProps;
  errorMovieDetails: Error | null;
  loadingMovieDetails: boolean;
};

const DetailsCard: React.FC<DetailsCardProps> = ({
  movieDetails,
  errorMovieDetails,
  loadingMovieDetails,
}) => {
  useScrollToTop();

  return (
    <div className="movie-details">
      {loadingMovieDetails && <Loading />}
      {errorMovieDetails && (
        <p className="error-message">{errorMovieDetails.message}</p>
      )}
      {!loadingMovieDetails && movieDetails && (
        <>
          <img
            className="movie-details__img"
            src={
              noExistTerm(movieDetails.poster_path, 'null')
                ? noImage
                : movieImg + movieDetails?.poster_path
            }
            alt={movieDetails.title}
          />
          <div className="movie-details__description">
            <h3 className="movie-details__title">{movieDetails.title}</h3>
            <ul className="movie-details__genres">
              {movieDetails.genres.map(g => (
                <li className="movie-details__genre-item" key={g.id}>
                  {g.name}
                </li>
              ))}
            </ul>
            <p className="movie-details__original-title">
              Titulo Original: {movieDetails.original_title}
            </p>
            <p className="movie-details__runtime">
              Duração: {movieDetails.runtime} min
            </p>
            <p className="movie-details__release-data">
              Lançamento: {formatDate(movieDetails.release_date)}
            </p>
            <div className="movie-details__overview">
              <h4 className="movie-details__overview-title">Sinopse:</h4>
              {movieDetails.overview ? (
                <p className="movie-details__overview-text">
                  {movieDetails.overview}
                </p>
              ) : (
                <p className="movie-details__overview-text">
                  Sem sinopse em Português
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsCard;
