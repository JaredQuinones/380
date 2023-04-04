import logo from './logo.svg';
import './App.css';
import Bio from './Bio';
import Bio2 from './Bio2';
import MyCarousel from './MyCarousel';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Carousel } from 'bootstrap';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/carousel">Carousel</Link>
      <Routes>
        <Route path="/" element={<Bio2/>}></Route>
        <Route path="carousel" element={<MyCarousel/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
