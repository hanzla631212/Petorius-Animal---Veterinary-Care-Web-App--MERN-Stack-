import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Description */}
        <div className="footer-logo">
          <Link to="/" className="logo">Petorius</Link>
          <p className="footer-description">
            Your trusted partner in pet care. We provide a range of services and products to keep your pets happy and healthy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/pets">Pets</Link></li>
            <li><Link to="/veterinarian">Veterinarian</Link></li>
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/medicines">Medicines</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div className="footer-location">
          <h4>Our Location</h4>
          <div className="map">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.593992247568!2d73.0552843!3d33.6626166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952ae6ecb20b%3A0xd8231650878b62f7!2sRiphah%20International%20University%2C%20I-14%20Campus!5e0!3m2!1sen!2s!4v1713005144773!5m2!1sen!2s" 
              width="300"
              height="150"
              loading="lazy" 
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <a href="tel:+923001234567" className="contact-link">
            <p>
              <FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +92 300 1234567
            </p>
          </a>

          <a href="mailto:support@petorius.com" className="contact-link">
            <p>
              <FaEnvelope className="contact-icon" /> <strong>Email:</strong> support@petorius.com
            </p>
          </a>

          <a 
            href="https://wa.me/923001234567?text=Hi%20Petorius!%20I%20have%20a%20query." 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <p>
              <FaWhatsapp className="contact-icon" /> <strong>WhatsApp:</strong> +92 300 1234567
            </p>
          </a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><SiTiktok /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Petorius. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
