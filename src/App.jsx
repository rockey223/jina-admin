import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Faq from './pages/Faq';
import Platforms from './pages/Platforms';
import Products from './pages/Products';
import UserDetails from './pages/UserDetails';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/platform" element={<Platforms />} />
          <Route path="/products" element={<Products />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
