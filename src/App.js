import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/componets/header';
import Footer from '../src/componets/footer';
import HomePage from '../src/componets/HomePage';
import ProductsPage from '../src/componets/ProductsPage';
import AboutPage from '../src/componets/AboutPage';
import FAQ from '../src/componets/FaqPage';
import Contact from '../src/componets/ContactPage';
import CartPage from '../src/componets/CartPage';
import './App.css';

const App = () => {
  // Initialize the cart from localStorage if available, otherwise set to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router  basename="/Ecom-Site">
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>

      <Footer/>
    </Router>
  );
};

export default App;
