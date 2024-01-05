import React from 'react';
import '../styles/FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <h2>What is [Your Product/Service]?</h2>
        <p>This is a showcase project demonstrating a high-quality product or service.</p>
      </div>
      <div className="faq">
        <h2>How Do I Purchase Items?</h2>
        <p>As a showcase site, purchases are not available. This section demonstrates how one might interact with customers' common queries.</p>
      </div>
      <div className="faq">
        <h2>What is the Return Policy?</h2>
        <p>In a real e-commerce setting, this section would detail the return policy. For this showcase, it's an example of response to customer inquiries.</p>
      </div>
      {/* Add more FAQs as needed */}
    </div>
  );
};

export default FAQPage;
