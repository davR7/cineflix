import './App.css';
import AppRoutes from './routes';
import AppHeader from './template/AppHeader';
import AppFooter from './template/AppFooter';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper space">
        <AppHeader />
        <AppRoutes />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
