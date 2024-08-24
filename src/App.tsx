import './styles/app.css';
import AppRoutes from './routes';
import Header from './template/Header';
import Footer from './template/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-wrapper space">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
