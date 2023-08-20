import './style.css';
import CineflixLogo from '../../components/CineflixLogo';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <CineflixLogo />
      </Link>
      <SearchBar />
    </div>
  );
};

export default AppHeader;
