import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './assets/css/style.css';
import './assets/css/range-slider.css';
import './assets/css/nouislider.min.css';
import './assets/css/hover-min.css';
import './assets/vendor/css/bundle.min.css';
import './assets/vendor/css/LineIcons.min.css';
import './assets/vendor/css/swiper.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
