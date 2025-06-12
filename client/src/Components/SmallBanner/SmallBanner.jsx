import React from "react";
import { FaPlaneDeparture, FaLock, FaGlobe, FaCarSide } from "react-icons/fa";
import "./SmallBanner.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const SmallBanner = () => {
const navigate = useNavigate();
    const handleBookClick = () => {
      navigate('/about');
      window.scrollTo(0, 0);
    };

  return (
    <div className="banner-container">
      {/* Left Section - Car Image */}
      <div className="banner-image">
        <img
          src="https://www.pngmart.com/files/22/Audi-TT-PNG-Transparent.png" // Replace with the actual car image URL
          alt="Car"
        />
      </div>

      {/* Right Section - Content */}
      <div className="banner-content">
        <h1 className="banner-title">Your Gateway to Seamless <br /> Adventures</h1>
        <p className="banner-description">
          Embark on your journey with ease and flexibility through RapidRide,
          your premier destination for rental cars. Whether you're planning a
          cross-country road trip, a weekend getaway, or simply need a reliable
          ride for your daily commute, RapidRide has you covered.
        </p>

        {/* Features Section */}
        <div className="features">
          <Feature
            Icon={FaPlaneDeparture}
            title="Airport Pick-ups"
            description="Journey with ease and flexibility."
          />
          <Feature
            Icon={FaGlobe}
            title="Global Network"
            description="Seamless access worldwide."
          />
          <Feature
            Icon={FaLock}
            title="Secure Payment"
            description="Safety is our priority."
          />
          <Feature
            Icon={FaCarSide}
            title="Sanitized Cars"
            description="Your health matters."
          />
        </div>

        {/* About Us Button */}
        <button className="book-now-btn"  style={{marginTop:"25px"}} onClick={handleBookClick}>About Us</button>
      </div>
    </div>
  );
};

const Feature = ({ Icon, title, description }) => {
  return (
    <div className="feature">
      <Icon className="feature-icon" />
      <div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};

export default SmallBanner;