import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BrowserRouter>
  );
};

export default App;
