
import React from 'react';


function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Page</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;


