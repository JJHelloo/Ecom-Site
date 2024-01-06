import React, {useEffect} from 'react';
import { ProductsInfo } from './ProductsInfo.js'; 
import '../styles/ProductsPage.css'; 

const ProductsPage = ({ cart, setCart }) => {
  
  const addToCart = (productToAdd) => {
    setCart(currentCart => {
      const existingProductIndex = currentCart.findIndex(product => product.id === productToAdd.id);
      if (existingProductIndex >= 0) {
        // Clone the cart to avoid mutating the state directly
        const updatedCart = [...currentCart];
        // Initialize quantity to 1 if it's not set
        const existingQuantity = updatedCart[existingProductIndex].quantity || 0;
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: existingQuantity + 1
        };
        return updatedCart;
      } else {
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      }
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
