import React from 'react';
import { GiSittingDog } from 'react-icons/gi';
import { FaCat, FaPaw, FaTag } from 'react-icons/fa';
import { GiPawHeart } from 'react-icons/gi';
import './Pet_Seller_Card.css';

const Pet_Seller_Card = ({ pet, expanded, onToggleExpand }) => {
  if (!pet) return null;

  const {
    name = 'Unknown Pet',
    breed = 'Unknown Breed',
    age = 'N/A',
    type = 'N/A',
    description = 'No description available.',
    image,
    price = 'Contact for Price',
  } = pet;

  const shouldTruncate = description.length > 75;
  const displayedDescription =
    expanded || !shouldTruncate ? description : description.slice(0, 75).trim();

  const renderTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'dog':
        return <GiSittingDog className="pet-icon" />;
      case 'cat':
        return <FaCat className="pet-icon" />;
      default:
        return <FaPaw className="pet-icon" />;
    }
  };

  return (
    <div
      className={`pet-card ${expanded ? 'expanded' : ''}`}
      tabIndex="0"
      aria-label={`Pet item: ${name}`}
    >
      <img
        src={image || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
        alt={name}
        className="pet-card-image"
      />
      <div className="pet-card-content">
        <h2>{name}</h2>
        <p className="pet-description" aria-expanded={expanded}>
          {displayedDescription}
          {shouldTruncate && !expanded && '...'}
          {shouldTruncate && (
            <button
              onClick={onToggleExpand}
              className="pet-see-more-btn"
              aria-label={expanded ? 'See less description' : 'See more description'}
              type="button"
            >
              {expanded ? ' See Less' : ' See More'}
            </button>
          )}
        </p>

        <div className="pet-meta-row" role="group" aria-label="Pet details">
          <div className="pet-meta-item">
            {renderTypeIcon(type)}
            <span>Type: <strong>{type}</strong></span>
          </div>
          <div className="pet-meta-item">
            <GiPawHeart className="pet-icon" />
            <span>Breed: <strong>{breed}</strong></span>
          </div>
          <div className="pet-meta-item">
            <FaPaw className="pet-icon" />
            <span>Age: <strong>{age}</strong></span>
          </div>
          <div className="pet-meta-item">
            <FaTag className="pet-icon" />
            <span>Price: <strong>{typeof price === 'number' ? `$${price}` : price}</strong></span>
          </div>
        </div>

        <button className="pet-buy-btn" type="button">Buy Now</button>
      </div>
    </div>
  );
};

export default Pet_Seller_Card;
