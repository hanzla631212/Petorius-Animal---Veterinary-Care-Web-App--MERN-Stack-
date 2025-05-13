import React from "react";
import { FaPaw, FaSyringe, FaDog, FaStethoscope } from "react-icons/fa";
import "./SmallBanner.css";
import { useNavigate } from 'react-router-dom';

const SmallBanner = () => {
  const navigate = useNavigate();
  const handleBookClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <div className="banner-container">
      {/* Left Section - Pet Image */}
      <div className="banner-image">
        <img
          src="https://pngimg.com/uploads/dog/dog_PNG50348.png" // Replace with your pet image if needed
          alt="Pet"
        />
      </div>

      {/* Right Section - Content */}
      <div className="banner-content">
        <h1 className="banner-title">Your Trusted Partner <br /> in Pet Wellness</h1>
        <p className="banner-description">
          Explore a one-stop destination for all your pet care needs. From healthy pet food and
          effective medicines to expert veterinary care and adorable companions — we've got it all
          for your furry friends.
        </p>

        {/* Features Section */}
        <div className="features">
          <Feature
            Icon={FaDog}
            title="Buy Pets"
            description="Find your perfect furry companion."
          />
          <Feature
            Icon={FaSyringe}
            title="Pet Medicines"
            description="Trusted treatment at your doorstep."
          />
          <Feature
            Icon={FaPaw}
            title="Pet Feeds"
            description="Nutritious meals for every breed."
          />
          <Feature
            Icon={FaStethoscope}
            title="Vet Services"
            description="Expert care for happy, healthy pets."
          />
        </div>

        {/* About Us Button */}
        <button className="book-now-btn" style={{ marginTop: "25px" }} onClick={handleBookClick}>
          About Us
        </button>
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
