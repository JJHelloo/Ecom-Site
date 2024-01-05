import React from 'react';
import '../styles/ContactPage.css';



const ContactPage = () => {
  // Function to handle form submit
  // In a real application, this would send data to a server
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted! (Not really, since this is a showcase.)');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
