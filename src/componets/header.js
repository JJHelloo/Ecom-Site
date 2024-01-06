import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GatorLogo.png';
import cartIcon from '../images/cart.png';
import '../styles/header.css'; 

const Header = ({ cart }) => {
    // Function to calculate the total number of items in the cart
    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Gator Wraps Logo" />
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link className='products' to="/products">Products</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div className="cart-icon-container">
                    <Link className='cart' to="/cart">
                        <img src={cartIcon} alt="Cart" />
                        {cart.length > 0 && (
                            <div className="cart-counter">{getCartCount()}</div>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
