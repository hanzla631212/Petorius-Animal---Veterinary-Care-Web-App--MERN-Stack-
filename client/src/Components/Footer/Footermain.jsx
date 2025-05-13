import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footermain.css';

const Footermain = () => {
  const paragraphStyle = {
    width: '200px',
    fontSize: '12px',
    textAlign: 'left'
  };

  const inputWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
  };

  const inputFieldStyle = {
    padding: '10px',
    border: 'none',
    fontSize: '16px',
    flex: 1,
  };

  const iconStyle = {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    border: 'none',
    color: '#fff',
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <h2 className="footer-logo">PETO<span>RIUS</span></h2>
          <p style={paragraphStyle}>
            Petorius is your all-in-one pet care companion. From luxury pet travel gear to top-quality nutrition, we deliver love and care to your doorstep—because your pet deserves the best.
          </p>
          <h4>Stay in the Loop</h4>
          <div style={inputWrapperStyle}>
            <input type="text" style={inputFieldStyle} placeholder="Your email address" />
            <FaPaperPlane style={iconStyle} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Petorius</a></li>
            <li><a href="/contact">Contact Support</a></li>
            <li><a href="/services">Pet Travel Services</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h4>Explore More</h4>
          <ul>
            <li><a href="/products">Pet Products</a></li>
            <li><a href="/rentals">Pet-Friendly Rentals</a></li>
            <li><a href="/wellness">Pet Wellness</a></li>
            <li><a href="/blogs">Tips & Blogs</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:support@petorius.com">support@petorius.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              5678 Pet Lane, Pet City, Petland
            </li>
          </ul>
          <h4>Connect with Us</h4>
          <div className="social-icons-column">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
            <a href="#" className="social-icon"><FaWhatsapp /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Petorius. All rights reserved. Designed with love for pets and their people.</p>
      </div>
    </footer>
  );
};

export default Footermain;
