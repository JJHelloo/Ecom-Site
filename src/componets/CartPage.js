import React from 'react';
import '../styles/CartPage.css';

const CartPage = ({ cart, setCart }) => {
  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  // Function to change the quantity of items in the cart
  // This is just a placeholder function, you'll need to implement actual logic
  const updateQuantity = (productId, newQuantity) => {
    setCart(currentCart => currentCart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

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
              {/* Placeholder for quantity */}
              <p>Quantity: {product.quantity}</p>
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
