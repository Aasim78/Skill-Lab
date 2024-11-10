import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import HomePage from './components/HomePage';
import CakeCategoriesPage from './components/CakeCategoriesPage';
import CakeDetailsPage from './components/CakeDetailsPage';
import CartPage from './components/CartPage';
import AboutUsPage from './components/AboutUsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const cake = {
    name: 'Chocolate Cake',
    image: '/images/chocolate-cake.jpg',
    description: 'A delicious chocolate cake made with the finest ingredients.',
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>  {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CakeCategoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cake-details" element={<CakeDetailsPage cake={cake} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

