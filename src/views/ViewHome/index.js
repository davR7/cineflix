import PopularMovies from '../../components/PopularMovies';
import './style.css';

const ViewHome = () => {
  return (
    <div className="view-home">
      <h3 className="page-title">Os Mais Populares</h3>
      <PopularMovies />
    </div>
  )
}

export default ViewHome;