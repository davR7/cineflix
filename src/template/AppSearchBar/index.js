import './style.css';
import magnifier from '../../assets/img/magnifier.png'

const AppSearchBar = () => {

  return (
    <form className="app-search-bar">
      <input 
        type="text" 
        placeholder="Pesquise aqui..." 
        className="app-search-bar__field"
      />
      <button type="submit" className="app-search-bar__btn">
        <img className="app-search-bar__img" src={magnifier} alt="search bar" />
      </button>
    </form>
  )
}

export default AppSearchBar;