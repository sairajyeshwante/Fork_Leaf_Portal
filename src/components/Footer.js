import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer"> {/* Added ID */}
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a leading educational institution committed to providing top-notch
            education, research, and a platform for student growth.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@ForkLeaf.com</p>
          <p>Phone: 9876543219</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ForkLeaf. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;