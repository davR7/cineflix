import './style.css';
import Card from '../Card';
import Loading from '../Loading';
import { MoviesProps } from '../../types/Movies';
import { GenresProps } from '../../types/Genres';

type DataProps = [MoviesProps | null, GenresProps | null];

type CardGroupProps = {
  data: DataProps;
  error: Error | null;
  loading: boolean;
};

const CardGroup: React.FC<CardGroupProps> = ({ data, error, loading }) => {
  return (
    <div className="card-group">
      <div className="card-group__message">
        {loading && <Loading />}
        {error && (
          <p className="error-message">Oops, um Erro: {error.message}</p>
        )}
        {data[0] && data[0].results.length === 0 && (
          <p className="info-message">Nenhum filme foi Encontrado.</p>
        )}
      </div>
      <div className="card-group__items">
        {!loading &&
          data[0] &&
          data[0].results.map(movie => (
            <Card movie={movie} key={movie.id} allGenres={data[1]} />
          ))}
      </div>
    </div>
  );
};

export default CardGroup;
