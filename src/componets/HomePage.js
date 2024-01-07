import React, { useEffect, useState } from 'react';
import { useSprings, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import truckImage from '../images/GatorWrapsTruck.png'; 
import wrapImage from '../images/wrap-product.png';
import bannerImage from '../images/banner-product.png';
import wrap from '../images/wrap.png';
import banner from '../images/banner.png';
import contact from '../images/contact.png';
import gatorBanner from '../images/gatorbanner.png'
import gatorWrap from "../images/gatorwrap.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/HomePage.css';

const HomePage = () => {
        // Testimonials data
        const testimonials = [
            {
                quote: "Gator Graphics provided exceptional service and quality designs for our business.",
                author: "John Doe"
            },
            {
                quote: "We loved the banners made by Gator Graphics! They were a hit at our event.",
                author: "Jane Smith"
            },
            {
                quote: "We loved the Signs made by Gator Graphics! They look amazing.",
                author: "Jane Doe"
            },
            // ... more testimonials ...
        ];
    
        // Settings for the slider
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
    useEffect(() => {
        AOS.init({
          duration: 1000, // values from 0 to 3000, with step 50ms
          once: true, // whether animation should happen only once - while scrolling down
        });
      }, []);

    const slideshowData = [
        { src: truckImage },
        { src: wrapImage },
        { src: bannerImage }
    ];
    const [index, setIndex] = useState(0);

    const [springs, set] = useSprings(slideshowData.length, i => ({
        opacity: 0,
        display: 'none'
    }));

    useEffect(() => {
        set(i => ({
            opacity: i === index ? 1 : 0,
            display: i === index ? 'block' : 'none'
        }));
    }, [index, set]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(current => (current + 1) % slideshowData.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [slideshowData.length]);

    return (
        <>
        <div className="particles">
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
            <div className="particle" />
        </div>
            <div data-aos="zoom-in" className="hero-section">
                {springs.map((style, i) => (
                    <animated.div
                        key={i}
                        className="slide"
                        style={{ ...style, backgroundImage: `url(${slideshowData[i].src})` }}
                    >
                        {/* <div className="caption">{slideshowData[i].caption}</div> */}
                    </animated.div>
                ))}
                <div className="dots-container">
                    {slideshowData.map((_, idx) => (
                        <span key={idx} className={`dot ${index === idx ? 'active' : ''}`} onClick={() => setIndex(idx)}></span>
                    ))}
                </div>
            </div>
            <div  data-aos="zoom-in" className='break'></div>
            <div className='product'>
                <div data-aos="zoom-in" className="product-text">
                    <h3 className='lead-text'>Why Choose Gator Graphics?</h3>
                    <p className="product-description"> With over a decade of experience in graphic design and vehicle wrapping, 
                    we pride ourselves on delivering top-notch quality and customer satisfaction. Our team works closely with you 
                    to bring your vision to life, ensuring every detail is perfect.</p>
                </div>
                <div data-aos="zoom-in" className="product-images">
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
            <div data-aos="zoom-in" className='break'></div>

            <div data-aos="fade-up" className="testimonial-section">
                <h2>Customer Testimonials</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p className="quote">{testimonial.quote}</p>
                            <p className="author">{testimonial.author}</p>
                        </div>
                        
                    ))}
                </Slider>
            </div>
            <div data-aos="zoom-in" className='break'></div>
            <div data-aos="fade-up" className="services-section">
                <h2>Our Services</h2>
                <div className="service-items">
                    {/* Service Item 1 */}
                    <div className="service-item">
                        <img src={gatorWrap} alt="Service 1" />
                        <h3>Custom Vehicle Wraps</h3>
                        <p>Transform your vehicle into a mobile billboard with our high-quality, durable vehicle wraps.</p>
                    </div>

                    {/* Service Item 2 */}
                    <div className="service-item">
                        <img src={banner} alt="Service 2" />
                        <h3>Graphic Design</h3>
                        <p>From logos to branding materials, our expert designers bring your vision to life with creative designs.</p>
                    </div>

                    {/* Service Item 3 */}
                    <div className="service-item">
                        <img src= {gatorBanner} alt="Service 3" />
                        <h3>Outdoor Advertising</h3>
                        <p>Capture attention with our custom banners, billboards, and signage solutions for your business.</p>
                    </div>

                    {/* Add more services as needed */}
                </div>
                <div data-aos="zoom-in" className='break'></div>
                <div data-aos="zoom-in" className="get-in-touch-section">
                <h2>Get in Touch</h2>
                <p>We would love to hear from you! Whether you have a question about our services or need a quote, our team is ready to answer all your inquiries.</p>
                
                {/* Contact Form */}
                <form data-aos="zoom-in" className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="">Send Message</button>
                </form>

                {/* Contact Information */}
                <div data-aos="zoom-in" className="contact-info">
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> info@example.com</p>
                    {/* Add more contact details or social media links as needed */}
                </div>
            </div>

</div>

        </>
    );
};

export default HomePage;