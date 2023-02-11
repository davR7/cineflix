import './style.css';
import logoImg from '../../assets/img/movie.svg';

const MaxMovieLogo = () => {
  return (
    <div className="max-movie-logo">
      <img className="max-movie-logo__img" src={logoImg} alt="logo" />
      <h2 className="max-movie-logo__text">MaxMovie</h2>
    </div>
  )
}

export default MaxMovieLogo;