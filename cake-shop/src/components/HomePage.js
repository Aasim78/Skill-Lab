import React from 'react';
import { Link } from 'react-router-dom';

// Import the images directly from the src folder
import chocolateCakeImage from '../images/chocolate-cake.jpg';
import fruitCakeImage from '../images/fruit-cake.jpg';
import customCakeImage from '../images/custom-cake.jpg';
import featuredCakeImage from '../images/featured-cake.jpg'; // Added featured cake import

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Delicious Cakes Bakery!</h2>
        <p>Your one-stop shop for mouth-watering cakes.</p>
        {/* Updated image source to use the imported featured cake image */}
        <img src={featuredCakeImage} alt="Featured Cake" className="hero-image" />
      </section>

      {/* Cake Categories Section */}
      <section id="categories" className="categories">
        <h3>Our Cake Categories</h3>
        <div className="category-list">
          {/* Chocolate Cakes Category */}
          <div className="category-item">
            <Link to="/categories">
              <img src={chocolateCakeImage} alt="Chocolate Cakes" className="category-image" />
              <h4>Chocolate Cakes</h4>
            </Link>
          </div>

          {/* Fruit Cakes Category */}
          <div className="category-item">
            <Link to="/categories">
              <img src={fruitCakeImage} alt="Fruit Cakes" className="category-image" />
              <h4>Fruit Cakes</h4>
            </Link>
          </div>

          {/* Custom Cakes Category */}
          <div className="category-item">
            <Link to="/categories">
              <img src={customCakeImage} alt="Custom Cakes" className="category-image" />
              <h4>Custom Cakes</h4>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
