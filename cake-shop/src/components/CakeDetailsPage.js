// src/components/CakeDetailsPage.js
import React, { useState } from 'react';

function CakeDetailsPage({ cake }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log(`Added ${quantity} of ${cake.name} to the cart.`);
    // Add to cart functionality here
  };

  return (
    <div className="cake-details">
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} />
      <p>{cake.description}</p>
      <div className="customization">
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </label>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default CakeDetailsPage;
