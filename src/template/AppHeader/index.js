import './style.css';
import MaxMovieLogo from '../../components/MaxMovieLogo';
import AppSearchBar from '../AppSearchBar';

const AppHeader = () => {
  return (
    <div className="app-header">
      <MaxMovieLogo />
      <AppSearchBar />
    </div>
  )
}

export default AppHeader;