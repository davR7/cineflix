import './style.css';
import { apiBaseUrl, movieLang } from '../../baseUrl';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import MovieTrailer from '../../components/MovieTrailer';

const ViewMovie = () => {
  const { id } = useParams();
  const { REACT_APP_API_KEY } = process.env

  const {
    data: movieDetails,
    error: errorMovieDetails,
    loading: loadingMovieDetails
  } = useFetch(`${apiBaseUrl}/movie/${id}?${REACT_APP_API_KEY}&append_to_response=videos&${movieLang}`);

  return (
    <main className="view-movie">
      <MovieDetails
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
      />
      <MovieTrailer
        trailer={movieDetails
          && movieDetails.videos}
        trailerLoading={loadingMovieDetails}
      />
    </main>
  )
}

export default ViewMovie;