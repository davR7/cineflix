import './style.css';
import CardGroup from '../../components/CardGroup';
import Pagination from '../../components/Pagination';
import { useFetchAll } from '../../hooks/useFetchAll';
import { MoviesProps } from '../../types/Movies';
import { GenresProps } from '../../types/Genres';
import { usePage } from '../../hooks/usePage';
import { useSearchParams } from 'react-router-dom';
import {
  apiBaseUrl,
  moviesSearch,
  movieGenreList,
  movieLang,
} from '../../baseUrl';

const Search = () => {
  const { page } = usePage();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { VITE_ACCESS_TOKEN } = import.meta.env;

  const {
    data: apiData,
    error: apiError,
    loading: apiLoading,
  } = useFetchAll<MoviesProps, GenresProps>(
    [
      `${apiBaseUrl}${moviesSearch}?query=${query}&page=${page}&${movieLang}`,
      `${apiBaseUrl}${movieGenreList}?${movieLang}`,
    ],
    VITE_ACCESS_TOKEN
  );

  return (
    <main className="search">
      <h3 className="page-title">
        Resultado para <strong className="query-word">{query}</strong>
      </h3>
      {!apiLoading && apiData?.[0] && (
        <>
          <CardGroup data={apiData} error={apiError} loading={apiLoading} />
          <Pagination items={apiData[0]} />
        </>
      )}
    </main>
  );
};

export default Search;
