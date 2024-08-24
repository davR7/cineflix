import './style.css';
import { scrollToTopSmooth } from '../../utils';
import { MoviesProps } from '../../types/Movies';
import { usePage } from '../../hooks/usePage';

const MAX_BTN = 9;
const MAX_BTN_LEFT = (MAX_BTN - 1) / 2;

type PaginationsProps = {
  items: MoviesProps;
  limit?: number;
};

const Pagination: React.FC<PaginationsProps> = ({ items, limit = 20 }) => {
  const { page, setPage } = usePage();
  const pages = (items !== null && Math.ceil(items.total_results / limit)) || 1;
  const startBtn = Math.max(page - MAX_BTN_LEFT, 1);

  const prevPage = () => {
    setPage(prev => prev - 1);
    scrollToTopSmooth();
  };
  const nextPage = () => {
    setPage(prev => prev + 1);
    scrollToTopSmooth();
  };

  const handlePage = (value: number): void => {
    setPage(value);
    scrollToTopSmooth();
  };

  return (
    <ul className="movie-pagination container section-space">
      {items && items.results.length >= 1 && (
        <li className="movie-pagination__item">
          <button
            className={
              page === 1
                ? 'movie-pagination__previous disabled'
                : 'movie-pagination__previous'
            }
            onClick={() => prevPage()}
            disabled={page === 1}
          >
            &laquo;
          </button>
        </li>
      )}
      {Array(Math.min(MAX_BTN, pages))
        .fill('')
        .map((_, i) => i + startBtn)
        .map(value => (
          <li className="movie-pagination__item" key={value}>
            <button
              className={
                value === page
                  ? 'movie-pagination__num active'
                  : 'movie-pagination__num'
              }
              onClick={() => handlePage(value)}
            >
              {value}
            </button>
          </li>
        ))}
      {items && items.results.length >= 1 && (
        <li className="movie-pagination__item">
          <button
            className={
              page === pages
                ? 'movie-pagination__next disabled'
                : 'movie-pagination__next'
            }
            onClick={() => nextPage()}
            disabled={page === pages}
          >
            &raquo;
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
