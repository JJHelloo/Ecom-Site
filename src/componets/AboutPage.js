import React from 'react';
import '../styles/AboutPage.css';


const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p>
        Welcome to my showcase website, a demonstration of my skills in web development and design. 
        This project is designed to illustrate my capabilities in creating a fully functional e-commerce site, 
        complete with product listings, a shopping cart, and informative pages.
      </p>
      <h2>My Journey as a Developer</h2>
      <p>
        I embarked on my journey in web development in 2022. 
        Since then, I have honed my skills in various technologies such as React, JavaScript, CSS, and more. 
        This project is a culmination of my learning and an example of my commitment to crafting engaging and user-friendly web experiences.
      </p>
      <h2>The Technologies Used</h2>
      <p>
        This website is built using the following technologies:
        <ul>
          <li>React - for building the user interface</li>
          <li>CSS - for styling and layout</li>
          <li>JavaScript - for interactive elements</li>
          {/* Add other technologies as needed */}
        </ul>
      </p>
      <h2>Future Goals</h2>
      <p>
        My goal is to continue learning and improving my skills in web development. 
        I'm particularly interested in exploring web technologies, 
        and I plan to integrate these into future projects.
      </p>
    </div>
  );
};

export default AboutPage;
