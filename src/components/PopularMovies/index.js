import './style.css';
import Loading from '../Loading'
import MovieCard from '../MovieCard';
import MoviesPagination from '../MoviesPagination';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { apiBaseUrl, moviesPopular, movieGenreList, movieLang } from '../../baseUrl';

const PopularMovies = () => {
  const [page, setPage] = useState(1);

  const { 
    REACT_APP_API_KEY 
  } = process.env;
  const {
    loading: loadingPopularMovies,
    data: popularMovies,
    error: errorPopularMovies,
  } = useFetch(`${apiBaseUrl}${moviesPopular}&${REACT_APP_API_KEY}&page=${page}&${movieLang}`);
  const {
    data: dataGenres
  } = useFetch(`${apiBaseUrl}${movieGenreList}?${REACT_APP_API_KEY}&${movieLang}`);
  
  return (
    <div className="popular-movies">
      {loadingPopularMovies && <Loading />}
      {errorPopularMovies && <p className="error-message">{errorPopularMovies}</p>}
      <div className="popular-movies__items">
        {!loadingPopularMovies && popularMovies && 
          popularMovies.results.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} allGenres={dataGenres}/>
            </Link>
          ))
        }
      </div>
      <MoviesPagination
        items={popularMovies}
        page={page} 
        setPage={setPage}
      />
    </div>
  )
}

export default PopularMovies;