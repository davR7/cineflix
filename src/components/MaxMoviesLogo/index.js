import './style.css';
import logoImg from '../../assets/img/logo.png';

const MaxMoviesLogo = () => {
  return (
    <div className="max-movies-logo">
      <div className="max-movies-logo__wrapper">
        <img className="max-movies-logo__img" src={logoImg} alt="logo" />
        <h2 className="max-movies-logo__text">MaxMovies</h2>
      </div>
    </div>
  )
}

export default MaxMoviesLogo;