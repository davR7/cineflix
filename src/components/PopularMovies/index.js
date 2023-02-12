import './style.css';
import Loading from '../Loading'
import MovieCard from '../MovieCard';
import useHttp from '../../hooks/useHttp';
import { apiBaseUrl, moviesPopular, movieGenreList, movieLang } from '../../baseUrl';
import { Link } from 'react-router-dom'

const PopularMovies = () => {
  const { REACT_APP_API_KEY } = process.env;
  const [popularMovies] = useHttp(`${apiBaseUrl}${moviesPopular}&${REACT_APP_API_KEY}&${movieLang}`);
  const [allGenres] = useHttp(`${apiBaseUrl}${movieGenreList}?${REACT_APP_API_KEY}&${movieLang}`)
  
  return (
    <div className="popular-movies">
      {popularMovies === null && allGenres && <Loading />}
      <div className="popular-movies__items">
        {popularMovies !== null && popularMovies.results.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} allGenres={allGenres}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularMovies;