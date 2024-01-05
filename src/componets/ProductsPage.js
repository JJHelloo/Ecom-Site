import React, { useState, useEffect } from 'react';
import { ProductsInfo } from './ProductsInfo.js'; 
import '../styles/ProductsPage.css'; 

const ProductsPage = () => {
  // Initialize the cart from localStorage if available, otherwise set to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add product to cart and save it to localStorage
  const addToCart = (productToAdd) => {
    setCart(currentCart => {
      // Check if the product is already in the cart
      const isProductInCart = currentCart.find(product => product.id === productToAdd.id);

      // If so, just return the current cart without adding it
      if (isProductInCart) {
        return currentCart;
      }

      // Otherwise, add the new product and return the updated cart
      const updatedCart = [...currentCart, productToAdd];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Effect for debugging purposes, to log the cart whenever it changes
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="products-container">
      {ProductsInfo.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
