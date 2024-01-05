import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import truckImage from '../images/GatorWrapsTruck.png'; 
import '../styles/HomePage.css'; 
import wrap from '../images/wrap.png';
import banner from '../images/banner.png';
import contact from '../images/contact.png';
import wrapImage from '../images/wrap-product.png'; //  wrap image in side
import bannerImage from '../images/banner-product.png'; // banner in slide

const HomePage = () => {
    // array to hold slide show imgs 
    const slideshowImages = [truckImage, wrapImage, bannerImage];
    // state ti keep track of the current image 
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // Change to the next image, 3 seconds
    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentImageIdx((currentImageIdx) => (currentImageIdx + 1) % slideshowImages.length);
        }, 5000); // 1000 = 1 seconds
        // clear the interal 
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero-section"             
                style={{ backgroundImage: `url(${slideshowImages[currentImageIdx]})` }}
>            </div>
            <div className='break'></div>
            <div className='product'>
                <div className="product-text">
                    <h3 className='lead-text'>lorem ipsum</h3>
                    <p className="product-description">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat.</p>
                </div>
                <div className="product-images">
                <div className="product-item">
                    <Link to="/products">
                        <img src={wrap} alt="Gator Wraps" />
                    </Link>
                    <span>Wraps</span>
                    </div>
                    <div className="product-item">
                    <Link to="/products">
                        <img src={banner} alt="Gator Banners" />
                    </Link>
                    <span>Banners</span>
                    </div>
                    <div className="product-item">
                    <Link to="/contact">
                        <img src={contact} alt="Gator Contact" />
                    </Link>
                    <span>Contact</span>
                    </div>
                </div>
            </div>
            <div className='break'></div>
        </>
    );
};



export default HomePage;