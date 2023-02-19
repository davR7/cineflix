import './style.css';
import { movieImg } from '../../baseUrl'
import { formatDate } from '../../utils';
import Loading from '../Loading';

const MovieDetails = ({ movieDetails, errorMovieDetails, loadingMovieDetails }) => {
  return (
    <div className="movie-details">
      {loadingMovieDetails && <Loading />}
      {errorMovieDetails && <p className="error-message">{errorMovieDetails}</p>}
      {!loadingMovieDetails && movieDetails &&
        (<>
          <img className="movie-details__img" src={movieImg + movieDetails.poster_path} alt={movieDetails.title} />
          <div className="movie-details__description">
            <h3 className="movie-details__title">{movieDetails.title}</h3>
            <ul className="movie-details__genres">
              {movieDetails.genres.map(g =>
                (<li className="movie-details__genre-item" key={g.id}>{g.name}</li>)
              )}
            </ul>
            <p className="movie-details__original-title">Titulo Original: {movieDetails.original_title}</p>
            <p className="movie-details__runtime">Duração: {movieDetails.runtime} min</p>
            <p className="movie-details__release-data">Lançamento: {formatDate(movieDetails.release_date)}</p>
            <div className="movie-details__overview">
              <h4 className="movie-details__overview-title">Sinopse:</h4>
              {movieDetails.overview ?
                (<p className="movie-details__overview-text">{movieDetails.overview}</p>) :
                (<p className="movie-details__overview-text">Sem sinopse em Português</p>)
              }
            </div>
          </div>
        </>)}
    </div>
  )
}

export default MovieDetails;