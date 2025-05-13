import React from 'react';
import './Hero.css';
import heroImage from '../../Assets/image2.png'; // Adjust the path as per your project
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from 'react-icons/fa';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Experience Media <br />Like Never Before</h1>
          <p>
            Enjoy award-winning stereo beats with wireless listening freedom and sleek,
            streamlined with premium padded and delivering first-rate playback.
          </p>
          <button className="cta-button">Our Products →</button>
        </div>
        <div className="image-content">
          <img src='https://placedog.net/500/280?id=2' alt="Headphones" />
        </div>
        <div className="social-sidebar">
          <div className="line"></div>
          <ul className="social-icons">
  <li><a href="#"><FaFacebook /></a></li>
  <li><a href="#"><FaInstagram /></a></li>
  <li><a href="#"><FaTwitter /></a></li>
  <li><a href="#"><FaLinkedin /></a></li>
</ul>

          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
