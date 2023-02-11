import PopularMovies from '../../components/PopularMovies';
import './style.css';

const ViewHome = () => {
  return (
    <div className="view-home">
      <h3 className="page-title">Filmes Populares</h3>
      <PopularMovies />
    </div>
  )
}

export default ViewHome;