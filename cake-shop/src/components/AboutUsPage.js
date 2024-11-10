// src/components/AboutUsPage.js
import React from 'react';

function AboutUsPage() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are Delicious Cakes Bakery, making your special moments sweeter with our delicious cakes!</p>
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default AboutUsPage;
