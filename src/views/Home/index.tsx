import { usePage } from '../../hooks/usePage';
import Pagination from '../../components/Pagination';
import { useFetchAll } from '../../hooks/useFetchAll';
import { GenresProps } from '../../types/Genres';
import { MoviesProps } from '../../types/Movies';
import {
  apiBaseUrl,
  moviesPopular,
  movieGenreList,
  movieLang,
} from '../../baseUrl';
import CardGroup from '../../components/CardGroup';

const Home = () => {
  const { REACT_APP_API_KEY } = process.env;
  const { page } = usePage();

  const {
    data: apiData,
    error: apiError,
    loading: apiLoading,
  } = useFetchAll<MoviesProps, GenresProps>([
    `${apiBaseUrl}${moviesPopular}&${REACT_APP_API_KEY}&page=${page}&${movieLang}`,
    `${apiBaseUrl}${movieGenreList}?${REACT_APP_API_KEY}&${movieLang}`,
  ]);

  return (
    <main className="home">
      <h3 className="page-title">Os Mais Populares</h3>
      {!apiLoading && apiData?.[0] && (
        <>
          <CardGroup data={apiData} error={apiError} loading={apiLoading} />
          <Pagination items={apiData[0]} />
        </>
      )}
    </main>
  );
};

export default Home;
