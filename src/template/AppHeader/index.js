import './style.css';
import MaxMoviesLogo from '../../components/MaxMoviesLogo';
import AppSearchBar from '../AppSearchBar';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <MaxMoviesLogo />
      </Link>
      <AppSearchBar />
    </div>
  )
}

export default AppHeader;