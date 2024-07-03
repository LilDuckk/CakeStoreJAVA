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
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Cart from './pages/(logged-in)/Cart';
import Userprofie from './pages/(logged-in)/Userprofie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Userprofie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
