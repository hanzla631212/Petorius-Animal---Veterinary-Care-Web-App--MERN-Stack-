import React from 'react';
import './TopPets.css'; // Don't forget to create this file

const TopDestinations = () => {
  return (
    <section className="top-destinations">
      <div className="content">
        <h2 className="headings">
          <span className="black-text">Top </span>
          <span className="blue-text">Pets</span>
        </h2>
        <p className="description">
          Explore our top destinations voted by more than 100,000+ customers around the world.
        </p>
        <a href="#" className="link">
          All Pets <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default TopDestinations;
