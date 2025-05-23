import React from 'react';
import { FaVirus, FaCapsules } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import './Medicines_Card.css';

const Medicines_Card = ({ medicine, expanded, onToggleExpand }) => {
  if (!medicine) return null;

  const {
    name = 'Unknown Medicine',
    description = 'No description available.',
    type = 'N/A',
    pet = 'N/A',
    disease = 'Unknown Disease',
    price = 'N/A',
    image,
  } = medicine;

  const shouldTruncate = description.length > 75;
  const displayedDescription = expanded || !shouldTruncate
    ? description
    : description.slice(0, 75).trim();

  return (
    <div
      className={`medicines-card ${expanded ? 'expanded' : ''}`}
      tabIndex="0"
      aria-label={`Medicine item: ${name}`}
    >
      <img
        src={image || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
        alt={name}
        className="medicines-card-image"
      />
      <div className="medicines-card-content">
        <h2>{name}</h2>
        <p className="med-description" aria-expanded={expanded}>
          {displayedDescription}
          {shouldTruncate && !expanded && '...'}
          {shouldTruncate && (
            <button
              onClick={onToggleExpand}
              className="med-see-more-btn"
              aria-label={expanded ? 'See less description' : 'See more description'}
              type="button"
            >
              {expanded ? ' See Less' : ' See More'}
            </button>
          )}
        </p>

        <div className="medicines-meta-row" role="group" aria-label="Medicine type and pet category">
          <div className="med-meta-item">
            <FaCapsules className="med-icon" />
            <span>Type: <strong>{type}</strong></span>
          </div>



          <div className="med-meta-item">
            <GiSittingDog className="med-icon" />
            <span>For: <strong>{pet}</strong></span>
          </div>

          <div className="med-meta-item disease-meta">
            <FaVirus className="med-icon" />
            <span>Disease: <strong>{disease}</strong></span>
          </div>
        </div>

        <div className="medicines-price"><strong>PKR {price}</strong></div>
        <button className="med-order-btn" type="button">Order Now</button>
      </div>
    </div>
  );
};

export default Medicines_Card;
