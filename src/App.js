import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/componets/header';
import Footer from '../src/componets/footer';
import './App.css'
import HomePage from '../src/componets/HomePage';
import Products from '../src/componets/ProductsPage';
import AboutPage from '../src/componets/AboutPage';
import FAQ from '../src/componets/FaqPage';
import Contact from '../src/componets/ContactPage';
import Cart from '../src/componets/CartPage';


const App = () => {
  return (
      <Router>
          <Header/>

          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer/>
      </Router>
  );
};

export default App;
