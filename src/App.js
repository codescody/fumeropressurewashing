import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Comparison from './pages/Comparison';
import Reviews from './pages/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Comparison />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
