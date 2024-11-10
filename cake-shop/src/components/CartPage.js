// src/components/CartPage.js
import React, { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Cake', quantity: 2, price: 15 }
  ]);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${totalCost}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CartPage;
