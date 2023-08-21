import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Movie from '../views/Movie';
import Search from '../views/Search';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Movie />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};

export default AppRoutes;
