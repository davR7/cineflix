import './style.css';
import DetailsCard from '../../components/DetailsCard';
import MovieTrailer from '../../components/MovieTrailer';
import useFetch from '../../hooks/useFetch';
import { apiBaseUrl, movieLang } from '../../baseUrl';
import { MovieDetailsProps } from '../../types/MovieDetails';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();
  const { VITE_ACCESS_TOKEN } = import.meta.env;

  const {
    data: movieDetails,
    error: errorMovieDetails,
    loading: loadingMovieDetails,
  } = useFetch<MovieDetailsProps>(
    `${apiBaseUrl}/movie/${id}?append_to_response=videos&${movieLang}`,
    VITE_ACCESS_TOKEN
  );

  return (
    <main className="movie container">
      {movieDetails && (
        <div className="movie-box">
          <DetailsCard
            movieDetails={movieDetails}
            loadingMovieDetails={loadingMovieDetails}
            errorMovieDetails={errorMovieDetails}
          />
          <MovieTrailer
            trailers={movieDetails.videos.results}
            trailerLoading={loadingMovieDetails}
          />
        </div>
      )}
    </main>
  );
};

export default Movie;
