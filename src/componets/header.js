import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/GatorLogo.png'
import cart from '../images/cartImage.png';
import '../styles/header.css'; 


// links in the header for the site
const Header = () => {
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
                <Link className='cart' to="/cart" >
                    <img src={cart} alt="Cart Img" />
                    </Link>
            </nav>
        </header>
    );
};

export default Header;