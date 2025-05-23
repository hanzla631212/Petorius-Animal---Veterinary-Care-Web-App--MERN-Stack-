import React from 'react';
import { GiSittingDog, GiPawHeart } from 'react-icons/gi';
import { FaCat, FaPaw, FaTag } from 'react-icons/fa';
import './Pet_Buyer_Card.css';

const Pet_Buyer_Card = ({ buyer, expanded, onToggleExpand }) => {
  if (!buyer) return null;

  const {
    name = 'Unknown Buyer',
    breed = 'Any Breed',
    age = 'N/A',
    type = 'N/A',
    description = 'No details provided.',
    priceRange = 'Negotiable',
  } = buyer;

  const shouldTruncate = description.length > 75;
  const displayedDescription =
    expanded || !shouldTruncate ? description : description.slice(0, 75).trim();

  const renderTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'dog':
        return <GiSittingDog className="buyer-icon" />;
      case 'cat':
        return <FaCat className="buyer-icon" />;
      default:
        return <FaPaw className="buyer-icon" />;
    }
  };

  return (
    <div className={`buyer-card ${expanded ? 'expanded' : ''}`} tabIndex="0" aria-label={`Buyer item: ${name}`}>
      <div className="buyer-card-content">
        <h2>{name}</h2>

        <p className="buyer-description" aria-expanded={expanded}>
          {displayedDescription}
          {shouldTruncate && !expanded && '...'}
          {shouldTruncate && (
            <button
              onClick={onToggleExpand}
              className="buyer-see-more-btn"
              aria-label={expanded ? 'See less description' : 'See more description'}
              type="button"
            >
              {expanded ? ' See Less' : ' See More'}
            </button>
          )}
        </p>

        <div className="buyer-meta-row" role="group" aria-label="Buyer preferences">
  <div className="buyer-meta-item">
    {renderTypeIcon(type)}
    <span>Type: <strong>{type}</strong></span>
  </div>
  <div className="buyer-meta-item">
    <GiPawHeart className="buyer-icon" />
    <span>Breed: <strong>{breed}</strong></span>
  </div>
  <div className="buyer-meta-item">
    <FaPaw className="buyer-icon" />
    <span>Preferred Age: <strong>{age}</strong></span>
  </div>
  <div className="buyer-meta-item">
    <FaTag className="buyer-icon" />
    <span>Price Range: <strong>{priceRange}</strong></span>
  </div>
</div>


        <button className="contact-now-btn" type="button">Contact Now</button>
      </div>
    </div>
  );
};

export default Pet_Buyer_Card;
