import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


const App: React.FC = () => {
  return (
    <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
    </BrowserRouter>
  );
};

export default App;
