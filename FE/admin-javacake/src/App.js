import './App.css';
import './assets/Style.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Admin from './pages/(logged-in)/Admin';
import Login from './pages/Login';
import SideMenu from './components/Sidemenu';
import Header from './components/Header'

function App() {
  const token = localStorage.getItem("token")

  return (
    <BrowserRouter>
      <div className="app">
        {token && <SideMenu />}
        <div className='main-content'>
          {token && <Header />}
          <main>
            <Routes>
              <Route path="/login" element={<Login isLoggedIn={Boolean(token)} />} />
              <Route path="/*" element={token ? <Admin /> : <Navigate to="/login" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
