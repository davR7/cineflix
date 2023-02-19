import './style.css';

const MAX_BTN = 9;
const MAX_BTN_LEFT = (MAX_BTN - 1) / 2;

const MoviesPagination = ({items, limit = 20, page, setPage}) => {
  const pages = items !== null && Math.ceil(items.total_results / limit);
  const startBtn = Math.max(page - MAX_BTN_LEFT, 1);

  return (
    <ul className="movie-pagination">
      {items && items.results.length >= 1 && 
        (<li className="movie-pagination__item">
          <button 
            className={
              page === 1 ? 
                'movie-pagination__previous disabled' : 
                'movie-pagination__previous'
            }
            onClick={() => setPage(value => value - 1)}
            disabled={page === 1}
          >&laquo;</button>
      </li>)
      }
      {Array(Math.min(MAX_BTN, pages)).fill()
        .map((_, i) => i + startBtn)
        .map(value => (
          <li className="movie-pagination__item" key={value}>
            <button 
              className={value === page ? 
                'movie-pagination__num active' : 
                'movie-pagination__num'
              } 
              onClick={() => setPage(value)}
            >{value}</button>
          </li>
        ))
      }
      {items && items.results.length >= 1 && 
        (<li className="movie-pagination__item">
          <button 
            className={
              page === pages ? 
                'movie-pagination__next disabled' : 
                'movie-pagination__next'
            }
            onClick={() => setPage(value => value + 1)}
            disabled={page === pages}
          >&raquo;</button>
        </li>)
      }
    </ul>
  )
}

export default MoviesPagination;