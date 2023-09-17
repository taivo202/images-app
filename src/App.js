import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Monochromatic from './pages/Monochromatic';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} default />
        <Route path="/t/monochromatic" element={<Monochromatic />} />
      </Routes>
    </>
  );
}

export default App;
