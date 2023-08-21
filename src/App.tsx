import './styles/app.css';
import AppRoutes from './routes';
import Header from './template/Header';
import Footer from './template/Footer';

function App() {
  return (
    <div className="app">
      <div className="app__wrapper space">
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
