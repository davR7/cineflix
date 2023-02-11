import './App.css';
import AppRoutes from './routes';
import AppHeader from './template/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppRoutes />
    </div>
  );
}

export default App;
