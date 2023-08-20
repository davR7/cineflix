import './style.css';
import logoImg from '../../assets/img/logo.png';

const CineflixLogo = () => {
  return (
    <div className="cineflix-logo">
      <div className="cineflix-logo__wrapper">
        <img className="cineflix-logo__img" src={logoImg} alt="logo" />
        <h2 className="cineflix-logo__text">Cineflix</h2>
      </div>
    </div>
  );
};

export default CineflixLogo;
