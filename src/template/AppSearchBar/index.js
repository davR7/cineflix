import './style.css';
import magnifier from '../../assets/img/magnifier.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppSearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handlerSubmit = e => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <form className="app-search-bar" onSubmit={handlerSubmit}>
      <input 
        type="text" 
        placeholder="Pesquise aqui..." 
        className="app-search-bar__field"
        onChange={({target}) => setSearch(target.value)}
        value={search}
      />
      <button type="submit" className="app-search-bar__btn">
        <img className="app-search-bar__img" src={magnifier} alt="search bar" />
      </button>
    </form>
  )
}

export default AppSearchBar;