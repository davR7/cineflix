import './style.css';
import Loading from '../../components/Loading'
import MovieCard from '../../components/MovieCard';
import MoviesPagination from '../../components/MoviesPagination';
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { apiBaseUrl, moviesSearch, movieGenreList, movieLang } from '../../baseUrl';

const ViewSearch = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const { 
    REACT_APP_API_KEY 
  } = process.env;
  const {
    data: foundMovies,
    error: errorFoundMovies,
    loading: loadingFoundMovies
  } = useFetch(`${apiBaseUrl}${moviesSearch}?${REACT_APP_API_KEY}&query=${query}&page=${page}&${movieLang}`);
  const {
    data: allGenres
  } = useFetch(`${apiBaseUrl}${movieGenreList}?${REACT_APP_API_KEY}&${movieLang}`)

  return (
    <div className="view-search">
      <h3 className="page-title">Resultado para <strong class="query-word">{query}</strong></h3>
      {loadingFoundMovies && <Loading />}
      {errorFoundMovies && <p className="error-message">{errorFoundMovies}</p>}
      {foundMovies && foundMovies.results.length === 0 && <p className="info-message">Nenhum Filme Encontrado.</p>}
      <div className="view-search__items">
        {!loadingFoundMovies && foundMovies && 
          foundMovies.results.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} allGenres={allGenres}/>
            </Link>
          ))
        }
      </div>
      <MoviesPagination
        items={foundMovies}
        page={page} 
        setPage={setPage}
      />
    </div>
  )
}

export default ViewSearch;