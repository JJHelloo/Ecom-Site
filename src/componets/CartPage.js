import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css';

const CartPage = () => {
  // Initialize cart state with localStorage data if available
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  // Function to change the quantity of items in the cart
  // This is just a placeholder function, need to implement actual logic
  const updateQuantity = (productId, newQuantity) => {
    setCart(currentCart => currentCart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {/* Placeholder for quantity - need to implement a way to change it */}
              <p>Quantity: 1</p>
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
