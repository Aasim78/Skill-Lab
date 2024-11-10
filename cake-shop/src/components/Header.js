// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Delicious Cakes Bakery</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Cake Categories</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
