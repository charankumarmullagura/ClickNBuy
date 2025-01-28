import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart.js';
import Products from './components/Products.js';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">ClickNBuy</div>
          <button className="menu-button" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="dropdown">
              <Link to="/products" className="nav-link">Products</Link>
              <ul className="dropdown-menu">
                <li><Link to="/products/airConditioner" className="dropdown-item">Air Conditioners</Link></li>
                <li><Link to="/products/computer" className="dropdown-item">Computers</Link></li>
                <li><Link to="/products/refrigerator" className="dropdown-item">Refrigerators</Link></li>
                <li><Link to="/products/furniture" className="dropdown-item">Furniture</Link></li>
                <li><Link to="/products/kitchen" className="dropdown-item">Kitchen</Link></li>
                <li><Link to="/products/menswear" className="dropdown-item">Menswear</Link></li>
                <li><Link to="/products/womenswear" className="dropdown-item">Womenswear</Link></li>
                <li><Link to="/products/mobile" className="dropdown-item">Mobiles</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
