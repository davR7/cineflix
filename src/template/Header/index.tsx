import './style.css';
import CineflixLogo from '../../components/CineflixLogo';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app-header section-space">
      <nav className="app-nav container">
        <Link to="/">
          <CineflixLogo />
        </Link>
        <SearchBar />
      </nav>
    </header>
  );
};

export default AppHeader;
