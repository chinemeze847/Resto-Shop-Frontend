import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


const App: React.FC = () => {
  return (
    <div className='app'>
      <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
};

export default App;
