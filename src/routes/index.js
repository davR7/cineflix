import { Routes, Route } from 'react-router-dom';
import ViewHome from '../views/ViewHome';
import ViewMovie from '../views/ViewMovie';
import ViewSearch from '../views/ViewSearch';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewHome />}/>
      <Route path="movie/:id" element={<ViewMovie />}/>
      <Route path="search" element={<ViewSearch />}/>
    </Routes>
  )
}

export default AppRoutes