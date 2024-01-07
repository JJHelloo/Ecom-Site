import React from 'react';
import '../styles/footer.css'; 
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <p>
                Disclaimer: This website is a personal project created for demonstration and 
                portfolio purposes only. While the name and branding may resemble an existing 
                company, it is not affiliated with that company in any way. This project is intended 
                to showcase web development skills and is not meant to represent or imitate the actual company. 
                All products, prices, and information on this site are fictional and intended for illustrative purposes. 
                Thank you for visiting!
            </p>
            <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            {/* More links */}
            
            <div className="social-media">
                    {/* Social media icons */}
                    <a href="https://www.linkedin.com/in/justin-johnson-356251220/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                </div>

        </footer>
    );
};

export default Footer;
