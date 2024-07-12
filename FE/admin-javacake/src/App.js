import './App.css';
import './assets/Style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/(logged-in)/Admin';
import AccountManage from './pages/(logged-in)/AccountManage';
import OrderManage from './pages/(logged-in)/OrderManage';
import ProductMange from './pages/(logged-in)/Product/ProductManage';
import RecipeManage from './pages/(logged-in)/RecipeManage';
import CategoryManage from './pages/(logged-in)/Category/CategoryManage';
import Header from './components/Header';
import SideMenu from './components/Sidemenu';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideMenu />
        <div className='main-content'>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/ql-tai-khoan" element={<AccountManage />} />
              <Route path="/ql-muc" element={<CategoryManage />} />
              <Route path="/ql-don-hang" element={<OrderManage />} />
              <Route path="/ql-san-pham" element={<ProductMange />} />
              <Route path="/ql-cong-thuc" element={<RecipeManage />} />
            </Routes>
          </main>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
